# 🚀 Full Stack CI/CD App with GitHub Actions + Docker + Render

## Features
- React frontend & Node.js backend
- CI/CD pipeline with GitHub Actions
- Dockerized services
- Auto-deployment to Render
- Linting, Build, and Testing

A modern full-stack application built with **React (frontend)** and **Node.js (backend)**, containerized with Docker, and continuously deployed via **GitHub Actions** and **Render.com**.

🔗 **Live App**: [https://ci-cd-fullstack-app.onrender.com](https://ci-cd-fullstack-app.onrender.com)

---

## 🔧 Tech Stack

- **Frontend:** React
- **Backend:** Node.js + Express
- **CI/CD:** GitHub Actions
- **Containerization:** Docker + DockerHub
- **Deployment:** Render.com

![Backend CI](https://github.com/ikerilive/ci-cd-fullstack-app/actions/workflows/server.yml/badge.svg)
![Frontend CI](https://github.com/ikerilive/ci-cd-fullstack-app/actions/workflows/client.yml/badge.svg)

---

## 📐 Architecture Overview

```text
[ React Frontend ] ---> [ Node.js Backend ] ---> [ MongoDB (optional) ]
         |                        |
         +----> GitHub Repo (Push/PR)
                          |
                    GitHub Actions
                 (CI/CD Workflow Triggers)
                          |
                Docker Build & Push to DockerHub
                          |
              Auto-Deploy to Render (via Webhooks or Pull)



