# 🛡️ Spam Detection AI Web App

A professional, production-ready web application for detecting spam messages using Machine Learning (Naive Bayes) and Flask.

![Project Status](https://img.shields.io/badge/status-active-success)
![Python](https://img.shields.io/badge/python-3.11+-blue)
![Flask](https://img.shields.io/badge/flask-2.0+-green)

## 📖 Overview

This project demonstrates how to deploy a Machine Learning model into a real-world web application. It features a robust backend architecture using **Flask Blueprints** and a modern, responsive frontend using **Glassmorphism** design principles.

### Key Features
- **Real-time Prediction**: Instant analysis of text messages.
- **Modern UI**: Dynamic, responsive interface with smooth animations.
- **Clean Architecture**: Separation of concerns (Services, Controllers, Utils).
- **Scalable**: Built using Flask Blueprints and Singleton pattern for model loading.

---

## 📂 Project Structure

```
Email Spam Detection/
│
├── app/                        # Main Application Package
│   ├── __init__.py             # App Factory
│   ├── routes.py               # API Endpoints
│   ├── services.py             # ML Model & Business Logic (Singleton)
│   ├── utils.py                # Text Preprocessing Helpers
│   │
│   ├── static/                 # Static Assets (CSS, JS)
│   └── templates/              # HTML Templates
│
├── models/                     # Serialized ML Models
│   ├── model.pkl               # Trained Naive Bayes Model
│   └── vectorizer.pkl          # TF-IDF Vectorizer
│
├── run.py                      # Application Entry Point
├── requirements.txt            # Python Dependencies
└── README.md                   # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.8 or higher.
- `pip` package manager.

### Installation

1. **Clone the repository** (or download the files):
   ```bash
   git clone <repository-url>
   cd "Email Spam Detection"
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
   *(Ensure you have `flask`, `scikit-learn`, `pandas`, `numpy` installed)*

3. **Run the Application**:
   ```bash
   python run.py
   ```

4. **Access the Web App**:
   Open your browser and navigate to:
   `http://127.0.0.1:5000`

---

## 🧠 How It Works

1. **Frontend**: The user enters a message. JavaScript sends an async `POST` request to `/predict`.
2. **Backend (Flask)**:
   - The request is routed to `app/routes.py`.
   - The `SpamDetectorService` (in `app/services.py`) is called.
   - Text is cleaned using `app/utils.py`.
   - The pre-loaded Model & Vectorizer (from `models/`) perform the prediction.
3. **Response**: JSON result is returned to the frontend and displayed with dynamic styling (Red for Spam, Green for Ham).

---

## 🛠️ Future Improvements

- **Database Integration**: Save flagged queries for future re-training.
- **User Feedback**: Allow users to mark false positives/negatives.
- **Dockerization**: Create a Dockerfile for easy container deployment.
- **API Security**: Add Rate Limiting and API Keys.

---

## 👨‍💻 Author

Developed with ❤️ by **[Bashar Shakeeb]**.
