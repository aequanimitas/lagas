#!/usr/bin/env python-local-exec

from app import app
from flask.ext.script import Manager

manager = Manager(app)
manager.run()
