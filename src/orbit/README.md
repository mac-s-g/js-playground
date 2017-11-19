#### Solar System Orbit

Check out the [Demo](https://mac-s-g.github.io/js-playground/orbit/)

Planets are animated with [React Motion](https://github.com/chenglou/react-motion)

Each planet is a spring with 0 damping.  `damping = 0` yields a constant oscillation.

`<StaggeredMotion />` is used to create an offset between x and y spring velocities.  The offset creates an elliptical motion for planets traveling around the sun.

A sine function is synchronized with each spring motion to add size scaling to planets.  Planets get bigger as they move closer and smaller as they move farther away.
