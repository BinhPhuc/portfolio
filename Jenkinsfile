def getCfg() {
    def imageName = 'portfolio'
    def imageTag = 'latest'
    
    return [
        HOME: '.',
        ENV_DIR: '/env-data/portfolio',
        BUILD_DIR: '.next',
        SERVE_DIR: '/var/www/portfolio',

        DOCKER_AGENT_IMAGE: 'node:24-alpine',
        DOCKER_IMAGE_NAME: imageName,
        DOCKER_IMAGE_TAG: imageTag,
        DOCKER_IMAGE: "${imageName}:${imageTag}",
        DOCKER_CONTAINER_NAME: 'portfolio',
        DOCKER_NETWORK: 'portfolio_portfolio-networks'
    ]
}

boolean isContainerRunning(String containerName) {
    def status = sh(
        script: "docker inspect -f '{{.State.Running}}' ${containerName} 2>/dev/null || echo false",
        returnStdout: true
    ).trim()
    return status == "true"
}

def start(cfg) {
    stage('copy-env') {
        sh(script: "sudo cp ${cfg.ENV_DIR}/.env .", label: 'copy .env file for production environment')
    }
    
    stage('install-dependencies') {
        docker.image("${cfg.DOCKER_AGENT_IMAGE}").inside("--network ${cfg.DOCKER_NETWORK}") { c ->
            writeFile file: 'next-lock.cache', text: "${env.GIT_COMMIT}"

            cache(caches: [
                arbitraryFileCache(
                    path: 'node_modules',
                    includes: '**/*',
                    cacheValidityDecidingFile: 'package-lock.json'
                )
            ]) {
                sh(script: "npm install", label: 'install project dependencies')
            }
        }
    }
    
    stage('build') {
        docker.image("${cfg.DOCKER_AGENT_IMAGE}").inside("--network ${cfg.DOCKER_NETWORK}") { c ->
            writeFile file: 'next-lock.cache', text: "${env.GIT_COMMIT}"

            cache(caches: [
                arbitraryFileCache(
                    path: '.next/cache',
                    includes: '**/*',
                    cacheValidityDecidingFile: 'next-lock.cache'
                )
            ]) {
                sh(script: "npm run build", label: 'build project to static files. located in .next folder')
            }
        }
    }
    
    stage('build-image') {
        sh(script: "DOCKER_BUILDKIT=0 docker build --network ${cfg.DOCKER_NETWORK} -t ${cfg.DOCKER_IMAGE} .", label: 'build docker image')
    }
    
    stage('deploy') {
        sh(script: "sudo rsync -avP ${cfg.BUILD_DIR}/standalone ${cfg.BUILD_DIR}/static public ${cfg.SERVE_DIR}/", label: 'deploy static files to server')

        sh(script: "docker rm -f ${cfg.DOCKER_CONTAINER_NAME} || true", label: 'remove old docker container if exists')

        sh(script: "docker run -d --restart always --network ${cfg.DOCKER_NETWORK} -p 3000:3000 --name ${cfg.DOCKER_CONTAINER_NAME} ${cfg.DOCKER_IMAGE}", label: 'create docker container to serve the app')

        timeout(time: 1, unit: 'MINUTES') { 
            waitUntil {
                return isContainerRunning(cfg.DOCKER_CONTAINER_NAME)
            }
        }
    }
}

def stop(cfg) {
    stage('stop') {
        sh(script: "docker rm -f ${cfg.DOCKER_CONTAINER_NAME} || true", label: 'stop and remove docker container if exists')
    }
}

node(params.Server) {
    def cfg = getCfg()
    currentBuild.displayName = "#${env.BUILD_NUMBER} - ${params.Action} on ${params.Server}"
    
    switch(params.Action) {
        case 'Start':
            start(cfg)
        case 'Stop':
            stop(cfg)
        break
    }
}