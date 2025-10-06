## The Project

This is a simple Node.js application that starts a simple http server.

## Prerequisites

- Node.js (v20 or higher)
- Docker (if you want to run in a container)

## Getting Started

### Run Locally

1. Clone the repository

```
git clone git@github.com:Pramod-Kumar-G/KubernetesSubmissions.git
cd the_project
```

2. Install Dependencies

```
npm i
```

3. Create a .env file and define the desired PORT for the server to run on.
4. Start the app

```
npm start
```

You should see output like:

```
Server started in port 3000
```

### Run with Docker

1. Build the Docker image:

```
docker build -t the_project .
```

2. Run the image:

```
docker run the_project
```

### Run on Kubernetes

1. Make sure you have a Kubernetes cluster running.

2. Apply the Deployment manifest:

```bash
kubectl apply -f manifests/deployment.yaml
```

3. Verify the pod is running

```bash
kubectl get pods
```

you should see a pod named `the-project-...` running

4. View logs from the pod:

```bash
kubectl logs -f <pod-name>
```

You should see output like: `Server started in port 3000`
