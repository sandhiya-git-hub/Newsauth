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
│
├── render.yaml
├── README.md
└── .gitignore


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
5️⃣ Start Backend Server
python app.py
Backend runs at:

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
Frontend: HTML, CSS, JavaScript

Backend: Flask, Flask-CORS

NLP: TF-IDF Vectorization

Machine Learning: Logistic Regression

Web Scraping: newspaper3k

Deployment: Render, GitHub Pages

⚠️ Limitations
Does not verify factual correctness using external databases

Works only with text-based content

Some websites may block automated article scraping

🔮 Future Enhancements
Source credibility analysis

Transformer-based models (BERT)

Fact-check API integration

Multi-language support

Explainable AI (model reasoning)

👩‍💻 Author
Sandhiya
Fake News Detection System – NEWSAUTH
Machine Learning & NLP Project

📜 License
This project is intended for educational and academic use only.
