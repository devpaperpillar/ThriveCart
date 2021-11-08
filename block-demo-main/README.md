# Instructions
We need to treat blocks as being self-contained; they need to exist in their own folder and we need a single HTML file and a single SCSS file, which compiles to CSS.

Each block should contain a folder structure like this:

- HTML: `/hero-1/frontend/template.html`
- SCSS: `/hero-1/frontend/output.scss`
- Any images etc: `/hero-1/assets/*.png` 

We will be taking this and incorporating it into our editor. Each block (which we internally refer to as a 'region') must be self-contained, so as you can see, the first class in the SCSS file is to target just that block, e.g. `.tc-v2-region-hero-1`. All other styles will be nested under this. As such, the SCSS must be self contained and nested inside a selector, like so:

```
.tc-v2-region-hero-1 {
	// All styles for this block must go here
}
```

Each block will be given its own name; these must be lowercased, letters, numbers and dashes only. Good examples are: `featured-5`, `testimonials-3`. Bad examples are: `randomblock234version6`, `block_1`.

If you need any shared mixins etc, these can be placed in the `/shared.scss` file.

The build process will generate a single output file containing all of the styles for all of the regions. This is how our editor functions and is the reason for namespacing.

Please include any Google fonts that you need, but, ensure that they are styled by adding the following class: `tc-font-libre_baskerville` (replace `libre_baskerville` with the name of the font, having replaced non-alphabetical characters with underscores, and making it lowercase). The definitions for these can be placed in the `shared.scss` file as you can see - I have provided two examples for Libre Baskerville and Poppins.

All measurements must be in `em`s, and they will all be relative to the base pixel size of 16.

Ensure that each region is responsive; I have included a mixin to target the specific point at which we go down to a single column, 'mobile' version. We also sometimes use 'large' to target large but not full size screens, and 'xsmall' to target small mobile devices.

For content (e.g. titles, text, images, etc), do not apply styles directly to them. Instead, wrap them in a wrapper element to position them, and then place their content specifically inside a `<div class="builder-v2-widget">` wrapper. In the hero example I have provided, you will see the following examples of this:

	- Logo at the top
	- Speaker 1
	- Speaker 2
	- Speaker 3
	- Speaker 4
	- Title text
	- Text block
	- Button

As you'll see, each of these are positioned and sized with a wrapper div, and then the content itself is nested inside this `builder-v2-widget` div with only cosmetic styling such as colour, border radius, etc.

Please feel free to use branches as you see fit on this repo, but ensure that the primary `main` branch is usable at all times and only contains fully completed blocks.

# Initial setup
```
npm install

grunt watch:customise
```

You can then make changes to the SCSS files, and on save, things will be recompiled.

You will need to exit and restart the watch task in between adding new blocks.