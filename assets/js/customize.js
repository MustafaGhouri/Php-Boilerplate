 
 var siteurl = window.location.origin + "/boilerplate/";
 
 
 
$(document).on("submit","#codCheckout", function (e) {
      e.preventDefault(); 
  
  $(this).find(".btn-sbmit").attr("disabled", "disabled");
  let btnText =  $(this).find(".btn-sbmit").html();
  $(".btn-sbmit").html('<i class="fa-spinner fa-spin fa "></i>')
  
  $.ajax({
    url: siteurl+"/include/insert.php?page=checkoutCod" ,
    type: "POST",
    data: new FormData(this),
    contentType: false,
    processData: false,
    dataType: "JSON",
    success: function (result) {
      //  alert(result);
      $(".btn-sbmit").removeAttr("disabled");
      
         Snackbar.show({
               text: result['msg'], 
               actionTextColor: '#fff',
               backgroundColor: result['res'],  
           }); 
        
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          1000
        );
            setTimeout(function () { 
                     if(result['res'] == 'success'){ 
            window.open(result['redirect'],'_self')
         }
                }, 700);
    
    },
  });
  $(this).find(".btn-sbmit").html(btnText)
});
  $(document).on("submit", '#modalauth', function (e) {
    e.preventDefault(); 
    $('.btn-sbmit').attr('disabled', 'disabled').html('<i class="fa fa-spinner fa-spin"></i>');
        $.ajax({
          url: siteurl + '/include/insert.php?page=signupDetail',
          type: "POST",
          data: new FormData(this),
          contentType: false,
          cache: false,
          processData: false,
          dataType: "JSON",
          success:function (result) {
               Snackbar.show({
               text: result['msg'], 
               actionTextColor: '#fff',
               backgroundColor: result['res'],  
           });  
              
            if(result['res'] == 'success'){
                setTimeout(function () { 
                    location.reload();
               
                }, 700);
            } 
              $('.btn-sbmit').removeAttr('disabled').html('Save Changes');
          }
          
        }) 
  })
  $(document).on("click", '.buyplan', function (e) {
       e.preventDefault();
    let plan = $(this).attr('data-plan'); 
     $(this).attr('disable');
     $('.page-overlay').show();
     let id = $("#uniId").val();
     
     
     $(this).html(`<i class='fa fa-spinner fa-spin'></i>`)
    let thist = $(this);
    $.ajax({
      url: siteurl+'include/fetch.php?page=buyplan',
      type: "POST",
      data: { plan: plan, id:id},  
       dataType: 'json',
      success: function (result) {
          
          setTimeout(function () {
            if(result['result'] == 'success'){
                window.open(result['redirect'],'_self');
                    $(thist).html(`Buy`);
               $('.page-overlay').hide();
            }
           
        },500);
      }
    })
  })

$("#updateimage").on('submit', function (e) {
  e.preventDefault();
  var fd = new FormData();
  var files = $('#image_upload')[0].files[0];
  var id = $("#imgmodal").val();
  fd.append('image', files);
  fd.append('id', id);
  $.ajax({
    url: siteurl + 'include/update.php?page=image',
    type: "POST",
    data: fd,
    contentType: false,
    cache: false,
    processData: false,
    dataType: 'json',
    success: function (result) {
      // alert(result);
      if (result['result'] == "true") {
        $("#img" + id).attr('src', 'images/' + result['img']);
        $("#updateimage").trigger('reset');
        $("#alert-image").html('<div class="alert alert-success">Image Successfully Updated</div>');
        $("#alert-image").show();
        setTimeout(function () {
          $("#alert-image").hide();
        }, 5000);
      } else {
        $("#alert-image").html('<div class="alert alert-danger">Something Wrong on code :(</div>');
        $("#alert-image").show();
        setTimeout(function () {
          $("#alert-image").hide();
        }, 5000);
      }
    }
  });
});

