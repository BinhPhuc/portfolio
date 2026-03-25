pipeline {
    agent { label 'homelab-server' }
    stages {
        stage('info') {
            steps {
                sh(script: ''' whoami; pwd; ls -la ''', label: 'info stage')
            }
        }
    }
}
