import Department from "./../../../models/department.model";

const create = async (req, res) => {
  const { title } = req.body;
  try {
    const newDepartment = new Department({
      title,
    });
    await newDepartment.save();
    res.status(201).json(newDepartment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export default {
  create,
};
