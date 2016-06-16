import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
    dest: 'dest/index.bundle.js',
    entry: 'src/index.js',
    format: 'iife',
    plugins: [
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: ['es2015-rollup', 'stage-0', 'react']
        }),
        commonjs({
            exclude: 'node_modules/process-es6/**',
            include: [
                'node_modules/fbjs/**',
                'node_modules/object-assign/**',
                'node_modules/react/**',
                'node_modules/react-dom/**'
            ]
        }),
        globals(),
        nodeResolve({
            browser: true,
            main: true,
            jsnext: true
        })
    ],
    sourceMap: true
}
