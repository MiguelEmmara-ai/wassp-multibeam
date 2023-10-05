pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your GitHub repository
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Navigate to your Next.js app directory
                dir('path/to/your/nextjs/app') {
                    // Install dependencies using pnpm and build the Next.js app
                    sh 'pnpm install'
                    sh 'pnpm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Copy the built files to your web server directory
                sh 'cp -r /var/lib/jenkins/workspace/Next Gen Test 2/build/. /var/www/wassp-test.miguelemmara.me'
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
