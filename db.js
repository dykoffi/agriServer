"use strict"
require('dotenv').config({path:'./data/.env'})

const { Sequelize } = require('sequelize')


let db = new Sequelize(process.env.DB_URL, { logging: false, define: { freezeTableName: true } });

(async () => {
    try {
        await db.authenticate()
        db.sync({ alter: true })
        console.log("Database connected ok")
    } catch (error) {
        console.log(error)
    }
})()

module.exports = db
