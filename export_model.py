import pandas as pd
import pickle
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
import re

# Load Data
try:
    df = pd.read_csv('spam.csv', encoding='ISO-8859-1')
except FileNotFoundError:
    print("Error: spam.csv not found! Please make sure the dataset is in the folder.")
    exit()

# Preprocessing
df = df[['v1', 'v2']]
df.columns = ['label', 'text']
df['label'] = df['label'].map({'ham': 0, 'spam': 1})

# Clean Text Function
def clean_text(text):
    text = text.lower()
    text = re.sub(r'http\S+', 'url', text)
    text = re.sub(r'\d+', 'number', text)
    text = re.sub(r'[^a-z\s]', ' ', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

df['text'] = df['text'].apply(clean_text)

# Split
X_train, X_test, y_train, y_test = train_test_split(df['text'], df['label'], test_size=0.2, random_state=42)

# Vectorization
vectorizer = TfidfVectorizer(stop_words='english')
X_train_tfidf = vectorizer.fit_transform(X_train)

# Model Training
model = MultinomialNB()
model.fit(X_train_tfidf, y_train)

# Save Model and Vectorizer
print("Saving model.pkl and vectorizer.pkl...")
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)

with open('vectorizer.pkl', 'wb') as f:
    pickle.dump(vectorizer, f)

print("Done! Files are ready.")
