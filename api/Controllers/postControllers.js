import User from "../models/User";
import Post from "../models/Post";

//Create a Post

export const createPostController = async (req, res) => {
    try{
        const newPost = new Post(req.body);
        const savedPost =  newPost.save();
        res.status(200); res.json({
            status:true,
            message: "Your post has been created",
            date: newPost,
        });
    } catch (error) {
        res.status(500); res.json({
            status:false,
            message: "error.message",
        });
    }
};


//Update a post

export const updatePostController =  async (req, res) => {
    try{
        const { id } = req.params;
        const { userId } = req.body;

        console.log(id);
        const post = await Post.findById(id);
        if(post.userId === userId) {
            const updatePost = await post.updateOne({ $set: req.body});
            res.status(200);
            res.json({
                status:false,
                message: " you can update only your email",
            });
        }
    } catch (error) {
        res.status(500);
        res.json({
            status:false,
            message: error.message,
        });
    }
};


//delete a Post


export const deletePostController =  async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } =req.body;

        const post = await Post.findById(id);
        if (post.userId == userId){
        const updatePost = await post.deleteOne();
        res.statys(200);
        res.json({
            status:true,
            message: "The Post has been deleted",
        });
    }   else {
        res.status(403);
        res.json({
            status: false,
            message: "You can delete only your post"
        });
     }
    } catch (error) {
        res.status(500);
        res.json({
            status: false,
            message: error.message,
        });
    }
};

//Like / dislike a post

export const likePostController = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const { userId } = req.body;
        const post = await Post.findById(id);
        console.log(post);
        if (!post.likes.includes(userId)) {
            await post.updateOne({ $push: { likes: userId} });
            res.status(200);
            res.json({
                status: true,
                message: "The post has been liked",
            });
        } else {
            await post.updateOne({ $pull: { likes: userId} });
            res.status(200);
            res.json({
                status: true,
                message: "The post has been disliked",
            });
        }
        
    } catch (error) {
            res.status(500);
            res.json({
                status: false,
                message: error.message,
            });
        }
};

//get a post

export const getPostController = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);

        if (post) {
        res.status(200);
        res.json({
            status: true,
            message: "post fetched successfully",
            date: post,
        });
        }

    }   catch (error) {
        res.status(500);
        res.json({
            status: false,
            message: error.message,
        });
    }
};

// get timeline posts

export const getPostsByTimeController =  async (req, res) => {
    try {
        const { userId } = req.params;
        const currentUser = await User.findById(userId);
        const loggedInUserPosts = await Post.find({ userId: currentUser._id });
        const followingUserPosts = await Promise.all(
            currentUser.followings.map((followingUserId) => {
                return Post.find({userId: followingUserId});
            })
        );
        res.status(200);
        res.json({
            status: true,
            message: "post fetched sucessfully",
            data: loggedInUserPosts.concat(...followingUserPosts),
        });
    } catch (error) {
        res.status(500);
        res.json({
            status: false,
            message: error.message,
        });
    }
};


// get user's all post

export const getPostsOFProfileController =  async (req, res) => {
    try {
        const user = await User. findOne({ username: req.params.username});
        const posts = await Post.find({userId: user._id});
        console.log(posts);
        res.status(200);
        res.json({
            status: true,
            message: "post fetched successfully",
            data: posts,
        });
    } catch (error) {
        res.status(500);
        res.json({
            status: false,
            message: error.message,
        });
    }
};
