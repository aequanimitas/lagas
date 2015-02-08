from flask import render_template
from app import app

TEMP_WORKOUTS = [{'name': 'bench press', 'max': '120lbs'}, 
                 {'name': 'military press', 'max': '60lbs'}]

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title='Lagas', workouts=TEMP_WORKOUTS)

@app.route('/workout/<name>')
def workout(name):
    if name in TEMP_WORKOUTS:
        return '<h1> your workout for today is: {}'.format(name)
    else:
        return 'Workout not found', 404
