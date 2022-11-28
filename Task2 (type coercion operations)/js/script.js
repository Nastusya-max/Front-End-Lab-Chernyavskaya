'use strict';
document.addEventListener('DOMContentLoaded', () => {
  let code;
  let result;
  let description;

  const example = {
    code,
    result,
    description
  };

  const bt1 = document.querySelector('.firstExample');
  const bt2 = document.querySelector('.secondExample');
  const bt3 = document.querySelector('.thirdExample');
  const bt4 = document.querySelector('.fourthExample');
  const bt5 = document.querySelector('.fifthExample');

  bt1.addEventListener('click', () => {
    example.code = 'true + false + true';
    example.result = true + false + true;
    example.description = 'Binary + operator triggers numeric conversion for true and false (true + false + true = 1 + 0 + 1).';
    makeChanges();
  });

  bt2.addEventListener('click', () => {
    example.code = '[ ] + false - 3';
    example.result = [] + false - 3;
    example.description = '+ operator triggers numeric conversion for []. Array’s valueOf() method returns the array itself,' +
      "and is ignored because it’s not a primitive. Array’s toString() converts [] to just empty string. ('' + false ==> 'false').";
    makeChanges();
  });

  bt3.addEventListener('click', () => {
    example.code = "9/'3' + 'foo'";
    example.result = 9 / '3' + 'foo';
    example.description = "Arithmetic division operator / triggers numeric conversion for string '3'. On the second step," +
      "expression 3 + 'foo' is evaluated, and since one operand is a string, it triggers a string conversion.";
    makeChanges();
  });

  bt4.addEventListener('click', () => {
    example.code = "!!'false' == true";
    example.result = (!!"false" == true);
    example.description = "!! operator converts 'false' string to boolean true, since it is non-empty strings." +
      "Then, == just checks equality without any coercion.";
    makeChanges();
  });

  bt5.addEventListener('click', () => {
    example.code = "null == ''";
    example.result = (null == '');
    example.description = "== usually triggers numeric conversion, but it’s not the case with null." +
      "null equals to null or undefined only, and does not equal to anything else.";
    makeChanges();
  });

  const makeChanges = () => {
    document.getElementById("code").innerHTML = example.code;
    document.getElementById("result").innerHTML = example.result;
    document.getElementById("description").innerHTML = example.description;
  }
});

