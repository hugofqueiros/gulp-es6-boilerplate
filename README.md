# gulp-es6-boilerplate [![Build Status](https://travis-ci.org/hugofqueiros/gulp-es6-boilerplate.png?branch=master)](https://travis-ci.org/hugofqueiros/gulp-es6-boilerplate)

Gulp ES6 Boilerplate

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

### if using gulp-image-resize

Make sure GraphicsMagick or ImageMagick is installed on your system and properly set up in your `PATH`.

Ubuntu:

```shell
apt-get install imagemagick
apt-get install graphicsmagick
```

Mac OS X (using [Homebrew](http://brew.sh/)):

```shell
brew install imagemagick
brew install graphicsmagick
```

Windows & others:
- GraphicsMagick: [http://www.graphicsmagick.org/download.html](http://www.graphicsmagick.org/download.html)
- ImageMagick: [http://www.imagemagick.org/script/binary-releases.php](http://www.imagemagick.org/script/binary-releases.php)

Confirm that GraphicsMagick or ImageMagick is properly set up by executing `gm -version` or `convert -version` in a terminal.

## Tests

```sh
npm install
npm test
```

## Running

### Develop environment

```sh
npm start
```

### Production environment
```sh
npm dist
```

### Commit guidelines (conventional changelog)
[Conventional Changelog Angular](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit)

## Release a new version

- copy everything to package root and change some paths on files
```
npm run release
```

- merge (ONLY) from develop to master
```
git merge --no-ff develop
```

- release (patch, minor or major) package and push changes to repo
```
npm run release:[version]
git push
```

## Dependencies

- [font-awesome](https://github.com/FortAwesome/Font-Awesome): The iconic font and CSS framework
- [lodash](https://github.com/lodash/lodash): Lodash modular utilities.
- [rrssb](https://github.com/kni-labs/rrssb): Ridiculously Responsive Social Sharing Buttons

## Dev Dependencies

- [autoprefixer](https://github.com/postcss/autoprefixer): Parse CSS and add vendor prefixes to CSS rules using values from the Can I Use website
- [babel-core](https://github.com/babel/babel/tree/master/packages): Babel compiler core.
- [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages): Babel preset for all es2015 plugins.
- [babel-preset-stage-0](https://github.com/babel/babel/tree/master/packages): Babel preset for stage 0 plugins
- [babel-register](https://github.com/babel/babel/tree/master/packages): babel require hook
- [babelify](https://github.com/babel/babelify): Babel browserify transform
- [browser-sync](https://github.com/browsersync/browser-sync): Live CSS Reload &amp; Browser Syncing
- [browserify](https://github.com/substack/node-browserify): browser-side require() the node way
- [connect-logger](https://github.com/geta6/connect-logger): connect middleware for logging
- [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog-cli): Generate a changelog from git metadata
- [cssnano](https://github.com/ben-eb/cssnano): A modular minifier, built on top of the PostCSS ecosystem.
- [david](https://github.com/alanshaw/david): Node.js module that tells you when your project npm dependencies are out of date.
- [del](https://github.com/sindresorhus/del): Delete files and folders
- [doiuse](https://github.com/anandthakker/doiuse): Lint CSS for browser support against caniuse database.
- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-airbnb](https://github.com/airbnb/javascript): Airbnb&#39;s ESLint config, following our styleguide
- [gulp](https://github.com/gulpjs/gulp): The streaming build system
- [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer): Prefix CSS
- [gulp-changed](https://github.com/sindresorhus/gulp-changed): Only pass through changed files
- [gulp-cheerio](https://github.com/KenPowers/gulp-cheerio): Manipulate HTML and XML files with Cheerio in Gulp.
- [gulp-concat](https://github.com/wearefractal/gulp-concat): Concatenates files
- [gulp-csso](https://github.com/ben-eb/gulp-csso): Minify CSS with CSSO.
- [gulp-eslint](https://github.com/adametry/gulp-eslint): A gulp plugin for processing files with ESLint
- [gulp-file-include](https://github.com/coderhaoxin/gulp-file-include): a gulp plugin for file include
- [gulp-filter](https://github.com/sindresorhus/gulp-filter): Filter files in a vinyl stream
- [gulp-gzip](https://github.com/jstuckey/gulp-gzip): Gzip plugin for gulp.
- [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin): gulp plugin to minify HTML.
- [gulp-if](https://github.com/robrich/gulp-if): Conditionally run a task
- [gulp-image-resize](https://github.com/scalableminds/gulp-image-resize): Resizing images made easy.
- [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin): Minify PNG, JPEG, GIF and SVG images
- [gulp-less](https://github.com/plus3network/gulp-less): Less for Gulp
- [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins): Automatically load any gulp plugins in your package.json
- [gulp-notify](https://github.com/mikaelbr/gulp-notify): gulp plugin to send messages based on Vinyl Files or Errors to Mac OS X, Linux or Windows using the node-notifier module. Fallbacks to Growl or simply logging
- [gulp-plumber](https://github.com/floatdrop/gulp-plumber): Prevent pipe breaking caused by errors from gulp plugins
- [gulp-postcss](https://github.com/postcss/gulp-postcss): PostCSS gulp plugin
- [gulp-rev](https://github.com/sindresorhus/gulp-rev): Static asset revisioning by appending content hash to filenames: unicorn.css =&gt; unicorn-d41d8cd98f.css
- [gulp-rev-replace](https://github.com/jamesknelson/gulp-rev-replace): Rewrite occurences of filenames which have been renamed by gulp-rev
- [gulp-size](https://github.com/sindresorhus/gulp-size): Display the size of your project
- [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps): Source map support for Gulp.js
- [gulp-stylelint](https://github.com/olegskl/gulp-stylelint): Gulp plugin for running Stylelint results through various reporters.
- [gulp-svgmin](https://github.com/ben-eb/gulp-svgmin): Minify SVG files with gulp.
- [gulp-svgstore](https://github.com/w0rm/gulp-svgstore): Combine svg files into one with &lt;symbol&gt; elements
- [gulp-tar](https://github.com/sindresorhus/gulp-tar): Create tarball from files
- [gulp-uglify](https://github.com/terinjokes/gulp-uglify): Minify files with UglifyJS.
- [gulp-useref](https://github.com/jonkemp/gulp-useref): Parse build blocks in HTML files to replace references to non-optimized scripts or stylesheets.
- [gulp-util](https://github.com/gulpjs/gulp-util): Utility functions for gulp plugins
- [imagemin-pngquant](https://github.com/imagemin/imagemin-pngquant): pngquant imagemin plugin
- [karma](https://github.com/karma-runner/karma): Spectacular Test Runner for JavaScript.
- [karma-mocha](https://github.com/karma-runner/karma-mocha): A Karma plugin. Adapter for Mocha testing framework.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [object-assign](https://github.com/sindresorhus/object-assign): ES2015 Object.assign() ponyfill
- [postcss-discard-comments](https://github.com/ben-eb/postcss-discard-comments): Discard comments in your CSS files with PostCSS.
- [postcss-less](https://github.com/webschik/postcss-less): LESS parser for PostCSS
- [postcss-reporter](https://github.com/postcss/postcss-reporter): Log PostCSS messages in the console
- [postcss-svgo](https://github.com/ben-eb/postcss-svgo): Optimise inline SVG with PostCSS.
- [pretty-hrtime](https://github.com/robrich/pretty-hrtime): process.hrtime() to words
- [require-dir](https://github.com/aseemk/requireDir): Helper to require() directories.
- [rimraf](https://github.com/isaacs/rimraf): A deep deletion module for node (like `rm -rf`)
- [rsyncwrapper](https://github.com/jedrichards/rsyncwrapper): An async wrapper to the rsync command line utility for Node.js.
- [run-sequence](https://github.com/OverZealous/run-sequence): Run a series of dependent gulp tasks in order
- [stream-combiner2](https://github.com/substack/stream-combiner2): This is a sequel to [stream-combiner](https://npmjs.org/package/stream-combiner) for streams3.
- [style-paths](git+https://github.com/hugofqueiros/gulp-es6-boilerplate.git): Find the paths of every bower_component with a .sass or .scss file (for use with sass&#39; includePath option)
- [stylelint](https://github.com/stylelint/stylelint): Modern CSS linter
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard): Standard shareable config for stylelint
- [vinyl-buffer](https://github.com/hughsk/vinyl-buffer): Convert streaming vinyl files to use buffers
- [vinyl-source-stream](https://github.com/hughsk/vinyl-source-stream): Use conventional text streams at the start of your gulp or vinyl pipelines
- [watchify](https://github.com/substack/watchify): watch mode for browserify builds
- [yargs](https://github.com/yargs/yargs): yargs the modern, pirate-themed, successor to optimist.

## License

MIT

## Acknowledgement

Would like to thank Hugo Dias (https://github.com/hugomrdias) for sharing all his knowledge.
