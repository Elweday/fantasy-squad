from flask import jsonify, request, current_app as app
from .models import Player
from . import db




@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify(message="Hello from Flask!"), 200

@app.route('/api/players', methods=['GET'])
def get_players():
    players = Player.query.all()
    return jsonify([{
        'id': player.id,
        'name': player.name,
        'points': player.pts,
        'expected_points': player.expected,
        'price': player.price,
        'team': player.team
    } for player in players]), 200

@app.route('/api/players', methods=['POST'])
def add_player():
    data = request.json
    new_player = Player(
        name=data['name'],
        points=data['pts'],
        expected_points=data['expected'],
        price=data['price'],
        team=data['team']
    )
    db.session.add(new_player)
    db.session.commit()
    return jsonify(message="Player added successfully!"), 201
