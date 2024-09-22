import express from "express";

const app = express();
app.use(express.json());
const PORT = 3000;

const users = [
  {
    id: 1,
    name: "Faizan Ahmad",
    email: "faizan@gmail.com",
    age: 20,
  },
  {
    id: 2,
    name: "Ahmad Khan",
    email: "ahmad@gmail.com",
    age: 22,
  },
  {
    id: 3,
    name: "Ali",
    email: "ali@gmail.com",
    age: 24,
  },
];

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
