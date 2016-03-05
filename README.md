# errorable-merchant [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> merchant errors for errorable

## Installation

```sh
$ npm install --save errorable-merchant
```

## Usage

```js
var errorable = require('errorable');
var errorableMerchant = require('errorable-merchant');
var Generator = errorable.Generator;
var cnErrors = new Generator(errorableMerchant, 'zh-CN').errors;
var enUsErrors = new Generator(errorableMerchant, 'en-US').errors;

// IdError
console.log(cnErrors.IdError.message); // 商户ID错误！
console.log(enUsErrors.IdError.message); // Merchant ID Error!
// NotLoggedIn
同上
// NotFound
同上
```
## License

MIT © [calidion](calidion.github.io)


[npm-image]: https://badge.fury.io/js/errorable-merchant.svg
[npm-url]: https://npmjs.org/package/errorable-merchant
[travis-image]: https://travis-ci.org/Errorable/merchant.svg?branch=master
[travis-url]: https://travis-ci.org/Errorable/merchant
[daviddm-image]: https://david-dm.org/Errorable/merchant.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Errorable/merchant
[coveralls-image]: https://coveralls.io/repos/Errorable/merchant/badge.svg
[coveralls-url]: https://coveralls.io/r/Errorable/merchant
