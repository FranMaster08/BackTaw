const mongoose = require("mongoose");
require("dotenv").config()
const ConnectionDb = function () {
  this.connect = async () => {
    try {
      await mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.glm3d.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
      );
      mongoose.set("debug", true);
      console.log(` Base de datos activa`)
    } catch (error) {
      console.error(
        `Ocurrio un error en la conexion a la base. : ${error.message}`
      );
    }
  };
};
module.exports = new ConnectionDb ();