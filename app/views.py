from flask import render_template
from app import app

@app.route('/')
@app.route('/index')

def index():
    workouts = [{'name': 'bench press', 'max': '120lbs'}, {'name': 'military press', 'max': '60lbs'}]
    return render_template('index.html', title='Lagas', workouts=workouts)
