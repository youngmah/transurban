var assert = require('assert');
const index = require('../index');

describe('Pair', function() {
  describe('pair()', function() {
    it('It will return the number of matching pairs for the array', function(){
      var dataStr = "[10, 20, 20, 10, 10, 30, 50, 10, 20]";
      var dataArr = JSON.parse(dataStr);
      var answer = index.pair(dataArr); 
      assert.equal(answer, 3);
    });
  });
});

