Fake News Detection System (NEWSAUTH)

This project is an end-to-end Fake News Detection System built using Natural Language Processing (NLP) and Machine Learning. It classifies news articles as REAL, FAKE, or UNKNOWN based on linguistic patterns learned from labeled datasets. The system supports both direct text input and news article URLs.

Project Features

Detects fake and real news using machine learning

Uses TF-IDF for text feature extraction

Logistic Regression for classification

Supports URL-based article analysis using web scraping

Provides safe fallback handling when URL content cannot be extracted

Real-time prediction using a Flask REST API

Clean and responsive frontend interface

Project Structure

NEWSAUTH
|
|-- backend
| |-- data
| | |-- Fake.csv
| | |-- True.csv
| |-- train_model.py
| |-- fake_news_model.pkl
| |-- app.py
| |-- requirements.txt
|
|-- frontend
| |-- index.html
| |-- style.css
| |-- app.js
|
|-- render.yaml
|-- README.md
|-- .gitignore

Machine Learning Workflow

Text preprocessing

Convert text to lowercase

Remove URLs and special characters

Feature extraction

TF-IDF vectorization

Stop-word removal

Model training

Logistic Regression classifier

Prediction output

REAL

FAKE

UNKNOWN (fallback for unreliable inputs)

URL Scraping Support

The system allows users to input a news article URL. The backend automatically extracts the article text using newspaper3k. If the extraction fails or the content is insufficient, the system safely returns an UNKNOWN result to avoid misleading predictions.

How to Run the Project Locally

Step 1: Clone the repository

git clone https://github.com/sandhiya-git-hub/Newsauth.git

cd Newsauth

Step 2: Create a virtual environment

python -m venv venv
venv\Scripts\activate

Step 3: Install backend dependencies

cd backend
pip install -r requirements.txt

Step 4: Train the machine learning model

python train_model.py

Step 5: Start the backend server

python app.py

The backend will run at:
http://127.0.0.1:5000

Step 6: Run the frontend

Open the file below in a browser:
frontend/index.html

Supported Inputs

Full news article text

News article URLs

Short or incomplete text (returns UNKNOWN)

Empty input (returns UNKNOWN)

Technologies Used

Frontend: HTML, CSS, JavaScript
Backend: Flask, Flask-CORS
Machine Learning: Logistic Regression
NLP: TF-IDF Vectorization
Web Scraping: newspaper3k
Deployment: Render and GitHub Pages

Limitations

Does not verify factual correctness using external databases

Works only on text-based content

Some websites may block article scraping

Future Enhancements

Source credibility analysis

Transformer-based models (BERT)

Fact-check API integration

Multi-language support

Explainable AI for predictions

Author

Sandhiya
Fake News Detection System (NEWSAUTH)
Machine Learning and NLP Project

License

This project is intended for educational and academic use only.
