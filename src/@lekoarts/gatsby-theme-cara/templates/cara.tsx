import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero"
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact"

const Cara = () => (
    <Layout>
        <Parallax pages={1}>
            <Hero offset={0} factor={1} />
            {/* <Contact offset={1} factor={1} /> */}
        </Parallax>
    </Layout>
)

export default Cara
