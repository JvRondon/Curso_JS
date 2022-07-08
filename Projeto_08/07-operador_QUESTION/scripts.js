const padrao = /2010?/;

console.log(padrao.test(2010));
// console.log(padrao.test(2011));
// console.log(padrao.test(2012));
// console.log(padrao.test(2013));
// console.log(padrao.test(2014));
// console.log(padrao.test(2015));              todos comentados funcionam!
// console.log(padrao.test(2016));
// console.log(padrao.test(2017));
// console.log(padrao.test(2018));
// console.log(padrao.test(2019));
// console.log(padrao.test(2020));



const padrao2  = /\d+\w?/;

console.log(padrao2.test("123"));
console.log(padrao2.test("123 "));
console.log(padrao2.test("aoihaçksdnhansçdlknwaçsdoih2131238987adkjhakçshd129837712987"))