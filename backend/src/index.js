/*
* rota / recurso --'/users',--

******
***Metodo HTTP***
*GET:Busca/listar um informacao no backend
*POST:Criar uam informacao no back-end//criacao de um recurso
*PUT:Altera uam informacao no back-end
*DELETE:Deletar uma informacao no back-end
*
*
*Tipos de parametros
*
*Query Params : Parametro nomeados enviados na rota aops " ? " (Filtros e paginacao) 
*Route Params : Parametros utilizados para indetificar recurso//---app.get('/users/:id',(request,Response) =>-- {identificar um unico recurso
*Requery Body : Corpo da requisicao, utilizado para criar ou alterar recursos 
*

*app.get('/users/:id',(request,Response) => { //const  id = request.params;//nesse caso estaria buscando um id especifico
    //const id = request.query;
    //const params = request.params;
*///app.get('/users',(request,Response) => {//busca o conjunto todo,ou seja, todos os paramentros//Response--> responsavel por retorna uma resposta para o usuario
/*

*********Esse bagulho todo foi copiado para o arquivo de routes.js na pasta src **********
app.post('/users',(request,Response) => {
    const body = request.body;
    console.log(body); 
    return Response.json({
        event : 'Semana Omnistack 11.0',
        Aluno : 'Jefferson Augusto Nunes Damasceno'
    });
})
*/
const cors = requere('cors');
const express = require('express');
const routes = require('./routes');//caminho relativo do arquivo ('../routes')--> nesse caso estaria voltando uma pastas//const routes = require('routes')--> nesse caso estaria achando que o routes seria um pacote
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
