const coment = {}
const bd = require('../database')

coment.crear= (req,res)=>{
    try{bd.comentarios(req,res);}catch(e){console.log(e); }    
}

coment.borrar= (req,res)=>{
    try{bd.borrarcomentario(req,res);}catch(e){console.log(e); }    
}
coment.buscar= (req,res)=>{
    try{bd.buscarcomentario(req,res);}catch(e){console.log(e); }    
}



module.exports= coment