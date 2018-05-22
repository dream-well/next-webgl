import React from 'react'

import * as THREE from 'three'
import Renderer from './Renderer'


/**
 * Implements a 3D scene
 *
 * Functions of this class are to be passed as callbacks to Renderer.
 *
 * Parameters passed to every function are:
 *
 *   - renderer:  Three.js WebGLRenderer object
 *     (https://threejs.org/docs/#api/renderers/WebGLRenderer)
 *
 *   - gl:  WebGLRenderingContext of the underlying canvas element
 *     (https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
 */
class Scene extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  onResize = (renderer, gl, { width, height }) => {
    // This function is called after canvas has been resized.

    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  initScene = (renderer, gl) => {
    // This function is called once, after canvas component has been mounted.
    // And WebGLRenderer and WebGLRenderingContext have been created.

    this.material = new THREE.MeshPhongMaterial({
      color: '#d8d9fd',
      specular: '#ffffff',
    })

    this.scene = new THREE.Scene()

    this.cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), this.material)
    this.cube.position.x = 0
    this.cube.position.y = 0
    this.cube.position.z = 0
    this.scene.add(this.cube)

    const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
    this.scene.add(ambientLight)

    const pointLight = new THREE.PointLight('#ffffff', 1.0)
    pointLight.position.set(5, 10, 5)
    this.scene.add(pointLight)

    this.camera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 1000)
    this.camera.position.z = 4

    renderer.setClearColor('#0d0d1e')
  }

  renderScene = (renderer, gl) => {
    // This function is called when browser is ready to repaint the canvas.
    // Draw your single frame here.

    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01
    renderer.render(this.scene, this.camera)
  }

  render = () => {
    return (
      <Renderer
        onResize={this.onResize}
        initScene={this.initScene}
        renderScene={this.renderScene}
      />
    )
  }
}

export default Scene
