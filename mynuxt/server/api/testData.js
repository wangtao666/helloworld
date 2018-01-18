import { Router } from 'express'

var router = Router()
// index router
  //老师信息
router.get('/goods', function (req, res, next) {
  var obj = {
    'goods': [{
      'name': '全友家居标题全友家居标题全友家居标题全友家居标题全友家居标题',
      'money1': '520',
      'money2': '440',
      'money3': '520'
    }, {
      'name': '全友家居标题全友家居标题全友家居标题全友家居标题全友家居标题',
      'money1': '520',
      'money2': '440',
      'money3': '520'
    }, {
      'name': '全友家居标题全友家居标题全友家居标题全友家居标题全友家居标题',
      'money1': '520',
      'money2': '440',
      'money3': '520'
    }, {
      'name': '全友家居标题全友家居标题全友家居标题全友家居标题全友家居标题',
      'money1': '520',
      'money2': '440',
      'money3': '520'
    }, {
      'name': '全友家居标题全友家居标题全友家居标题全友家居标题全友家居标题',
      'money1': '520',
      'money2': '440',
      'money3': '520'
    }]
  };
  res.json(obj)
});

export default router
