import mongoose from "mongoose";

const DB_CONNECTION_URL =
  "mongodb+srv://user:user@cluster0.cjkjw.mongodb.net/WhatsAppDB?retryWrites=true&w=majority";

const connectDB = () => {
    console.log("DB trying to connect on " + new Date());
    const options = {
        keepAlive: 1,
        maxPoolSize: 10,
        useNewUrlParser: true,
        autoReconnect: true,
        useUnifiedTopology: true,
    };
    return mongoose.connect(DB_CONNECTION_URL, options);
};

export default connectDB;