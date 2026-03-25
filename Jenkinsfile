pipeline {
    agent { label 'homelab-jenkins' }
    stages {
        stage('info') {
            steps {
                sh(script: ''' whoami; pwd; ls -la ''', label: 'info stage')
            }
        }
    }
}
