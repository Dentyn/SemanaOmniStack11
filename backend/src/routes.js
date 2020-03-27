// const express = require ('express');

// const OngController = require('./controllers/OngController');
// const IncidentController = require('./controllers/IncidentController');
// const ProfileController = require('./controllers/ProfileController')
// const SessionController = require('./controllers/SessionController')


// const routes = express.Router();

//             /*Rota de listagem*/

// // routes.get('/ongs',async(request , response) =>{
// //     const ongs = await connection('ongs').select('*');
// //     return response.json(ongs);
// // });
//             /* os codigo **get** de cima e' copiado para um outro arquivo OngController.js 
//              a linha debaixo tem como finalidade fazer o link para o arquivo o mesmo acontece acontece com a funcao post ,ou seja, as funcao existem apenas mudou de endereco*/
// routes.get('/ongs', OngController.index);
// routes.post('/ongs', OngController.create);

// routes.post('/sessions',SessionController.create);


// routes.get('/profile',ProfileController.index);


// routes.get('/incidents',IncidentController.index);
// routes.post('/incidents',IncidentController.create);//"criando" uma nova rota 
// routes.delete('/incidents/:id', IncidentController.delete);
// module.exports = routes;


// // const express = require("express");
// // const OngController = require("./controllers/OngController");
// // const IncidentController = require("./controllers/IncidentController");
// // const ProfileController = require("./controllers/ProfileController");
// // const SessionController = require("./controllers/SessionController");

// // const routes = express.Router();

// // routes.post("/sessions", SessionController.create);

// // routes.post("/ongs", OngController.create);
// // routes.get("/ongs", OngController.index);

// // routes.get("/profile", ProfileController.index);

// // routes.post("/incidents", IncidentController.create);
// // routes.get("/incidents", IncidentController.index);
// // routes.delete("/incidents/:id", IncidentController.delete);


// // module.exports = routes;


const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");

const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
const routes = express.Router();

routes.get("/ongs", OngController.index);

routes.post("/ongs", OngController.create);
routes.post("/incidents", IncidentController.create);
routes.post("/sessions", SessionController.create);
routes.get("/incidents", IncidentController.index);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/profile", ProfileController.index);

module.exports = routes;