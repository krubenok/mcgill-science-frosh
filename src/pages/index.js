import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Button from '../components/Button';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
// import SvgCharts from '../svg/SvgCharts';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        frosh1: file(relativePath: { eq: "frosh-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        logo1: file(relativePath: { eq: "logo.png" }) {
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
        <section className="pt-20 md:pt-40">
          <div className="container mx-auto px-8 lg:flex">
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                Froshters, Inc.
              </h1>
              <p className="text-xl lg:text-2xl mt-6 font-light">McGill Science Frosh 2020</p>
              <p className="mt-8 md:mt-12">
                <Button size="lg">Register Now</Button>
              </p>
              <p className="mt-4 text-gray-600">August xx - September yy, 2020</p>
            </div>
            <div className="lg:w-1/2">
              <Img fluid={data.logo1.childImageSharp.fluid} />
            </div>
          </div>
        </section>
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-3xl font-semibold leading-tight">Some tagline about frosh</h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                Some exansion on those thoughts?? We are all best friends, except this year it's
                online!
              </p>
            </div>
          }
          secondarySlot={<Img fluid={data.frosh1.childImageSharp.fluid} />}
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">Check out last year</h3>
              <p className="mt-8 text-xl font-light leading-relaxed">It was pretty great.</p>
            </div>
          }
          secondarySlot={
            <iframe
              title="Science Frosh 2019 Video"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/s9Wx3ymS1Qk"
              allow="autoplay; encrypted-media; picture-in-picture"
            />
          }
        />
        <section id="stats" className="py-20 lg:pt-32">
          <div className="container mx-auto text-center">
            <LabelText className="text-gray-600">Our customers get results</LabelText>
            <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
              <div className="w-full sm:w-1/3">
                <StatsBox primaryText="+100%" secondaryText="Stats Information" />
              </div>
              <div className="w-full sm:w-1/3">
                <StatsBox primaryText="+100%" secondaryText="Stats Information" />
              </div>
              <div className="w-full sm:w-1/3">
                <StatsBox primaryText="+100%" secondaryText="Stats Information" />
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="py-20 lg:py-40">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:-mx-3">
              {customerData.map(customer => (
                <div key={customer.customerName} className="flex-1 px-3">
                  <CustomerCard customer={customer} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
          <h3 className="text-5xl font-semibold">Ready for the best week of your life?</h3>
          <p className="mt-8 text-xl font-light">Sign up now blah blah blah</p>
          <p className="mt-8">
            <Button size="xl">Register</Button>
          </p>
        </section>
      </Layout>
    )}
  />
);
