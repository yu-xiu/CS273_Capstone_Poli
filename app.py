import os
from flask import Flask, request, jsonify
import tensorflow as tf
import sklearn
from sklearn.metrics import precision_recall_fscore_support, accuracy_score

app = Flask(__name__)

# generating relative path for reading in best model
base_dir = os.path.dirname(os.path.realpath(__file__))
model_path = os.path.join(base_dir, 'models','best_lstm_model_11_21.h5')

# Load NLP model
loaded_model = tf.keras.models.load_model(model_path)

@app.route('/generate_results', methods=['POST'])
def generate_results():
    data = request.get_json()

    # Assuming data contains the input for your NLP model
    input_data = data['input_data']

    # Use the loaded NLP model to generate results
    y_pred = loaded_model.predict([input_data])
    accuracy = accuracy_score([input_data], y_pred.round())
    precision, recall, f1, _ = precision_recall_fscore_support([input_data], y_pred.round(), average='micro')

    return f1


if __name__ == '__main__':
    app.run(port=5000);