$('a .content-x').click(function () {
  return false
});
jQuery(document).on("click", ".image-x", function () {
  $("#image_upload").val('');
  /* Act on the event */
  var id = $(this).attr('id');
  var id = id.replace(/[^0-9]/g, '');
  $("#imgmodal").val(id);
  $.ajax({
    url: siteurl + 'include/fetch.php?page=image',
    method: "POST",
    data: {
      id: id
    },
    dataType: 'json',
    success: function (result) {
      $("#contentimg").attr('src', result['img']);
      $('#image-modal').modal('show');
    }
  });
});
$(".content-x").click(function (event) {
  /* Act on the event */
  var id = $(this).attr('id');
  var id = id.replace(/[^0-9]/g, '');
  $.ajax({
    url: siteurl + 'include/fetch.php?page=content',
    method: "POST",
    data: {
      id: id
    },
    dataType: 'html',
    success: function (result) {
      $('.content-modal-body').html(result);
      $('.content-modal').modal('show');
    }
  });
});
$(".contentmodelbtn").click(function (event) {
  $('.content-modal').modal('hide');
});
$(".imgmodelbtn").click(function (event) {
  $('#image-modal').modal('hide');
});
$("#updatecontent").on('submit', function (e) {
  e.preventDefault();
  //  var jp_content= $("#jp_content").val();
  var eng_content = $("#eng_content").val();
  var id = $(".contentid").attr('id');
  $.ajax({
    url: siteurl + 'include/update.php?page=content',
    type: "POST",
    data: {
      id: id,
      eng_content: eng_content
    },
    dataType: 'json',
    success: function (result) {
      // alert(result);
      // console.log(result);
      if (result.result == "success") {
        $(".content" + id).html(eng_content);
        $("#alert-content").html('<div class="alert alert-success">Data Successfully Updated</div>');
        $("#alert-content").show();
        setTimeout(function () {
          $("#alert-content").hide();
        }, 5000);
      } else {
        $("#alert-content").html('<div class="alert alert-danger">Something Wrong on code :(</div>');
        $("#alert-content").show();
        setTimeout(function () {
          $("#alert-content").hide();
        }, 5000);
      }
    }
  });
});
// $('.closemodal').click(function(){
//     $('.modal').hide();
// });

