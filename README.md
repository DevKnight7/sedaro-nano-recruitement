# sedaro-nano-recruitement
This code simulates the propagation of agents in a universe over discrete time steps. It initializes the state of the agents at time 0 and then updates their state at each time step by calling the propagate function. The simulation runs for 500 time steps.

* A python script generates a data.js file. 

* This generated file is then used by the React App to plot the graph using the Plotly package.

* The whole app is then containerized by the Dockerfile.

#### To build docker image

``` docker build -t sedaro-nano .```

#### To run docker container

``` docker run -p 3000:3000 sedaro-nano```

### Other possibilities:

Customize the app to take user input and use it for generating `n` number of data points for plotting.

We can move QRangeStore to some other file and make a package for it and reuse it in some other applications, it will help us to make our code extensible.

Progagate Method is for a specific algo, we can make it generic by passing them few parameters and based on those we have update its behaviour.
