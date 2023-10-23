/* @ts-check */
const img2picture = require("eleventy-plugin-img2picture");

const INPUT_DIR = "./src";
const OUTPUT_DIR = "./dist";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(img2picture, {
    eleventyInputDir: INPUT_DIR,
    imagesOutputDir: OUTPUT_DIR,
    urlPath: "",
    formats: ["avif"],
    fetchRemote: true,
    sharpAvifOptions: {
      lossless: true,
      // quality: 1,
    },
  });
  return {
    dir: {
      input: INPUT_DIR,
      output: OUTPUT_DIR,
    },
  };
};
