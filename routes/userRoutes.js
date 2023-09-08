import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import { landing_Page } from "../controller/userController";

const user_route = express();

user_route.set("view engine", "ejs");
user_route.set("views", "./views/user");

user_route.use(
  session({
    secret: "mysecret",
    resave: true,
    saveUninitialized: false,
  })
);

user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({ extended: true }));

user_route.get("/", landing_Page);

export default user_route;
