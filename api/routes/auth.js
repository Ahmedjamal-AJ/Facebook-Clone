import express from " express";
import { loginController, SignupController } from "../Controllers/authControllers";

const authRouter = express.Router();

//signup // post api
authRouter.post("/Signup", SignupController);

//Login // post api
authRouter.post("/Login", loginController);

export default authRouter;