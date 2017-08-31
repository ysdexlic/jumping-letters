# :fire: Jumping Letters! :fire:
[![Gemnasium](https://img.shields.io/gemnasium/bevacqua/awesome-badges.svg)](https://gemnasium.com/npms/jumping-letters)
[![npm](https://img.shields.io/npm/dt/awesome-badges.svg)](https://www.npmjs.org/package/jumping-letters)

A zero dependency React component for making text jump around on the page

[Check out the Demo](https://ysdexlic.github.io/jumping-letters)

## Installing

You can install `jumping-letters` with NPM.

```
npm i jumping-letters --save
```

Or find more info on it [here](https://www.npmjs.com/package/jumping-letters)

## Usage

```js
// To have jumping letters in your react app, first import the component:
import { JumpingLetters } from 'jumping-letters';
// Or if you're not using babel you can require the component:
var JumpingLetters = require('jumping-letters');

// ...
// The JumpingLetters component takes four props:
//
// Phrase is the phrase you wish to output
//
// Strength is the number of pixels each letter can jump in pixels
// (remember, this is both negative and positive pixels so it will be able to jump 4 pixels)
//
// Speed is the number of milliseconds between each re-render
// (the higher the number, the slower it is)
//
// Smooth is a boolean which adds transitions between renders
<JumpingLetters phrase="Hello World!" strength="2" speed="120" smooth />

// If you want to have multiple lines you can split the word up using the "back slash" character ( \ )
// e.g.
<JumpingLetters phrase="Seperate\Lines" strength="5" speed="150" />
// ...
```

## Contributing

Everyone is welcome to contribute, just fork the repo, do your bit and submit a pull request :)

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ysdexlic/jumping-letters/tags).

## Authors

* **David Thompson** - *Initial work* - [The Beardy Devloper](https://thebeardydeveloper.com)
