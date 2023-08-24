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
        git 'https://github.com/nessmahm/devops-project'
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
          sh "kubectl --kubeconfig=${k3sKubeconfig} apply -f deploymentservice.yml"
        }
      }
    }

  }

}
