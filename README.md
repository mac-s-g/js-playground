#### js-playground

experimental javascript creations:

 * [sun animation](https://mac-s-g.github.io/js-playground/sun-animation/)
 * [solar system](https://mac-s-g.github.io/js-playground/orbit/)


#### run the dev server

*note: `sudo` may be required for docker interaction based on your installation config.*

To run the website in a local environment:

 1. make sure [Docker is installed](https://docs.docker.com/engine/installation/)
 2. clone this repository
     * `git clone git@github.com:mac-s-g/js-playground.git`
 3. build the docker container
     * `cd js-playground/`
     * `./docker/build-container.sh`
 4. run the development server
     * `./docker/dev-server.sh`
 5. navigate to http://localhost:3300/ in your web browser

 After completing the steps above, you'll have [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) running in a Docker container with hot-reloading enabled.  Try updating some [source code](https://github.com/mac-s-g/js-playground/tree/master/src/js).  Changes will be reflected in your browser after saving.

 *notes: if you change the dependencies in `package.json`, make sure you rebulid the container with `./docker/build-container.sh`.*

#### run the build

The build runs in a container and outputs files into `js-playground/dist/`.  Here's how to instantiate the build process:

1. `cd js-playground/`
2. `./docker/build.sh`
3. Verify the result by exploring the output in your web browser:
     * `cd dist/`
     * open `index.html` in a web browser
4. If your changes look good, send me a pull request!

#### Without Docker

I'd recommend using docker for development because it enforces environmental consistency.

If you'd like to contribute without docker, you can use the following workflow to run the dev-server:

```
# clone this repository
git clone git@github.com:mac-s-g/js-playground.git
# install dependencies
npm install
# run the dev server at http://localhost:3100/
npm run dev:hot
```

and run the build with:

```
# run the build
npm run build
# copy relevant files into dist dir
cp ./src/images/favicon.ico README.md CNAME ./dist/
```
