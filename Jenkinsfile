pipeline {

  agent {
    label "maven"
  }

  options {
    buildDiscarder(logRotator(numToKeepStr:"${env.NUM_TO_KEEP_DEFAULT ?: '1'}"))
    disableConcurrentBuilds()
    timeout(time: 5, unit: 'MINUTES')
  }

  environment {
	HTTP_PROXY = http://proxy:8080
	HTTPS_PROXY = http://proxy:8080
    FTP_PROXY = http://proxy:8080
    NO_PROXY = localhost,127.0.0.1,.sap.corp
  }

  stages {
    stage('Pre Steps') {
	  steps {
	    //install npm dependencies
		sh 'npm install'

	    //create the browserify version of the plugin
	    sh 'rmdir /s /q build'
	    sh 'npm run browserify'
	  }
    }
    stage("Building") {
      tools {
        jdk "Java-1.8_(64bit)"
        maven "Maven 3.0.5"
      }
      steps {
        sh "clean deploy -e -B -U -DaltDeploymentRepository=leandi.nexus.snapshot.repo::default::http://nexus.wdf.sap.corp:8081/nexus/content/repositories/deploy.snapshots"
      }
    }
  }

  post{
	failure {
	  mail to: mat.osswald@sap.com, subject: 'tools.eslint-plugin-openui5 failed'
	}
  }
}
