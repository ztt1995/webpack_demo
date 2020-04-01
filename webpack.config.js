var path = require('path');

module.exports = {
    entry : {
        "webpack_app":"./runoob1.js"
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}