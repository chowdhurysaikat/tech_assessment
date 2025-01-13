from flask import Flask, jsonify
import pandas as pd

file_path = Downloads/'Electric_Vehicle_Population_Data.csv'
ev_data = pd.read_csv(file_path)

app = Flask(__name__)

@app.route('/api/top-manufacturers', methods=['GET'])
def top_manufacturers():
    top_makes = ev_data['Make'].value_counts().head(10)
    return jsonify(top_makes.to_dict())

@app.route('/api/ev-types', methods=['GET'])
def ev_types():
    ev_types = ev_data['Electric Vehicle Type'].value_counts()
    return jsonify(ev_types.to_dict())

@app.route('/api/model-year-trends', methods=['GET'])
def model_year_trends():
    model_years = ev_data['Model Year'].value_counts().sort_index()
    return jsonify(model_years.to_dict())

@app.route('/api/top-cities', methods=['GET'])
def top_cities():
    top_cities = ev_data['City'].value_counts().head(10)
    return jsonify(top_cities.to_dict())

if __name__ == '__main__':
    app.run(debug=True)
