const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "mysecretkey123",
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb+srv://admin:admin@cluster0.edsdngb.mongodb.net/?retryWrites=true&w=majority",
  cloudName: process.env.CLOUD_NAME || "dvxfixf5q",
  cloudApiKey: process.env.CLOUD_API_KEY || "431122752423812",
  cloudApiSecret: process.env.CLOUD_API_SECRET || "fVCKQfYd94d2zZBtO8qVLqCYX44",
};

export default config;
