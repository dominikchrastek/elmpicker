const path              = require( "path" );
const webpack           = require( "webpack" );
const merge             = require( "webpack-merge" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const autoprefixer      = require( "autoprefixer" );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );
const CopyWebpackPlugin = require( "copy-webpack-plugin" );
const entryPath         = path.join( __dirname, "src/static/index.js" );
const outputPath        = path.join( __dirname, "dist" );


// determine build env
const TARGET_ENV = process.env.npm_lifecycle_event === "build" ? "production" : "development";
const outputFilename = TARGET_ENV === "production" ? "[name]-[hash].js" : "[name].js"

// common webpack config
const commonConfig = {

  output: {
    path:       outputPath,
    filename:   `static/js/${outputFilename}`,
    publicPath: "/"
  },

  resolve: {
    extensions: [".js", ".elm"]
  },

  module: {
    rules: [
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        use:  "file-loader"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/static/index.html",
      inject:   "body",
      filename: "index.html"
    })
  ]

}

// additional webpack settings for local env (when invoked by "npm start")
if ( TARGET_ENV === "development" ) {
  console.log( "Serving locally...");

  module.exports = merge( commonConfig, {

    entry: [
      "webpack-dev-server/client?http://localhost:8080",
      entryPath
    ],

    devServer: {
      // serve index.html in place of 404 responses
      historyApiFallback: true,
      contentBase: "./src",
    },

    module: {
      rules: [
        {
          test:    /\.elm$/,
          exclude: [/elm-stuff/, /node_modules/, /Stylesheets\.elm$/],
          use: [
            "elm-hot-loader",
            "elm-webpack-loader"
          ]
        },
        {
          test: /Stylesheets\.elm$/,
          use: [
            "style-loader",
            "css-loader",
            "elm-css-webpack-loader"
          ]
        }
      ]
    }

  });
}

// additional webpack settings for prod env (when invoked via "npm run build")
if ( TARGET_ENV === "production" ) {
  console.log( "Building for prod...");

  module.exports = merge( commonConfig, {

    entry: entryPath,

    module: {
      rules: [
        {
          test:    /\.elm$/,
          exclude: [/elm-stuff/, /node_modules/, /Stylesheets\.elm/],
          use:     "elm-webpack-loader"
        },
        {
          test: /Stylesheets\.elm$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              "css-loader",
              "elm-css-webpack-loader"
            ]
          })
        }
      ]
    },

    plugins: [
      new CopyWebpackPlugin([
        {
          from: "src/static/img/",
          to:   "static/img/"
        },
        {
          from: "src/favicon.ico"
        }
      ]),

      new webpack.optimize.OccurrenceOrderPlugin(),

      // extract CSS into a separate file
      new ExtractTextPlugin( "static/styles/[name]-[hash].css"),

      // minify & mangle JS/CSS
      new webpack.optimize.UglifyJsPlugin({
          minimize:   true,
          compressor: { warnings: false }
          // mangle:  true
      })
    ],

  });
}
