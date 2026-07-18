import pandas as pd
import joblib
import re
import string
import nltk
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

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

def train_model():
    print("Loading data...")
    df = pd.read_csv(r"e:\Pfsinterns\spam.csv", encoding="latin-1", header=None, names=['label', 'message', 'Unnamed_2', 'Unnamed_3', 'Unnamed_4'])
    
    df = df[['label', 'message']]
    # Drop rows where label is not ham or spam if any, or just map them
    df = df[df['label'].isin(['ham', 'spam'])]
    
    print("Preprocessing text...")
    df['clean_message'] = df['message'].apply(preprocess_text)
    
    print("Vectorizing...")
    vectorizer = TfidfVectorizer(max_features=5000)
    X = vectorizer.fit_transform(df['clean_message']).toarray()
    y = df['label'].apply(lambda x: 1 if x == 'spam' else 0).values
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    print("Training model...")
    # Best params from notebook: {'n_estimators': 200, 'min_samples_split': 5, 'min_samples_leaf': 1, 'max_depth': None}
    model = RandomForestClassifier(n_estimators=200, min_samples_split=5, min_samples_leaf=1, random_state=42)
    model.fit(X_train, y_train)
    
    score = model.score(X_test, y_test)
    print(f"Test Accuracy: {score}")
    
    print("Saving models...")
    joblib.dump(vectorizer, 'vectorizer.pkl')
    joblib.dump(model, 'spam_model.pkl')
    print("Models saved successfully.")

if __name__ == "__main__":
    train_model()
