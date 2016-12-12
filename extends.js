/**
 * 扩展Number对象，添加金额格式化
 * example: console.log((123456.6789).formartCurrency(1, undefined, undefined, undefined));  out: ￥123,456.7
 */
Number.prototype.formartCurrency = function(places, symbol, thousand, decimal) {
    places = !isNaN(places = Math.abs(places)) ? places : 1;
    symbol = symbol !== undefined ? symbol : "￥";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var number = this,
        negative = number < 0 ? "-" : "";
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + 
           i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + 
           (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
}