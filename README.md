# next-webgl

Using OpenGL like it's 2018.

This app demonstrates how to use WebGL with React.
Modern JavaScript and hot reloading makes it perfect for fast prototyping and online demos.
It is easily deployable to a static web hosting, thanks to Next.js export feature.

## Stack:

 - [Three.js](https://threejs.org/)
 - [React](https://reactjs.org/)
 - [Next.js](https://github.com/zeit/next.js/)


## Getting started

Install [Node.js](https://nodejs.org/en/download/) and add its `bin/` directory to `$PATH`.
Make sure `node` and `npm` are available from the command line:

```
$ node --version
v10.1.0

$ npm --version
6.0.1
```

Install/update npm and yarn:

```
npm install -g npm yarn
```

Clone this repository, `cd` into it and install the dependencies with: 

```
cd next-webgl/
yarn install
```

For convenience, add `./node_modules/.bin` to `$PATH`:

```
export PATH=./node_modules/.bin:${PATH}
```

Run Next.js development server:

```
next
```

Open `http://localhost:3000` in your browser. You should see a spinning cube.


## Hacking

Open file `components/Scene.js` and find function `renderScene()`.

From here you can choose between (and mix!) two approaches:
 
 - using Three.js classes via `THREE` and `renderer`, a [Three.js WebGLRenderer object](https://threejs.org/docs/#api/renderers/WebGLRenderer) for
 high-level functionality (scene, meshes, material lights)

    Example: 
    
    For now the cube only rotates around Y axis.
    Add following line to `renderScene()`:

    ```
    this.cube.rotation.x += 0.01
    ```

    Save the file. Cube now rotates around both, X and Y axes. 
    The changes are being picked up instantaneously, you don't have to restart 
    the server or even to reload the page in browser!


 - using `gl`, a [WebGLRenderingContext of the underlying canvas element](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
 for raw GL functionality (buffers, shaders and uniforms). 

    Example: 
    
    Currently, the background color is set to dark blue.
    
    Add line to `renderScene()`:
    
    ```
    gl.clearColor(0.2, 0.01, 0.05, 1.0)
    ```

    Save the file. Now background is deep red. Again, no reloading is required.


## Production

For production (release build for end users), build with `next build`. The result will be in the directory `.next/`.
Run server with `next start`. Read Nex,js documentation on how to run it with a custom server (e.g. Express)

You may export the app into static HTML with `next export` to deploy on static hosting, 
like Github Pages. The result will be in directory `out/`. Push the contents of this 
directory to `gh-pages` branch of yout Github repository or just copy it into website root of your Apache or Nginx.


## TODO

 - Implement state management via Redux
 - Add some interactivity via React components
 - Add text overlay (FPS etc.)
 - Add mouse and keyboard controls
 - Add WebASM modules
