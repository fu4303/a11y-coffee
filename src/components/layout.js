/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui"
import { useState, useRef } from "react"
import { Global } from "@emotion/core"

import Header from "./header"
import Main from "./main"
import Footer from "./footer"
// import Sidebar from './sidebar'
// import Pagination from './pagination'
// import EditLink from './edit-link'
// import Head from './head'

export default props => {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = useRef(null)

  return (
    <Styled.root>
      {/* <Head {...props} /> */}
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
          },
          body: {
            margin: 0,
          },
        }}
      />
      <Box>
        <Header
          nav={nav}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          {...props}
        />
        <Main {...props} />
        <Footer />
      </Box>
    </Styled.root>
  )
}
