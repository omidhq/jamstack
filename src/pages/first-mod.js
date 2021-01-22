import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FirstMod from '../../static/images/1st-mod.png'

const FirstBrief = () => (
  <Layout>
    <SEO title="First Module" />
    <div className="backHome">
        <p>You are here: &#xA0;
            <Link
            to="https://omidhaqbin.com/"
            data-tooltip="Back to omidhaqbin.com">Home</Link>  &#x3E;&#xA0;
            <Link
            to="/"
            data-tooltip="Back to works"> 
            Work Samples
            </Link> &#xA0;&#x3E; First Module
        </p>
    </div>
    <main className="internal-page">
    <h2>Personal Web Page</h2>
        <h4>Make a personal page using HTML and CSS.</h4>
        <div>
            <img src={FirstMod} alt="Screenshot of my first brief" />
        </div>
        <div className="details">
            <h3>Specifications:</h3>
            <ul>
                <li>Build a text-based personal website</li>
                <li>Optional: Include an image or a background pattern, video, sound, etc.</li>
                <li>Optional: Add a subpage linked from the main page and vice versa.</li>
            </ul>
            <br /><br />
            <h3>Check Points:</h3>
            <ul>
                <li>Learning basic HTML document structure </li>
                <li>Learning how to add images </li>
                <li>Learning basic CSS layout techniques </li>
            </ul>
            <br /><br />
            <p>Deadline in two weeks, presented on September 11th.</p>
        </div>
    </main>
  </Layout>
)

export default FirstBrief