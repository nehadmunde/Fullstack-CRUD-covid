const express = require('express');
//const app = express();
var multipart = require('connect-multiparty');
const path = require('path')
var multipartMiddleware = multipart({ uploadDir: path.join(__dirname,"uploads") });
const fileRouter = express.Router();

const fileupload=(req,res)=>{
    res.send(req.body);
    res.status(200).send("Image Posted");
}

fileRouter.post('/fileUpload',multipartMiddleware,fileupload);
//in thunder http://localhost:9001/upload/fileUpload ==> post
//body ==> form ==> file ==> post

module.exports=fileRouter;