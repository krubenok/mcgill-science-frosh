import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/Layout';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        frosh4: file(relativePath: { eq: "frosh-4.jpg" }) {
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
            <title>Froshters, Inc. | Partners</title>
            <link rel="canonical" href="https://susfrosh.com/partners" />
          </Helmet>
        </div>
        <section className="container mx-auto px-4 pt-8 mb-20 space-y-4">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">Partners</h1>
          <Img
            fluid={data.frosh4.childImageSharp.fluid}
            alt="Photo of DJ at a concert with large crowd"
          />
          <h2 className="text-xl lg:text-2xl xl:text-3xl">
            If you and your business are interested in sponsoring Science Frosh, please contact us
            at <a href="mailto:frosh@susmcgill.ca">frosh@susmcgill.ca</a>. Frosh is not possible
            without our partners and we appreciate your support!
          </h2>
        </section>
      </Layout>
    )}
  />
);