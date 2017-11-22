# coding:utf-8

from geetest import GeetestLib
import json
from tornado.web import RequestHandler as SessionBaseHandler

geetest_id_click = "5ca07ca8f90720b77531b4c4b046b5c8"
geetest_key_click = "a3d025dab923858e520687789c23ffbf"

geetest_id_slide = "b46d1900d0a894591916ea94ea91bd2c"
geetest_key_slide = "36fc3fe98530eea08dfc6ce76e3d24c4"

geetest_id_fullpage = "ea0526823d36a4ad5b3dab95159c6474"
geetest_key_fullpage = "ee658f49628ba2f40c9693fff9b327c9"

uid = 'test'


class ClickGetCaptchaHandler(SessionBaseHandler):
    def get(self):
        user_id = uid
        gt = GeetestLib(geetest_id_click, geetest_key_click)
        gt.pre_process(user_id, JSON_FORMAT=0)
        response_str = gt.get_response_str()

        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.write(response_str)


class ClickValidateHandler(SessionBaseHandler):
    def post(self):
        gt = GeetestLib(geetest_id_click, geetest_key_click)

        challenge = self.get_argument(gt.FN_CHALLENGE, "")
        validate = self.get_argument(gt.FN_VALIDATE, "")
        seccode = self.get_argument(gt.FN_SECCODE, "")
        result = gt.success_validate(challenge, validate, seccode, uid)

        result = result = {"status": "success"} if result else {"status": "fail"}
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.write(json.dumps(result))


class SlideGetCaptchaHandler(SessionBaseHandler):
    def get(self):
        user_id = uid
        gt = GeetestLib(geetest_id_slide, geetest_key_slide)
        gt.pre_process(user_id, JSON_FORMAT=0)
        response_str = gt.get_response_str()
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.write(response_str)


class SlideValidateHandler(SessionBaseHandler):
    def post(self):
        gt = GeetestLib(geetest_id_slide, geetest_key_slide)

        challenge = self.get_argument(gt.FN_CHALLENGE, "")
        validate = self.get_argument(gt.FN_VALIDATE, "")
        seccode = self.get_argument(gt.FN_SECCODE, "")
        result = gt.success_validate(challenge, validate, seccode, uid)

        result = result = {"status": "success"} if result else {"status": "fail"}
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.write(json.dumps(result))


class FullpageGetCaptchaHandler(SessionBaseHandler):
    def get(self):
        user_id = uid
        gt = GeetestLib(geetest_id_fullpage, geetest_key_fullpage)
        gt.pre_process(user_id, JSON_FORMAT=0)
        response_str = gt.get_response_str()
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.write(response_str)


class FullpageValidateHandler(SessionBaseHandler):
    def post(self):
        gt = GeetestLib(geetest_id_fullpage, geetest_key_fullpage)

        challenge = self.get_argument(gt.FN_CHALLENGE, "")
        validate = self.get_argument(gt.FN_VALIDATE, "")
        seccode = self.get_argument(gt.FN_SECCODE, "")
        result = gt.success_validate(challenge, validate, seccode, uid)

        result = result = {"status": "success"} if result else {"status": "fail"}
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.write(json.dumps(result))
