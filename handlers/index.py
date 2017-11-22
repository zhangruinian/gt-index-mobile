#!/usr/bin/env python
# coding:utf-8
import tornado.web


class IndexHandler(tornado.web.RequestHandler):
    def get(self, *args, **kwargs):
        print("in")
        self.render("index.html")