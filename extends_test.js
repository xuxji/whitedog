var ext = require("./extends.js");
var expect = require('chai').expect;

describe("金额格式化", function() {
    it("输出正确的格式", function () {
        expect(123456.789.formartCurrency(1, undefined, undefined, undefined)).to.be.equal("￥123,456.8");
    });
});