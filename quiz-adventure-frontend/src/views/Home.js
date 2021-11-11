import React from "react"
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react"

class Home extends React.Component {
  render () {
    return (
      <>
        <main>
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Welcome to Chakra UI
          </Text>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </>
    )
  }
}

export default Home