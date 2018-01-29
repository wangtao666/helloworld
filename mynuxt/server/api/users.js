import { Router } from 'express'
import request from 'request'

var router = Router()

router.get('/getmsg', (req, res, next) => {
  request('http://127.0.0.1:3666/getall', function (error, response, body) {
    console.log('error:', error); // 返回错误信息
    console.log('statusCode:', response && response.statusCode); // 返回请求的状态码
    console.log('body:', body); // 返回回来的数据
    // let data2 = [{
    //     'type':'system',
    //     'head':'/images/head.jpg',
    //     'time':'2017-09-22 10:30:00',
    //     'title':'以‘白日梦’为主题展开联想，10万元基金共你风向基金共你风向！',
    //     'tip':'以‘白日梦’为主题展开联想，10万元基金共你风向基金共你风向！以‘白日梦’为主题展开联想。'
    // }]
    res.json(body)
  });
})

export default router
