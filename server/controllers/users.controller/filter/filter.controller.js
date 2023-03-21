import errorHandler from "../../../helpers/dbErrorHandler.js";
import User from "../../../models/user.model";

const filterUser = async (req, res) => {
  try {
    const { departmentId } = req.query;
    const filterCriteria = {};

    if (departmentId) {
      filterCriteria.departmentId = departmentId;
    }

    const users = await User.find(filterCriteria)
      .populate("departmentId")
      //.populate("userId", "fullName avatar")
      .exec();
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default { filterUser };
