# Frontend CI/CD Pipeline

This repository uses **GitHub Actions** to automate the build, Docker image push, and deployment of the frontend application to a Kubernetes cluster using Helm.

## Workflow Overview

On every push to the `feature` branch, the following steps are executed:

1. **Checkout Code**  
   The repository code is checked out to the runner.

2. **Set up Node.js**  
   Node.js 18 is installed for building the frontend.

3. **Install Dependencies & Build**  
   Runs `npm install` and `npm run build` in the `frontend` directory.

4. **Set up Docker Buildx**  
   Prepares the environment for advanced Docker builds.

5. **Log in to Docker Hub**  
   Authenticates using secrets for Docker Hub.

6. **Build and Push Docker Image**  
   Builds the frontend Docker image and pushes it to Docker Hub as  
   `${DOCKER_USERNAME}/care-frontend:latest`.

7. **Set up Helm**  
   Installs Helm for Kubernetes deployments.

8. **Configure kubeconfig**  
   Writes the kubeconfig (from the `KUBE_CONFIG` secret) to `kubeconfig.yaml` for cluster access.

9. **Validate Cluster Access**  
   Runs `kubectl cluster-info` to ensure connectivity to the Kubernetes cluster.

10. **Delete Existing Deployment**  
    Deletes the existing frontend deployment if it exists.

11. **Helm Upgrade/Install**  
    Deploys or updates the frontend using Helm, setting the image repository and tag.

12. **Verify Deployment**  
    Waits for the new deployment to become ready.

---