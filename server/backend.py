# coding:utf-8
from __future__ import print_function

import tornado.ioloop
import tornado.web

from server.config import CONFIG as AppConfig
from server.urls import url

# db = gee_database()
# s_db = server_database()
# r = gee_redis()
# mysql_conn = conn_mysql()

db = None
static_dir = AppConfig.static_path
template_dir = AppConfig.templates_path
debug = AppConfig.debug

settings = {
    "static_path": static_dir,
    "template_path": template_dir,
    "gzip": True,
    # "redis": None,
    # "mysqldb": mysql_conn,
    # "server_db": s_db
}


def make_app():
    app = tornado.web.Application(
        url, db=db, debug=debug, **settings)
    return app


if __name__ == "__main__":
    host = AppConfig.host
    port = AppConfig.port
    print("########## tornado web project start ##########")
    print("########## host:{}, port:{} ##########".format(host, port))
    print("########## ========== ##########")
    print("########## ========== ##########")
    print("########## ========== ##########")
    app = make_app()
    app.listen(port, address=host)
    tornado.ioloop.IOLoop.current().start()


