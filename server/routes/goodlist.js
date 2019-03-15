var express = require('express');
var router = express.Router();
var db=require('../libs/base.js');
var Token = require("../libs/token.js");

//查询全部 phone表
router.get('/findAll',async (req,res)=>{
    let data;
    try{
        data=await db.find('phone',{},0);
    }catch(err){
        data=err;
    }
    res.send(data);
});
//查询全部order表
router.get('/findorder',async (req,res)=>{
    let data;
    try{
        data=await db.find('order',{},0);
    }catch(err){
        data=err;
    }
    res.send(data);
});

//添加购物车
router.get('/insertorder',async (req,res)=>{
    let data;
    let {guid,num,token}=req.query;

     let {user,password} = Token.decodeToken(req.query.token).payload.data;
     let d=await db.find('order',{guid,user});
     
          
     if(d.data.length!=0){
        let currentNum=parseInt(d.data[0].num);
        console.log(d.data[0].num);
        
                         
        data=await db.update('order',{guid,user},{num:currentNum+parseInt(num)});
     }else{   
         try{
        
            data=await db.insert('order',{guid,num,user});
        }catch(err){
            data=err;
        }
     }
    
   
    res.send(data);
});

//通过type查询phone
router.get('/guid',async (req,res)=>{
    let data;

    try{
        data=await db.find('phone',{guid:req.query.guid});
             
    }catch(err){
        data=err;
    }
    res.send(data);
});

//通过guid查询phone
router.get('/type',async (req,res)=>{
    let data;

    try{
        data=await db.find('phone',{type:req.query.type});
             
    }catch(err){
        data=err;
    }
    res.send(data);
});

//前端返回数组查询
router.get('/type',async (req,res)=>{
    let data;

    try{
        data=await db.find('phone',{type:req.query.type});
             
    }catch(err){
        data=err;
    }
    res.send(data);
});

//通过user查询购物车
router.get('/findCart',async (req,res)=>{
    let data;
    let {user,password} = Token.decodeToken(req.query.token).payload.data;
    try{
        data=await db.find('order',{user});
             
    }catch(err){
        data=err;
    }
    res.send(data);
});





module.exports = router;
