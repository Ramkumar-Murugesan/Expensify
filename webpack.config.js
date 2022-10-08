

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'test') {
    require('dotenv').config({path: '.env.test'})
}else if(process.env.NODE_ENV === 'development') {
    require('dotenv').config({path: '.env.development'})
}

module.exports = (env) => {
    console.log('env  ', env);
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin("styles.css");

    return {
    entry: './src/app.js',   // use to register the webpack entry file without that webpack won't work 
    output: {               // use to register the webpack output path and file name without that webpack won't work
        path: path.join(__dirname, 'public', 'dist'), // absoulte path
        filename: 'bundle.js'                        // output file name that we need to include as script in index.html file
    },
    module: {                                        // help us to load module 
        rules: [{ 
            test: /\.js$/,                          // here test is use to scan expression matching files
            use: 'babel-loader',                    // here babel-loader is used convert our jsx to old js and also automatically read the .babelrc file
            exclude: /node_modules/                 // here exclude use to remove files from scanning
         }, {
            test: /\.s?css$/,                        // scan only css and scss file --- ? => like OR condition --- $ => all file matching the exact expression 
            use: CSSExtract.extract({
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true         // without this css code show in single style.css file to avoid that we need this
                        }
                    }
                 ]
            })
         }],  
      },
    plugins: [                                      // whenever we are using a 3rd party webpack plugins then we need to add something to the plugins array. so it will work with your existing webpack built
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
        'process.env.MEASUREMENT_ID': JSON.stringify(process.env.MEASUREMENT_ID),
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',                // changing eval-cheap-source-map to inline-source-map because eval-cheap-source-map is not working properly for css files
    devServer: {
        contentBase: path.join(__dirname, 'public'),  // to define live-server, defined path should be same as output path otherwise the auto-reload is not working and also some functional not working properly if the path is not same 
        historyApiFallback: true,                      // avoid entire page redirect i.e when we route from one component to another first it will go to server side routing to avoid that we use this. will redirect to index.html file and then routing js file
        publicPath: '/dist/'
    }
    // module: {
    //     rules: [{
    //         use: 'babel-loader',
    //         test: '/\.js$/',                         // found error here noted: remove double quotes because its expression
    //         exclude: /node_modules/
    //         // use: {
    //         //     loader: 'babel-loader',
    //         //     // options: {
    //         //     //     presets: ['@babel/preset-env', '@babel/preset-react']
    //         //     // }
    //         // }

    //     }]
    // }
};
}


// replacing with function with some advantages are have 2 arguments to define env (to access environment variables) and args

// module.exports = {
//     entry: './src/app.js',   // use to register the webpack entry file without that webpack won't work 
//     output: {               // use to register the webpack output path and file name without that webpack won't work
//         path: path.join(__dirname, 'public'), // absoulte path
//         filename: 'bundle.js'                        // output file name that we need to include as script in index.html file
//     },
//     module: {                                        // help us to load module 
//         rules: [{ 
//             test: /\.js$/,                          // here test is use to scan expression matching files
//             use: 'babel-loader',                    // here babel-loader is used convert our jsx to old js and also automatically read the .babelrc file
//             exclude: /node_modules/                 // here exclude use to remove files from scanning
//          }, {
//             test: /\.s?css$/,                        // scan only css and scss file --- ? => like OR condition --- $ => all file matching the exact expression 
//             use: [                                  // use have array format which allow us to define more than one loader 
//                'style-loader',                      // Creates `style` nodes from JS strings
//                'css-loader',                        // Translates CSS into CommonJS
//                'sass-loader'                        // Compiles Sass to CSS  
//             ]
//          }],  
//       },
//     devtool: 'eval-cheap-source-map',                // it will refer our own file code instead of wepback output file (bundle.js) in browser developer tools
//     devServer: {
//         contentBase: path.join(__dirname, 'public'),  // to define live-server, defined path should be same as output path otherwise the auto-reload is not working and also some functional not working properly if the path is not same 
//         historyApiFallback: true                      // avoid entire page redirect i.e when we route from one component to another first it will go to server side routing to avoid that we use this. will redirect to index.html file and then routing js file
//     }
//     // module: {
//     //     rules: [{
//     //         use: 'babel-loader',
//     //         test: '/\.js$/',                         // found error here noted: remove double quotes because its expression
//     //         exclude: /node_modules/
//     //         // use: {
//     //         //     loader: 'babel-loader',
//     //         //     // options: {
//     //         //     //     presets: ['@babel/preset-env', '@babel/preset-react']
//     //         //     // }
//     //         // }

//     //     }]
//     // }
// };