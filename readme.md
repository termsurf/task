
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<p align='center'>
  <img src='https://github.com/mountbuild/stone/blob/build/slate/house.gif?raw=true' width='312'/>
</p>

<br/>

<h3 align='center'>stone</h3>
<p align='center'>
  Common Actions in a Simplified Interface
</p>

<p align='center'>
  अहमादिश्च मध्यं च भूतानामन्त एव च
</p>

<br/>
<br/>

<p align='center'>
  <a href='#summary'>Summary</a> •
  <a href='#history'>History</a> •
  <a href='#contribute'>Contribute</a> •
  <a href='#getting-started'>Getting Started</a> •
  <a href='#license'>License</a>
</p>

<br/>
<br/>
<br/>

### Summary

Stone is a collection of all the things to make life easier on the web. In part, the Stone is a **specification** for a browser, terminal, editor, and operating system built into one. The other part is it is currently starting out as a CLI. It is meant to be a simplified interface to the digital world.

### History

The Stone Project was developed out of the thought of why we need so many applications when really a command prompt and some basic tools are all you really need? It is here to optimize the browsing experience significantly, starting from scratch rather than layering upon the legacy codebases. It was conceived in the winter of 2018 when trying to figure out what the CLI tool would look like for [XO](https://mount.build/xo.pdf). This required the need for a rich debugger, as well as rendering your app to the screen. If you would like an even richer debugger, it should have full text-editor support. So in the end, it became a terminal, debugger, editor, and eventually OS in one.

### Contribute

Contributions are greatly welcomed. Help us define what the ideal interface would be for a browser-terminal-editor-os app. Identify the key painpoints in the customer onboarding flow, and help us map out the best solutions. See the [contributor's guide](https://github.com/mountbuild/stone/blob/build/slate/contributing.md) for more info if you are just starting out coding. And here is a list of the contributors, just one atm.

<br/>
<br/>
<br/>

<p align='center'>
  <!-- https://api.github.com/users/lancejpollard -->
  <a href='https://github.com/lancejpollard'>
    <img alt='lancejpollard' src='https://avatars0.githubusercontent.com/u/28718?v=4&s=117' width='117' />
  </a>
</p>

<br/>
<br/>
<br/>

Also, [track our release progress](https://github.com/mountbuild/stone/blob/build/slate/changelog.md) if you're interested!

### Getting Started

To install, run this command in the terminal:

```bash
npm install @mountbuild/stone -g
```

#### CLI

Here are some helpful commands to get you started:

##### Split a PDF into individual files.

```
$ stone split some.pdf -o outputDirectory
```

##### Take a subset of a PDF.

```
$ stone slice some.pdf -s 15 -e 25 -o output.pdf
```

##### Rename recursively a bunch of files:

```
$ stone rename -t f -p "tmp/**/*.jpg" -s "\.jpg" -e ".png"
```

##### Convert HTML to PDF

```
$ stone convert tmp/index.html -o tmp/index.pdf -w 2000px -h 3000px
```

#### GUI

Coming eventually.

### License

Copyright 2020 <a href='https://mount.build'>Mount</a>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

### Mount

Stone is being developed by the folks at [Mount](https://mount.build), a California-based project for helping humanity master information and computation. Mount started off in the winter of 2008 as a spark of an idea, to forming a company 10 years later in the winter of 2018, to a seed of a project just beginning its development phases. Mount funds stone's development. It is entirely bootstrapped by working full time and running [Etsy](https://etsy.com/shop/mountbuild) and [Amazon](https://www.amazon.com/s?rh=p_27%3AMount+Build) shops. Also find us on [Facebook](https://www.facebook.com/mountbuild), [Twitter](https://twitter.com/mountbuild), and [LinkedIn](https://www.linkedin.com/company/mountbuild). Check out our other GitHub projects as well!

<p align='center'>
  <a href='https://github.com/mountbuild/bloom'>
    <img src='https://github.com/mountbuild/bloom/blob/build/slate/house.gif?raw=true' width='128'/>
  </a>　　
  <a href='https://github.com/mountbuild/flame'>
    <img src='https://github.com/mountbuild/flame/blob/build/slate/house.gif?raw=true' width='128'/>
  </a>　　
  <a href='https://github.com/mountbuild/mouse'>
    <img src='https://github.com/mountbuild/mouse/blob/build/slate/house.gif?raw=true' width='128'/>
  </a>
</p>

<p align='center'>
  <em>From Mount you find the Stone, reaching to the Cloud.<br/>
  No where on Earth do you feel the power of Nature all around.<br/>
  With the Cloud so close, you can see, touch, and taste.<br/>
  Feeding your energy to the Stone with haste.<br/>
  Mount holds it shape, like the secret ball.</em>
</p>
