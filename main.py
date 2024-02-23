import re
import random

from flask import Flask, render_template, request
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('Controller.html')


@app.route('/intro')
def intro():
    return render_template('intro.html')


@app.route('/RogueLite')
def guess():
    return render_template('RogueLite.html')


if __name__ == '__main__':
    app.run(debug=True)
