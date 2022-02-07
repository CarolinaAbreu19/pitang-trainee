import express from "express";
import crypto from "crypto";

const app = express();

const users = [];

app.use(express.json());

app.get("/api/user", (request, response) => {
    return response.send(users);
});

