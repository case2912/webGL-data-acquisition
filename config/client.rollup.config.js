import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import typescript from 'rollup-plugin-typescript';
export default {
    entry: 'src/ts/client.ts',
    dest: 'dest/client.bundle.js',
    plugins: [
        typescript(),
        commonjs(),
        babel({
            presets: ['es2015-rollup']
        }),
        uglify()
    ],
    sourceMap: true
}
