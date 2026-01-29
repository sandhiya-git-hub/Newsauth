# 📰 Fake News Detection System (NewsAuth)

NewsAuth is a machine learning–based web application designed to detect fake news by analyzing the credibility of text-based news content.  
The system uses Natural Language Processing (NLP) techniques and a supervised learning model to classify news as **REAL**, **FAKE**, or **UNKNOWN**.

---

## 🚀 Features

- 🔍 Detects fake news from **article text**
- 🌐 Supports **news article URLs** with automatic content extraction
- 🧠 Uses **TF-IDF + Logistic Regression**
- ⚠️ Safe fallback handling for insufficient or unverifiable content
- 💻 Clean and interactive frontend UI
- 🔄 Real-time prediction using Flask API

---

## 🧠 Tech Stack

### Backend
- Python
- Flask & Flask-CORS
- Scikit-learn
- Pandas & NumPy
- Newspaper3k (for URL article extraction)

### Frontend
- HTML
- CSS
- JavaScript (Fetch API)

---


---

## ⚙️ How It Works

1. User provides **news text or URL**
2. Text is cleaned and preprocessed
3. TF-IDF converts text into numerical features
4. Logistic Regression model predicts:
   - **REAL**
   - **FAKE**
   - **UNKNOWN** (if content is insufficient)
5. Result and confidence score are displayed on the UI

---

## ▶️ How to Run the Project Locally

1️⃣ Clone the Repository

git clone https://github.com/sandhiya-git-hub/Newsauth.git
cd Newsauth

2️⃣ Create & Activate Virtual Environment

python -m venv venv
venv\Scripts\activate

3️⃣ Install Backend Dependencies

cd backend
pip install -r requirements.txt

4️⃣ Train the Model

python train_model.py

5️⃣ Run Flask Server

python app.py


Server runs at:

http://127.0.0.1:5000

6️⃣ Open Frontend

Open the file below in your browser:

frontend/index.html

🧪 Supported Input Types

✅ Full news article text

✅ News article URLs

⚠️ Short or vague content returns UNKNOWN

❌ Images, PDFs, social media posts not supported

📊 Model Performance

Accuracy achieved: ~98% (on training dataset)

Uses Logistic Regression for interpretability and efficiency

⚠️ Disclaimer

This system is a content-based classifier and does not perform real-time fact-checking against external databases.
Predictions are based on linguistic patterns learned from the dataset.

🔮 Future Enhancements

Source credibility scoring

Explainable AI (SHAP/LIME)

Deployment using cloud platforms

Multilingual fake news detection

👩‍💻 Author

Developed as an academic machine learning project using NLP techniques.

📄 License

This project is for educational purposes only.
