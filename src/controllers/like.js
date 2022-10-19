const like = {}
const bd = require('../database')

like.crear= (req,res)=>{
    try{
    bd.crearlike(req,res);
   
   
    }catch(e){
   
       console.log(e);
    }
      
      
   }

   like.crear= (req,res)=>{
    try{
    bd.crearlike(req,res);
   
   
    }catch(e){
   
       console.log(e);
    }
      
      
   }

   like.buscar= (req,res)=>{
    try{
    bd.buscarlike(req,res);
   
   
    }catch(e){
   
       console.log(e);
    }
      
      
   }

   like.borrar= (req,res)=>{
    try{
    bd.borrarlike(req,res);
   
   
    }catch(e){
   
       console.log(e);
    }
      
      
   }


module.exports= like