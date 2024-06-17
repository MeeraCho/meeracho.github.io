import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://1.vikiplatform.com/pr/13638pr/f992dfcc9f.jpg?x=b"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage