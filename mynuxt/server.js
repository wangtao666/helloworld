const Nuxt = require('nuxt')
const app = require('express')()
// const port = process.env.PORT || 3222

// 传入配置初始化 Nuxt.js 实例
let config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// 在开发模式下进行编译
if (config.dev) {
  nuxt.build()
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

// 监听指定端口
app.listen(3222, function () {
  console.log('启动成功！！！http://localhost:3222/')
});
