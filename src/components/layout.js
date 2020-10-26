import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby";
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import Header from "./header"
import "./layout.css"

const Layout = ({ children, noHeader }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {!noHeader && (
        <Header
          siteTitle={data.site.siteMetadata.title}
          noHeader={noHeader}
        />
      )}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 0`,
        }}
      >
        <div className="theme-toggler">
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label>
                <input
                  type="checkbox"
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
                />{' '}
                {theme} mode
              </label>
            )}
          </ThemeToggler>
        </div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
