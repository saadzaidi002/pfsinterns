# 🛡️ SpamLens AI
### State-of-the-Art NLP Project for Precision Spam Detection

SpamLens AI is an advanced Natural Language Processing (NLP) web application designed to distinguish between legitimate communication (Ham) and malicious or unsolicited messages (Spam). Built with a modern, glassmorphic UI and an ultra-fast binary classification pipeline, SpamLens achieves clinical precision in identifying unwanted communications.

---

## ✨ Features
- **High-Fidelity Classification:** Leverages machine learning models to classify text instantly with a 98.2% accuracy rate.
- **Glassmorphic UI Engine:** A fully responsive, modern web interface built with React, Vite, and TailwindCSS.
- **Real-Time Analysis:** Instant, asynchronous communication with the model via a Python/Flask API.
- **Mobile Responsive Architecture:** Perfect, fluid rendering from the smallest mobile devices to ultra-wide displays.

## 🚀 Live Demo & Deployment
- **Frontend:** Configured and ready for lightning-fast edge delivery on **Vercel**.
- **Backend Model:** Our scalable NLP model architecture is designed to run on Hugging Face infrastructure.

> **⚠️ IMPORTANT NOTICE:**  
> The backend classification API is currently designed for Hugging Face Spaces but is temporarily paused due to hosting constraints. **If the live model is not working, please extract this repository and execute it locally on your own machine** by following the instructions below.

---

## 💻 Local Development Setup

If you wish to run SpamLens AI locally, follow these steps to spin up both the Vite frontend and the Flask inference backend.

### Prerequisites
- Node.js (v18+)
- Python (v3.8+)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/saadzaidi002/Spam_email_detection.git
cd Spam_email_detection
```

### 2. Start the Backend (Flask + Scikit-Learn)
```bash
cd backend
python -m venv venv
# On Windows use: venv\Scripts\activate
# On Mac/Linux use: source venv/bin/activate
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
*The backend API will boot up on `http://127.0.0.1:5003`.*

### 3. Start the Frontend (React + Vite)
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
*The frontend interface will be automatically available at `http://localhost:5173` (or the next available port).*

---

## 🧠 Architecture Overview
- **Frontend Stack:** React, TypeScript, Vite, TailwindCSS
- **Backend Stack:** Python, Flask, Flask-CORS
- **Machine Learning:** Scikit-Learn, Pandas, NLTK
- **Classification Strategy:** TF-IDF Vectorization coupled with a custom-tuned classifier.

## 🤝 Developer
Built and engineered by **Saad Hussain Zaidi**  
- **LinkedIn:** [linkedin.com/in/saad-hussain-zaidi](https://www.linkedin.com/in/saad-hussain-zaidi/)
- **GitHub:** [@saadzaidi002](https://github.com/saadzaidi002)
