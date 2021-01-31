import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"


const FourthBrief = () => {
    const data = useStaticQuery (graphql`
        query sixthImage {
            sixthB: file(relativePath: {eq: "6.png"}) {
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
            <SEO title="6. Shopify" />
            <div className="backHome">
                <p>You are here: &#xA0;
                    <Link
                    to="https://omidhaqbin.com/"
                    data-tooltip="Back to omidhaqbin.com">Home</Link>  &#x3E;&#xA0;
                    <Link
                    to="/"
                    data-tooltip="Back to works"> 
                    Work Samples
                    </Link> &#xA0;&#x3E; 6th Brief
                </p>
            </div>
            <main className="internal-page">
                <h2>A real client</h2>
                <h4>Building a Shopify store</h4>
                <div>
                    <Img fluid={data.sixthB.childImageSharp.fluid} alt="Screenshot of my sixth brief" />
                </div>
                <div className="details">
                    <p>An opportunity for us, the students, to work with a real client.</p>
                    <p><strong>Desired Outcome:</strong> For you to have a great experience working together! </p><br /><br />
                    <strong>Project Description</strong><br /><br />
                    <p>“Get help from students to update your current startpage / part of your website, or  get help with your conversion strategy by having the students build dedicated  landing pages or optimize current webpages to convert better.” 
                    </p>
                    <strong>Responsibilities</strong>
                    <ul>
                        <li>Debriefing and aligning client expectations </li>
                        <li>Initiate and design Point of Departure with client (including signing the NDA) </li>
                        <li>Initiate check-ins and anchor back to client throughout the project </li>
                        <li>Always follow up on communication </li>
                        <li>Ask for feedback </li>
                        <li>Deliver results that are aligned with the clients objectives  </li>
                    </ul>
                    🔗 Link to the website: <a href="https://pilot-zlideon.myshopify.com/" target="_blank">ZlideOn Store</a>
                    <p>Deadline was in 5 weeks.</p>
                </div>
            </main>
        </Layout>
    )
}
export default FourthBrief