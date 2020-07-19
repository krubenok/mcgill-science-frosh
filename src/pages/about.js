import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        cover: file(relativePath: { eq: "cover.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        frosh2: file(relativePath: { eq: "frosh-2.jpg" }) {
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
          <Img fluid={data.cover.childImageSharp.fluid} />
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">About Frosh</h1>
          <p className="text-m lg:text-l mt-6 font-light">
            <b>FROSHTERS, INC</b> is the 2020 Orientation Week for students entering the McGill
            Faculty of Science in the 2020-2021 academic year. Due to the McGill Fall 2020 semester
            being online, the Faculty of Science will also be moving Frosh to a virtual platform.
            When students register for Frosh, they're signing up for four days of engaging virtual
            events with the goal of introducing students to the McGill and Montreal community. Frosh
            will be dedicated to showcasing McGill campus and student life while helping students
            foster online connections with other McGill students in a safe and inclusive
            environment. No matter where our froshies are this year they will have the ability to
            meet the McGill community, become comfortable with Montreal, and make long-lasting
            friends. With the guidance of over 120 Frosh Leaders (upper year McGill students who
            undergo intensive online skills and leadership training in preparation for Frosh),
            Froshters, Inc. is an incoming student's chance to experience what McGill has to offer.
            We are extremely excited to provide an experience that will be accommodating for all
            students. The Science coordinators, leaders, and community can’t wait to see you August
            27th - 30th for this once in a lifetime opportunity!
          </p>
        </section>
        <section className="container mx-auto px-4 my-20 pt-8 space-y-4">
          <SplitSection
            primarySlot={<Img fluid={data.frosh2.childImageSharp.fluid} />}
            secondarySlot={
              <div className="lg:pl-32 xl:pl-48">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
                  Frequently Asked Questions
                </h1>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl">
                  <i>We're here to help.</i>
                </h2>
              </div>
            }
          />
          <h3 className="text-xl lg:text-2xl xl:text-3xl">General</h3>
          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>What is Frosh?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Frosh is your four day introduction to McGill University and more specifically,
                  the Faculty of Science through engaging virtual events. Frosh will be dedicated to
                  showcasing McGill campus and student life while helping students foster online
                  connections with other McGill students in a safe and inclusive environment. We
                  encourage all incoming McGill students to participate for the chance to meet other
                  incoming students from around the world. Frosh is your opportunity to become more
                  comfortable with Montreal, ask older students questions about life at McGill and
                  learn about the programs that the Faculty of Science has to offer.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>When is Frosh?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Science Frosh 2020 will begin Thursday, August 27th and run to Sunday, August
                  30th. Classes don’t begin until Tuesday, September 2nd so Frosh is your chance to
                  have fun, get familiar with Montreal and McGill campus, and make friends before
                  the studying begins!
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>What kind of activities will Frosh have?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Frosh will consist of a variety of exciting interactive events and bonding
                  activities. These events will be catered to multiple time zones and students will
                  be led through all Frosh activities by their Frosh Leaders. Larger faculty events
                  will include a virtual concert and comedy night, interactive FAQ session, and
                  trivia night. During the four days there will also be multiple organized
                  opportunities to bond with smaller groups of fellow science peers.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>How do I register?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Register through the registration button on our homepage.Your Frosh swag will be
                  mailed directly to your house just in time for frosh. We strongly encourage you to
                  register early as spots fill up quickly! Remember that your spot is not guaranteed
                  until your payment has been processed so please be sure to check your emails for
                  when payment opens.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Why should I do Frosh?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Frosh week is an invaluable start to your McGill experience. With the Fall 2020
                  semester being online, Frosh will be one of the main ways to meet fellow entering
                  Science students and make connections. Whether they be study buddies or lifelong
                  friends, the connections you make at Frosh can help you get the most out of your
                  time at McGill. You won’t want to miss out on the memories and friendships that
                  Frosh week creates!
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How much is Frosh and where/when do we pay?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  The price for Science Frosh 2020 is $30 + processing fees, which grants you access
                  to four days of interactive online events and activities. Frosh actually costs us
                  much more than $30 per participant, but thanks to our incredible partners we can
                  offer you an incredible Frosh experience at the price we do. Here are some
                  examples of what’s included with your Frosh bracelet:
                </p>
                <ul>
                  <li>
                    Awesome swag including a hat, t-shirt, mug, stickers, and temporary tattoos!
                  </li>
                  <li>
                    A virtual Montreal Crawl with insights into favourite McGill spots and a chance
                    to win prizes!
                  </li>
                  <li>Virtual games nights, escape rooms, and concerts</li>
                  <li>
                    A chance to become oriented and welcomed into the McGill and Montreal
                    communities!
                  </li>
                  <li>Full communications support</li>
                  <li>Mentorship from over 120 upper year McGill students</li>
                  <li>The best four days of your life (We aren’t joking!)</li>
                  <li>And more!</li>
                </ul>
                <p>
                  If you demonstrate financial need and wish to participate in Science Faculty
                  Frosh, please apply for the Science Frosh Bursary located on our Resources page.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What merchandise is included in the Frosh participation fee?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In your Frosh package you will receive a hat, t-shirt, mug, stickers, temporary
                  tattoos and more!
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>What is the SUS anyway?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  The Science Undergraduate Society (SUS) represents all students in the Faculty of
                  Science (over 5000 students)! Almost like a student government, the SUS is
                  responsible for providing countless events, activities, and services to students,
                  allowing them to enjoy the best possible university experience.
                </p>
                <p>
                  With events ranging from Frosh and Science Games, to Social Sustainability Week
                  and Academia Week, the SUS has earned recognition as an organization that promotes
                  academic excellence within the context of a fun-filled, socially-active community.
                </p>
                <p>
                  The SUS is led by a group of elected students who help organize events and
                  services throughout the academic year — like Frosh!
                </p>
                <p>
                  If you’d like to get more involved in the science faculty or McGill community,
                  check out opportunities at the SUS at{' '}
                  <Link to="https://sus.mcgill.ca">sus.mcgill.ca.</Link>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Who are Frosh Coordinators?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  A group of 14 <b>Frosh Coordinators</b> (upper-year students) spend the summer
                  organizing the four-day event, with responsibilities such as funding Frosh through
                  sponsorships, booking venues, and hiring Frosh Leaders and Staff. During the week
                  they will be <b>wearing blue and white tie dye tanks.</b> If you ever need help
                  before or during Frosh, reach out to a coordinator and they will try their very
                  best to assist you. Don’t be afraid to ask them questions, or just say hi!
                </p>
                <p>
                  This Frosh committee is hired by and overseen by the Vice-President Internal of
                  the Science Undergraduate Society (SUS), which is a group of elected students who
                  organize events and services throughout the academic year.{' '}
                </p>
                <p>
                  If you’d like to be involved in the science faculty or McGill community, and
                  possibly be involved in Frosh next year, check out more opportunities at the SUS{' '}
                  <Link to="https://sus.mcgill.ca">sus.mcgill.ca.</Link>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Who are Frosh Leaders?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  <b>Frosh leaders</b> are McGill Students who have previously participated in Frosh
                  and want to volunteer their time to guide new students through this awesome new
                  experience. They are selected out of a competitive pool of applicants and complete
                  extensive training on harm reduction, online skills, consent, and more!
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Will there be a Winter Frosh/later in-person frosh when quarantine restrictions
                  are lifted?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  The coordinators have discussed having an in person Winter Frosh and this is a
                  possibility. We are working with the McGill administration to determine how
                  realistic this is. However, there are many external factors out of our control, so
                  we cannot confirm if a Winter Frosh will happen.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </section>
        <section className="container mx-auto px-4 my-20 pt-8 space-y-4">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">Land Acknewledgement</h1>
          <p className="text-m lg:text-l mt-6 font-light">
            The SUS acknowledges that McGill is on the traditional territory of the Indigenous
            People, Kanien'keha:ka (Ga-niyen-ge-haa-ga). The Kanien'keha:ka are the keepers of the
            Eastern Door of the Haudenosaunee Confederacy. This island known as Montreal is known as
            Tio’tia:ke (Gio-Jaw-Gé) in the language of the Kanien’kehá:ka, and has historically
            served as a meeting place for other Indigenous nations.
          </p>
          <p className="text-m lg:text-l mt-6 font-light">
            It is not enough to just acknowledge the keepers of this land and McGill’s status as a
            settler-colonial institution. Silence and inaction will only contribute to erasing the
            history, the culture, and the realities of Indigenous people. As such, it is important
            that individuals educate themselves on Indigenous matters and that they apply that
            knowledge to support Indigenous communities. The SUS should actively resist
            (neo)-colonialism in the many forms it takes, and in the diversity of forms that
            resistance can take.
          </p>
        </section>
      </Layout>
    )}
  />
);
