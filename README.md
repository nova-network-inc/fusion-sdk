# Fusion Public SDK
The Fusion Public SDK is open-source and held separately from Fusion, which isn't open-source. It is meant to assist developers when interacting with Fusion Protocol, and can also be modified to serve as a base for other AMM-based protocols on Nova Network and Nebula Testnet. It can be used in any environment that can execute JavaScript, such as websites, ReactJS apps, and node scripts.

### Disclaimer
The latest version of the SDK is used in the production environment of Fusion, but is still considered a software in Alpha stage, which may contain bugs or have significant changes between versions. If you have any questions on how to use this SDK, we recommend you to reach our in the ```developers-chat``` channel of our Discord Server. You can use https://discord.gg/novanetwork to join the server if you are not a member yet.

## Build & Installation

### Building Fusion SDK
The first thing to do is to clone, install, and build your own instance of Fusion SDK. To do that, you can follow the steps below:

1. Clone the latest version of the Github repository.
```shell
git clone https://github.com/nova-network-inc/fusion-sdk.git && cd fusion-sdk
```

2. Install all the dependencies.
```shell
yarn install
```

3. Build your package.
```shell
yarn build
```

Now you will have your SDK package built inside your ```/dist``` directory. ⚠ If you're building on a Windows environment, you will need to manually delete any pre-existing ```/dist``` folder before building your package, otherwise the build process will fail.

### Installing Fusion SDK

This SDK is based on the UniswapV2 SDK, and although this will likely change in future updates, for now its installation involves manually altering the ```@uniswap/v2-sdk``` dependency by replacing the default files present in it with your custom Fusion SDK build.

First you will need to install Uniswap V2 SDK package, and we recommend you doing it via ```npm``` as shown below:

```shell
npm i --save-dev @uniswap/v2-sdk
npm i --save-dev @uniswap/sdk-core
```

If you are using a boilerplate or a pre-existing front-end based on Uniswap V2, it is likely that the dependencies above will be already part of your installation package. If so, you can skip this step.

Once you have all dependencies in place, navigate to ```@uniswap/sdk``` directory inside your ```node_modules``` folder, and replace the content inside the ```/dist``` folder with the content of your own ```/dist``` folder that you have built previously.

If you have followed all the steps correctly, you should have your SDK installed and ready to be used.

## Usage

```shell
import { Pool } from '@uniswap/sdk'
```

## Currently Supported Networks

87: Nova Network  
107: Nebula Testnet  
250: Fantom Opera  

You can further add new networks by changing the SDK manually.
