const express = require('express');
const router = express.Router();

router.post('/usuarios', (req, res)=>{
    res.json({status: 'criei usuário'})
});

router.get('/usuarios', (req, res)=>{
    res.json({status: 'Listei usuários'})
});

router.get('/usuarios/:id', (req, res)=>{
    res.json({status: 'busquei um usuário'})
});


router.put('/usuarios/:id', (req, res)=>{
    res.json({status: 'atualizei um usuário'})
});

router.delete('/usuarios/:id', (req, res)=>{
    res.json({status: 'deletei'})
});

module.exports = router;