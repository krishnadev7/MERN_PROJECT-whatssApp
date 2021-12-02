 import App from "express";
import configureExpressApp from "./config";
import connectDB from "./dbConnection";
import applyRoutes from "./routes";

const app = new App();
configureExpressApp(app);

 const PORT = 3001;

 const startServer = () => {
     Promise.all([connectDB()]).then(() => {
         app.listen(PORT);
         console.log(`Server started on port ${PORT}`);
         applyRoutes(app);
     });
 };

 startServer();