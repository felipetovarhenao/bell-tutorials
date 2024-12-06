# A friendly introduction to programming with bell, for musicians

## Introduction

The following is a series of introductory tutorials to learn programming in bell. The target audience for these tutorials are musicians with little to no prior experience in programming, particularly text-based programming.

## What is _bell_?

_bell_ is a programming language developed by composer and researcher Andrea Agostini, as part of the _bach_ package for computer-assisted composition (CAC) within Max. Even though _bach_ continues to gain popularity among Max users, it is fair to say that _bach_ users still represent a small fraction within the Max user community, and among _bach_ users, the fraction of _bell_ users is likely even smaller. For this reason, _bell_ is a fairly esoteric and unknown programming language, and only those well deep into CAC will come across it. This is why I decided to write these tutorials.

## Why learn _bell_?

While _bell_ is a rather niche programming language, it is an extremely powerful and versatile language relative to how simple and easy to learn it is. Since _bell_ was specifically created as part of a CAC ecosystem (i.e., the _bach_, _cage_, _dada_, and _ears_ packages in _Max_), it doesn't include features that other programming languages would, that aren't interesting or useful to the average CAC-oriented composer, making everything about the language materially useful and worth exploring.

## How these tutorials work

These tutorials were specifically written as a learning material for the course _Special Topics in Composition: Introduction to Computer-assisted Algorithmic Composition_, which I designed as part of my postdoctoral residency at the _University of Cincinnati College-Conservatory of Music_. As such, there were a few but important assumptions and goals in mind:

1. **Programing experience**: No prior programming experience is assumed, <ins>including experience with _Max_ programming</ins>.
2. **bell vs. CAC**: These tutorials are **NOT** about _CAC_, but rather about the most relevant aspects of the bell programming language. That's why, even though some of the examples and exercises are music-oriented, this is only to keep the tutorials relatable and hint at some of the ways in which _bell_ is useful for _CAC_.
3. **bellplay~**: Last but not least, these tutorials are meant to prepare readers to want to use [bellplay~](https://github.com/felipetovarhenao/bellplay), but aren't already _Max_ or **bach** users. As such, the tutorials will rarely touch on any Max-specific functionalities within _bell_, such as externals inputs/outputs, and variables. That being said, the scope of these tutorials remains the _bell_ programming language, and any **bellplay~** specific features and functionalities are left out.

> If you're already proficient in bell and only want to learn bellplay~, please refer to the built-in tutorials in _bellplay~_

## System requirements

To follow these tutorials you will need:

### Text editor

A dedicated text-editor, preferrably [Visual Studio Code](https://code.visualstudio.com/), for which I developed an extension that provides helpful features for bell programming, such as syntax highlighting, autocomplete, code auto-formatting, and more. To setup Visual Studio Code for these tutorials, follow these steps:

1. Download and install [Visual Studio Code](https://code.visualstudio.com/).
2. Install the [bell syntax](https://marketplace.visualstudio.com/items?itemName=tovarhenao.bell-syntax) extension for _VSCode_.

### bellplay~

1. Download the latest version of [bellplay](https://github.com/felipetovarhenao/bellplay/releases/latest).

   - **MacOS**: Download the `.zip` file for `MacOS`, uncompress it and put the standalone (`.app`) in your `Applications` folder.
   - **Windows**: Since at the moment of this writing there is no executable of bellplay, you will need to use the source code version of _bellplay~_:
     1. Download and install Cycling 74's Max 8 (Max 9 has not been tested yet). The free-trial version should work fine.
     2. To lauch bellplay, open the `bellplay.maxproj` inside the source code folder.

2. In _bellplay~_:
   1. Click on _open documentation_ at the top right
   2. Go to the _TUTORIALS_ tab and click on _default editor_ at the top right.
   3. Search for the VSCode application in your computer. The typical location for each operating system is:
      - **MacOS:** `/Applications/Visual Studio Code.app`
      - **Windows**: `C:\Users\<YourUsername>\AppData\Local\Programs\Microsoft VS Code\Code.exe`
