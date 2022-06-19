const express=require('express');
const cors=require('cors');
//var multipart = require('connect-multipart')
const fileRouter = require('./router/fileUploadRouter');
const connectDB=require('./db/connectDB');
const web=require('./router/web');
const port=process.env.PORT || 9001
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017"
const app=express();

app.use('/upload',fileRouter)
app.use(express.static('./router/uploads'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

connectDB(DATABASE_URL);

app.use('/covid_patient',web);
//app.use("/file",fileuploadrouter);


app.listen(port,()=>{
    console.log(`App listning at port http://localhost:${port}`);
})