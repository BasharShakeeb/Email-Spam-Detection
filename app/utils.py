import re

def clean_text(text):
    """
    Cleans the input text by:
    1. Converting to lowercase
    2. Replacing URLs with 'url'
    3. Replacing numbers with 'number'
    4. Removing non-alphabetic characters
    5. Stripping extra whitespace
    """
    text = str(text).lower()
    text = re.sub(r'http\S+', 'url', text)
    text = re.sub(r'\d+', 'number', text)
    text = re.sub(r'[^a-z\s]', ' ', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text
