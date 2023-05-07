import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Mauricio Trevino</title>
        <meta
          name="description"
          content="I’m Mauricio Trevino. I live in Monterrey, Mexico and this text does not talk about work."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Mauricio Trevino. I live in Monterrey City, this is me:
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              When I’m not working, you can usually find me doing something active
               like swimming or playing golf. I also love going to the gym and keeping 
               myself fit. If I’m not being active, you might find me in the kitchen, 
               where I love to cook and experiment with new recipes. I’m particularly 
               good at making carne asada, and I love to host friends and family for dinner parties.
              </p>
              <p>
              Another thing that I’m passionate about is technology,
               which is why I started my own TikTok channel where I share my 
               thoughts and opinions about the latest gadgets and tech news.
              </p>
              <p>
              I grew up in Monterrey, Nuevo Leon, and I’ve been influenced by many successful marketers,
               business people, startup founders, and content creators. 
               I believe that my ability to understand what people want and deliver something amazing has 
               been shaped by these experiences.
              </p>
              <p>
              For me, sensibility, gratitude, humility, prudence, respect, and responsibility are the most important values in life. 
              I strive to live my life according to these values and treat others with kindness and compassion.
              </p>
              <p>
              Im currently facing a big challenge: <em>pivoting into web development.</em> 
              I’ve always wanted to learn how to code, so I’ve given myself six months to learn everything I need to know.
              My goal is to be able to build solutions on my own in the near future.
              </p>
              <p>
              Thanks for stopping by and getting to know me a little better!
              </p>
              <p>


              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:mauricio.trevinon91@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                mauricio.trevinon91@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
