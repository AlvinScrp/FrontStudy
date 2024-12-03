const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FirstPlugin = require('./webpack-firstPlugin.js');
console.log('__dirname', __dirname);

// const isProduction = process.env.NODE_ENV === 'production';
module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  console.log('isProduction', argv.mode, isProduction);

  return {
    // mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      filename: '[name].[hash:8].js',
      path: path.resolve(__dirname, 'dist'), // 输出路径
      clean: true, // 清理输出目录
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(jpe?g|png|gif)$/i, //图片文件
          type: 'asset/resource', // 使用 asset/resource 处理图片
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.vue$/,
          use: ['vue-loader'],
        },
        // {
        //   test: /\.js$/,
        //   use: path.resolve(__dirname, 'webpack-drop-console.js'),
        // },
      ],
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['*', '.js', '.json', '.vue'],
    },

    plugins: [
      new FirstPlugin({
        outputPath: path.resolve(__dirname, 'dist'), // 可选：指定输出路径
      }),
      new VueLoaderPlugin(),
      // new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash:8].css',
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'public/image', to: 'image' }],
      }),

      // new webpack.DefinePlugin({
      //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      // }),
    ],

    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      // contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      hot: true, // 启用热模块替换
      open: false, // 自动打开浏览器
    },
  };
};
