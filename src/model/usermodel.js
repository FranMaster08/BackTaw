const {userRepository} = require('../database/model')

module.exports = {

    getUsers: async () => {
        const users = await userRepository.find().exec()
        return users
    },
    createUser: async (user) => {
        const dataBaseUser = new userRepository(user)
        await dataBaseUser.save()
        return dataBaseUser
        
    },
    updateUser: async (user) => {
        return null
    },
    deleteUser: async (user) => {
        return null
    },
    findUser: async (user) => {
        return null
    }

}