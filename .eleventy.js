const { DateTime } = require("luxon");

module.exports = function(eleventyConfig)  {
       
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/bundle.js');
    eleventyConfig.addPassthroughCopy('./src/Google Sheet.js');

    eleventyConfig.addFilter("postDate", (dateObj) =>{
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })

    return{
        dir: {
            input: "src",
            output: "public"
        }
    };
}
