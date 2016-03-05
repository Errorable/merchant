'use strict';

var assert = require('assert');
var errorableMerchant = require('../lib');
var errorable = require('errorable');
var Generator = errorable.Generator;
var cnErrors = new Generator(errorableMerchant, 'zh-CN').errors;
var enUsErrors = new Generator(errorableMerchant, 'en-US').errors;

var errorCount = 0;

for (var k in cnErrors) {
  if (cnErrors[k] instanceof Object) {
    errorCount++;
  }
}

describe('errorable-merchant', function () {
  it('should have merchant errors in zh-CN!', function () {
    var count = 0;
    var errors = {
      MerchantIdError: '商户ID错误！',
      MerchantNotLoggedIn: '商户未登录！',
      MerchantNotFound: '商户未找到！'
    };
    for (var k in errors) {
      if (typeof errors[k] === 'string') {
        assert.equal(true, cnErrors[k].message === errors[k]);
        count++;
      }
    }
    assert.equal(errorCount, count);
  });

  it('should have merchant errors in en-US!', function () {
    var count = 0;
    var errors = {
      MerchantIdError: 'Merchant ID Error!',
      MerchantNotLoggedIn: 'Merchant Not Logged In!',
      MerchantNotFound: 'Merchant Not Found!'
    };

    for (var k in errors) {
      if (typeof errors[k] === 'string') {
        assert.equal(true, enUsErrors[k].message === errors[k]);
        count++;
      }
    }
    assert.equal(errorCount, count);
  });
});
