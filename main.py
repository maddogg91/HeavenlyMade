""" Module providingFunction printing python version """
import os
from flask import Flask, flash, session, render_template, request, redirect, url_for




basedir = os.path.abspath(os.path.dirname(__file__))

# App configuration
def create_app():
    """creates initial application"""
    app = Flask(__name__)
    app.config['UPLOAD_FOLDER'] = basedir + "/static/uploads"
    app.config['MAX_CONTENT_PATH'] = 150000
    app.config['SERVER_NAME'] = "127.0.0.1:5000"
    app.config['DEBUG'] = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.secret_key = os.environ.get(
        "FLASK_SECRET_KEY", default="supersecretkey")
    app.config['CACHE_TYPE'] = "SimpleCache"
    app.config['CACHE_DEFAULT_TIMEOUT'] = 300
    return app
	
app_init = create_app()

@app_init.route("/")
def index():
    """routing to index html"""
    return render_template("index.html")

# created a reloader for easier code running in localhost
# debug to find bugs
if __name__ == '__main__':
	app_init.run()