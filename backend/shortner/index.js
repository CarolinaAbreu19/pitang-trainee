import express from "express";
import crypto from "crypto";

const app = express();

const users = [];

app.use(express.json());

app.get("/api/user", (request, response) => {
    return response.send(users);
});

app.get("/api/user/:id", (request, response) => {
  const id = request.params.id;

  const user = users.find((user) => user.id === id);

  if (user) {
      return response.status(200).send({ user });
  }

  return response.status(404).send({ message: "User not exist" });
});

app.post("/api/user", (request, response) => {
  const { email, name } = request.body;

  if(!email || !name) {
      return response.status(400).send({ message: "Email and Name are required" });  
  }
  
  const user = { id: crypto.randomUUID(), email: email, name: name };
  users.push(user);

  return response.status(201).send(user);
});



app.listen(3000, () => {
  console.log("Server Running on PORT 3000");
});