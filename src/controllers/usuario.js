const usuario = {}
const bd = require('../database')



usuario.register= (req,res)=>{
    try{
    bd.crearusuario(req,res);
   
   
    }catch(e){
   
       console.log(e);
    }
      
      
   }

   usuario.buscarid= (req,res)=>{
      try{
      bd.buscaridusuario(req,res);
     
     
      }catch(e){
     
         console.log(e);
      }
        
        
     }

     usuario.buscarnombre= (req,res)=>{
      try{
      bd.buscarnombreusuario(req,res);
     
     
      }catch(e){
     
         console.log(e);
      }
        
        
     }

     usuario.editar= (req,res)=>{
      try{
      bd.editarusuario(req,res);
     
     
      }catch(e){
     
         console.log(e);
      }
        
        
     }

   module.exports = usuario