import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SecondB from '../../static/images/2nd-mod.png'

const SecondBrief = () => (
  <Layout>
    <SEO title="Second Brief" />
    <div className="backHome">
        <p>You are here: &#xA0;
            <Link
            to="https://omidhaqbin.com/"
            data-tooltip="Back to omidhaqbin.com">Home</Link>  &#x3E;&#xA0;
            <Link
            to="/"
            data-tooltip="Back to works"> 
            Work Samples
            </Link> &#xA0;&#x3E; 2nd Brief
        </p>
    </div>
    <main className="internal-page">
        <h2>An interactive page</h2>
        <h4>Make an interactive page using JavaScript + HTML/CSS.</h4>
        <div>
            <img src={SecondB} alt="Screenshot of my first brief" />
        </div>
        <div className="details">
            <h3>Specifications:</h3>
            <ul>
                <li>Takes user input (text, mouse, etc.) </li>
                <li>Responds to said input (visual or audio feedback). </li>
            </ul>
            <br /><br />
            <h3>Rules:</h3>
            <ul>
                <li>Main functionality should not be an external library. </li>
                <li>No frameworks (React, Vue, Svelte, etc.)</li>
                <li>Only JavaScript (no TypeScript, Elm, etc).  </li>
                <li>No need to support mobile. </li>
                <li>No external APIs.</li>
            </ul>
            <br /><br />
            <h3>Check Points:</h3>
            <p>Learning basic JavaScript. </p>
            <p>Learning about DOM events. </p>
            <p>Learning how to manipulate the DOM.</p>
            <p>Learning version control systems like git.</p>
            <p>Learning how to work with GitHub</p>

            <br /><br />
            <p>Deadline was in 3 weeks, presented on October 1st.</p>
        </div>
    </main>
  </Layout>
)

export default SecondBrief