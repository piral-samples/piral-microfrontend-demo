[![Piral Logo](https://github.com/smapiot/piral/raw/develop/docs/assets/logo.png)](https://piral.io)

# [Piral Sample](https://piral.io) &middot; [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/smapiot/piral/blob/main/LICENSE) [![Gitter Chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/piral-io/community)

> piral-microfrontend-demo

:zap: A demo for microfrontend webshop product page using Piral. :rocket:

**[View the demo online!](https://mife-demo.florian-rappl.de/products)**

You can visit this demo at [tractor.samples.piral.cloud/](https://tractor.samples.piral.cloud/).

## Prerequisites

For running the code you'll need Node.js with NPM. Nothing else is required.

Editing the code should work with convenience in any IDE capable of dealing with TypeScript. Personally, I've used Visual Studio Code.

## Installation

Each subdirectory contains a Node project and thus needs to be set up correctly, e.g., (for the `app-shell`):

```sh
cd app-shell
npm i
```

Alternatively, use the `./install.sh` script:

```sh
./install.sh
```

## Running

First, make sure you have access to a pilet feed. In the simplest case clone the [sample feed repository](https://github.com/smapiot/sample-pilet-service) and follow the instructions for running.

Start the debug version of the `app-shell`:

```sh
cd app-shell
npm start
```

You should see an empty page (with a red rectangle).

Now open another shell and publish the pilets:

```sh
./publish.sh
```

The upload assumes that the pilet feed service is running at `http://localhost:9000/api/v1/pilet`. The used API Key is one of the standard ones. If these assumptions are not correct you'll need to correct the settings.

For simplicity, you can also just use the following command (required: `install.sh` must have been run):

```sh
./run.sh
```

This will clone, install, build, and run a sample feed service. Additionally, everything else will be build, published, and started.

## License

Piral and this sample code is released using the MIT license. For more information see the [license file](./LICENSE).
