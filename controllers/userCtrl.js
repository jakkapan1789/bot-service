const User = require("../models/User");

const users = [
  {
    user_id: 1,
    name: "jakkapan",
  },
];
async function getUsers(req, res) {
  try {
    // const users = await User.findAll();
    const users = [
      {
        user_id: 1,
        name: "jakkapan",
      },
    ];
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getUsersByName(req, res) {
  const { name } = req.params;

  try {
    // const users = await User.findAll({
    //   where: {
    //     name: name,
    //   },
    // });

    res.json(users);
  } catch (err) {
    console.error(`Error fetching users by name "${name}":`, err);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createUser(req, res) {
  const { name, email, password } = req.body;

  // Example validation
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "Name, email, and password are required" });
  }

  try {
    const newUser = await User.create({
      name,
      email,
      password,
    });
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function updateUser(req, res) {
  const userId = req.params.id;
  try {
    const [updatedRowsCount, updatedUser] = await User.update(req.body, {
      where: { user_id: userId },
      returning: true,
    });
    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(updatedUser[0]);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteUser(req, res) {
  const userId = req.params.id;
  try {
    const deletedRowCount = await User.destroy({
      where: { user_id: userId },
    });
    if (deletedRowCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(204).end(); // No content to send back
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getUsers,
  getUsersByName,
  createUser,
  updateUser,
  deleteUser,
};
