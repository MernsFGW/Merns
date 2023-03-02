import errorHandler from "../../../helpers/dbErrorHandler.js";
import Idea from "../../../models/idea.model";

const filterIdea = async (req, res) => {
  try {
    let categoryId = req.query.categoryId;

    const response = await Idea.aggregate([
      {
        $match: {
          category: categoryId,
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $unwind: "$category",
      },
      {
        $lookup: {
          from: "users",
          localField: "postedBy",
          foreignField: "_id",
          as: "postedBy",
        },
      },
      {
        $unwind: "$postedBy",
      },
      {
        $project: {
          title: 1,
          description: 1,
          category: "$category.name",
          postedBy: "$postedBy.name",
          created: 1,
        },
      },
    ]);

    res.json(response);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default { filterIdea };
