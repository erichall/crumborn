pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
               echo 'Building..'
               sh 'lein clean'
               sh 'lein cljsbuild once min'
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
