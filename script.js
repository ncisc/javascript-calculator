$('document').ready(function(){
  var equation = '';

  function refresh(){
    $('.screen').text(equation);
  }

  refresh();

  // buttons
  $('.ac').on('click', function(){
    equation = '';
    refresh();
  });
  $('.ce').on('click', function(){
    equation = equation.substr(0, (equation.length-1));
    refresh();
  });
  $('.number').on('click', function(){
    equation += $(this).text();
    refresh();
  });
  $('.add').on('click', function(){
    equation += '+';
    refresh();
  });
  $('.rest').on('click', function(){
    equation += '-';
    refresh();
  });
  $('.multi').on('click', function(){
    equation += '*';
    refresh();
  });
  $('.divide').on('click', function(){
    equation += '/';
    refresh();
  });
  $('.equal').on('click', function(){
    equation = eval(equation);
    refresh();
  });

});
