pipeline {
    agent none

    environment {
        HOME = '.'

        ENV_DIR = '/env-data/portfolio'

        COPY_ENV_SCRIPT = "sudo cp ${ENV_DIR}/.env ."

        BUILD_DIR = '.next'
        INSTALL_SCRIPT = 'npm install'
        BUILD_SCRIPT = 'npm run build'
        SERVE_DIR = '/var/www/portfolio'
        COPY_SCRIPT = "rsync -avP ${BUILD_DIR}/standalone ${BUILD_DIR}/static public ${SERVE_DIR}/"

        DOCKER_IMAGE_NAME = 'portfolio'
        DOCKER_IMAGE_TAG = 'latest'
        DOCKER_IMAGE = "${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
        DOCKER_CONTAINER_NAME = 'portfolio'
        DOCKER_REMOVE_SCRIPT = "docker rm -f ${DOCKER_CONTAINER_NAME} || true"
        DOCKER_RUN_SCRIPT = "docker run -d --restart always -p 3000:3000 --name ${DOCKER_CONTAINER_NAME} ${DOCKER_IMAGE}"
    }

    stages {
        stage('copy-env') {
            agent {
                label 'homelab-jenkins'
            }
            steps {
                sh(script: ''' ${COPY_ENV_SCRIPT} ''', label: 'copy .env file for production environment')
            }
        }
        stage('install-dependencies') {
            agent {
                docker {
                    image 'node:24-alpine'
                    label 'homelab-jenkins'
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
                    sh(script: ''' ${INSTALL_SCRIPT} ''', label: 'install project dependencies')
                }
            }
        }
        stage('build') {
            agent {
                docker {
                    image 'node:24-alpine'
                    label 'homelab-jenkins'
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
                    sh(script: ''' ${BUILD_SCRIPT} ''', label: 'build project to static files. located in .next folder')
                }
            }
        }
        stage('build-image') {
            agent {
                label 'homelab-jenkins'
            }
            steps {
                sh(script: ''' docker build -t ${DOCKER_IMAGE} . ''', label: 'build docker image')
            }
        }
        stage('deploy') {
            agent {
                label 'homelab-jenkins'
            }
            steps {
                sh(script: ''' ${COPY_SCRIPT} ''', label: 'deploy static files to server')
                sh(script: ''' ${DOCKER_REMOVE_SCRIPT} ''', label: 'remove old docker container if exists')
                sh(script: ''' ${DOCKER_RUN_SCRIPT} ''', label: 'create docker container to serve the app')
            }
        }
    }
}
