export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/documents");
  
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};