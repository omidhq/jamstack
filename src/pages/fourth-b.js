import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"


const FourthBrief = () => {
    const data = useStaticQuery (graphql`
        query fourthImage {
            fourthB: file(relativePath: {eq: "4th-b.png"}) {
                childImageSharp {
                    fluid(maxWidth: 1200, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return(
  <Layout>
    <SEO title="4. Portfolio" />
    <div className="backHome">
        <p>You are here: &#xA0;
            <Link
            to="https://omidhaqbin.com/"
            data-tooltip="Back to omidhaqbin.com">Home</Link>  &#x3E;&#xA0;
            <Link
            to="/"
            data-tooltip="Back to works"> 
            Work Samples
            </Link> &#xA0;&#x3E; 4th Brief
        </p>
    </div>
    <main className="internal-page">
        <h2>A Real Personal Portfolio</h2>
        <h4>With all the bells and whistles</h4>
        <div>
                    <Img fluid={data.fourthB.childImageSharp.fluid} alt="Screenshot of my fourth brief" />
                </div>
        <div className="details">
            <h3>Specifications:</h3>
            <ul>
                <li>Must be visually accessible and reasonably polished.</li>
                <li>Must have the basic elementss of responsiveness.</li>
                <li>Okay to use libraries.</li>
                <li>Optional: Make it a JAMStack webite. </li>
            </ul>
            <br /><br />
            <h3>Goals:</h3>
            <ul>
                <li>plan work; from ideation to deployment </li>
                <li>deconstruct different problems; </li>
                <li>testing & debugging;  </li>
                <li>architecting code & projects; </li>
                <li>understand general programming logic;</li>
            </ul>
            <br /><br />
            <h3>Check Points:</h3>
            <p>Make it yours! </p>
            <p>Learning how to work with 3rd party code. </p>
            <p>Learning how to think in components. </p>
            <p>Learning how to work in different layers. </p>

            <br /><br />
            <p>Deadline was in 2 weeks.</p>
        </div>
    </main>
  </Layout>
)
}

export default FourthBrief