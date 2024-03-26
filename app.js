const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
//const expressHbs = require("express-handlebars");
// const expressHbs = require("express-handlebars");
 const app = express();
// //engine(file extension,tool)
// app.engine("hbs", expressHbs());
/************************************************************************************ */
//using ejd template engine
app.set("view engine", "ejs");




//after creating our express application
//set a global configuration value
//app.set("view engine", "pug");
//app.set("view engine", "hbs");
app.set("views", "views");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
