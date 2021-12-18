$(function () {
  $("#gallery-wrapper").pinterest_grid({
    no_columns: 4,
    padding_x: 10,
    padding_y: 10,
    margin_bottom: 50,
    single_column_breakpoint: 700
  });

  $("#shengdan").click(function () {
    // console.log(1);
    $(".display2").attr('id','gallery-wrapper')
  })

  // test
  $("#test1").click(function () {
    $(".display2").attr('id','')  })
});