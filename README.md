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

## Lessless task
_Run this task with the `grunt lessless` command._

_This task is a [multi task][] so any targets, files and options should be specified according to the [multi task][] documentation._
[multi task]: https://github.com/gruntjs/grunt/wiki/Configuring-tasks

### Options

#### buildDir
Type: `String`

Directory to scan for less files.

#### styleDirs
Type: `String`
Default: null

Directories to look in for imports. Usually not needed since any folder containing a .less file gets added to this automatically.

#### stripExtensions
Type: `Array`
Default: ['html']

File extensions that have links to .less files.
So a Java project would typically set `stripExtensions` to `['jsp', 'html']` and a .NET project would set it to `['cshtml', 'html']`. 

### Usage Examples

```js
lessless: {
  compile: {
    buildDir: 'path/to/frontend-build'
  }
}
```

If you're using RequireJS then `buildDir` should match `dir` from your requirejs settings. With grunt you can even point to the same variable: 

```js
lessless: {
  compile: {
    buildDir: '<%= requirejs.compile.options.dir %>'
  }
}
```

There are also two optional settings:
```js
lessless: {
  compile: {
    buildDir: 'path/to/frontend-build',
    styleDirs: ['path/to/my/extra/styles'],
    stripExtensions: ['jsp', 'html']
  }
}
```

## Release History
- 0.1.1 Change to multitask
- 0.1.0 initial release. 

## License
Copyright (c) 2012 Dave Geddes  
Licensed under the MIT license.
