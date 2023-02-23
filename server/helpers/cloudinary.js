const cloudinary = require('cloudinary').v2;

// Configuration 
cloudinary.config({
  cloud_name: "dvxfixf5q",
  api_key: "431122752423812",
  api_secret: "fVCKQfYd94d2zZBtO8qVLqCYX44"
});

module.exports = cloudinary;