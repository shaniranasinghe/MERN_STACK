const mongoose = require("mongoose");

const dburl = "mongodb+srv://shaniranasinghe20:Shani12345@cluster0.rcyvgwu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", true, "useUnifiedTopology", true);

const connection = async () => {
    try {
        await mongoose.connect(dburl);
            await mongoose.connect(dburl);        
            console.log("MongoDB connected");
        } catch (e) {
            console.error(e.message);
            process.exit();
        }
    };

    module.exports = connection;