import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StyledHeader } from "./Header.styles"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link className="logo" title={siteTitle} to="/">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 374 374">
        <path
          fill="#5837D0"
          d="M0 0h30v85H0zM0 374h30v-85H0zM374 0h-30v85h30zM374 374h-30v-85h30z"
        />
        <path
          fill="#5837D0"
          d="M0 30V0h110v30zM0 344l-.00000131 30 110 .0000048.00000131-30zM374 30l.00000175-30-110-.0000036-.00000175 30zM374 344v30H264v-30z"
        />
        <path
          fill="#000"
          d="M35.5489 219.99c9.13 0 16.17-2.75 21.23-8.25 4.95-5.39 7.48-12.54 7.48-21.45s-2.53-16.06-7.59-21.56c-5.06-5.5-12.1-8.25-21.12-8.25-9.02 0-16.06 2.75-21.12 8.25-5.06003 5.5-7.59003 12.65-7.59003 21.56 0 8.91 2.53 16.06 7.59003 21.45 4.95 5.5 11.99 8.25 21.12 8.25Zm0-14.85c-7.59 0-11.44-4.95-11.44-14.85 0-10.01 3.85-14.96 11.44-14.96s11.44 4.95 11.44 14.96c0 9.9-3.85 14.85-11.44 14.85ZM72.5381 219h16.94v-31.9c0-3.41 1.1-6.05 3.19-8.14 2.09-2.09 4.62-3.08 7.6999-3.08 6.49 0 9.68 3.52 9.68 10.56V219h16.94v-37.84c0-6.27-1.98-11.33-5.83-15.07s-9.02-5.61-15.51-5.61c-6.8199 0-12.0999 2.2-15.7299 6.49h-.44V137.6h-16.94V219ZM163.064 219.99c8.03 0 14.3-2.2 18.81-6.6 4.51-4.4 6.93-10.12 7.37-17.05h-17.05c-.33 2.53-1.32 4.62-2.97 6.27-1.65 1.65-3.85 2.53-6.6 2.53-7.48 0-11.22-4.95-11.22-14.96 0-9.9 3.74-14.85 11.22-14.85 2.75 0 4.95.77 6.6 2.42 1.65 1.65 2.64 3.85 2.97 6.38h17.05c-.44-6.93-2.97-12.65-7.48-17.05s-10.89-6.6-19.14-6.6c-9.02 0-16.06 2.75-21.01 8.14-4.95 5.5-7.48 12.65-7.48 21.56 0 8.91 2.53 16.17 7.7 21.56 5.17 5.5 12.21 8.25 21.23 8.25ZM197.47 219h15.84v-28.38c0-4.51 1.21-8.14 3.63-10.78 2.31-2.53 5.5-3.85 9.57-3.85h5.5v-15.51h-3.96c-6.71 0-11.66 3.08-14.74 9.35h-.44l-1.32-8.36h-14.08V219ZM266.184 219.99c9.13 0 16.17-2.75 21.23-8.25 4.95-5.39 7.48-12.54 7.48-21.45s-2.53-16.06-7.59-21.56c-5.06-5.5-12.1-8.25-21.12-8.25-9.02 0-16.06 2.75-21.12 8.25-5.06 5.5-7.59 12.65-7.59 21.56 0 8.91 2.53 16.06 7.59 21.45 4.95 5.5 11.99 8.25 21.12 8.25Zm0-14.85c-7.59 0-11.44-4.95-11.44-14.85 0-10.01 3.85-14.96 11.44-14.96s11.44 4.95 11.44 14.96c0 9.9-3.85 14.85-11.44 14.85ZM303.173 244.19h16.94V213.5h.44c3.63 4.29 8.69 6.49 15.29 6.49 7.15 0 12.76-2.75 17.05-8.36 4.18-5.5 6.27-12.65 6.27-21.34s-2.09-15.84-6.38-21.45c-4.29-5.61-9.9-8.36-16.94-8.36-6.6 0-11.66 2.2-15.29 6.49h-.44l-1.76-5.5h-15.18v82.72Zm27.5-39.05c-7.59 0-11.33-4.95-11.33-14.85 0-4.4.88-8.03 2.75-10.78s4.73-4.18 8.58-4.18c3.85 0 6.71 1.43 8.58 4.18s2.75 6.38 2.75 10.78c0 9.9-3.74 14.85-11.33 14.85Z"
        />
      </svg>
    </Link>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
