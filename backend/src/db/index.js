import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const con = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DATABASE_NAME}`)
        console.log("Database connection successfuly");


    } catch (error) {
        console.log("Database connection failure", error)
    }
}
export default connectDb;