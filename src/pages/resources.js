import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        frosh3: file(relativePath: { eq: "frosh-3.jpg" }) {
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
        <section className="container mx-auto px-4 pt-8 mb-20 space-y-4">
          <Img
            fluid={data.frosh3.childImageSharp.fluid}
            alt="Many students doing Yoga at top of mountain"
          />
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">About Frosh</h1>
          <p className="text-m lg:text-l mt-2 font-light">
            <b>FROSHTERS, INC</b> is the 2020 Orientation Week for students entering the McGill
            Faculty of Science in the 2020-2021 academic year.
          </p>
        </section>
      </Layout>
    )}
  />
);
