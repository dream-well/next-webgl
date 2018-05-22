import React from 'react'
import NoSSR from 'react-no-ssr'

import Scene from '../components/Scene'
import Loading from '../components/Loading'

import '../styles/main.scss'

/**
 * Implements main page
 */
const Index = () => {

  // Wrap WebGL-related components with NoSSR to disable server-side rendering
  return (
    <NoSSR onSSR={<Loading/>}>
      <Scene/>
    </NoSSR>
  )
}

export default Index
