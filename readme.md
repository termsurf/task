
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<p align='center'>
  <img src='https://github.com/mountbuild/mouse/blob/build/slate/house.gif?raw=true' width='192'/>
</p>

<br/>

<h3 align='center'>mouse</h3>
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
  <a href='#getting-started'>Getting Started</a> •
  <a href='#cli'>CLI</a> •
  <a href='#contribute'>Contribute</a> •
  <a href='#license'>License</a>
</p>

<p align='center'>
  <img src='https://github.com/mountbuild/mouse/workflows/build/badge.svg?branch=build' />
</p>

<br/>
<br/>
<br/>

### Summary

The Mouse is a collections of common actions to perform in code. It provides an API and CLI for performing these actions.

### Getting Started

Requirements on Mac

```bash
brew cask install java
brew cask install mactex
brew cask install libreoffice
brew install imagemagick
brew install fontforge
brew install ffmpeg
brew install node
```

Requirements for Windows:

```
choco install libreoffice-fresh
choco install imagemagick --version 7.0.10.19
choco install fontforge
choco install ffmpeg
choco install miktex
choco install nodejs
```

Requirements for Linux:

```
sudo apt-get update
sudo apt-get install build-essential
sudo apt-get install texlive-xetex
sudo apt-get install imagemagick
sudo apt-get install libreoffice
sudo apt-get install fontforge
sudo apt-get install inkscape
sudo apt-get install ffmpeg
sudo apt-get install ufraw
sudo apt-get install rar
```

Finally, with these dependencies installed, you can install the mouse:

```
npm install -g @mountbuild/mouse
```

### CLI

Here are some helpful commands to get you started:

#### Split a PDF into individual files.

```
$ mouse split some.pdf -o outputDirectory
```

#### Take a subset of a PDF.

```
$ mouse slice some.pdf -s 15 -e 25 -o output.pdf
```

#### Rename recursively a bunch of files:

```
$ mouse rename -t f -p "tmp/**/*.jpg" -s "\.jpg" -e ".png"
```

#### Convert HTML to PDF

```
$ mouse convert tmp/index.html -o tmp/index.pdf -w 2000px -h 3000px
```

#### Remove All EXIF Data from a JPEG

```
$ mouse remove exif input.jpg
```

#### Resize Image


```
$ mouse resize input.jpg -w 300 -o output.jpg
```

### Contribute

Contributions are greatly welcomed. Help us define what the ideal interface would be for a browser-terminal-editor-os app. Identify the key painpoints in the customer onboarding flow, and help us map out the best solutions. See the [contributor's guide](https://github.com/mountbuild/mouse/blob/build/slate/contributing.md) for more info if you are just starting out coding. And here is a list of the contributors, just one atm.

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

Also, [track our release progress](https://github.com/mountbuild/mouse/blob/build/slate/changelog.md) if you're interested!

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

Mouse is being developed by the folks at [Mount](https://mount.build), a California-based project for helping humanity master information and computation. Mount started off in the winter of 2008 as a spark of an idea, to forming a company 10 years later in the winter of 2018, to a seed of a project just beginning its development phases. Mount funds mouse's development. It is entirely bootstrapped by working full time and running [Etsy](https://etsy.com/shop/mountbuild) and [Amazon](https://www.amazon.com/s?rh=p_27%3AMount+Build) shops. Also find us on [Facebook](https://www.facebook.com/mountbuild), [Twitter](https://twitter.com/mountbuild), and [LinkedIn](https://www.linkedin.com/company/mountbuild). Check out our other GitHub projects as well!

<br/>

<p align='center'>
  <a href='https://github.com/mountbuild/wheel'>
    <img src='https://github.com/mountbuild/wheel/blob/build/slate/world.gif?raw=true' width='64'/>
  </a>
  <a href='https://github.com/mountbuild/bloom'>
    <img src='https://github.com/mountbuild/bloom/blob/build/slate/house.gif?raw=true' width='224'/>
  </a>
  <a href='https://github.com/mountbuild/stone'>
    <img src='https://github.com/mountbuild/stone/blob/build/slate/world.gif?raw=true' width='128'/>
  </a>　　
  <a href='https://github.com/mountbuild/mouse'>
    <img src='https://github.com/mountbuild/mouse/blob/build/slate/world.gif?raw=true' width='128'/>
  </a>　　
  <a href='https://github.com/mountbuild/flame'>
    <img src='https://github.com/mountbuild/flame/blob/build/slate/world.gif?raw=true' width='128'/>
  </a>
</p>

<br/>

<p align='center'>
  <em>The Mouse has connections that truly inspire,<br/>
  Tunneling underground, providing protection, avoiding fire.<br/>
  Moving swiftly through the night, through the Brush and Stick.<br/>
  Gathering vegetation, helping others, they are swift.<br/>
  Adapting to every environment, they are key to the network of the forest.</em>
</p>

<br/>
<br/>

<p align='center'>
  <a href='https://twitter.com/mountbuild'>
    <img src='https://mount.build/slate/twitter.png' height='64' />
  </a>　　　　
  <a href='https://etsy.com/shop/mountbuild'>
    <img src='https://mount.build/slate/etsy.png' height='64' />
  </a>　　　　
  <a href='https://github.com/mountbuild'>
    <img src='https://mount.build/slate/github.png' height='64' />
  </a>　　　
  <a href='https://www.amazon.com/s?rh=p_27%3AMount+Build'>
    <img src='https://mount.build/slate/amazon.png' height='64' />
  </a>　　　
  <a href='https://www.facebook.com/mountbuild'>
    <img src='https://mount.build/slate/facebook.png' height='64' />
  </a>
</p>

<br/>
<br/>
