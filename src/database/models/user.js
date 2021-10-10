

module.exports = (sequelize, datatypes) => {

    const alias = 'User'
    const col = {
        id: {
            type: datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: datatypes.STRING,
        },
        last_name: {
            type: datatypes.STRING,
        },
        direction: {
            type: datatypes.STRING,
        },
        birth_date: {
            type: datatypes.DATE,
        },
    }
    const config = {
        tableName: 'users',
        timestamps: false,
    }

    const user = sequelize.define(alias, col, config)
    return user
}