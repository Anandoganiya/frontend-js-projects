// This must be at the very top
properties([
    pipelineTriggers([
        githubPush()
    ])
])

pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Building..."
            }
        }
    }
}
