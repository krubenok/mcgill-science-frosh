import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout/Layout'

export default () => (
  <Layout>
    <div className='application'>
      <Helmet>
        <html lang='en' amp />
        <meta charSet='utf-8' />
        <title>Froshters, Inc. | Schedule</title>
        <link rel='canonical' href='https://susfrosh.com/schedule' />
      </Helmet>
    </div>
    <section className='container mx-auto px-4 pt-8 mb-20 space-y-4 text-center max-w-screen-lg mx-auto'>
      <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold'>
        Stay tuned for the 2020 schedule and information on all events
      </h1>
    </section>
  </Layout>
)
