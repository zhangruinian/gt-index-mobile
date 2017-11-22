# coding:utf-8
from __future__ import print_function
import os

import tornado.web

from server.config import CONFIG as appconfig

from handlers.exp_captcha import *
from handlers.main import *
from handlers.index import IndexHandler

path = appconfig.path
static_path = appconfig.static_path

asset_path = static_path + "/assets"
css_path = static_path + "/css"
js_path = static_path + "/js"
vendor_path = static_path + "/vendor"

url = [
    (r"/static/(.*)", tornado.web.StaticFileHandler, {"path": static_path, "default_filename": "index.html"}),
    (r"/media/(.*)", tornado.web.StaticFileHandler, {"path": os.path.join(path, "media")}),
    (r"/js/(.*)", tornado.web.StaticFileHandler, {"path": js_path}),
    (r"/assets/(.*)", tornado.web.StaticFileHandler, {"path": asset_path}),
    (r"/css/(.*)", tornado.web.StaticFileHandler, {"path": css_path}),
    (r"/vendor/(.*)", tornado.web.StaticFileHandler, {"path": vendor_path}),
]

print(url)

url += [
    (r"/", IndexHandler),
    (r"/api/click/get", ClickGetCaptchaHandler),
    (r"/api/click/validate", ClickValidateHandler),
    (r"/api/slide/get", SlideGetCaptchaHandler),
    (r"/api/slide/validate", SlideValidateHandler),
    (r"/api/fullpage/get", FullpageGetCaptchaHandler),
    (r"/api/fullpage/validate", FullpageValidateHandler),
    (r"(.+)", MainHandler),
]