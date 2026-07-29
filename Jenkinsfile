pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker Image...'
                sh 'docker build -t jenkins-ci-demo:latest .'
            }
        }
        stage('Deploy') {
    steps {
        sh '''
        docker stop jenkins-ci-demo || true
        docker rm jenkins-ci-demo || true

        docker run -d \
            --name jenkins-ci-demo \
            -p 3000:3000 \
            jenkins-ci-demo:latest
        '''
    }
}
    }
}