//  end web edit ajax
// ---------------------------------------------Sign Up---------------------------------------------------- 
// sign up ajax
$("#signup").on('submit', function (e) {
  e.preventDefault();
  var page = $('#page').val();
  $('.btn-sbmit').attr('disabled', 'disabled');
  $.ajax({
    url: siteurl + 'admin/include/insert.php?page=' + page,
    type: "POST",
    data: new FormData(this),
    contentType: false,
    cache: false,
    processData: false,
    dataType: "JSON",
    success: function (result) {
      // alert(result);
      $('.btn-sbmit').removeAttr('disabled');
      if (result['res'] == "success") {
        $("#alertsignup").html('<div class="kt-alert kt-alert--outline alert alert-success alert-dismissible" role="alert">           <span>Sign Up Successfully! Please Check Your Email</span></div>');
        $("#signup").trigger('reset');
        $('#select').selectedIndex = 0;
        $("html, body").animate({
          scrollTop: 0
        }, 1000);
      } else if (result['res'] == "databasewrong") {
        $("#alertsignup").html('<div class="kt-alert kt-alert--outline alert alert-danger alert-dismissible" role="alert">           <span>Something Error on Database</span></div>');
        $("html, body").animate({
          scrollTop: 0
        }, 1000);
      } else if (result['res'] == "successroleuser") {
        $("#alertsignup").html('<div class="kt-alert kt-alert--outline alert alert-success alert-dismissible" role="alert">           <span>Successfully Sign Up Please Check Your Email!</span></div>');
        $("html, body").animate({
          scrollTop: 0
        }, 1000);
      } else if (result['res'] == "fillform") {
        $("#alertsignup").html('<div class="kt-alert kt-alert--outline alert alert-danger alert-dismissible" role="alert">           <span>Reqquired All Fields</span></div>');
        $("html, body").animate({
          scrollTop: 0
        }, 1000);
      } else if (result['res'] == "format") {
        $("html, body").animate({
          scrollTop: 0
        }, 1000);
        $("#alertsignup").html('<div class="alert alert-danger inverse alert-dismissible fade show" role="alert"><p>Incorrect Image Format</p><button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button></div>');
      }
    }
  })
});
$("#add").on('submit', function (e) {
  e.preventDefault();
  var page = $('#page').val();
  $('.btn-sbmit').attr('disabled', 'disabled');
  $.ajax({
    url: siteurl + 'admin/include/insert.php?page=' + page,
    type: "POST",
    data: new FormData(this),
    contentType: false,
    cache: false,
    processData: false,
    dataType: "JSON",
    success: function (result) {
      // alert(result);
      $('.btn-sbmit').removeAttr('disabled');
      if (result['res'] == "success") {
        $("#alert").html('<div class="kt-alert kt-alert--outline alert alert-success alert-dismissible" role="alert">           <span>Comment Done!</span></div>');
        $("#add").trigger('reset');
        load_comm();
        $('#select').selectedIndex = 0;
        // $("html, body").animate({
        //   scrollTop: 0
        // }, 1000);
      } else if (result['res'] == "databasewrong") {
        $("#alert").html('<div class="kt-alert kt-alert--outline alert alert-danger alert-dismissible" role="alert">           <span>Something Error on Database</span></div>');
        $("html, body").animate({
          scrollTop: 0
        }, 1000);
      } else if (result['res'] == "not_logins") {
        $("#alert").html('<div class="kt-alert kt-alert--outline alert alert-success alert-dismissible" role="alert">           <span>Please Login First</span></div>');
        setTimeout(function () {
          window.open(siteurl + "login", '_self');
        }, 1000);
        //   header("location:" . $url ."login");
      } else if (result['res'] == "fillform") {
        $("#alert").html('<div class="kt-alert kt-alert--outline alert alert-danger alert-dismissible" role="alert">           <span>Reqquired All Fields</span></div>');
        $("html, body").animate({
          scrollTop: 0
        }, 1000);
      } else if (result['res'] == "format") {
        $("html, body").animate({
          scrollTop: 0
        }, 1000);
        $("#alert").html('<div class="alert alert-danger inverse alert-dismissible fade show" role="alert"><p>Incorrect Image Format</p><button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button></div>');
      }
    }
  })
});
jQuery(document).on("submit", "#post_comment", function (e) {
  e.preventDefault();
  var page = $('#page').val();
  $('.btn-sbmit').attr('disabled', 'disabled');
  $.ajax({
    url: siteurl + 'admin/include/insert.php?page=' + page,
    type: "POST",
    data: new FormData(this),
    contentType: false,
    cache: false,
    processData: false,
    dataType: "JSON",
    success: function (result) {
      // alert(result);
      $('.btn-sbmit').removeAttr('disabled');
      if (result['res'] == "success") {
        $("#alert").html('<div class="kt-alert kt-alert--outline alert alert-success alert-dismissible" role="alert">           <span>Comment Done!</span></div>');
        $("#add").trigger('reset');
        $(".display_none").hide();
        load_comm();
        $('#select').selectedIndex = 0;
        // $("html, body").animate({
        //   scrollTop: 0
        // }, 1000);
      } else if (result['res'] == "databasewrong") {
        $("#alert").html('<div class="kt-alert kt-alert--outline alert alert-danger alert-dismissible" role="alert">           <span>Something Error on Database</span></div>');
        $("html, body").animate({
          scrollTop: 0
        }, 1000);
      } else if (result['res'] == "not_login") {
        $("#alert").html('<div class="kt-alert kt-alert--outline alert alert-success alert-dismissible" role="alert"><span>Please Login First</span></div>');
        setTimeout(function () {
          window.open(url + "login", '_self');
        }, 1000);
        //   header("location:" . $url ."login");
      } else if (result['res'] == "fillform") {
        $("#alert").html('<div class="kt-alert kt-alert--outline alert alert-danger alert-dismissible" role="alert">           <span>Reqquired All Fields</span></div>');
        $("html, body").animate({
          scrollTop: 0
        }, 1000);
      } else if (result['res'] == "format") {
        $("html, body").animate({
          scrollTop: 0
        }, 1000);
        $("#alert").html('<div class="alert alert-danger inverse alert-dismissible fade show" role="alert"><p>Incorrect Image Format</p><button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button></div>');
      }
    }
  })
});
$("#select").on('change', function () {
  var id = $("#select").val();
  // alert(id);
  $.ajax({
    url: siteurl + 'admin/include/fetch.php?page=select',
    method: 'POST',
    data: {
      iid: id,
      btnlogin: "btn"
    },
    dataType: "JSON",
    success: function (data) {
      // alert(data);
      $('#email1').val(data[0]["email"]);
      $('#pswd').val(data[0]["pswd"]);
    }
  })
});

