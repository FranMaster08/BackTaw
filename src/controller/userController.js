const { userModel } = require('../model')

const userController = {

    getUsers: async (req, res, next) => {
        try {
            const result = await userModel.getUsers()
            res.status(200).json(result)
        } catch (error) {
            next(error);
        }

    },
    createUser: async (req, res, next) => {
        try {
            const result = await userModel.createUser(req.body)
            res.status(200).json(result)
        } catch (error) {
            next(error);
        }

    },
    updateUser: async (req, res, next) => {
        try {
            const result = await userModel.updateUser(req.body,id)
            res.status(200).json(result)
        } catch (error) {
            next(error);
        }

    },
    deleteUser: async (req, res, next) => {
        try {
            const result = await userModel.deleteUser(id)
            res.status(200).json(result)
        } catch (error) {
            next(error);
        }

    },
    findUser: async (req, res, next) => {
        try {
            const result = await userModel.findUser()
        } catch (error) {
            next(error);
        }

    }



}

module.exports = userController