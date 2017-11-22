# coding:utf-8
from __future__ import print_function

from server.backend import make_app, AppConfig
import tornado.ioloop

host = AppConfig.host
port = AppConfig.port

print(AppConfig.__dict__)
print("path: ", AppConfig.path)
print("static_path: ", AppConfig.static_path)
print("template_path: ", AppConfig.templates_path)
print(host, port)

app = make_app()
app.listen(port, address=host)
tornado.ioloop.IOLoop.current().start()


