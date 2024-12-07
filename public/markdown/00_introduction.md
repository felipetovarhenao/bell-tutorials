# Getting started

This series of tutorials is designed to introduce musicians, especially those with little to no prior programming experience, to the basics of computer programming in _bell_. Whether or not you have experience with text-based programming — or even visual programming environments such as _Cycling 74's_ [Max](https://cycling74.com/) — these tutorials aim to guide you step-by-step through the fundamentals.

## What is _bell_?

_bell_ is a programming language created by composer and researcher [Andrea Agostini](https://www.andreaagostini.eu/) as part of the [bach](https://www.bachproject.net/) package for [computer-assisted composition](https://en.wikipedia.org/wiki/Computer_music#Computer-aided_algorithmic_composition) (CAC) within _Max_. While _bach_ has grown increasingly popular among _Max_ users, it’s still a fairly niche tool, and _bell_ — as a subset of _bach_ — is even less widely known. For those interested in CAC, however, _bell_ offers a unique and valuable toolset, which is why these tutorials exist: to demystify _bell_ and make it accessible to a wider audience.

## Why learn _bell_?

Although _bell_ is a niche programming language, it is exceptionally powerful, versatile, and approachable for musicians. It was specifically designed as part of an ecosystem of CAC tools — namely, the _[bach](https://www.bachproject.net/)_, _[cage](https://www.bachproject.net/cage)_, _[dada](https://www.bachproject.net/dada)_, and _[ears](https://www.bachproject.net/ears)_ packages in _Max_ —, focusing only on features relevant to CAC-oriented composers. This makes _bell_ streamlined and intuitive, eliminating extraneous features common in general-purpose programming languages. Every part of _bell_ is purpose-built and worth exploring for those interested in algorithmic music composition.

## How these tutorials work

These tutorials were initially created for the course _Special Topics in Composition: Introduction to Computer-Assisted Algorithmic Composition_, which I developed during my postdoctoral residency at the [University of Cincinnati College-Conservatory of Music](https://ccm.uc.edu/). As such, they are tailored to musicians with specific assumptions and goals in mind:

### 1. Programming experience:

No prior programming experience is required, including experience with _Max_ programming.

### 2. Focus on _bell_, not CAC:

These tutorials primarily focus on _bell_, **not** computer-assisted composition itself. While some examples and exercises are music-flavored to keep them relatable, the primary goal is to teach relevant programming concepts in _bell_, which are essential to understand _before_ properly delving into CAC.

### 3. Preparation for _bellplay~_:

These tutorials are designed to familiarize users with _bell_, particularly those who wish to learn and use [bellplay~](https://github.com/felipetovarhenao/bellplay), and they are not intended to teach _Max_- or _bach_-specific functionalities. As such, _Max_-related features in _bell_, such as external inputs/outputs are intentionally left out to ensure the emphasis remains on core _bell_ programming concepts. By the same token, any _bellplay~_-specific features and functionalities are omitted as much as possible to limit the scope of these tutorials to the _bell_ programming language, such that users understand where _bell_ ends and _bellplay~_ begins.

> If you’re already familiar with _bell_ and want to focus specifically on _bellplay~_, please refer to the built-in tutorials within the _bellplay~_ application. Similarly, if you're already a _bach_ user and are primarily interested in learning _bell_ vis-a-vis _bach_, the official _bell_ documentation within _bach_ is perhaps the best route to take.

## System requirements

To follow these tutorials, you’ll need the following tools:

### 1. Text editor

A dedicated text editor is essential, preferrably [Visual Studio Code](https://code.visualstudio.com/), for which I’ve already developed an extension with features like syntax highlighting, autocomplete, and code auto-formatting for _bell_. Here’s how to set it up:

1. Download and install [Visual Studio Code](https://code.visualstudio.com/).
2. Install the [bell syntax](https://marketplace.visualstudio.com/items?itemName=tovarhenao.bell-syntax) extension for _VSCode_.

### 2. _bellplay~_

1. Download the latest version of _bellplay~_ [here](https://github.com/felipetovarhenao/bellplay/releases/latest).

- **MacOS**: Download the `.zip` file, uncompress it, and place the standalone (`.app`) in your _Applications_ folder.
- **Windows**: Since there’s no standalone executable for Windows at the time of this writing, you’ll need to run _bellplay~_ via its source code:

  1.  Download and install [Cycling 74’s Max 8](https://cycling74.com/downloads/older) (_Max 9_ is untested). The free trial version should work fine.

  2.  Open the `bellplay.maxproj` file inside the source code folder to launch _bellplay~_.

2. In _bellplay~_:
   - Click on **Open Documentation** in the top right corner.
   - Navigate to the **TUTORIALS** tab and set your **default editor** to Visual Studio Code:
     - On **MacOS**, the VSCode application is typically located at `/Applications/Visual Studio Code.app`
     - On **Windows**, it’s usually found at `C:\Users\<YourUsername>\AppData\Local\Programs\Microsoft VS Code\Code.exe`

---

These tutorials are designed to provide a clear and structured introduction to _bell_, helping you build a foundation for programming within the context of computer-assisted composition. Whether your interest lies in algorithmic music or simply gaining a deeper understanding of tools like _bellplay~_, the aim is to make the material accessible and relevant. Take your time, and feel free to revisit sections as needed—programming is a skill that grows with practice and experimentation.
