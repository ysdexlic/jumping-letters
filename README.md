# :fire: Jumping Letters! :fire:

A React component for making text jump around on the page

[Check out the Demo](https://ysdexlic.github.io/jumping-letters-demo)

![Example](https://raw.githubusercontent.com/ysdexlic/ysdexlic.github.io/master/style/images/name.gif)


## Installing

You can install `jumping-letters` with NPM.

```
npm i jumping-letters --save
```

## Usage

```js
// To have jumping letters in your react app, first import the component:
import { JumpingLetters } from 'jumping-letters';
// Or if you're not using babel you can require the component:
var JumpingLetters = require('jumping-letters');

// ...
// The JumpingLetters component takes three props:
//
// Phrase is the phrase you wish to output
//
// Strength is the number of pixels each letter can jump in pixels
// (remember, this is both negative and positive pixels so it will be able to jump 4 pixels)
//
// Speed is the number of milliseconds between each re-render
// (the higher the number, the slower it is)
<JumpingLetters phrase="Hello World!" strength="2" speed="120" />

// If you want to have multiple lines you can split the word up using the "back slash" character ( \ )
// e.g.
<JumpingLetters phrase="Seperate\Lines" strength="2" speed="120" />
// ...
```

## Contributing

Everyone is welcome to contribute, just fork the repo, do your bit and submit a pull request :)

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ysdexlic/jumping-letters/tags).

## Authors

* **David Thompson** - *Initial work* - [The Beardy Devloper](https://thebeardydeveloper.com)
