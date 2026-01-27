# Fake News Detection System (NEWSAUTH)

A machine learning-based web application that detects whether a news article is REAL or FAKE using NLP techniques.

## Technologies Used
- NLP: TF-IDF Vectorization
- ML Model: Logistic Regression
- Backend: Flask REST API
- Frontend: HTML, CSS, JavaScript

## How to Run

### 1. Train the Model
cd backend
python train_model.py

### 2. Start Backend Server
python app.py

### 3. Run Frontend
Open frontend/index.html in a browser

## Output
- REAL news → Green indicator
- FAKE news → Red warning
- Confidence score shown
