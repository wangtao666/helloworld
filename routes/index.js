var nuxtSchema = require('../db/nuxtserrver');
var nuxtlist = nuxtSchema.nuxtlist;
var tslist = nuxtSchema.tslist;
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
