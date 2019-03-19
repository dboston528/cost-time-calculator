from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS


app = Flask(__name__)
api = Api(app)
CORS(app)

class Rates(Resource):
    def get(self):
        return [
{
"id": 1,
"label": "Development",
"rate": 160
},
{
"id": 2,
"label": "Design",
"rate": 120
},
{
"id": 3,
"label": "Project Management",
"rate": 120
},
{
"id": 4,
"label": "Travel",
"rate": 100
}
]

api.add_resource(Rates, '/api/rates')

if __name__ == '__main__':
    app.run(debug=True)