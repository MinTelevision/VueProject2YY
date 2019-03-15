var express = require('express');
var router = express.Router();
var db=require('../libs/base.js');
var multer = require("multer");
var token = require("../libs/token.js");

var storage = multer.diskStorage({
  //设置上传后文件路径，uploads文件夹会自动创建。
  destination: function (req, file, cb) {
    console.log(1)
    cb(null, './uploads')
  },
  //给上传文件重命名，获取添加后缀名
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    //给图片加上时间戳格式防止重名名
    //比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
    cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
});
var upload = multer({
  storage: storage
});
router.post('/upload', upload.single('touxiang'), function (req, res, next) {
  console.log(req.file)
  res.json({
    status: "success",
    file: req.file
  });
});

router.post('/login', async (req, res) => {
  let data;
  let {user,password} = req.body;
  try {
      data = await db.find('user',{user,password});
      if (data.data[0].password === password) {
        res.send({
          status: "success",
          token: token.createToken({
            user,
            password
          }, 3600)
        });
      } 
  } catch (err) {
      data = err;
      res.send({
        status: "fail"
      });
  }
  
});

router.post('/register', async (req, res) => {
  let data;
  let {user,password} = req.body;
  try {
      data = await db.insert('user',{user,password});
  } catch (err) {
      data = err;
  }
  res.send(data);
});

router.post('/autoLogin', async (req, res, next) => {
  let {user,password} = token.decodeToken(req.body.token).payload.data;
  let data = await db.find("user", { user,password});
  res.send({
    username:data.data[0].user,
    status: token.checkToken(req.body.token),
  })
})

module.exports = router;