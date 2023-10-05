pipeline {

  agent any

  stage('Install PNPM') {
    steps {
      // Install corepack
      sh 'corepack prepare pnpm@latest-8 --activate'

      // Verify that PNPM is installed correctly
      sh 'pnpm --version'
    }
  }

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
