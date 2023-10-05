#!/usr/bin/env groovy

pipeline {

    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'pnpm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'pnpm test:ci'
            }
        }
    }
}
