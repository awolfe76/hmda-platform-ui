[![Build Status](https://travis-ci.org/cfpb/hmda-platform-ui.svg?branch=master)](https://travis-ci.org/cfpb/hmda-platform-ui)

# HMDA Platform UI

### This project is a work in progress.

Information and code contained in this repository should be considered provisional and a work in progress, and not the final implementation for the HMDA Platform UI, unless otherwise indicated.

## Introduction to HMDA

For more information on HMDA, checkout the [About HMDA page](http://www.consumerfinance.gov/data-research/hmda/learn-more) on the CFPB website.

## The Platform UI

This repo contains the code for the entirety of the HMDA platform front-end, working directly with the [HMDA platform back-end](https://github.com/cfpb/hmda-platform) and the [HMDA platform authentication](https://github.com/cfpb/hmda-platform). The various parts of the platform UI are:

_All pages, expect the home page, require authentication._

- `/` - home page
  - provides general information about the HMDA filing process and requirements
- `/institutions` - institutions listing
  - displays all institutions for which a filer has access to file
- `/<institutionId>/<filingPeriod>/upload` - file upload form for a specific institution and filing period
- `/<institutionId>/<filingPeriod>/syntacticalvalidity` - displays the list of all syntactical and validity edits the exist in the uploaded file
- `/<institutionId>/<filingPeriod>/quality` - displays the list of all quality edits the exist in the uploaded file and allows for verification
- `/<institutionId>/<filingPeriod>/macro` - displays the list of all macro edits the exist in the uploaded file and allows for verification
- `/<institutionId>/<filingPeriod>/summary` - displays the Institution Register Summary (IRS), the validation summary (an overall summary of the submission), and allows for signing of the submission.

## Dependencies

We use node and yarn to manage front-end dependencies. You should have [node installed](https://nodejs.org/en/) as well as [yarn](https://yarnpkg.com/lang/en/docs/install/).

See the [package.json](https://github.com/cfpb/hmda-platform-ui/blob/master/package.json) file for application dependencies.

## Installation

``` shell
$ git clone git@github.com:cfpb/hmda-platform-ui.git
$ cd hmda-platform-ui
$ yarn
```

## Building and viewing

### Using the back-end API

Viewing the full application requires the back-end [API](https://github.com/cfpb/hmda-platform) and [authentication](https://github.com/cfpb/hmda-platform-auth). Please follow the instructions found under the "Building and Running" heading of the [HMDA platform README](https://github.com/cfpb/hmda-platform#to-run-the-entire-platform).
Running docker-compose from the hmda-platform repo will map a volume from the local built files into the ui's Docker container. This means local rebuilds will be instantly reflected in the running docker container.

## How to test the front-end

```shell
$ npm test
```

## Code formatting

We're using [prettier](https://github.com/prettier/prettier) to format all of our `.js`, `.jsx`, and `.scss`. We provide a [prettier config](.prettierrc) and a script in `package.json`; which can be run using `yarn run pretty`. __But__, we recommend [integrating prettier with you're favorite editor](https://github.com/prettier/prettier#editor-integration).

Just be sure to use `singleQuote: true` and `semi: false` for all `.js` and `.jsx` files and `singleQuote: false` and `semi: true` for all `.scss` files.

## Known issues

This repo is a work in progress.

## Getting help

If you have questions, concerns, bug reports, etc, please file an issue in this repository's Issue Tracker.

## Getting involved

[CONTRIBUTING](CONTRIBUTING.md)

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)

## Credits and references

1. Projects that inspired you
  - https://github.com/cfpb/hmda-pilot
2. Related projects
  - https://github.com/cfpb/hmda-platform
  - https://github.com/cfpb/hmda-platform-auth
