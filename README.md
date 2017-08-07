# fn-reduce

[![travis ci][1]][2]
[![npm version][3]][4]
[![Coverage Status][5]][6]
[![Dependency Status][7]][8]

`fn-reduce` provides a function that calculates reduce for array-like objects.

## Install

``` bash
$ npm install fn-reduce --save
```

## Usage
``` JavaScript
const reduce = require('fn-reduce')

reduce((a, b) => a + b, 0, [2, 5, 3, 1]) // 11
reduce((a, b) => a * b, 1, [1, 2, 3, 4, 5]) // 120
```

## Support
- Node.js >=6
- ES2015 transpilers

## License
MIT

  [1]: https://travis-ci.org/xgbuils/fn-reduce.svg?branch=master
  [2]: https://travis-ci.org/xgbuils/fn-reduce
  [3]: https://badge.fury.io/js/fn-reduce.svg
  [4]: https://badge.fury.io/js/fn-reduce
  [5]: https://coveralls.io/repos/github/xgbuils/fn-reduce/badge.svg?branch=master
  [6]: https://coveralls.io/github/xgbuils/fn-reduce?branch=master
  [7]: https://david-dm.org/xgbuils/fn-reduce.svg
  [8]: https://david-dm.org/xgbuils/fn-reduce
