import npm from "rollup-plugin-npm";
import cjs from "rollup-plugin-commonjs";
export default
{
  entry:"./client/index.js",
  format:"es6",
  plugins:[npm({
    builtins:true,
    main:true,
    jsnext:false,
    browser:true
  }),cjs()],
  dest:"./bundle.js"
}
