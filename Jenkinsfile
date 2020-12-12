pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
               echo 'Building..'
               sh 'npm install'
               sh 'shadow-cljs release :app'
               echo 'Done building'

            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }

        stage("Deploy") {
            steps {
                echo 'Deploy!'
                sh 'cp -r /var/lib/jenkins/workspace/crumborn/resources /var/www/erkanp.dev/html/'
            }
        }
    }
}
