import { useState } from "react"
import reactLogo from "./assets/react.svg"
import useSWR from "swr"
import "./App.css"
import { getHttp } from "./utils/axios"

const getYoutubers = async () => {
  return await getHttp("/")
}

function App() {
  const {
    data: youtubers,
    isValidating,
    error,
  } = useSWR("getYoutubers", getYoutubers, {
    refreshInterval: 10000,
  })

  if (error) {
    return <h1>Can't Fetch Youtubers: {error.message}</h1>
  }

  if (isValidating) {
    return (
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          borderBottom: "2px solid black",
        }}
      >
        Loading
      </h1>
    )
  }

  console.log({ youtubers })

  return (
    <div className="App">
      {/* header start */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* header end */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 10,
        }}
      >
        {youtubers.data.map((item) => (
          <div
            style={{
              padding: "10px 16px",
              borderRadius: 6,
              boxShadow: "0 1 2 0 rgba(0,0,0,0.2)",
              height: 200,
              background: "#333",
            }}
          >
            <h2>{item.name}</h2>
            <hr />
            <h4>Age: {item.age}</h4>
            <div>Job Role: {item.jobRole}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
