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



app = Flask(__name__)
CORS(app)

with app.app_context():
    g.bias_bert_model = TFBertForSequenceClassification.from_pretrained("models/BIAS_BERT")

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


def bias_nb(input_data):
    pass

def bias_gpt(input_data):

    tokenizer = load_model("models/BIAS_GPT2")
    model = GPT2Tokenizer.from_pretrained('models/BIAS_GPT2_tokenizer')
    '''tokenizer = app.config["BIAS_GPT_TOKEN"]
    model = app.config["BIAS_GPT"]'''
    test_encodings = tokenizer([input_data], truncation=True, padding=True, return_tensors="tf")
    raw_predictions = model.predict({'input_ids': test_encodings['input_ids'], 'attention_mask': test_encodings['attention_mask']})


    logit = (raw_predictions[0])
    pred = np.argmax(logit)

    bias = {
        0: "Neutral",
        1: "Partisan"
    }

    bias_gpt_result = bias[pred]
    return bias_gpt_result


@app.route('/generate_results', methods=['POST'])
def generate_results():
    #bias_bert_model = init_bias_bert()
    print('HELLO!!')
    data = request.get_json()

    # Assuming data contains the input for your NLP model
    input_data = data['userInput']
    print('input_data=', input_data)

    bias_bert_result = bias_bert(input_data)
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
    #reult[1] = bias_gpt_result

    # return the result as a dictionary
    return jsonify({'result': result})


if __name__ == '__main__':
    app.run(port=5000)

