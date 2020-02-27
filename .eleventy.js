module.exports = function(eleventyConfig) {

	// Výchozí výstupní složka: _site

	// Zkopírovat `images/` do `_site/images`
	eleventyConfig.addPassthroughCopy("images");

	// Zkopírovat `assets/` to `_site/assets/`
	// v assets máme samostatnou složku pro CSS a JS soubory
	eleventyConfig.addPassthroughCopy("assets");

	// Zkopírovat `admin/` to `_site/admin/`
	eleventyConfig.addPassthroughCopy("admin");

 };
