[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202-black.svg)](https://opensource.org/licenses/Apache-2.0)
<!--[![Open Source Helpers](https://www.codetriage.com/mountbuild/stone/badges/users.svg)](https://www.codetriage.com/mountbuild/stone)-->

# Contributions

All contributions are governed by the [covenant](https://github.com/mountbuild/stone/blob/build/slate/covenant.md).

## Fork this repository

If you don't have git on your machine, [install it]( https://help.github.com/articles/set-up-git/).

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the clone button and then click the *copy to clipboard* icon.

Open a terminal and run the following git command:

```
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

For example:

```
git clone https://github.com/this-is-you/stone.git
```

where `this-is-you` is your GitHub username. Here you're copying the contents of the stone repository on GitHub to your computer.

Finally, change to the repository directory on your computer (if you are not already there):

```
cd stone
```

## Create a branch

Now create a branch using the `git checkout` command:

```
git checkout -b <a-branch-name>
```

For example:

```
git checkout -b add-block-class
```

(The name of the branch does not need to have the word *add* in it, but it's a reasonable thing to include because the purpose of this branch is to add your name to a list.)

## Make necessary changes and commit those changes

Now make your changes. If you move files around, keep the history of the file in-tact by using:

```
git mv path-to-file.ext path-to-file-new.ext
```

For each `force` you add, see if you can add some tests. For each `match` parser you add, see if you can add a few examples to the repo which parse and don't parse.

Finally, stage each file you've changed.

```
git add path-to-file.ext
```

Now commit those changes using the `git commit` command:

```
git commit -m "<Past tense verb> <Phrase>"
```

replacing `<Past tense verb>` with the main action you took, followed by some `<Phrase>`.

## Push changes to GitHub

Push your changes using the command `git push`:

```
git push origin <a-branch-name>
```

replacing `<a-branch-name>` with the name of the branch you created earlier.

## Submit your changes for review

If you go to your repository on GitHub, you'll see a  `Compare & pull request` button. Click on that button.

Now submit the pull request.

Soon we'll be merging all your changes into the build branch of this project. You will get a notification email once the changes have been merged.

## Where to go from here?

Congrats! You've just become a Mount contributor. Celebrate your contribution by adding your icon to the main readme.md, and sharing with your friends and followers.

<p align='center'>
  <a href='https://twitter.com/intent/tweet?text=Yay!%20I%20just%20made%20my%20first%20open%20source%20contribution%20with%20@mountbuild.%20You%20can%20too%20at%20https://github.com/mountbuild/stone.&hashtags=OpenSource,IoT,Hacktoberfest'>
    <img src='https://mount.build/slate/twitter.png' width='32'/>
  </a>　　　<a href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgithub.com%2Fmountbuild%2Fflame&quote=Yay!%20I%20just%20made%20my%20first%20open%20source%20contribution%20to%20The%20Stone%20Project.%20Join%20in%20and%20help%20expand%20the%20tree!%20https%3A%2F%2Fgithub.com%2Fmountbuild%2Fflame&hashtag=%23Hacktoberfest'>
    <img src='https://mount.build/slate/facebook.png' width='32'/>
  </a>　　　<a href='https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fgithub.com%2Fmountbuild%2Fflame&title=stone&summary=The%20Stone%20of%20Information%20and%20Computation&source=https://github.com/mountbuild/stone'>
    <img src='https://mount.build/slate/linkedin.png' width='32'/>
  </a>
</p>

To add your icon to the readme.md, just follow what we have done to get the user avatar from GitHub and link to your profile. You can get your user ID from the GitHub API by visiting [https://api.github.com/users/thehydroimpulse](https://api.github.com/users/thehydroimpulse), but instead of `thehydroimpulse`, put your username.

You could also [join our slack team](https://join.slack.com/t/mountbuild/shared_invite/zt-fc5b262t-WTqRzSlyBULUmvcCLdFKPw) in case you need any help or have any questions. Whatever works best.
