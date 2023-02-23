const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "mysecretkey123",
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://admin:admin@cluster0.edsdngb.mongodb.net/?retryWrites=true&w=majority",
}

export default config