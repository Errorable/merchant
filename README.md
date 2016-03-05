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

// MerchantIdErrorIdError
console.log(cnErrors.MerchantIdErrorIdError.message); // 商户ID错误！
console.log(enUsErrors.MerchantIdErrorIdError.message); // Merchant ID Error!
// MerchantNotLoggedIn
console.log(cnErrors.MerchantNotLoggedIn.message); // 商户未登录！
console.log(enUsErrors.MerchantNotLoggedIn.message); // Merchant Not Logged In!
// MerchantNotFound
console.log(cnErrors.MerchantNotFound.message); // 商户未找到！
console.log(enUsErrors.MerchantNotFound.message); // Merchant Not Found!
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
