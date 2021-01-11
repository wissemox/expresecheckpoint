/*import Express from "express"
import products from './products.js'
const app = Express(); 
//get put , post , delete 
app.get("/Products/:id",(req,res)=>{
  res.json(products.find(()=>{
    return +req.params.id === products.id
  }))
 //res.send(req.params)
  //res.json(Products)
})
app.listen(500)*/

import express from 'express' 
import path from 'path'
import { send } from 'process'
var ahmed = true 
var d = new Date()
var f = d.getDay()
var n = d.getHours()
console.log(f)
console.log(n)
const app = express()
app.set('view engine', 'pug');
 app.use('/static',express.static('public'))
app.use(logger)
//home
app.get('/',(req,rep)=>{
  
  rep.render('index',{
    title:"wissem"
  })
  
})
///use router
app.get('/Contact',(req,rep)=>{
  rep.render('index02')
  console.log("hello")
  
})
app.get('/services',(req,rep)=>{
  rep.render('index03')
  console.log("hello")
  
})
app.use(logger)

function logger(req,rep,next) { 
console.log("wissem")
if(n>=9 && n<=15 && f>=2 && f<=4){
  next()
} 
else{
  rep.send("OpenMonday to Friday,  from 9 to 17")
}

  /*if(ahmed==='true'){
    next()
  } else{
    rep.send('No auth')
  }*/

}
app.listen(3000)

