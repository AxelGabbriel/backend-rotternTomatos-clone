const reseña = {}
const bd = require('../database')

reseña.crear= (req,res)=>{
    try{bd.crearreseña(req,res);}catch(e){console.log(e); }    
}
reseña.editar= (req,res)=>{
    try{bd.editarreseña(req,res);}catch(e){console.log(e); }    
}
reseña.borrar= (req,res)=>{
    try{bd.borrarreseña(req,res);}catch(e){console.log(e); }    
}
reseña.buscar= (req,res)=>{
    try{bd.buscaridreseña(req,res);}catch(e){console.log(e); }    
}

reseña.buscarpeli= (req,res)=>{
    try{bd.buscarpelicularesena(req,res);}catch(e){console.log(e); }    
}
reseña.buscarid= (req,res)=>{
    try{bd.buscaridreseña2(req,res);}catch(e){console.log(e); }    
}

module.exports= reseña