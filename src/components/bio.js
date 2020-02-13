/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

import './components.css'

const Bio = ({ location }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  const rootPath = `${__PATH_PREFIX__}/`

  console.log(location)
  console.log(rootPath)
  
  return (
    <div 
      id="description"
      className="flex-column mr-md-5"
      style={{ 
        width: location === rootPath ? '35%' : '100%'
      }}
    >
      {/* <h2
        id="header-name"
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h2> */}

      <div
        style={{
          display: `flex`,
          marginBottom: rhythm(2.5),
        }}
      >
        {/* <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          className="d-none d-md-block"
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        /> */}
        <p id="info">
          Written by <strong>{author}</strong> who lives and works in the Philippines procrasinating as usual.
          {` `}
          <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopener noreferrer">
            You should motivate him on Twitter
          </a>
        </p>
      </div>
    </div>
  )
}

export default Bio
