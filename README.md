<<<<<<< HEAD
📰 Fake News Detection System (NEWSAUTH)

An end-to-end Fake News Detection System that uses Natural Language Processing (NLP) and Machine Learning to classify news articles as REAL, FAKE, or UNKNOWN.
The system supports both direct text input and news article URLs, providing real-time predictions through a web interface.

🚀 Features

🔍 Detects Fake vs Real news using ML

🧠 NLP pipeline with TF-IDF Vectorization

🤖 Logistic Regression classifier

🌐 Supports URL-based article analysis (automatic scraping)

🛡️ Safe fallback handling for unsupported or weak URLs

⚡ Real-time predictions via Flask REST API

🎨 Clean and responsive frontend (HTML, CSS, JavaScript)

🧱 Project Architecture
NEWSAUTH/
│
├── backend/
│   ├── data/
│   │   ├── Fake.csv
│   │   └── True.csv
│   ├── train_model.py
│   ├── fake_news_model.pkl
│   ├── app.py
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
=======
# 📰 Fake News Detection System (NEWSAUTH)

An end-to-end **Fake News Detection System** built using **Natural Language Processing (NLP)** and **Machine Learning**.  
The system classifies news articles as **REAL**, **FAKE**, or **UNKNOWN** and supports both **direct text input** and **news article URLs**.

---

## 🚀 Features

- Detects fake and real news using machine learning
- TF-IDF based text feature extraction
- Logistic Regression classifier
- Supports URL-based article analysis (automatic scraping)
- Safe fallback handling for unsupported or weak URLs
- Real-time prediction using Flask REST API
- Clean and responsive frontend interface

---

## 🧱 Project Structure

NEWSAUTH/
│
├── backend/
│ ├── data/
│ │ ├── Fake.csv
│ │ └── True.csv
│ ├── train_model.py
│ ├── fake_news_model.pkl
│ ├── app.py
│ └── requirements.txt
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── app.js
>>>>>>> 6eb6b7e175afce685e86825c52b64bdd83836557
│
├── render.yaml
├── README.md
└── .gitignore

<<<<<<< HEAD
🧠 Machine Learning Pipeline

Text Cleaning

Lowercasing

Removing URLs, punctuation, and special characters

Feature Extraction

TF-IDF Vectorization

Stop-word removal

Model

Logistic Regression (Supervised Learning)

Prediction Output

REAL

FAKE

UNKNOWN (fallback when analysis is unreliable)

🌐 URL Scraping Support

Uses newspaper3k for article extraction

Adds browser user-agent and timeout handling

Automatically falls back to UNKNOWN if:

Content extraction fails

Article text is too short

Website blocks scraping

This ensures no misleading predictions.

🖥️ How to Run Locally
1️⃣ Clone the Repository
git clone https://github.com/sandhiya-git-hub/Newsauth.git
cd Newsauth

2️⃣ Create Virtual Environment
python -m venv venv
venv\Scripts\activate   # Windows

3️⃣ Install Backend Dependencies
cd backend
pip install -r requirements.txt

4️⃣ Train the Model
python train_model.py

=======

---

## 🧠 Machine Learning Workflow

1. **Text Preprocessing**
   - Convert text to lowercase
   - Remove URLs and special characters

2. **Feature Extraction**
   - TF-IDF Vectorization
   - Stop-word removal

3. **Model Training**
   - Logistic Regression (Supervised Learning)

4. **Prediction Output**
   - `REAL`
   - `FAKE`
   - `UNKNOWN` (fallback for unreliable inputs)

---

## 🌐 URL Scraping Support

- Users can provide a **news article URL**
- The backend extracts article text using `newspaper3k`
- If extraction fails or content is insufficient, the system returns **UNKNOWN**
- Prevents misleading predictions when analysis is unreliable

---

## 🖥️ How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sandhiya-git-hub/Newsauth.git
cd Newsauth
2️⃣ Create Virtual Environment
python -m venv venv
venv\Scripts\activate
3️⃣ Install Backend Dependencies
cd backend
pip install -r requirements.txt
4️⃣ Train the Model
python train_model.py
>>>>>>> 6eb6b7e175afce685e86825c52b64bdd83836557
5️⃣ Start Backend Server
python app.py
Backend runs at:

<<<<<<< HEAD

Backend runs at:

http://127.0.0.1:5000

6️⃣ Run Frontend

Open:

frontend/index.html


in your browser.

🧪 Supported Input Types
Input Type	Example	Result
Full news article text	Pasted content	REAL / FAKE
News article URL	Reuters, Al Jazeera	REAL / FAKE / UNKNOWN
Short or weak content	Few lines	UNKNOWN
Empty input	—	UNKNOWN
🛠️ Technologies Used

=======
http://127.0.0.1:5000
6️⃣ Run Frontend
Open the following file in a browser:

frontend/index.html
🧪 Supported Input Types
Input Type	Example	Output
Full article text	News content	REAL / FAKE
News article URL	Reuters, Al Jazeera	REAL / FAKE / UNKNOWN
Short or weak text	Few lines	UNKNOWN
Empty input	—	UNKNOWN
🛠️ Technologies Used
>>>>>>> 6eb6b7e175afce685e86825c52b64bdd83836557
Frontend: HTML, CSS, JavaScript

Backend: Flask, Flask-CORS

<<<<<<< HEAD
NLP: TF-IDF
=======
NLP: TF-IDF Vectorization
>>>>>>> 6eb6b7e175afce685e86825c52b64bdd83836557

Machine Learning: Logistic Regression

Web Scraping: newspaper3k

<<<<<<< HEAD
Deployment: Render (Backend), GitHub Pages (Frontend)

☁️ Live Deployment

Backend API: Deployed on Render

Frontend: Hosted using GitHub Pages

Paste article text or URL and get instant predictions.

⚠️ Limitations

Does not verify factual correctness against databases

Relies on linguistic patterns, not source reputation

Some websites may block automated scraping

🔮 Future Enhancements

Source credibility scoring

Deep learning models (BERT, Transformers)
=======
Deployment: Render, GitHub Pages

⚠️ Limitations
Does not verify factual correctness using external databases

Works only with text-based content

Some websites may block automated article scraping

🔮 Future Enhancements
Source credibility analysis

Transformer-based models (BERT)
>>>>>>> 6eb6b7e175afce685e86825c52b64bdd83836557

Fact-check API integration

Multi-language support

<<<<<<< HEAD
Explainable AI (prediction reasoning)

👩‍💻 Author

=======
Explainable AI (model reasoning)

👩‍💻 Author
>>>>>>> 6eb6b7e175afce685e86825c52b64bdd83836557
Sandhiya
Fake News Detection System – NEWSAUTH
Machine Learning & NLP Project

📜 License
<<<<<<< HEAD

This project is for educational and academic purposes.
=======
This project is intended for educational and academic use only.
>>>>>>> 6eb6b7e175afce685e86825c52b64bdd83836557
