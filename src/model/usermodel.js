const { throws } = require('assert/strict')
const db = require('../database/models')

module.exports = {

    getUsers: async () => {
        const users =await db.User.findAll()
        return users
    },
    createUser: async (user) => {
        const result = await db.User.create(user)
        if(!result) throw 'No se pudo insertar'
        return true
    },
    updateUser: async (user) => {
        return 'Actualizar los users'
    },
    deleteUser: async (user) => {
        return 'borrar el user'
    },
    findUser: async (user) => {
        return 'Buscar los users'
    }

}