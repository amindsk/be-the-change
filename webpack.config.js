const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        //Where webpack shall start
        entry: './src/app.js',
        //Where webpack shall bundle JavaScript code
        output: {
            //Path of the output bundled file
            path: path.join(__dirname, 'public', 'dist'),
            //Filename containing the output bundled code
            filename: 'bundle.js'
        },
        //To tell webpack which loader shall it use
        module: {
            //Define loaders
            rules: [{
                //Using babel loader to compile ES6 code
                loader: 'babel-loader',
                //Target only JavaScript (.JS) files with babel-loader
                test: /\.js$/,
                //Don't target JavaScript files contained in the node_modules folder
                exclude: /node_modules/
            }, {
                //Target only SASS (.scss) or CSS (.css) (we need .css for noramlize.css which provides cross browser compatibility to our styles) files with sass-loader
                test: /\.s?css$/,
                //User css-loader and sass-loader to compile sass code wth CSSExtract to compile css while building project
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
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
        },
        plugins: [
            CSSExtract
        ],
        //Adding source map targeting development only, having fast rebuild speed
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        //Setting webpack dev server
        devServer: {
            //Setting the directory to host on the server
            contentBase: path.join(__dirname, 'public'),
            //To return index for all of the routes
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
};