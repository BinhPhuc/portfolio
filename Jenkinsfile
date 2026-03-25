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
// Jenkins file for testing Jenkins pipeline on homelab server. This pipeline has a single stage called 'info' that executes a shell script to display the current user, working directory, and list of files in the directory.