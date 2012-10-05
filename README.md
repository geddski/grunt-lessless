# grunt-lessless

Grunt plugin for [lessless](http://github.com/geddesign/lessless), a tool that compiles LESS into CSS, changes links to point to the CSS files, removes less.js from HTML page(s). Very handy when you're using less.js in the browser but want to deploy CSS. 

## Getting Started
Install this grunt plugin next to your project's [Gruntfile][getting_started] with: `npm install grunt-lessless`

Then add this line to your project's Gruntfile:

```javascript
grunt.loadNpmTasks('grunt-lessless');
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation
Add this to your Gruntfile.js:

```js
lessless: {
  buildDir: 'path/to/frontend-build'
}
```
If you're using RequireJS then `buildDir` should match `dir` from your requirejs settings. With grunt you can even point to the same variable: 

```js
lessless: {
  buildDir: '<%= requirejs.compile.options.dir %>'
}
```

There are also two optional settings:
```js
lessless: {
  buildDir: 'path/to/frontend-build'
  styleDirs: ['path/to/my/extra/styles'], //directories to look in for imports. usually don't need since any folder containing a .less file gets added to this automatically
  stripExtensions: ['jsp', 'html'] //file extensions that have links to .less files. Defaults to just .html files.
}
```
So a Java project would typically set `stripExtensions` to `['jsp', 'html']` and a .NET project would set it to `['cshtml', 'html']`. 

## Release History
0.1.0 initial release. 

## License
Copyright (c) 2012 Dave Geddes  
Licensed under the MIT license.
