const {Pool}= require('pg');
const like = require('./controllers/like');
const helpers= require('./helpers')
const config={
    
  connectionString: process.env.DATABASE_URL,
  max:500,
  min:100,
  ssl:{rejectUnauthorized:false}

  
};

const pool = new Pool(config);

//funcion de crear usuario para registro
const crearusuario= async(req,res)=>{
    
const  { 
     username,
     correo,
     nombre,                             
     contraseña,
     verificarclave
      }= req.body;
      
      if(contraseña===verificarclave){

     const passwordencriptado = await helpers.encryptPassword(contraseña)
      const result= await pool.query('INSERT INTO usuario(username,correo,nombre,contraseña) VALUES($1,$2,$3,$4)', [
     username,correo,nombre,passwordencriptado ])
      console.log(result)
      res.json(result.rows)

      }else{
        res.json('contraseñas no compatibles')
      }
    }

    //crear like funcion
    const crearlike=async (req,res)=>{
      const {like_id,id_reseña} = req.body
      const response = await pool.query('INSERT INTO liked(like_id,id_reseña) VALUES($1,$2)',[
          like_id,id_reseña])
        console.log(response);
        res.json(response.rows)
   }

   //funcion buscar like
   const buscarlike=async(req,res)=>{
    const id_reseña=req.params.id_reseña
    const response= await pool.query('SELECT * FROM liked WHERE id_reseña=$1',[id_reseña])
    console.log(response)
    res.json(response.rowcount);
}
    //borrar like 
    const borrarlike= async(req,res)=>{
      const id_reseña =req.params.id_reseña
      const response=await pool.query('DELETE FROM liked WHERE id_reseña=$1',[id_reseña])
      console.log(response);
      res.json(response.rows)
  
  } 


    module.exports={
         crearusuario,
        crearlike,
        buscarlike,
        borrarlike
        
     }