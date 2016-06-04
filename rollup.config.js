import typescript from 'rollup-plugin-typescript';

export default {
    entry: './src/ts/controller.ts',
    dest: './dest/app.js',
    format: 'es6',
    sourceMap:true,
    plugins: [
        typescript()
    ]
}
