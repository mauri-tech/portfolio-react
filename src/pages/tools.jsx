import Head from 'next/head';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';
import sectionData from "../lib/data.js";

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Spencer Sharp</title>
        <meta
          name="description"
          content="My Favorite Tools for Building amazing things."
        />
      </Head>
      <SimpleLayout
        title="My Favorite Tools for Building amazing things 🚀 "
        intro="As a front-end developer with a strong passion for UX and UI design, I've had the opportunity to work with a variety of tools that help me bring my ideas to life. From powerful frameworks to intuitive design tools, I've curated a list of my favorite software and gadgets that keep me productive and inspired. Whether you're a fellow developer or just someone looking to improve your digital toolkit, this list has got you covered✌️"
      >
        <div className="space-y-20">
          {sectionData.map((section) => (
            <ToolsSection key={section.title} title={section.title}>
              {section.information.map((subsection) => (
                <Tool key={subsection.name} title={subsection.name}>
                  {subsection.description}
                </Tool>
              ))}
            </ToolsSection>
          ))}
        </div>
      </SimpleLayout>
    </>
  );
}


{/* 
<ToolsSection title="Languages">
  <Tool title="HTML">
    A markup language used for creating web pages and applications.
  </Tool>
  <Tool title="CSS">
    A style sheet language used for describing the presentation of web pages.
  </Tool>
  <Tool title="JavaScript">
    A high-level programming language used for creating interactive web pages and applications.
  </Tool>
  <Tool title="Node.js">
    A JavaScript runtime built on Chrome V8 JavaScript engine for building scalable network applications.
  </Tool>
</ToolsSection>

<ToolsSection title="Design Tools">
  <Tool title="Figma">
    A collaborative interface design tool for creating and sharing interactive prototypes and design systems.
  </Tool>
  <Tool title="Canva">
    An online graphic design platform for creating custom designs for print and web.
  </Tool>
  <Tool title="Codux">
    A UI design tool for creating design systems and pattern libraries.
  </Tool>
  <Tool title="Midjourney">
    A UX design tool for creating and testing user flows and prototypes.
  </Tool>
</ToolsSection>

<ToolsSection title="Frameworks/Libraries">
  <Tool title="React">
    A powerful JavaScript library for building user interfaces.
  </Tool>
</ToolsSection>

<ToolsSection title="CSS Frameworks">
  <Tool title="Tailwind CSS">
    A utility-first CSS framework for quickly building custom designs.
  </Tool>
</ToolsSection>

<ToolsSection title="Version Control">
  <Tool title="Git">
    A distributed version control system for tracking changes in source code.
  </Tool>
  <Tool title="GitHub">
    A web-based platform for hosting and collaborating on Git repositories.
  </Tool>
</ToolsSection>

<ToolsSection title="Databases">
  <Tool title="MySQL">
    A popular open-source relational database management system.
  </Tool>
</ToolsSection>

<ToolsSection title="Automation Tools">
  <Tool title="Zapier">
    A web-based automation tool for connecting apps and automating workflows.
  </Tool>
  <Tool title="GPT">
    An AI language model for generating natural language text.
  </Tool>
</ToolsSection>

<ToolsSection title="Marketing Tools">
  <Tool title="Klaviyo">
    An email marketing and SMS platform for driving customer engagement and revenue growth.
  </Tool>
  <Tool title="Mailchimp">
    An all-in-one marketing platform for creating and automating email campaigns, social ads, landing pages, and more.
  </Tool>
  <Tool title="Google Ads & Meta Ads">
    Advertising platforms for driving website traffic and conversions through paid search and display advertising.
  </Tool>
</ToolsSection>

<ToolsSection title="Selling Tools">
  <Tool title="Salesforce">
    A cloud-based CRM platform for managing sales, customer service, and marketing automation.
  </Tool>
  <Tool title="HubSpot">
    A CRM and marketing automation platform for managing and scaling inbound marketing campaigns.
  </Tool>
</ToolsSection>

<ToolsSection title="Web Builders">
  <Tool title="Framer">
    A prototyping and design tool for creating interactive UI and UX designs.
  </Tool>
  <Tool title="Webflow">
    A web design and development platform for creating responsive websites without code.
  </Tool>
</ToolsSection> */}
