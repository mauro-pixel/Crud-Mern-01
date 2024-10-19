import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Conexión exitosa DB --> ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error al conectar --> ${error.message}`);
        process.exit(1);
    }
};