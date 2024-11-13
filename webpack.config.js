const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "angularMicroApp",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },
        remotes: {
          reactApp: 'reactApp@http://localhost:3000/remoteEntry.js'
          // reactApp: 'http://localhost:3000/remoteEntry.js'
        },

        // For remotes (please adjust)
        // name: "angularMicroApp",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        // shared: share({
        //   "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        //   "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        //   "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        //   "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

        //   ...sharedMappings.getDescriptors()
        // })
        
    }),
    sharedMappings.getPlugin()
  ],
};

// const { ModuleFederationPlugin } = require('webpack').container;

// module.exports = {
//   plugins: [
//     new ModuleFederationPlugin({
//       name: 'angularApp',
//       // library: { type: 'module' },
//       remotes: {
//         reactApp: 'reactApp@http://localhost:3000/remoteEntry.js',
//       },
//       shared: {
//         '@angular/core': { singleton: true, strictVersion: true },
//         '@angular/common': { singleton: true, strictVersion: true },
//         '@angular/router': { singleton: true, strictVersion: true },
//       },
//     }),
//   ],
// };
