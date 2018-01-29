require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Router config
  */
  /*
  ** Headers of the page
  */
  head: {
    title: 'demo',
    meta: [{ charset: 'utf-8' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: 'https://unpkg.com/element-ui/lib/theme-default/index.css' }]
  },
  build: {
    extend: function extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /()/
        });
      }
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  vender: ['axios', 'mint-ui', './assets/js/base.js'],
  babel: {
    "plugins": [["component", [{
      "libraryName": "mint-ui",
      "style": true
    }]]],
    comments: true
  },
  plugins: [{ src: './plugins/mint-ui', ssr: true }, { src: './assets/js/base.js', ssr: false }],
  css: ['assets/main.css']
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users__ = __webpack_require__(6);




var router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// Add USERS Routes
router.use(__WEBPACK_IMPORTED_MODULE_1__users__["a" /* default */]);

/* harmony default export */ exports["a"] = router;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

//链接 mongoose nuxt集合
var mongoose = __webpack_require__(8);
var db = mongoose.createConnection('mongodb://localhost:27017/mynuxt');
//链接错误
db.on('error', function (err) {
    console.log(err);
});
//Schema 结构
var Schema = mongoose.Schema;
//表 nuxt
var nuxtlistScheMa = new Schema({
    name: String,
    choose: String
});
//表tishi
var tslistScheMa = new Schema({
    tishi: String
});
//关联 nuxtlist -> nuxt 表
exports.nuxtlist = db.model('nuxt', nuxtlistScheMa, 'nuxt');
//关联 tslistScheMa
exports.tslist = db.model('tishi', tslistScheMa, 'tishi');
exports.db = db;
console.log('数据库启动成功！！！！');

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_request__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db_nuxtserrver__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db_nuxtserrver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__db_nuxtserrver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mockjs__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mockjs__);




var Random = __WEBPACK_IMPORTED_MODULE_3_mockjs___default.a.Random;
var nuxtlist = __WEBPACK_IMPORTED_MODULE_2__db_nuxtserrver___default.a.nuxtlist;
var tslist = __WEBPACK_IMPORTED_MODULE_2__db_nuxtserrver___default.a.tslist;

var router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.get('/getmsg', function (req, res, next) {
  __WEBPACK_IMPORTED_MODULE_1_request___default()('http://127.0.0.1:3666/getall', function (error, response, body) {
    console.log('error:', error); // 返回错误信息
    console.log('statusCode:', response && response.statusCode); // 返回请求的状态码
    console.log('body:', body); // 返回回来的数据
    res.json(body);
  });
});

router.get('/gettitle', function (req, res, next) {
  var data2 = __WEBPACK_IMPORTED_MODULE_3_mockjs___default.a.mock({
    'choose': [{
      'name': '全部',
      'attr': 'all'
    }, {
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
  res.json(data2);
  // console.log(data2)
});

router.get('/getclass', function (req, res, next) {
  var data = __WEBPACK_IMPORTED_MODULE_3_mockjs___default.a.mock({
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
  });
  res.json(data);
  // console.log(data)
});

/* harmony default export */ exports["a"] = router;

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("mockjs");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("request");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_express_helloworld_mynuxt_node_modules_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_express_helloworld_mynuxt_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_F_express_helloworld_mynuxt_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(2);


// Start nuxt.js
var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_F_express_helloworld_mynuxt_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
    var config, nuxt;
    return __WEBPACK_IMPORTED_MODULE_0_F_express_helloworld_mynuxt_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Import and Set Nuxt.js options
            config = __webpack_require__(1);

            config.dev = !("development" === 'production');
            // Instanciate nuxt.js
            _context.next = 4;
            return new __WEBPACK_IMPORTED_MODULE_1_nuxt___default.a(config);

          case 4:
            nuxt = _context.sent;

            // Add nuxt.js middleware
            app.use(nuxt.render);
            // Build in development

            if (!config.dev) {
              _context.next = 16;
              break;
            }

            _context.prev = 7;
            _context.next = 10;
            return nuxt.build();

          case 10:
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](7);

            console.error(_context.t0); // eslint-disable-line no-console
            process.exit(1);

          case 16:
            // Listen the server
            app.listen(3222, host);
            console.log('Server listening on 192.168.79.12:3222'); // eslint-disable-line no-console

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[7, 12]]);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






var app = __WEBPACK_IMPORTED_MODULE_2_express___default()();
console.log('22222222222222222:', process);
var host = process.env.HOST;
var port = process.env.PORT || 3000;

app.set('port', port);

// Import API Routes
app.use('/api', __WEBPACK_IMPORTED_MODULE_3__api__["a" /* default */]);

start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map