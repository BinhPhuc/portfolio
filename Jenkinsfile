HOME = '.'
AGENT_LABEL = 'homelab-jenkins'

ENV_DIR = '/env-data/portfolio'
BUILD_DIR = '.next'
SERVE_DIR = '/var/www/portfolio'

DOCKER_AGENT_IMAGE = 'node:24-alpine'
DOCKER_IMAGE_NAME = 'portfolio'
DOCKER_IMAGE_TAG = 'latest'
DOCKER_IMAGE = "${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
DOCKER_CONTAINER_NAME = 'portfolio'
DOCKER_NETWORK = 'portfolio_portfolio-networks'

boolean isContainerRunning(containerName) {
    String running = "Container is running."
    String notRunning = "Container is not running."
    def result = sh(script: """ 
    if [ "$(docker inspect -f '{{.State.Running}}' ${containerName})" = "true" ]; then
        return "${running}"
    else
        return "${notRunning}"
    fi """, returnStdout: true).trim()
    return result.trim() == running
}

def start() {
    stage('copy-env') {
        agent {
            label "${AGENT_LABEL}"
        }
        steps {
            sh(script: """ sudo cp ${ENV_DIR}/.env . """, label: 'copy .env file for production environment')
        }
    }
    stage('install-dependencies') {
        agent {
            docker {
                image "${DOCKER_AGENT_IMAGE}"
                label "${AGENT_LABEL}"
            }
        }
        steps {
            writeFile file: 'next-lock.cache', text: "$GIT_COMMIT"

            cache(caches: [
                arbitraryFileCache(
                    path: 'node_modules',
                    includes: '**/*',
                    cacheValidityDecidingFile: 'package-lock.json'
                )
            ]) {
                sh(script: """ npm install """, label: 'install project dependencies')
            }
        }
    }
    stage('build') {
        agent {
            docker {
                image "${DOCKER_AGENT_IMAGE}"
                label "${AGENT_LABEL}"
                args "--network ${DOCKER_NETWORK}"
            }
        }
        steps {
            writeFile file: 'next-lock.cache', text: "$GIT_COMMIT"

            cache(caches: [
                arbitraryFileCache(
                    path: '.next/cache',
                    includes: '**/*',
                    cacheValidityDecidingFile: 'next-lock.cache'
                )
            ]) {
                sh(script: """ npm run build """, label: 'build project to static files. located in .next folder')
            }
        }
    }
    stage('build-image') {
        agent {
            label "${AGENT_LABEL}"
        }
        steps {
            sh(script: """ DOCKER_BUILDKIT=0 docker build --network ${DOCKER_NETWORK} -t ${DOCKER_IMAGE} . """, label: 'build docker image')
        }
    }
    stage('deploy') {
        agent {
            label "${AGENT_LABEL}"
        }
        steps {
            sh(script: """ sudo rsync -avP ${BUILD_DIR}/standalone ${BUILD_DIR}/static public ${SERVE_DIR}/ """, label: 'deploy static files to server')

            sh(script: """ docker rm -f ${DOCKER_CONTAINER_NAME} || true """, label: 'remove old docker container if exists')

            sh(script: """ docker run -d --restart always --network ${DOCKER_NETWORK} -p 3000:3000 --name ${DOCKER_CONTAINER_NAME} ${DOCKER_IMAGE} """, label: 'create docker container to serve the app')

            def timeout = 60
            def interval = 5

            while (timeout > 0) {
                if (isContainerRunning(${DOCKER_CONTAINER_NAME})) {
                    echo "Container ${DOCKER_CONTAINER_NAME} is running."
                    break
                } else {
                    echo "Waiting for container ${DOCKER_CONTAINER_NAME} to start..."
                    sleep(interval)
                    timeout -= interval
                }
            }

            if (timeout <= 0) {
                error "Container ${DOCKER_CONTAINER_NAME} failed to start within the expected time."
            }
        }
    }
}

node(params.Server) {
    currentBuild.displayName = "#${env.BUILD_NUMBER} - ${params.Action} on ${params.Server}"
    if (params.Action == 'Start') {
        start()
    }
}