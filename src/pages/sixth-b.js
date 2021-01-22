import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SixthB from '../../static/images/6.png'


const FourthBrief = () => (
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
            <img src={SixthB} alt="Screenshot of Shopify Admin" />
        </div>
        <div className="details">
            🔗 Link to the website: <a href="https://pilot-zlideon.myshopify.com/" target="_blank">ZlideOn Store</a>
            <p>Deadline was in 5 weeks.</p>
        </div>
    </main>
  </Layout>
)

export default FourthBrief