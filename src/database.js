const {Pool}= require('pg');
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
     bio,
     correo,
     nombre,                             
     contraseña,
     verificarclave
      }= req.body;
      
      if(contraseña===verificarclave){

     const passwordencriptado = await helpers.encryptPassword(contraseña)
      const result= await pool.query('INSERT INTO usuario(username,bio,correo,nombre,contraseña) VALUES($1,$2,$3,$4,$5)', [
     username,bio,correo,nombre,passwordencriptado ])
      console.log(result)
      res.json(result.rows)

      }else{
        res.json('contraseñas no compatibles')
      }
    }

    //crear like funcion
    const crearlike=async (req,res)=>{
      const {like_id,id_resena} = req.body
      const response = await pool.query('INSERT INTO liked(like_id,id_resena) VALUES($1,$2)',[
          like_id,id_resena])
        console.log(response);
        res.json(response.rows)
   }

   //funcion buscar like
   const buscarlike=async(req,res)=>{
    const id_resena=req.params.id_resena
    const response= await pool.query('SELECT * FROM liked WHERE id_resena=$1',[id_resena])
    console.log(response)
    res.json(response.rowcount);
}
    //borrar like 
    const borrarlike= async(req,res)=>{
      const id_resena =req.params.id_resena
      const response=await pool.query('DELETE FROM liked WHERE id_resena=$1',[id_resena])
      console.log(response);
      res.json(response.rows)
  
  } 
    //rutas usuario busqueda y demas
    
   const buscarnombreusuario= async(req,res)=>{
   const nombre =req.params.nombre
   const response=await pool.query('SELECT* FROM usuario WHERE  nombre=$1',[nombre])
   console.log(response);
   res.json(response.rows)
} 
   const buscaridusuario= async(req,res)=>{
   const id_usuario =req.params.id_usuario
   const response=await pool.query('SELECT* FROM usuario WHERE  id_usuario=$1',[id_usuario])
   console.log(response);
   res.json(response.rows)
  }   

  const editarusuario=async(req,res)=>{
    
    const {username,bio,correo,nombre,contraseña, id_usuario}= req.body
    const response= await pool.query('UPDATE usuario SET username= $1 ,bio=$2, correo=$3 ,nombre=$4,contraseña=$5 WHERE id_usuario=$6',[
        username,bio,correo,nombre,contraseña, id_usuario
    ])

    console.log(response)
    res.json(response.rows)
}
 //rutas reseña
const crearreseña= async(req,res)=>{
    
  const  { 
       id_usuario,
       pelicula,
       contenido,
       fecha,
       puntaje
        }= req.body;

        const result= await pool.query('INSERT INTO resena(id_usuario,pelicula,contenido,fecha,puntaje) VALUES($1,$2,$3,$4,$5)', [
       id_usuario,pelicula,contenido,fecha,puntaje ])
        console.log(result)
        res.json(result.rows)
  
        
      }

      const buscaridreseña= async(req,res)=>{
        const id_resena =req.params.id_resena
        const response=await pool.query('SELECT* FROM resena WHERE  id_resena=$1',[id_resena])
        console.log(response);
        res.json(response.rows)
       }   


       const borrarreseña= async(req,res)=>{
        const id_resena =req.params.id_resena
        const response=await pool.query('DELETE FROM resena WHERE id_resena=$1',[id_resena])
        console.log(response);
        res.json(response.rows)
    
    } 

    const editarreseña=async(req,res)=>{
    
      const {pelicula,contenido,fecha,puntaje}= req.body
      const response= await pool.query('UPDATE resena SET pelicula= $1 ,contenido=$2, fecha=$3 ,puntaje=$4',[
          pelicula,contenido,fecha,puntaje
      ])
  
      console.log(response)
      res.json(response.rows)
  }
      //rutas comentario
      const comentario= async(req,res)=>{
    
        const  { 
                id_comentario,
                fecha,
                comentario,
                 id_usuario
             
              }= req.body;
      
              const result= await pool.query('INSERT INTO comentario(id_comentario,fecha,comentario,id_usuario) VALUES($1,$2,$3,$4)', [
             id_comentario,fecha,comentario,id_usuario ])
              console.log(result)
              res.json(result.rows)
        
              
            }

            const buscarcomentario= async(req,res)=>{
              const id_comentario =req.params.id_comentario
              const response=await pool.query('SELECT* FROM comentario WHERE  id_comentario=$1',[id_comentario])
              console.log(response);
              res.json(response.rows)
             }  

             const borrarcomentario= async(req,res)=>{
              const id_comentario =req.params.id_comentario
              const response=await pool.query('DELETE FROM comentario WHERE id_comentario=$1',[id_comentario])
              console.log(response);
              res.json(response.rows)
          
          } 

       //funcion para buscar reseñas de una pelicula
       const buscarpelicularesena= async(req,res)=>{
        const pelicula =req.params.pelicula
        const response=await pool.query('SELECT* FROM resena WHERE pelicula=$1',[pelicula])
        console.log(response);
        res.json(response.rows)
       }   





    module.exports={
         crearusuario,
        crearlike,buscarlike,borrarlike,
        buscarnombreusuario, buscaridusuario,editarusuario,
        crearreseña, buscaridreseña,borrarreseña,editarreseña,buscarpelicularesena,
        comentario,buscarcomentario,borrarcomentario

     }