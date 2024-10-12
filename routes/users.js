import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

// mock Database
const users = [];

// add the list of users from the mock databases

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });
  res.send(`${user.first_name} has been added to the Database`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

export default router;
