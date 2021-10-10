const db = require('../database/models')

module.exports = {

    getUsers: async () => {
        const users =await db.User.findAll()
        return users
    },
    createUser: async (user) => {
        return 'Creando los users'
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