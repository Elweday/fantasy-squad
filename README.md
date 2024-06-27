# Fantasy Squad

Fantasy Squad is a web application that generates player cards for a squad with a high chance of success using machine learning. The backend is powered by Flask, while the frontend is built using Vite, React, Shadcn, and TailwindCSS.

## Project Structure

fantasy-squad/
├── frontend/
│ ├── package.json
│ ├── pnpm-lock.yaml
│ ├── vite.config.js
│ └── (other frontend files)
├── backend/
│ ├── requirements.txt
│ ├── app.py
│ └── (other backend files)
└── Makefile

## Features

- Backend API with Flask
- Frontend with Vite, React, Shadcn, and TailwindCSS
- Player data retrieval from the backend
- Player card display using machine learning predictions

## Prerequisites

- `Node.js` and `pnpm` installed for the frontend
- `Python` and `pip` installed for the backend

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/fantasy-Squad.git
cd fantasy-Squad
```

### 2. Install Dependencies
To install all dependencies for both the frontend and backend, run:
```sh
make install
```

### 3. Run Development Servers
To start the development servers for both frontend and backend, run:
```sh
make dev
```
### 4. Build the Project
To build the frontend and prepare the project for deployment, run:
```sh
make build
```

## Backend 
### API Endpoints
GET /api/players: Returns a list of all players in the database.

```json
[
  {
    "id": 1,
    "name": "Player One",
    "points": 100,
    "expected_points": 120,
    "price": 10.5,
    "team": "Team A"
  },
  {
    "id": 2,
    "name": "Player Two",
    "points": 90,
    "expected_points": 110,
    "price": 9.0,
    "team": "Team B"
  },
  ...
]
```
### Machine Learning Model
- TODO

## Frontend
### Routes: 
- TODO
### Tech Stack
- TODO

### Components:
- TODO

### Styling
- TODO   


## Contributing
- Fork the repository
- Create your feature branch (git checkout -b feature/fooBar)
- Commit your changes (git commit -am 'Add some fooBar')
- Push to the branch (git push origin feature/fooBar)
- Create a new Pull Request

## License
This project is licensed under the MIT License.

## Contact
For any inquiries or questions, please contact Khaled Ahmed.