import User from "../models/User";
import bcrypt from "bcrypt";

//Signup

export const SignupController = async (req, res) => {
    try{
        const { username, email, password } = req.body;
    

         //generate new password
        
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(req.body.password, salt);


       //create new user
    
       const newUser = await new User ({
        username,
        email,
       password,
    });

        //save user & respond
        
        await newUser.save();
        res.json({
            status: true,
            message: " User created successfully ",
            data: newUser,
        });
    } catch (error) {
        res.status(404);
        res.json({
            status:false,
            message: error.message,
        });
    }
};

//Login

export const loginController = async (req, res) => {
    try { 
        const { email, password } = req.body;
        console.log(email, password);
        
        if(!email || !password) {
            return res.status(404).json({
                status: false,
                message: "Email & password are required!",
            });
        }

        const isUserExists = await User.findOne({ email });
        console.log(isUserExists);

        if(isUserExists) {
            const validPassword = await bcrypt.compare(password, isUserExists.password);
        
        if(isUserExists.password === password){
            res.status(200);
            res.json({
                status: true,
                message: "Login successfully!",
                data: isUserExists,
            });
        } else {
            res.status(400);
            res.json({
                status: false,
                message: "invalid Password",
            });
        }
    } else {
        res.status(400);
        res.json({
            status: false,
            message: "Invalid Email",
        });
    }
} catch (error) {
    res.status(400);
}
};
  