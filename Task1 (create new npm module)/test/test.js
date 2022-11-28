var yodasay = require('yodasay');
var lolcatjs = require('lolcatjs');
var shakespeare = require('shakespeare-data');

describe('Message', function() {
    describe('Shakespeare-data', function() {
        it('Displays a multi-colored master Yoda with a message -- a Shakespearean poem', function(){
            lolcatjs.fromString(yodasay.say({
                text: shakespeare.sonnets.random().lines.join('\n')
            }));
        });
    });
});

describe('Message', function() {
    describe('Some text', function() {
      it('Displays a multi-colored master Yoda with a message -- "May the Force be with you."', function(){
            lolcatjs.fromString(yodasay.say({
              text: 'May the Force be with you.'
            }));
        });
    });
});

describe('Color', function() {
    describe('Unpainted', function() {
      it('Displays a unpainted master Yoda with a message -- a Shakespearean poem', function(){
            console.log(yodasay.say({
                text: 'Use the Force, Luke'
            }));
        });
    });
});

describe('Color', function() {
    describe('Painted', function() {
      it('Displays a two different multi-colored master Yoda with a message -- "Use the Force, Luke"', function(){
            lolcatjs.fromString(yodasay.say({
                text: 'Use the Force, Luke'
            }));
            lolcatjs.options.colors = true;
            lolcatjs.fromString(yodasay.say({
                text: 'Use the Force, Luke'
            }));
        });
    });
});