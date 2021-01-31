import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
    const data = useStaticQuery (graphql`
        query Images {
            firstB: file(relativePath: {eq: "1st-mod.png"}) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            secondB: file(relativePath: {eq: "2nd-mod.png"}) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            thirdB: file(relativePath: {eq: "3rd-b.png"}) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            fourthB: file(relativePath: {eq: "4th-b.png"}) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            fifthB: file(relativePath: {eq: "5.png"}) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            sixthB: file(relativePath: {eq: "6.png"}) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
        }
    `) 
    return (
        <Layout>
            <SEO title="Work Samples" />
            <div className="backHome">
                <p>You are here: &nbsp;
                    <Link
                    to="https://omidhaqbin.com/"
                    data-tooltip="Back to omidhaqbin.com"
                    >Home</Link> &#x3E; Work Samples
                </p>
            </div>
            <main className="portfolio-items">
                <section className="box">
                    <Link to="/first-mod">
                        <div>
                            <Img fluid={data.firstB.childImageSharp.fluid} />
                        </div>
                        <h2>Personal Web Page</h2>
                        <h4>Make a personal page using HTML and CSS.</h4>
                    </Link>
                </section>

                <section className="box">
                    <Link to="/second-b">
                        <div>
                            <Img fluid={data.secondB.childImageSharp.fluid} />
                        </div>
                        <h2>An interactive page</h2>
                        <h4>Using JavaScript + HTML/CSS.</h4>
                        <p>Totally static</p>
                    </Link>
                </section>

                <section className="box">
                    <Link to="/third-b">
                        <div>
                            <Img fluid={data.thirdB.childImageSharp.fluid} />
                            {/* <img src={ThirdB} alt="Screenshot of my third Brief" /> */}
                        </div>
                        <h2>A Habit Tracker</h2>
                        <h4>Building a habit tracker using vanilla JS</h4>
                        <p>Our first teamwork!</p>
                    </Link>
                </section>

                <section className="box">
                    <Link to="/fourth-b">
                        <div>
                            <Img fluid={data.fourthB.childImageSharp.fluid} />
                        </div>
                        <h2>A Real Personal Portfolio</h2>
                        <h4>With all the bells and whistles</h4>
                        <p>Things getting serious</p>
                    </Link>
                </section>

                <section className="box">
                    <Link to="/fifth-b">
                        <div>
                            <Img fluid={data.fifthB.childImageSharp.fluid} />
                        </div>
                        <h2>TweeterLator</h2>
                        <h4>A website that uses APIs + npm packages</h4>
                        <p>The most complicated project I had worked on till then</p>
                    </Link>
                </section>

                <section className="box">
                    <Link to="/sixth-b">
                        <div>
                            <Img fluid={data.sixthB.childImageSharp.fluid} />
                        </div>
                        <h2>A real client</h2>
                        <h4>Building a Shopify store</h4>
                        <p>New Challange</p>
                    </Link>
                </section>
            </main>
            
        </Layout>
        )
}

export default IndexPage