// ---------------------------------------------Sign Up End---------------------------------------------------


// -------------------------------------------Check Mail--------------------------------------------------
function checkemail(email) {
  $.ajax({
    url: "admin/include/check-email.php",
    type: "POST",
    data: {
      email: email
    },
    success: function (data) {
      $("#resultss").html(data);

      $("#resultsss").html(data);
    }


  });
}
 
// ----------------------------------------login-----------------------------------------------------

$("#login").on('submit', function (e) {
  e.preventDefault(); 
  $('.btn-sbmit').attr('disabled', 'disabled');
  $.ajax({
    url: 'admin/include/fetch.php?page=login',
    type: "POST",
    data: new FormData(this),
    contentType: false,
    processData: false,
    dataType: "JSON",
    success: function (result) {
      // alert(result);
      $('.btn-sbmit').removeAttr('disabled');
      $("#alert").html('<div class="kt-alert kt-alert--outline alert alert-' + result["res"] + ' alert-dismissible" role="alert"><span>' + result["msg"] + '</span></div>');
      if (result["res"] == "success") {
        if (result["status"] == 1) {
          setTimeout(function () {
            window.open(result["redirect"], '_self');
          }, 1000);
        }
         
      } else if(result["res"] == "success"){
          
      }
    }
  })
});


function validatePhoneNumber(phoneNumber) {
  // Regular expression pattern to match Pakistani phone numbers
 
  var pattern = /^(?:\+92|0)?(3[0-9]{2})([0-9]{7})$/;

  return pattern.test(phoneNumber);
}
$(document).on("change","#phone_number", function(){
    let val = $(this).val();
  
      if (validatePhoneNumber(val)) {
        // Phone number is valid, perform desired action (e.g., submit form)
        $(".modalphonenumber").html('Valid phone number').addClass('text-success');
        // Your code here...
      } else {
        // Phone number is invalid, show error message
            $(".modalphonenumber").html('Invalid phone number').addClass('text-danger'); 
        // Your code here...
      }
})

// header modal login
$("#login_header_modal").on('submit', function (e) {
  e.preventDefault();
  $('.btn-sbmit').attr('disabled', 'disabled');
  $.ajax({
    url: siteurl + 'admin/include/fetch.php?page=login',
    type: "POST",
    data: new FormData(this),
    contentType: false,
    processData: false,
    dataType: "JSON",
    success: function (result) {
      // alert(result);
      $('.btn-sbmit').removeAttr('disabled');
      $("#alert_login_modal").html('<div class="kt-alert kt-alert--outline alert alert-' + result["res"] + ' alert-dismissible" role="alert"><span>' + result["msg"] + '</span></div>');
      if (result["res"] == "success") {
        if (result["status"] == 1) {
          setTimeout(function () {
            window.open(result["redirect"], '_self');
          }, 1000);
        }
        else {
            setTimeout(function () {
                window.open('index', '_self');
            }, 1000);
        }
      }
    }
  })
});
// -------------------------------------------------end login---------------------------------

// ---------------------------------------forgtot send email----------------------------------------

$("#forgot").on('submit', function (e) {
  e.preventDefault();
  $('button:submit').attr('disabled', 'disabled');
  $.ajax({
    url: siteurl + 'admin/include/fetch.php?page=forgot',
    type: "POST",
    data: new FormData(this),
    contentType: false,
    cache: false,
    processData: false,
    dataType: "json",
    success: function (result) {
      // alert(result);
      $("html, body").animate({
        scrollTop: 0
      }, 1000);
      $('button:submit').removeAttr('disabled');
      if (result.result == "true") {
        $("#forgot").trigger('reset');
        $("#alert-forgot").html('<br><div class=" alert-success kt-alert kt-alert--outline alert alert-blue alert-dismissible" role="alert">           <span>Successfully Send account Recover code on your email !</span></div>');
      } else if (result.result == "databasewrong") {
        $("#alert-forgot").html('<br><div class="kt-alert kt-alert--outline  alert-danger alert alert-orange alert-dismissible" role="alert">           <span>Something Error on Database</span></div>');
      } else if (result.result == "req") {
        $("#alert-forgot").html('<br><div class="kt-alert kt-alert--outline  alert-danger alert alert-orange alert-dismissible" role="alert">           <span>Email/Username Field are Required</span></div>');
      } else if (result.result == "notfound") {
        $("#alert-forgot").html('<br><div class="kt-alert kt-alert--outline alert alert-orange  alert-danger alert-dismissible" role="alert">           <span>This email not found</span></div>');
      }
    }
  })
});

