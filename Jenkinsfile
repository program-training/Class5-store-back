pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                script {
                    def pullRequestBranch = env.GITHUB_PR_SOURCE_BRANCH ?: 'main'
                    checkout([$class: 'GitSCM', branches: [[name: "*/${pullRequestBranch}"]], userRemoteConfigs: [[url: 'https://github.com/program-training/Class5-store-back']]])
                }
            }
        }
        stage('Lint') {
            steps {
                script {
                        sh 'npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint'
                        sh 'npm run lint'
                }
            }
        }
        
    }
    post {
        success {
            script {
                echo 'Linting passed... You may now merge.'
                setGitHubPullRequestStatus(
                    state: 'SUCCESS',
                    context: 'ESLINT_CLASS_5_STORE_BACK',
                    message: 'lint passedh',
                )
            }
        }
        failure {
            script {
                echo 'Pipeline failed...lkll Blocking pull request merge.'
                setGitHubPullRequestStatus(
                    state: 'FAILURE',
                    context: 'ESLINT_CLASS_5_STORE_BACK',
                    message: 'lint failed  grun npm run build to see errors',
                )
            }
        }
    }
}
