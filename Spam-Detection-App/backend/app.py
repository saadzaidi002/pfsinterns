from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import os
import re
import string
import nltk
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer

app = Flask(__name__)
CORS(app)

VECTORIZER_PATH = 'vectorizer.pkl'
MODEL_PATH = 'spam_model.pkl'

if os.path.exists(VECTORIZER_PATH) and os.path.exists(MODEL_PATH):
    vectorizer = joblib.load(VECTORIZER_PATH)
    model = joblib.load(MODEL_PATH)
else:
    vectorizer = None
    model = None

try:
    nltk.data.find('corpora/stopwords')
except LookupError:
    nltk.download('stopwords')

def preprocess_text(text):
    stemmer = PorterStemmer()
    stop_words = set(stopwords.words('english'))
    text = str(text).lower()
    text = re.sub(r'\d+', '', text)
    text = re.sub(f'[{string.punctuation}]', ' ', text)
    text = text.split()
    text = [word for word in text if word not in stop_words]
    text = [stemmer.stem(word) for word in text]
    return ' '.join(text)

@app.route('/predict', methods=['POST'])
def predict():
    if not vectorizer or not model:
        return jsonify({'error': 'Models not trained yet.'}), 500
        
    try:
        data = request.json
        message = data.get('message', '')
        
        if not message:
            return jsonify({'error': 'Message is empty.'}), 400
            
        clean_msg = preprocess_text(message)
        features = vectorizer.transform([clean_msg]).toarray()
        
        prediction = model.predict(features)[0]
        # prediction is 1 for spam, 0 for ham
        
        # We can also get probabilities
        probs = model.predict_proba(features)[0]
        spam_prob = float(probs[1])
        
        return jsonify({
            'prediction': int(prediction),
            'spam_probability': spam_prob,
            'message': 'Prediction successful'
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(port=5003, debug=True)
