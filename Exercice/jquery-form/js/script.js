

$(document).ready(function() {

  $('#pseudo').on('input', function() {
    let input =$(this);
    let min5 = /[a-zA-Z0-9_.-]{5,}/
    let naming = min5.test(input.val())

    if(!naming) {
      input.addClass('invalid');
      $('#errorName').html("Your pseudo must contain at least 5 characters");

    } else {
      input.removeClass('invalid').addClass('valid');
      $('#errorName').html("&nbsp;");

    }
  })

  $('#mdp').on('input', function() {
    let input =$(this);
    let min5 = /[0-9a-zA-Z]{5,}/
    let naming = min5.test(input.val())

    if(!naming) {
      input.addClass('invalid');
    } else {
      input.removeClass('invalid').addClass('valid');
    }
  })

  $('#mdp-confirm').on('input', function() {
    let input =$(this);
    let min5 = /[0-9a-zA-Z]{5,}/
    let naming = min5.test(input.val())

    if(!naming) {
      input.addClass('invalid');
    } else {
      input.removeClass('invalid').addClass('valid');
    }

    if ($('#mdp-confirm').val() == $('#mdp').val()) {
      input.removeClass('invalid');
      $('#errorMDPConfirm').html("&nbsp;");
    } else {
      input.addClass('invalid').addClass('valid');
      $('#errorMDPConfirm').html("Your password doesn't match each other");
    }
  })

  $('#email').on('input', function() {
    let input =$(this);
    let re = /^[\w\-]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
    let emailing = re.test(input.val());

    if (!emailing) {
      input.addClass('invalid');
      $('#errorMail').html("Your email must be written like this : name@something.com");

    } else {
      input.removeClass('invalid').addClass('valid');
      $('#errorMail').html("&nbsp;");
    }
  })


  // $('#send').on('click', function(event) {
  //   let yesh = $('form input').hasClass('valid');
  //   let nope = $('form input').hasClass('invalid');
  //   if(yesh) {
  //     event.preventDefault();
  //   } else if (nope) {
  //     $('#erreur').css('display', 'block');
  //   }
  // })
})
