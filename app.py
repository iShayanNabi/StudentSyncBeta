
from flask import Flask, request, jsonify
import pandas as pd
from sklearn.linear_model import LinearRegression
import numpy as np
import os

app = Flask(__name__)

# Sample habit tracking data
habit_data = pd.DataFrame({
    'time': [9, 10, 11, 12, 13, 14],
    'library_visits': [0, 1, 1, 0, 1, 0]
})

# Linear regression model for habit prediction
model = LinearRegression()
model.fit(habit_data[['time']], habit_data['library_visits'])

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        time = np.array([[data['time']]])
        prediction = model.predict(time)
        return jsonify({'prediction': prediction[0]})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
