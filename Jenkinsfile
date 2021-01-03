node {
	stage('Scm Poilling') {
		git credentialsId: 'github', url: 'https://github.com/9092132924/app-login-frontend.git'
	}
	stage("Build Docker images") {

		sh "docker build -t 557523153113.dkr.ecr.ap-south-1.amazonaws.com/login-app-frontend ."
	}
	stage("Aws ecr docker push") {
			withDockerRegistry(credentialsId: 'ecr:ap-south-1:AWS-CREDS', url: 'https://557523153113.dkr.ecr.ap-south-1.amazonaws.com/login-app-frontend') {
				docker.image('557523153113.dkr.ecr.ap-south-1.amazonaws.com/login-app-frontend').push('latest')
			}
	}

	stage("kubernetes-deploy") {

		sshagent(['k8-ssh']) {
		   sh "scp -o strictHostKeyChecking=no frontend-deployment.yml ubuntu@13.127.246.55:/home/ubuntu/"
			script {
				try {
				  sh "ssh ubuntu@13.127.246.55 kubectl apply -f ."
					} catch (error) {
		   		sh "ssh ubuntu@13.127.246.55  kubectl create -f ."
					}
			}

		}
			
	}
			
}