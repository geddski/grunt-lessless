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

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
0.1.0 initial release. 

## License
Copyright (c) 2012 Dave Geddes  
Licensed under the MIT license.
