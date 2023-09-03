pipeline {

  environment {
    dockerimagename = "nessmahm/nodejsapp:1.0"
    dockerImage = ""
    k3sKubeconfig = "/home/nessma/.kube/config"

  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
       script {
      // Define the repository URL and branch name
      def repoUrl = 'https://github.com/nessmahm/devops-project.git'
      def branchName = '*/main'

      // Checkout the specified branch
      git branch: branchName, url: repoUrl
    }
    }
    }

    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }

    stage('Pushing Image') {
      environment {
               registryCredential = 'dockerHubLogin'
           }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("1.2")
          }
        }
      }
    }

    stage('Deploying App to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "kubeDeployment.yaml", kubeconfigId: "kubernetes")
        }
      }
    }

  }

}
