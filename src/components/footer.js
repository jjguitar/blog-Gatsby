import React from "react"
import { Link } from "gatsby"
import footerStyles from "./footer.module.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, color: `white` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
// highlight-start
export default function Footer() {
  return (
    <div className={footerStyles.footer}>
      <ul style={{ listStyle: `none`, float: `center`, display: `flex`, justifyContent: `center`}}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </div>
  )
}