import User from ("../models/User");
import bcrypt from ("bcrypt");

//update user

export const updateUserController =  async (req, res) => {
    try {
        const { id } = req.params;

    if(req.body.userId === id || req.body.isAdmin) {
        if(req.body.password) {
            try {
                const salt = await bcrypt.genSalt();
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                res.status(500);
                res.json(error);
            }
        }
        try {
            const updateUser = await User.findByIdAndUpdate(id, {
                $set: req.body,
            });
            res.status(200);
            res.json({
                status: true,
                message: "Your Account has been updated",
            });
        } catch (error) {
            res.status(500);
            res.json(error);
        }
    }   else {
        res.status(403);
        res.json({
            status: false,
            message: "You can update only your account!",
        });
    }
} catch(error){
    res.status(500);
    res.json(error);
}
};

//delete user

export const deleteUserController =  async (req, res) => {
    try {
        const { id } = req.params;
    if (req.body.userId === id || req.body.isAdmin) {
        try {
            const deleteUser = await User.findByIdAndDelete(id);
            res.status(200);
            res.json({
                status: true,
                message: "Your Account has been deleted",
            });
        } catch (error) {
             res.status(500);
             res.json(error);
        }
    } else {
        res.status(403);
        res.json({
            status: false,
            message: "You can deleted only your account!",
        });
    }
} catch(error) {
    res.status(500);
    res.json(error);
}
};
// get a user

export const getUserController =  async (req, res) => {
    const { userId, username } = req.query;
    try {
        const isUserExists = userId
        ? await User.findById(userId)
        : await User.findOne({ username : username});
        if (isUserExists) {
        const { password, updatedAt, ...others } = isUserExists._doc;
        res.status(200).json({
            status: true,
            message: "User fetched sucessfully",
            data: others,
        });
    } else {
        res.status(404).json({
            status: false,
            message: "User not found",
        });
    }
}catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
};

//get Friends

export const getFriendController = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const friends = await Promise.all(
            user.followings.map((friendId) => {
                return User.findById(friendId);
            })
        )

        let friendList = [];
        friends.map((friend) => {
            const { _id, username, profilePicture } = friend
            friendList.push({ _id, username, profilePicture});
        })
        res.status(200).json({
            status: true,
            message: "friends fetched successfully!",
            data: friendList,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
};

// get all user
export const getUsersController = async (req, res) => {
    try {
      const getUsers = await User.find();
      res.status(200);
      res.json({
        status: true,
        message: "User fetched successfully!",
        data: getUsers,
      });
    } catch (error) {
      res.status(500);
      res.json(error);
    }
  };

//follow a user

export const followUserController = async (req, res) => {
    const { id } = req.params;
    if(req.body.userId !== id) {
        try {
            const user = await User.findById(id);
            const currentUser = await User.findById(req.body.userId);

            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: {  followers: req.body.userId} });
                await currentUser.updateOne({ $push: { folloings: id} });
                res.status(200);
                res.json({
                    status: true,
                    message: "user has been fololowed",
                });
            }   else {
                res.status(403);
                res.json("you allready follow this user");
            }
        }   catch (error) {
            res.status(500);
            res.json(error);
        }
    }  else {
            res.status(403);
            res.json("You cant follow yourself");
    }
    
};

//unfollow a user

export const unFollowUserController = async (req, res) => {
    const { id } = req.params;
    if (req.body.userId !== id) {
        try {
            const user = await User.findById(id);
            const currentUser = await User.findById(req.body.userId);

            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: {followers: req.body.userId} });
                await currentUser.updateOne({ $pull: { followings: id} });
                res.status(200);
                res.json({
                    status: true,
                    message: "User has been unfollowed",
                });
            }   else {
                res.status(403);
                res.json({
                    status: false,
                    message: "You are already unfollow this user",
                });
            }
        }   catch (error) {
            res.status(500);
            res.json(error);
        }
    }   else {
        res.status(403);
        res.json({
            status: false,
            message: "You cant unfollow yourself",
        });
    }
};
