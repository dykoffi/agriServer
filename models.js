const db = require("./db.js")
const { DataTypes } = require("sequelize")

let models = {
    light : db.define("light",{
        data : DataTypes.FLOAT
    }),
    moisureA : db.define("moisureA",{
        data : DataTypes.FLOAT
    }),
    moisureS : db.define("moisureS",{
        data : DataTypes.FLOAT
    }),
    temperature : db.define("temperature",{
        data : DataTypes.FLOAT
    })

}

module.exports = models