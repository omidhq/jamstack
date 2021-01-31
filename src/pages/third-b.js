import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"


const ThirdBrief = () => {
    const data = useStaticQuery (graphql`
        query thirdImage {
            fifthB: file(relativePath: {eq: "3rd-b.png"}) {
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
            <SEO title="3. Habit Tracker" />
            <div className="backHome">
                <p>You are here: &#xA0;
                    <Link
                    to="https://omidhaqbin.com/"
                    data-tooltip="Back to omidhaqbin.com">Home</Link>  &#x3E;&#xA0;
                    <Link
                    to="/"
                    data-tooltip="Back to works"> 
                    Work Samples
                    </Link> &#xA0;&#x3E; 3rd Brief
                </p>
            </div>
            <main className="internal-page">
                <h2>A Habit Tracker</h2>
                <h4>Planning a project using vanilla JS; first group project</h4>
                <div>
                    <Img fluid={data.fifthB.childImageSharp.fluid} alt="Screenshot of my 3rd brief" />
                </div>
                <div className="details">
                    <h3>Specifications:</h3>
                    <ul>
                        <li>Functional UI with ability to add and delete habits and entries. </li>
                        <li>Data persistence through cookies or local storage. </li>
                        <li>Useage of git to organize code. </li>
                        <li>Learn contribution via git and how to divide coding tasks between team members</li>
                    </ul>
                    <br /><br />
                    <h3>Goals:</h3>
                    <ul>
                        <li>plan work; </li>
                        <li>deconstruct different problems; </li>
                        <li>testing & debugging;  </li>
                        <li>architecting code & projects; </li>
                        <li>understand general programming logic;</li>
                    </ul>
                    <br /><br />
                    <h3>Check Points:</h3>
                    <p>Learning how to organize projects and break down tasks. </p>
                    <p>Learning how to work in groups. </p>
                    <p>Learning how to work with git and VCS. </p>

                    <br /><br />
                    <p>Deadline was in 3 weeks, presented on October 29th.</p>
                </div>
            </main>
        </Layout>
    )
}

export default ThirdBrief