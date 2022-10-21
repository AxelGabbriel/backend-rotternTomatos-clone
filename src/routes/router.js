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
router.put( '/modificar/:id_usuario',)
router.get('/buscar-usuario/:id_usuario',)
router.get('/buscar-nombre/:nombre',)

//registro y login
router.post('/registro',usuario.register)
router.post('/login', passportAuth)
router.get('/perfil',(req,res)=>{
    res.send('perfil')
})


//rutas de likes
router.get('/like/:id_reseña',like.buscar)
router.post('/like-crear',like.crear)
router.delete('/like-borrar/:id_reseña',like.borrar)

//rutas de comentarios
router.post('/comentario',)

//rutas de reseña
router.post('/reseña-crear',)
router.get('/reseña-buscar/:id_usuario',)
router.delete('/reseña-borrar/:id_reseña',)



module.exports = router