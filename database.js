const mongoose = require("mongoose");

class Database {

    constructor(){
        this.connect();
    }


    connect() {
        mongoose.connect("mongodb+srv://CAN:Bu5hhe3oTfYfYxtR@cluster0.2vpfzmf.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log("database connection successful");
        })
        .catch((err) => {
            console.log("database connection error" + err);
        }) 
    }
}

module.exports = new Database();
