#!/usr/bin/env python3
"""
basic flask app with single route to hello world page
"""
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    """index function returning a rendered html page"""
    return render_template('0-index.html')


if __name__ == "__main__":
    app.run(debug=True)
