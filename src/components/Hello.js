// import react so that we can use react
import React from "react"

// define component
const Hello = ({greeting, batch}) => {
  return <div> {greeting}, {batch}</div>
  }

// export component
export default Hello;
