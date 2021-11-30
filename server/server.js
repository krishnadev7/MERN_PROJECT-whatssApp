 import App from "express";
import connectDB from "./dbConnection";
 const app = new App();

 const PORT = 3001;

 const startServer = () => {
     Promise.all([connectDB()]).then(() => {
         app.listen(PORT);
         console.log(`Server started on port ${PORT}`);
     });
 };

 startServer();