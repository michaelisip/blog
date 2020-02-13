import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { location } = this.props

    return (
      <Layout location={location.pathname} title={siteTitle}>
        <SEO title="Blogs" location={location} />
        <div 
          className="d-md-flex justify-content-between mt-md-5">
          <Bio title={siteTitle} location={location.pathname}/>
          <div id="content" className="flex-column ml-md-5">
            <h1 id="blogs-header" className="mb-5"> 
              Blogs 
            </h1>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <article className="mt-4" key={node.fields.slug}>
                  <header>
                    <p
                      className="blog-title"
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </p>
                    <small className="blog-date">{node.frontmatter.date}</small>
                  </header>
                  <section className="blog-preview">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section>
                </article>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
