const crypto = require('crypto');
const connection = require('../database/connection');



module.exports = {
    async index(request , response) {//listagem de todos os dados de uma tabela
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request , response){
        const {name, email,whatsapp, city, uf}  = request.body;

        const id = crypto.randomBytes(4).toString('HEX');//cria um criptografia para os ip cadastrado

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,   
    })
    return response.json({ id });
    }
};