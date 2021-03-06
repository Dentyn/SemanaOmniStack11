const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;    
    
        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();
        if (!ong){
            return response.status(400).json({ error: 'No ONG found witn this ID'})
        }
        return response.json(ong);
    }
};



// const connection = require("../database/connection");

// module.exports = {

//   async create(request, response) {
//     const {id} = request.body;
//     const ong = await connection("ongs").where("id", id).select("name").first();
//     if (!ong) {
//       return response.status(400).json({error: "No ONG found with this identifier."}); // Status 400 = Bad request.
//     }
//       return response.json({ong});
//   }

// }