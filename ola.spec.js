const Code=require('code');
const Lab=require('lab');
const lab=exports.lab=Lab.script();
const {bemVindo}=require('./ola.js');
Lab.test('verifica', function(done)){
Code.expect(bemVindos('mario')).to.equal('bem vindo mario')
