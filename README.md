# 📰 Fake News Detection System (NewsAuth)

A Machine Learning–based Fake News Detection System that analyzes news articles and URLs to determine whether the content is **REAL** or **FAKE** using Natural Language Processing (NLP) techniques.

---

## 📌 Project Overview

The spread of fake news has become a serious issue in the digital age. This project aims to detect misinformation by analyzing textual news content using supervised machine learning.

The system supports:
- Direct **news text input**
- **News article URL input** (automatic content extraction)

The model classifies news as **REAL** or **FAKE** and provides a confidence score.

---

## 🚀 Key Features

- End-to-end NLP pipeline
- Text preprocessing and cleaning
- TF-IDF feature extraction
- Logistic Regression classifier
- URL scraping and article extraction
- REST API using Flask
- Interactive frontend UI
- Clear REAL / FAKE prediction with confidence score

---

## 🧠 Technologies Used

### Machine Learning & NLP
- Python
- Pandas
- NumPy
- Scikit-learn
- TF-IDF Vectorization
- Logistic Regression

### Backend
- Flask
- Flask-CORS
- Newspaper3k (for URL content extraction)

### Frontend
- HTML
- CSS
- JavaScript

---


---

## ⚙️ How It Works

1. User enters news text or a news article URL.
2. If a URL is provided, the article content is extracted automatically.
3. Text is cleaned and preprocessed.
4. TF-IDF converts text into numerical features.
5. Logistic Regression model predicts whether the news is REAL or FAKE.
6. The result and confidence score are displayed to the user.

---

## 🧪 Model Performance

- **Accuracy:** ~98%
- Trained on labeled real and fake news datasets
- Improved using text preprocessing and hyperparameter tuning

---

## ▶️ How to Run the Project Locally

1️⃣ Clone the Repository

git clone https://github.com/sandhiya-git-hub/Newsauth.git
cd Newsauth

2️⃣ Create Virtual Environment

python -m venv venv
venv\Scripts\activate   # Windows

3️⃣ Install Dependencies

pip install -r backend/requirements.txt

4️⃣ Train the Model

cd backend
python train_model.py

5️⃣ Run the Backend Server

python app.py


Backend will run at:

http://127.0.0.1:5000

6️⃣ Run the Frontend

Open the following file in a web browser:

frontend/index.html

📥 Input Types Supported

News article text

News article URLs (e.g., BBC, CNN, Reuters, etc.)

📤 Output

Prediction: REAL or FAKE

Confidence Score: Percentage indicating prediction certainty

🔒 Limitations

Predictions depend on the quality and balance of the training data

Model accuracy may vary for very short or opinion-based articles

Not a replacement for professional fact-checking

📜 License

This project is for educational and academic purposes.

