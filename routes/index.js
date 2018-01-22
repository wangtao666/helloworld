var nuxtSchema = require('../db/nuxtserrver');
var nuxtlist = nuxtSchema.nuxtlist;
var tslist = nuxtSchema.tslist;
var Mock = require('mockjs');
var Random = Mock.Random;

var data = Mock.mock({
    'list|1-10': [{
        'choose|+1': 1
    }]
});


/* GET home page. */
module.exports = function(app) {
    app.get('/', function (req, res) {
        nuxtlist.find({},function (err, doc) {
            console.log('12312312321:',doc[0].choose);
            res.render('index', { title: doc });
        });
    });

    app.get('/getall', function (req, res) {
        nuxtlist.find({}, function (err, doc) {
            console.log('我在getall查询接口！！');
            res.send(doc)
        })
    });

    //获得图片的地址(mockjs)
    app.get('/geturl', function (req, res) {
        var url = [];
        var timeId = setInterval(function () {
            var aa = Random.image('750x750', Random.color(), '#FFF', 'png', 'heheda');
            url.push({'url': aa});
            if(url.length > 10){
                clearInterval(timeId);
                //第一个参数是数据  第二个不知道  第三个代表缩进多少
                url = JSON.stringify(url, null, 1);
                console.log('我要发送图片地址了！！')
                res.send(url)
            }
        },50);
    });
    //获得文字(mockjs)
    app.get('/gettext', function (req, res) {
       var istext = Random.ctitle(3, 30);
        res.send(istext);
    });

    app.get('/getts', function (req, res) {
        tslist.find({}, function (err, doc) {
            console.log('我在查询消息列表接口！！');
            res.send(doc)
        })
    })

    app.post('/home2', function (req, res) {
        console.log('user:', req.body.user,'password:', req.body.password)
        var query = {
            user: req.body.user,
            password: req.body.password
        };
        nuxtlist.count(query,function (err,doc) {
            console.log('doc:',doc);
            if(doc){
                nuxtlist.find(query,function (err,docs) {
                    // res.render('home',{
                    //     data: doc,
                    //     datas: docs,
                    //     title: 'goods'
                    // });
                    /**设置响应头允许ajax跨域访问**/
                    res.setHeader("Access-Control-Allow-Origin","*");
                    /*星号表示所有的异域请求都可以接受，*/
                    res.setHeader("Access-Control-Allow-Methods","GET,POST");
                    res.send(docs)
                })
            }else{
                res.render('home',{
                    data: doc,
                    title: 'home'
                })
            }
        });
    });
};
