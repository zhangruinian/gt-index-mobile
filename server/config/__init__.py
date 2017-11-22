# coding: utf-8
import os

class Config(object):
    debug = False
    host = "0.0.0.0"
    port = 800
    path = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
    static_path = path + "/mobile-static"
    templates_path = path + "/mobile-static"
    log_level = "INFO"
    log_path = path + "/logs/index-mobile.log"
    log_name = "gt-index-mobile"
    domain = ""

    def __init__(self, **kwargs):
        for k, v in kwargs.items():
            self.__setattr__(k, v)


try:
    from .local_config import local

    CONFIG = Config(**local)
except:
    CONFIG = Config()

print(CONFIG.path)

if __name__ == '__main__':
    c = Config(port=8080, name="hehe")
    print(c.host)
    print(c.port)
    print(c.name)
    print(c.path)