// -------------------------------------------------reset password--------------------------------
$("#updatepassword_reset").on('submit', function (e) {
  e.preventDefault();
  $('button:submit').attr('disabled', 'disabled');

  $.ajax({
    url: siteurl + 'admin/include/update.php?page=updatepassword_reset',
    type: "POST",
    data: new FormData(this),
    contentType: false,
    cache: false,
    processData: false,
    dataType: "json",

    success: function (result) {
      //   alert(result); 
      $("html, body").animate({
        scrollTop: 0
      }, 1000);

      $('button:submit').removeAttr('disabled');

      if (result.result == "true") {
        $("#updatepassword_reset").trigger('reset');

        $("#alerts").html('<br><div class="alert alert-dismissible alert-success" role="alert">        <span>Your Password Successfully Updated Now You Can Login to Your Account!!!</span></div>');
        setTimeout(function () {
          window.open('login.php', '_self')
        }, 3000);
      }
      else if (result.result == "databasewrong") {
        $("#alerts").html('<br><div class="kt-alert kt-alert--outline alert alert-orange alert-dismissible alert-danger" role="alert">           <span>Something Error on Database</span></div>');


      }
      else if (result.result == "databasewrong") {
        $("#alerts").html('<br><div class="kt-alert kt-alert--outline alert alert-orange alert-dismissible alert-danger" alert-danger role="alert">       <span>Something Error on Database</span></div>');


      }
      else if (result.result == "req") {

        $("#alerts").html('<br><div class="kt-alert kt-alert--outline alert alert-orange alert-dismissible alert-danger" role="alert">        <span>Email Field is Required</span></div>');

      }
      else if (result.result == "notmatch") {

        $("#alerts").html('<br><div class="kt-alert kt-alert--outline alert alert-orange alert-dismissible alert-danger" role="alert">     <span>Your Confirm Password Not Match</span></div>');

      }
    }
  })
});
// -----------------------------update password end-----------------------------------

// ------------------------------contact js--------------------------------------

$("#contactForm").on('submit', function (e) {
  // alert();
  e.preventDefault();
  // var page = $('#page-cnt').val();

  $('.btn-sbmit').attr('disabled', 'disabled');


  $.ajax({

    url: siteurl + 'admin/include/insert.php?page=cnt',
    type: "POST",
    data: new FormData(this),
    contentType: false,
    cache: false,
    processData: false,
    dataType: "JSON",
    success: function (result) {
      //   alert(result);
      //  $('.btn-sbmit').removeAttr('disabled');
      if (result['res'] == "success") {

        $("#alertcontact").html('<div class="kt-alert kt-alert--outline alert alert-success alert-dismissible" role="alert">           <span>Your message has been send</span></div>');
        $("#contactForm").trigger('reset');
        $("html, body").animate({

          scrollTop: 0

        }, 1000);


      } else if (result['res'] == "databasewrong") {

        $("#alertcontact").html('<div class="kt-alert kt-alert--outline alert alert-danger alert-dismissible" role="alert">       <span>Something Error on Database</span></div>');
        $("html, body").animate({

          scrollTop: 0

        }, 1000);

      } else if (result['res'] == "format") {
        $("html, body").animate({

          scrollTop: 0

        }, 1000);


        $("#alertcontact").html('<div class="kt-alert kt-alert--outline alert alert-danger alert-dismissible" role="alert">           <span>Incorrect Image Format</span></div>');
      }

    }

  })

});

// -----------------------------------end contact js-----------------------------------