pipeline {

  agent any

  stages {

   
    stage('Build image') {
      steps{
        script {
                echo "build app"
        }
      }
    }

    stage('Test') {
     
     
      steps{
        script {
         echo "test app"
          }
        }
      }
    
    stage('Deploying App to Kubernetes') {
      steps {
        script {
                echo "deploy"
        }
      }
    }

  }

}
