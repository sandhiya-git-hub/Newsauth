from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import re
from newspaper import Article

app = Flask(__name__)
CORS(app)

import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "fake_news_model.pkl")

with open(MODEL_PATH, "rb") as f:
    model = pickle.load(f)


def clean_text(text):
    text = text.lower()
    text = re.sub(r"http\S+|www\S+", "", text)
    text = re.sub(r"[^a-z\s]", "", text)
    return text

def extract_text_from_url(url):
    article = Article(
        url,
        browser_user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        request_timeout=10
    )
    article.download()
    article.parse()
    return article.text

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json(silent=True) or {}
    user_input = data.get("text", "").strip()

    if not user_input:
        return jsonify({
            "result": "UNKNOWN",
            "confidence": 0,
            "error": "Empty input"
        })

    if user_input.startswith("http://") or user_input.startswith("https://"):
        try:
            text = extract_text_from_url(user_input)
        except Exception:
            return jsonify({
                "result": "UNKNOWN",
                "confidence": 0,
                "error": "Failed to extract article from URL"
            })

        if not text or len(text.split()) < 50:
            return jsonify({
                "result": "UNKNOWN",
                "confidence": 0,
                "error": "Insufficient article content from URL"
            })
    else:
        text = user_input

    cleaned_text = clean_text(text)

    try:
        prediction = model.predict([cleaned_text])[0]
        probability = model.predict_proba([cleaned_text])[0]
        confidence = round(float(max(probability)) * 100, 2)
    except Exception:
        return jsonify({
            "result": "UNKNOWN",
            "confidence": 0,
            "error": "Prediction failed"
        })

    result = "REAL" if prediction == 1 else "FAKE"

    return jsonify({
        "result": result,
        "confidence": confidence
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)

