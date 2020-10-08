
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<h3 align='center'>act</h3>
<p align='center'>
  Common Actions Interface
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
  <img src='https://github.com/lancejpollard/act/workflows/build/badge.svg?branch=build' />
</p>

<br/>
<br/>
<br/>

### Summary

Act is a collections of common actions to perform in code. It provides an API and CLI for performing these actions.

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

Finally, with these dependencies installed, you can install the act:

```
npm install -g @lancejpollard/act
```

### CLI

Here are some helpful commands to get you started:

#### Split a PDF into individual files.

```
$ act split some.pdf -o outputDirectory
```

#### Take a subset of a PDF.

```
$ act slice some.pdf -s 15 -e 25 -o output.pdf
```

#### Rename recursively a bunch of files:

```
$ act rename -t f -p "tmp/**/*.jpg" -s "\.jpg" -e ".png"
```

#### Convert HTML to PDF

```
$ act convert tmp/index.html -o tmp/index.pdf -w 2000px -h 3000px
```

#### Remove All EXIF Data from a JPEG

```
$ act remove exif input.jpg
```

#### Resize Image


```
$ act resize input.jpg -w 300 -o output.jpg
```

### Contribute

Contributions are greatly welcomed. Help us define what the ideal interface would be for a browser-terminal-editor-os app. Identify the key painpoints in the customer onboarding flow, and help us map out the best solutions. See the [contributor's guide](https://github.com/lancejpollard/act/blob/build/slate/contributing.md) for more info if you are just starting out coding. And here is a list of the contributors, just one atm.

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

Also, [track our release progress](https://github.com/lancejpollard/act/blob/build/slate/changelog.md) if you're interested!

### License

MIT
