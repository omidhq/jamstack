import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FirstMod from '../../static/images/1st-mod.png'
import SecondMod from '../../static/images/2nd-mod.png'
import ThirdB from '../../static/images/3rd-b.png'
import FourthB from '../../static/images/4th-b.png'
import FifthB from '../../static/images/5.png'
import SixthB from '../../static/images/6.png'

const IndexPage = () => (
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
                    <img src={FirstMod} alt="Screenshot of my first brief" />
                </div>
                <h2>Personal Web Page</h2>
                <h4>Make a personal page using HTML and CSS.</h4>
            </Link>
        </section>

        <section className="box">
            <Link to="/second-b">
                <div>
                    <img src={SecondMod} alt="Screenshot of my second brief" />
                </div>
                <h2>An interactive page</h2>
                <h4>Using JavaScript + HTML/CSS.</h4>
                <p>Totally static</p>
            </Link>
        </section>

        <section className="box">
            <Link to="/third-b">
                <div>
                    <img src={ThirdB} alt="Screenshot of my third Brief" />
                </div>
                <h2>A Habit Tracker</h2>
                <h4>Building a habit tracker using vanilla JS</h4>
                <p>Our first teamwork!</p>
            </Link>
        </section>

        <section className="box">
            <Link to="/fourth-b">
                <div>
                    <img src={FourthB} alt="Screenshot of my final portfolio" />
                </div>
                <h2>A Real Personal Portfolio</h2>
                <h4>With all the bells and whistles</h4>
                <p>Things getting serious</p>
            </Link>
        </section>

        <section className="box">
            <Link to="/fifth-b">
                <div>
                    <img src={FifthB} alt="Screenshot of TweeterLator" />
                </div>
                <h2>TweeterLator</h2>
                <h4>A website that uses APIs + npm packages</h4>
                <p>The most complicated project I had worked on till then</p>
            </Link>
        </section>

        <section className="box">
            <Link to="/sixth-b">
                <div>
                    <img src={SixthB} alt="Screenshot of Shopify Admin" />
                </div>
                <h2>A real client</h2>
                <h4>Building a Shopify store</h4>
                <p>New Challange</p>
            </Link>
        </section>
    </main>
    
  </Layout>
)

export default IndexPage
