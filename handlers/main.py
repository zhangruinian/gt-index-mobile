# coding:utf-8
import tornado.web


class MainHandler(tornado.web.RequestHandler):
    def get(self, *args, **kwargs):
        try:
            name = args[0]
            if name[-5:] != ".html":
                filename = name[1:] + ".html"
            else:
                filename = name[1:]
            self.render(filename)
        except Exception as e:
            print(e)
            self.set_status(status_code=404)
            self.finish("404 Not Found")


