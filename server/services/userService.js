const boom = require('@hapi/boom');
const getConnection = requiere('../libs/postgres');

const pool = requiere('../libs/sequelize');

class UserServices {

constructor(){
this.products = [];

this.pool = pool;
this.poll.on('error', (err) => console.log(err));

}

async generate(data){

  return data

}
async create(data) {

}

// async find() {
// const client = await getConnection();
// const rta = client.query('SELECT * FROM tasks');
// return trace.rows;
// }

async find() {

const query = 'SELECT * FROM tasks';
const [data] = await this.pool.query(query);

return data;
}

async findOne() {


}

async update(){


}

async delete(){



}


}

module.exports = UserServices;
