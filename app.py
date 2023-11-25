import os
from flask import Flask, request, jsonify, g
import tensorflow as tf
import numpy as np
import sklearn
from sklearn.metrics import precision_recall_fscore_support, accuracy_score
from flask_cors import CORS
from sklearn.feature_extraction.text import TfidfVectorizer
from transformers import GPT2Tokenizer

from transformers import BertTokenizer, TFBertForSequenceClassification
from tensorflow.keras.models import load_model
from joblib import dump, load
import re
from html import unescape



app = Flask(__name__)
CORS(app)

#with app.app_context():
    #g.bias_bert_model = TFBertForSequenceClassification.from_pretrained("models/BIAS_BERT")

# generating relative path for reading in best model
base_dir = os.path.dirname(os.path.realpath(__file__))
model_path = os.path.join(base_dir, 'models','best_lstm_model_11_21.h5')

# Load NLP model
# loaded_model = tf.keras.models.load_model(model_path)

# def vectorize_input(input):
#     vec = [1] * 308
#     return vec

with app.app_context():
    app.config["BIAS_BERT"] = TFBertForSequenceClassification.from_pretrained("models/BIAS_BERT")

with app.app_context():
    app.config["MESSAGE_BERT"] = TFBertForSequenceClassification.from_pretrained("models/MESSAGE_BERT")

    '''app.config["BIAS_NB"] = load('model_filename.joblib')

    app.config["BIAS_LSTM"] = load_model("models/BIAS_capstone_best_lstm_model_11_23.h5")'''
    


def bias_bert(input_data):
    #print("in bias bert")
    tokenizer = BertTokenizer.from_pretrained('bert-base-uncased', do_lower_case=True)
    input_encoded = tokenizer.batch_encode_plus([input_data],
                                                padding=True,
                                                truncation=True,
                                                max_length = 256,
                                                return_tensors='tf')

    model = app.config["BIAS_BERT"]
    raw_predictions = model.predict([input_encoded['input_ids'], input_encoded['token_type_ids'], input_encoded['attention_mask']])
    print(raw_predictions)

    logits = (raw_predictions.logits)
    pred = np.argmax(logits[0])

    bias = {
        0: "Neutral",
        1: "Partisan"
    }

    bias_bert_result = bias[pred]


    print("Bias Bert Result" + bias_bert_result)
    return bias_bert_result


def message_bert(input_data):
    tokenizer = BertTokenizer.from_pretrained('bert-base-uncased', do_lower_case=True)
    input_encoded = tokenizer.batch_encode_plus([input_data],
                                                padding=True,
                                                truncation=True,
                                                max_length = 256,
                                                return_tensors='tf')

    model = app.config["MESSAGE_BERT"]
    raw_predictions = model.predict([input_encoded['input_ids'], input_encoded['token_type_ids'], input_encoded['attention_mask']])
    print(raw_predictions)

    mapping = {0: 'Attack', 1: 'Constituency', 2: 'Information', 3: 'Media', 4: 'Mobilization', 5: 'Personal', 6: 'Policy', 7: 'Support'}

    logits = (raw_predictions.logits)
    pred = np.argmax(logits[0])

    message_bert_result = mapping[pred]

    print("Bias Bert Result" + message_bert_result)
    return message_bert_result



@app.route('/generate_results', methods=['POST'])
def generate_results():
    #bias_bert_model = init_bias_bert()
    print('HELLO!!')
    data = request.get_json()

    
    input_data = data['userInput']
    print('input_data=', input_data)

    
    clean = re.sub(r'\\x[0-9A-Fa-f]{2}', '', input_data)
    clean = re.sub(r'[^\x00-\x7F]+', '', clean)
    pattern = r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+'
    clean = re.sub(pattern, '', clean)
    clean = unescape(clean)

    input_data = clean

    bias_bert_result = bias_bert(input_data)
    message_bert_result = message_bert(input_data)
    #bias_gpt_result = bias_gpt(input_data)
    #bias_nb_result = bias_nb(input_data)


    # vec = vectorize_input(input_data)
    # Use the loaded NLP model to generate results
    # vec3 = [vec, vec, vec]
    # y_pred = loaded_model.predict([vec, vec, vec])
 
    # print(y_pred)
    # result = "Positive" if y_pred[0][0] >= y_pred[0][1] else "Negative"
    result = [0,0,0,0]

    result[0] = bias_bert_result
    result[1] = message_bert_result

    # return the result as a dictionary
    return jsonify({'result': result})


if __name__ == '__main__':
    app.run(port=5000)

