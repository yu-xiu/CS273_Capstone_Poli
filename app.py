import os
from flask import Flask, request, jsonify
import tensorflow as tf
import sklearn
from sklearn.metrics import precision_recall_fscore_support, accuracy_score
from flask_cors import CORS
from sklearn.feature_extraction.text import TfidfVectorizer

app = Flask(__name__)
CORS(app)


# generating relative path for reading in best model
base_dir = os.path.dirname(os.path.realpath(__file__))
model_path = os.path.join(base_dir, 'models','best_lstm_model_11_21.h5')

# Load NLP model
loaded_model = tf.keras.models.load_model(model_path)
#test = [1] * 308
#print(test)
#print(loaded_model.predict([test, test, test]))
#print(loaded_model.predict(['xxxxx']))

def get_sequences_of_reviews(reviews):
  tokenizer = Tokenizer()
  tokenizer.fit_on_texts(reviews) # learn a vocabulary of all unique words in the review text data and assigned a unique integer ID to each word
  reviews_word_index = tokenizer.word_index # word : index dict
  sequences_of_reviews = tokenizer.texts_to_sequences(reviews) # convert review text to sequence of numerical values, those numbers are form the word_index numbers assigned to the words
  max_sequences_length = max(len(seq) for seq in sequences_of_reviews)
  padded_sequences = pad_sequences(sequences_of_reviews, maxlen=max_sequences_length, padding="post") # ensure all sequences have the same length by padding 0 to the sequences that are shorter than the max_sequence_length
  return padded_sequences

def vectorize_input(input):
    vec = [1] * 308
    return vec

@app.route('/generate_results', methods=['POST'])
def generate_results():
    print('HELLO!!')
    data = request.get_json()

    # Assuming data contains the input for your NLP model
    input_data = data['userInput']
    print('input_data=', input_data)

    vec = vectorize_input(input_data)
    
    # Use the loaded NLP model to generate results
    vec3 = [vec, vec, vec]
    y_pred = loaded_model.predict([vec, vec, vec])
 
    print(y_pred)
    result = "Positive" if y_pred[0][0] >= y_pred[0][1] else "Negative"

    # return the result as a dictionary
    return jsonify({'result': result})


if __name__ == '__main__':
    app.run(port=5000);