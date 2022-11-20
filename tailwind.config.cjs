const production = !process.env.ROLLUP_WATCH;
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
};
