import React from 'react'

import Document, { Head, Main, NextScript } from 'next/document'

/**
 * Implements the skeleton of the HTML page
 */
class MyDocument extends Document {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <html>
        <Head>
          <meta httpEquiv='x-ua-compatible' content='ie=edge,chrome=1'/>
          <meta name='viewport'
            content='width=device-width, initial-scale=1.0, shrink-to-fit=no'/>

          <link rel="stylesheet" href='/_next/static/style.css'/>
        </Head>

        <body>
          <Main/>
          <NextScript/>
        </body>

        {/*language=CSS*/}
        <style jsx global>{`
          #__next {
            width: 100vw;
            height: 100vh;
          }
        `}</style>
      </html>
    )
  }
}

export default MyDocument
