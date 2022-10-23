import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.get("/", (req, res) => {
  res.status(200).jsonp([
    {
      id: 1,
      name: "Brad Traversy",
      age: 42,
      jobRole: "Development God",
    },
    {
      id: 2,
      name: "Kevin Powell",
      age: 45,
      jobRole: "CSS King",
    },
    {
      id: 3,
      name: "Net Ninja",
      age: 35,
      jobRole: "Development Ninja",
    },
    {
      id: 4,
      name: "Colt Steel",
      age: 40,
      jobRole: "Udemy Instructor God",
    },
    {
      id: 5,
      name: "Colt Steel",
      age: 40,
      jobRole: "Udemy Instructor God",
    },
    {
      id: 6,
      name: "Jack Hamilton",
      age: 45,
      jobRole: "Senior React.js Developer",
    },
    {
      id: 7,
      name: "Kevin Powell",
      age: 45,
      jobRole: "CSS King",
    },
    {
      id: 7,
      name: "Kevin Powell",
      age: 45,
      jobRole: "CSS King",
    },
    {
      id: 6,
      name: "Jack Hamilton",
      age: 45,
      jobRole: "Senior React.js Developer",
    },
    {
      id: 5,
      name: "Colt Steel",
      age: 40,
      jobRole: "Udemy Instructor God",
    },
  ])
})

app.listen(PORT, () => {
  console.log(
    `Application is running in ${process.env.NODE_ENV} mode on port:${PORT} at http://localhost:${PORT}`
  )
})
