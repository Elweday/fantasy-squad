from . import db

class Player(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    team = db.Column(db.String(100), nullable=False)
    pts = db.Column(db.Integer, nullable=False)
    expected = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    
