import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FifthB from '../../static/images/5.png'


const FifthBrief = () => (
  <Layout>
    <SEO title="5. TweeterLator" />
    <div className="backHome">
        <p>You are here: &#xA0;
            <Link
            to="https://omidhaqbin.com/"
            data-tooltip="Back to omidhaqbin.com">Home</Link>  &#x3E;&#xA0;
            <Link
            to="/"
            data-tooltip="Back to works"> 
            Work Samples
            </Link> &#xA0;&#x3E; 5th Brief
        </p>
    </div>
    <main className="internal-page">
        <h2>TweeterLator</h2>
        <h4>A website that uses APIs + npm packages</h4>
        <div>
            <img src={FifthB} alt="Screenshot of my latest porftolio" />
        </div>
        <div className="details">
            <h3>A Hyper Island Student Project</h3>

            <strong>About:</strong><br /><br />

            TweeterLator is an app that fetches tweets from users in various cities around Sweden, and visualizes their content based on word frequency analysis, sentiment analysis, Markov chains, and lastly time series analysis.<br /><br />

            TweeterLator was born during a brainstorming session for a school project at Hyper Island. For the three-week-long project, we decided to blend our brief (building a webpage using RESTful APIs) with our interest in data visualization and graphs. Therefore, working with Twitter API and analyzing their users' content seemed like compelling territory to explore.<br /><br />

            <strong>Data collection and analysis:</strong><br /><br />

            We started with exploring Twitter API and the types of data we could fetch. We limited our sample size to the 500 most recent tweets from each city within a 5km radius from a given set of geographical coordinates.<br /><br />

            We wanted to visualise the text contents of the tweets in some kind of network graph. To do this, we anaylised our corpus with three different approaches.<br /><br />

            We created a simple token frequency dictionary to visualise the most-occuring words, usernames and hashtags in a particular city. These formed the nodes in our graph.<br /><br />

            Second, we used a Markov Chain analysis to map frequently occurring bigrams (after the stopwords were removed, so these ended up being words that occurred close together) to graph edges. The more frequent the connection, the heavier the edge.<br /><br />

            We also ran a simple sentiment analysis script using an AFINN score that we mapped onto a colour gradient in order to colour the graph.<br /><br />

            Another series of data points we decided to visualise separately was the tweet timestamp. We have normalized the data and structured it in accordance to our goal. The time data has been scaled by the sum of each row before being visualized in the radial heatmap.<br /><br />

            We ended up adding a rudimentary database layer (a JSON file). This way, each of our fetch calls could add to our database and we could have more control over how we interfaced with our own database. This was especially helpful when it comes to maintaining the site, as we plan to do random sampling of time data (right now, since our sample size is relatively small, we see a big difference in recent tweets from Stockholm and a smaller city like Kiruna.<br /><br />

            Exploring some of the libraries for the purpose of analyzing text-based content in this project was to experiment with new tools in the field of front-end development. Please note that we are front-end developers, not data analysts (although with some background knowledge of linguistics), and it’s likely that we have overlooked some of the nuances of data collection and potential biases.<br /><br />

            <strong>Things we learned:</strong><br /><br />
            <ul>
                <li>Working with API</li>
                <li>Building an app with Gatsby</li>
                <li>Data analysis and visualisation</li>
                <li>Working in Nodejs</li>
                <li>Thinking in terms of React Components</li>
                <li>Collaborating with Agile principles</li>
            </ul>
            <br /><br />

            <strong>Some of the challenges we faced:</strong><br /><br />
            <ul>
                <li>We couldn’t collect data at fetch time, hence we decided to do it at build time once a week through a series of node scripts. Our initial intention was to fetch data at runtime, but we eventually learned that Twitter doesn't support CORS and therefore we couldn't access the API from the client. Instead we decided to fetch the data periodically at built-time running a Node script in the backend. Since we moved to backend, we analyzed most of the data in Node as well.</li>

                <li>Initially we spent a few days researching graph visualising libraries, and settled on Cytoscape.js. It proved to be very complicated to work with, especially with the added complexity of finding a good React wrapper, and Vis.js had much clearer documentation, and nice physics simulations out of the package.</li>

                <li>We didn't examine our data closely in the start of the project, and didn't realize that we were getting truncated tweets. This caused a lot of bugs and lost time towards the end of the project.</li>
            </ul>
            <br /><br />
            Overall, we were working with a lot of tools and concepts that were new to all of us, so we were constantly challenged.<br /><br /><br /><br />

            <strong>Tools and Tech stack:</strong><br /><br />

            Gatsbyjs: “An open-source framework based on React that helps developers build blazing-fast websites and apps.”<br /><br />

            Twitter API: “The API provides the tools analyze the conversation happening on Twitter.” In order to use, developer must request access by filling out a questionnaire.<br /><br />

            Vis.js: "A dynamic, browser-based visualization library."<br /><br />

            React-Vis: "React-vis is a React visualization library."<br /><br />

            Postman: "The Collaboration Platform for API Development."<br /><br /><br /><br />

            <strong>Libraries and dependencies:</strong><br /><br />
            <ul>
                <li>React graph vis: A React component to display beautiful network graphs using vis.js</li>

                <li>moxy-ta: Text analysis library for MoxyScript.</li>

                <li>text-cleaner: A tool for easily cleaning text.</li>

                <li>ez-markov: A library designed to build rudimentary Markov chains.</li>

                <li>Stopword: A module for node and the browser that allows you to strip stopwords from an input text.</li>

                <li>Sentiment: AFINN-based sentiment analysis for Node.js.</li>

                <li>Sentiment Swedish: Swedish translated, AFINN-based sentiment analysis for Node.js.</li>
            </ul>
            <br /><br />

            <strong>Contributors:</strong><br /><br />
            <ul>
                <li>Lovisa Elensky</li>
                <li>Neha Hirve</li>
                <li>Omid Haqbin</li>
            </ul><br /><br />

            <p>Deadline was in 3 weeks.</p>
        </div>
    </main>
  </Layout>
)

export default FifthBrief