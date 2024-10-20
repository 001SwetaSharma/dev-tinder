import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://sunilmnagre:mBGLVmWzVL3PcM7h@cluster0.iwgl8y4.mongodb.net/devTinder');
};