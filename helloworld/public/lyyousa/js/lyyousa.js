$(function () {
  $("#gallery-wrapper").pinterest_grid({
    no_columns: 4,
    padding_x: 10,
    padding_y: 10,
    margin_bottom: 50,
    single_column_breakpoint: 700
  });

  // $("#default").click(function () {
  //   // console.log(1);
  //   $(".display1").css("display", "block").siblings(".display2").css("display", "none")
  //   $(".display1 section").attr('id', 'gallery-wrapper')
  //   $(".display2 section").removeAttr('id')

  // })

  // $("#shengdan").click(function () {
  //   // console.log(1);
  //   $(".display2").css("display", "block").siblings(".display1").css("display", "none")
  //   $(".display2 section").attr('id', 'gallery-wrapper')
  //   $(".display1 section").removeAttr('id')

  // })

  // // test
  // $("#test1").click(function () {
  //   $(".display2 section").removeAttr('id', '')
  //   $(".display2").css("display", "none")

  // })
});