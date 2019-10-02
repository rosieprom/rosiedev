import React from 'react'
import "../styles/index.css"
import Footer from './Footer';
import Head from 'next/head';
//import { initGA, logPageView } from '../utils/analytics'

export default class Layout extends React.Component {
//   componentDidMount () {
//     if (!window.GA_INITIALIZED) {
//       initGA()
//       window.GA_INITIALIZED = true
//     }
//     logPageView()
//   }

  constructor(props) {
    super(props);
    this.data = props;
  }

  render () {
    return (
      <div className="flex flex-col min-h-screen min-w-full">
        <Head>
            <meta charset="utf-8" />
            <link rel="icon" type="image/png" href="/static/favicon.ico" />
            <link rel="apple-touch-icon" href="/static/favicon.ico" />
            <link rel="stylesheet" href="" />

            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="An aspiring Full Stack developer" />
            <meta name="robots" content="all" />
            <meta name="googlebot" content="all" />
            <meta property="og:image" content="" />  

            {/* Twitter meta tags */}
            <meta name="twitter:card" content="Rosalie Prom - Aspiring full-stack developer" />
            <meta name="twitter:site" content="@rosalie.dev" />
            <meta name="twitter:title" content="Rosalie Prom | @rosalie.dev" />
            <meta name="twitter:description" content="A Junior Front-End Developer, Aspiring Full-Stack Developer." />

            {/* Facebook meta tags */}
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Rosalie Prom | Software Developer"/>
            <meta property="og:site_name" content="Rosalie Prom" />
            <meta property="og:url" content="https://www.rosalie.dev" />
            <title>Rosalie Prom</title>
        </Head>
        <main className="min-w-full sm:min-w-full md:min-w-full lg:min-w-full xl:min-w-full">
          {this.data.children}
        </main>
        <Footer />
      </div>
    )
  }
}