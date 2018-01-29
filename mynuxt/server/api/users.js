import { Router } from 'express'
import request from 'request'
import nuxtSchema from '../../db/nuxtserrver'
import Mock from 'mockjs'
let Random = Mock.Random
let nuxtlist = nuxtSchema.nuxtlist
let tslist = nuxtSchema.tslist

let router = Router()

router.get('/getmsg', (req, res, next) => {
  request('http://127.0.0.1:3666/getall', function (error, response, body) {
    console.log('error:', error) // 返回错误信息
    console.log('statusCode:', response && response.statusCode) // 返回请求的状态码
    console.log('body:', body) // 返回回来的数据
    res.json(body)
  });
})

router.get('/gettitle', (req, res, next) => {
  let data2 = Mock.mock({
    'choose': [{
      'name': '全部',
      'attr': 'all'
    },{
      'name': '厨房',
      'attr': 'cf'
    }, {
      'name': '餐厅',
      'attr': 'ct'
    }, {
      'name': '阳台/卫生间',
      'attr': 'yt'
    }, {
      'name': '浴室',
      'attr': 'ys'
    }, {
      'name': '儿童房',
      'attr': 'et'
    }, {
      'name': '书房',
      'attr': 'sf'
    }]
  });
  res.json(data2)
  // console.log(data2)
})

router.get('/getclass', (req, res, next) => {
  let data = Mock.mock({
    'all|1-10': [{
      'title': Random.ctitle(3, 30),
      'userId|+1': 71,
      'id|+1': 1,
      'body|+1': 1,
      'url': Random.image('180x180', Random.color(), '#FFF', 'png', 'heheda')
    }],
    'cf|1-10': [{
      'title': Random.ctitle(3, 30),
      'userId|+1': 1,
      'id|+1': 1,
      'body|+1': 1,
      'url': Random.image('180x180', Random.color(), '#FFF', 'png', 'heheda')
    }],
    'ct|1-10': [{
      'title': Random.ctitle(3, 30),
      'userId|+1': 11,
      'id|+1': 12,
      'body|+1': 13,
      'url': Random.image('180x180', Random.color(), '#FFF', 'png', 'heheda')
    }],
    'yt|1-10': [{
      'title': Random.ctitle(3, 30),
      'userId|+1': 21,
      'id|+1': 22,
      'body|+1': 23,
      'url': Random.image('180x180', Random.color(), '#FFF', 'png', 'heheda')
    }],
    'ys|1-10': [{
      'title': Random.ctitle(3, 30),
      'userId|+1': 31,
      'id|+1': 32,
      'body|+1': 33,
      'url': Random.image('180x180', Random.color(), '#FFF', 'png', 'heheda')
    }],
    'et|1-10': [{
      'title': Random.ctitle(3, 30),
      'userId|+1': 41,
      'id|+1': 42,
      'body|+1': 43,
      'url': Random.image('180x180', Random.color(), '#FFF', 'png', 'heheda')
    }],
    'sf|1-10': [{
      'title': Random.ctitle(3, 30),
      'userId|+1': 51,
      'id|+1': 52,
      'body|+1': 53,
      'url': Random.image('180x180', Random.color(), '#FFF', 'png', 'heheda')
    }],
    'content': Random.paragraph()
  })
  res.json(data)
  // console.log(data)
})

export default router
