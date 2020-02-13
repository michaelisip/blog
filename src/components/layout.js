import React, { Fragment } from "react"
import { rhythm } from "../utils/typography"

import 'bootstrap/dist/css/bootstrap.min.css'
import './components.css'

class Layout extends React.Component {
  
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    return (
      <Fragment>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: location === rootPath ? rhythm(40) : rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <footer style={{ 
          textAlign: 'center',
          marginTop: rhythm(5),
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Fragment>
    )
  }
}

export default Layout
