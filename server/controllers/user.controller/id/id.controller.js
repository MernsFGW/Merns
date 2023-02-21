import User from './../../../models/user.model.js';

const userByID = async (req, res, next, id) => {
    try {
      let user = await User.findById(id).exec()
      if (!user)
        return res.status('400').json({
          error: "User not found"
        })
      req.profile = user
      next()
    } catch (err) {
      return res.status('400').json({
        error: "Could not retrieve user"
      })
    }
}


export default {
  userByID
}