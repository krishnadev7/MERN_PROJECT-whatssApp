 import * as Controller from "../app/controllers";

 const applyRoutes = (app) => {
   app.get("/", (req, res) => res.send(`running fine`));

   app.post("/user", Controller.createUser);
   app.post("/login", Controller.loginUser);
   app.post("/channel", Controller.createChannel);
   app.post("/search-user", Controller.getChannelList);
   app.post("/channel-list", Controller.searchUser);
   app.post("/message", Controller.sendMessage);
 };
 export default applyRoutes;