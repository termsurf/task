
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
  The Stone of Information and Computation
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

The Stone is a **specification** for a browser, terminal, editor, and operating system built into one, not a working product (yet). It is meant to be a simplified interface to the digital world. The stone is a replacement for Chrome, Firefox, and IE, for Mac, Windows and Linux, for VSCode, Intellij Idea, and Sublime, and for the Terminal. It should be like the iPhone home screen, a place to start your digital day.

This is only an emerging specification. It is not yet ready to be built. It is waiting on some key infrastructure in the [bloom](https://github.com/mountbuild/bloom) project, which will allow for building APIs and UIs. This readme introduces it as if it were working, so as to immerse you in the initial experience. The stone will be 3 things: a CLI tool, a GUI, and a daemon. The CLI tool will be there so that one can use this on legacy systems. The GUI will be the preferred way of interacting with the stone. And the daemon will allow the CLI and GUI tools to interact with push and pull based syncrhonization to the cloud.

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

_(Remember, this is just a specification at this point, this isn't real yet)._

To install, run this command in the terminal:

```bash
curl -sf stone.mount.build | sh
```

_If you're new to programming, you can also [install the app](https://mount.build/stone) instead._

There are four main interfaces to the stone. The browser, the CLI, the API, and the native app. Use whichever you are most comfortable with. The benefit of the CLI is you don't have to use any new tools, and can continue using your favorite tools. The benefit of using the stone interface is (eventually) a more streamlined approach to work and life on the web.

#### CLI

Once installed, create an account.

```bash
$ stone mount

    o <your email>
    o <a password>

$
```

This will then prompt to enter a credit card:

```bash
$ stone trade

    o <number>
    o <expiration>
    o <ccv>

$
```

Create a space in which to create a project.

```bash
$ stone cloud
```

Create a project.

```bash
$ stone bloom my-project
$ cd my-project
```

To watch a project for changes and rebuild:

```bash
$ stone watch
```

To sync to the cloud:

```bash
$ stone build
```

Now with this flow, you can create `.xo` files and build software applications in the cloud.

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

<p align='center'>
  <a href='https://mount.build'>
    <img src='http://mount.build/slate/house.png' width='16'/>
  </a>　　
  <a href='https://mount.build'>
    <img src='http://mount.build/slate/house.png' width='32'/>
  </a>　　
  <a href='https://mount.build'>
    <img src='http://mount.build/slate/house.png' width='64'/>
  </a>　　
  <a href='https://mount.build'>
    <img src='http://mount.build/slate/house.png' width='32'/>
  </a>　　
  <a href='https://mount.build'>
    <img src='http://mount.build/slate/house.png' width='16'/>
  </a>
</p>

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
    <img src='https://github.com/mountbuild/mouse/blob/build/slate/house.png?raw=true' width='128'/>
  </a>
</p>

<p align='center'>
  <em>From Mount you find the Stone, reaching to the Cloud.<br/>
  No where on Earth do you feel the power of Nature all around.<br/>
  With the Cloud so close, you can see, touch, and taste.<br/>
  Feeding your energy to the Stone with haste.<br/>
  Mount holds it shape, like the secret ball.</em>
</p>
