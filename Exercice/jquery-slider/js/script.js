
$('li').eq(1).css('visibility', 'hidden');
$('li').eq(2).css('visibility', 'hidden');

let i = 0;
setTimeout(function troll() {
  if(i < $('li').length) {
    $('li').eq(i).css('visibility', 'hidden');
    $('li').eq(i += 1).css('visibility', 'visible');
    i++;
  } else {
    $('li').eq(i).css('visibility', 'hidden');
    $('li').eq(0).css('visibility', 'visible');
    i = 0;
  }
  troll();
}, 3000);








// setTimeout(setInterval(function () {
//         moveRight();
//     }, 3000), 15000);
//
//
//
// var slideWidth = 4*500
//
// function moveRight() {
//         $('#slider ul').animate({
//             left: - slideWidth
//         }, 200, function () {
//             $('#carousel ul li:first-child').appendTo('#carousel ul');
//             $('#carousel ul').css('left', '');
//         });
//     };


// $('div #point1').on('click', function() {
//   // setTimeout(function() {
//     $('#img1').slideDown(1200, function() {
//
//     })
//   // }, 1500);
// });
//
// $('#point2').on('click', function() {
//   // setTimeout(function() {
//     $('#img2').slideDown(800, function() {
//
//     })
//   // }, 1500);
// });
//
// $('#point3').on('click', function() {
//   // setTimeout(function() {
//     $('#img3').slideDown(200, function() {
//
//     })
//   // }, 1500);
// });


// setTimeout(function() {
//   $('ul li:nth-child(1)').carousel(0);
//   $('ul li:nth-child(2)').carousel(1);
//   $('ul li:nth-child(3)').carousel(2);
// }, 1500);





// $('li #img1').css('display', 'block')
// $('li #img2').css('display', 'none')
// $('li #img3').css('display', 'none')
//
//
//
// $('div #point1').on('click', function() {
//   // setTimeout(function() {
//
//     $('#img1').css('display', 'block')
//     $('#img2').css('display', 'none')
//     $('#img3').css('display', 'none')
//
//
//   // }, 1500);
// });
//
// $('#point2').on('click', function() {
//   // setTimeout(function() {
//   $('#img2').animate({
//     display : block,
//   }, 1000)
//   $('#img1').css('display', 'none')
//   $('#img3').css('display', 'none')
//   // }, 1500);
// });
//
// $('#point3').on('click', function() {
//   // setTimeout(function() {
//   $('#img3').animate({
//     display: block,
//   }, 1000)
//     $('#img1').css('display', 'none')
//     $('#img2').css('display', 'none')
//   // }, 1500);
// });









// li img:nth-of-type(1)

// $('#point2').on('click', function() {
//   // setTimeout(function() {
//     $('li img:nth-of-type(2)').slideUp('slow', function() {
//
//     })
//   // }, 1500);
// });
//
// $('#point3').on('click', function() {
//   // setTimeout(function() {
//     $('li img:nth-of-type(3)').slideUp('slow', function() {
//
//     })
//   // }, 1500);
// });
