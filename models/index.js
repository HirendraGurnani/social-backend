const mongoose = require("mongoose");
const uri = "mongodb+srv://ghiren20:ghiren20@socialapp.wsp5oh4.mongodb.net/?retryWrites=true&w=majority&appName=SocialApp";


function main() {
    // try { 
    //     mongoose.set("strictQuery", false);

    //     const x = mongoose.connect(uri);
    //     console.log("Connected", x);
    // }
    // catch (error) {
    //     console.log("ERROR: ", error);
    // }
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };