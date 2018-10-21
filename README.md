# Sidewalk Doc

#### A program to help you find a doctor, October 12, 2018

#### By Josh Gearheart

## Planning

### Configuration/dependencies (npm)
  - babel-core 6.26.0: a transpiler that turns new jacascript into old javascript
  - babel-loader 7.1.3: a loader for babel
  - babel-preset-es2015 6.24.1: a preset to transpile ES6
  - clean-webpack-plugin 0.1.18: empties the dist folder before building
  - css-loader 0.28.10: loads css for webpack
  - eslint 4.18.2: checks code for errors and bad practices
  - eslint-loader 2.0.0: loads files for eslint
  - html-webpack-plugin 3.0.6: bundles html for webpack
  - jasmine 3.1.0: helper that tests the javascript code so that the program can run tests
  - jasmine-core 2.99.0: this is the piece that must be installed before the helper (above)
  - karma 2.0.0: a test runner for jasmine
  - karma-chrome-launcher 2.2.0: launches a chrome window to see tests in real time
  - karma-cli 1.0.1: allows karma commands through the command line
  - karma-jasmine 1.1.1: allows karma and jasmine to work together
  - karma-jasmine-html-reporter 0.2.2: allows debug window in chrome to dynamically display test results
  - karma-jquery 0.2.2: allows karma to parse jquery
  - karma-sourcemap-loader 0.3.7: allows karma to accurately source map errors
  - karma-webpack 2.0.13: allows karma to work with webpack
  - style-loader 0.20.2: loads css for webpack
  - uglifyjs-webpack-plugin 1.2.2: minifies code for distribution to increase performance
  - webpack 4.0.1: bundles the code together
  - webpack-cli 2.0.9: allows webpack commands through the command line
  - webpack-dev-server 3.1.0: creates a server for development
  - jquery 3.3.1: enables jquery commands
  - dotenv webpack 1.5.7: manages api keys

### Specs

## Setup/Installation Requirements

### Step One: API key

- Visit the BetterDoctor API site and click “Get a free API key”.
- Fill out the form, listing Epicodus as the Organization/Company Name.
- Check your email to verify your key.
- After verifying, your API key should be listed on the front page (ex: “a2c356ibgh44…..”) or under My Account > Applications.

### Step Two: Install

You must have Node.js installed on your machine. If not, follow these pre-instructions:

#### _For OSX_

- First, install Homebrew if it is not installed on your computer already.
  - To install Homebrew, enter the following in order in terminal:
  - `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  - `$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile`

#### _For other operating systems_

Head on over to the [Node website](https://nodejs.org/en/download/) to download and install the appropriate installer for your computer.

#### _Install Node.js_

Now install Node.js like this in terminal: `$ brew install node`.

****

#### _Once Node.js is installed_

- Open terminal and enter `$ cd Desktop` (or your preferred destination).
- Then enter `$ git clone https://github.com/gearjosh/sidewalk-doc.git`.
- Enter `$ cd sidewalk-doc`.
- Enter `$ npm install`
- Create a file in the root directory titled `.env`
  - Paste the following into the empty file: `exports.apiKey=`
  - Enter your API key (see above) after the =.  **Do not add any spaces.**
  - Save the file.
- Finally, enter `$ npm run start`.

## Known Bugs
- No known bugs.

## Support and contact details
- For questions or support you can email me at: comedian.sean.connery@gmail.com.

## Technologies Used
- This uses Javascript, Node.js, and everything listed under _Configuration/dependencies (npm)"_ above.

### License
This software is licensed under GNU GPLv3.
