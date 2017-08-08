from flask import Flask, render_template, jsonify, request
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from create_database import Base, Event

app = Flask(__name__, static_folder="./static/dist",
template_folder="./static")
engine = create_engine('sqlite:///basketball.db')
Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
session = DBSession()

dummy = [
    {
        'id': 1,
        'title': 'baka',
        'description': 'yeah',
        'done': False
    }
]

@app.route('/')
def index():
  return render_template("index.html")

@app.route('/event')
def showEvents():
    events = session.query(Event).all()
    return jsonify(contents=[i.serialize for i in events])

@app.route('/new', methods=['GET', 'POST'])
def createEvents():
    if request.method == 'POST':
        print("hello")
        print(request.form['name'])
        newEvent = Event(name=request.form['name'], location=request.form['location'], date=request.form['date'], remain=request.form['remain'])
        session.add(newEvent)
        session.commit()
        return jsonify({'dummy': dummy})

if __name__ == '__main__':
  app.run()
