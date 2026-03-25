pipeline {
    agent { label 'homelab-jenkins' }
    environment {
        BUILD_DIR = '.next'
        BUILD_SCRIPT = 'npm run build'
        SERVE_DIR = '/var/www/portfolio'
        COPY_SCRIPT = 'rsync -avP ${BUILD_DIR}/standalone ${BUILD_DIR}/static public ${SERVE_DIR}/'
        DEPLOY_SCRIPT = 'pm2 start ecosystem.config.cjs'
    }
    stages {
        stage('info') {
            steps {
                sh(script: ''' whoami; pwd; ls -la ''', label: 'info stage')
            }
        }
        stage('build') {
            steps {
                sh(script: ''' ${BUILD_SCRIPT} ''', label: 'build project to static files. located in .next folder')
            }
        }
        stage('deploy') {
            steps {
                sh(script: ''' ${COPY_SCRIPT} ''', label: 'deploy static files to server')
            }
        }
    }
}
