pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                script {
                    def pullRequestBranch = env.GITHUB_PR_SOURCE_BRANCH
                    checkout([$class: 'GitSCM', branches: [[name: "*/${pullRequestBranch}"]], userRemoteConfigs: [[url: 'https://github.com/program-training/Class5-store-back']]])
                }
            }
        }
        stage('client build') {
            steps {
                script {
                        sh 'echo "Building..."'
                        sh 'docker build -t eslint-back-store-main .'
                }
            }
        }
        
    }
    post {
        success {
            script {
                echo 'Linting passed. You may now merge.'
                setGitHubPullRequestStatus(
                    state: 'SUCCESS',
                    context: 'ESLINT_CLASS_5',
                    message: 'Build passed',
                )
            }
        }
        failure {
            script {
                echo 'Pipeline failed. Blocking pull request merge.'
                setGitHubPullRequestStatus(
                    state: 'FAILURE',
                    context: 'ESLINT_CLASS_5',
                    message: 'Build failed  run npm run build to see errors',
                )
            }
        }
    }
}
