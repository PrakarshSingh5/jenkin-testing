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

    }
}