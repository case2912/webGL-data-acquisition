import typescript from 'rollup-plugin-typescript';

export default {
    entry: './src/ts/client.ts',
    dest: './dist/bundle.js',
    format: 'es6',
    sourceMap:true,
    plugins: [
        typescript()
    ]
}
