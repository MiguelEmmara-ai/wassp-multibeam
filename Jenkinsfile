pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your GitHub repository
                checkout scm
            }
        }

        stage('Build and Test') {
            steps {
                // Navigate to your Next.js app directory within the Jenkins workspace
                dir('') {
                    // Install dependencies using pnpm
                    sh 'pnpm install'

                    // Run tests (replace with your actual test command)
                    sh 'pnpm test:ci'

                    // Build the Next.js app
                    sh 'pnpm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Copy the built files to your web server directory
                sh 'cp -r /var/lib/jenkins/workspace/Next\ Gen\ Test\ 2/. /var/www/wassp-test.miguelemmara.me'
            }
        }
    }

    post {
        success {
            // Send a notification (e.g., via email) if the build succeeds
            emailext (
                subject: "Success: Jenkins Build",
                body: "The Jenkins build for your Next.js app succeeded.",
                to: 'm.miguelemmara@gmail.com',
            )
        }

        failure {
            // Send a notification (e.g., via email) if the build fails
            emailext (
                subject: "Failure: Jenkins Build",
                body: "The Jenkins build for your Next.js app failed.",
                to: 'm.miguelemmara@gmail.com',
            )
        }
    }
}
