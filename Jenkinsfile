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
                sh 'docker build -t prakarsh321/jenkins-ci-demo:latest .'
            }
        }
        stage('Login to Docker Hub') {
    steps {
        withCredentials([usernamePassword(
            credentialsId: 'dockerhub',
            usernameVariable: 'DOCKER_USERNAME',
            passwordVariable: 'DOCKER_PASSWORD'
        )]) {
            sh '''
            echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
            '''
        }
    }
}
stage('Push Docker Image') {
    steps {
        sh 'docker push prakarsh321/jenkins-ci-demo:latest'
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
            prakarsh321/jenkins-ci-demo:latest
        '''
    }
}
    }
}