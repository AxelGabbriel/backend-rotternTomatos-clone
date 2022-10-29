const express= require('express')
const router = express.Router()
const usuario = require('../controllers/usuario')
//const room= require('../controllers/room')
//const puntaje=require('../controllers/puntaje')
//const passport=require('passport')
const  {passportAuth}  = require('../middlewares')
const like = require('../controllers/like')
const coment = require('../controllers/comentario')
const reseña = require('../controllers/reseña')




//rutas usuario
router.put( '/modificar',usuario.editar)
router.get('/buscar-usuario/:id_usuario',usuario.buscarid)
router.get('/buscar-nombre/:username',usuario.buscarnombre)

//registro y login
router.post('/registro',usuario.register)
router.post('/login', passportAuth)
router.get('/perfil',(req,res)=>{
    res.send('perfil')
})


//rutas de likes
router.get('/like/:id_resena',like.buscar)
router.post('/like-crear',like.crear)
router.delete('/like-borrar/:id_reseña',like.borrar)



//rutas de reseña
router.post('/resena-crear',reseña.crear)
router.get('/resena-buscar/:username',reseña.buscar)
router.get('/resena-id/:id_resena',reseña.buscarid)
router.delete('/resena-borrar/:id_resena',reseña.borrar)
router.put('/resena-editar',reseña.editar)
router.get('/resena-peli/:pelicula',reseña.buscarpeli)
router.get('/promedio/:pelicula',reseña.promedio)

//rutas de comentario
router.post('/comentario-crear',coment.crear)
router.get('/comentario-buscar/:id_resena',coment.buscar)
router.delete('/comentario-borrar/:id_comentario',coment.borrar)

module.exports = router