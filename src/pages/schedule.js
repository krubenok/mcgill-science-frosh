import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        schedule: file(relativePath: { eq: "schedule.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div className="application">
          <Helmet>
            <html lang="en" amp />
            <meta charSet="utf-8" />
            <title>Froshters, Inc. | Schedule</title>
            <link rel="canonical" href="https://susfrosh.com/schedule" />
          </Helmet>
        </div>
        <section className="container mx-auto px-4 pt-8 mb-20 space-y-4 text-center max-w-screen-lg mx-auto">
          <Img fluid={data.schedule.childImageSharp.fluid} alt="Frosh Schedule" />
        </section>
      </Layout>
    )}
  />
);
