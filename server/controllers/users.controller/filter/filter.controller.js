import errorHandler from "../../../helpers/dbErrorHandler.js";
import User from "../../../models/user.model";

const filterUser = async (req, res) => {
  try {
    const { departmentId } = req.query;

    const users = await User.find({departmentId: departmentId}).populate("departmentId", "title").exec();
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default { filterUser };
