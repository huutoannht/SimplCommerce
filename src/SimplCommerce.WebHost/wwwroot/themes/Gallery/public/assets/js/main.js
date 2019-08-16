var myVar;

$(document).ready(function() {
  setTimeout(function() {
    show_button();

    $(".news-item-cont .als-viewport").css({ height: "264px" });
  }, 2000);

  $("#carousel_certificates").owlCarousel({
    navigation: true,
    pagination: false,
    navigationText: [
      '<span class="icon icon-btn-left"></span>',
      '<span class="icon icon-btn-right" ></span>'
    ],
    items: 5, //10 items above 1000px browser width
    slideSpeed: 300,
    margin: 0,
    paginationSpeed: 400,
    itemsDesktopSmall: [1024, 5], // betweem 900px and 601px
    itemsTablet: [960, 4], //2 items between 600 and 0
    itemsTabletSmall: [600, 3], //2 items between 600 and 0
    itemsMobile: [360, 2] // itemsMobile disabled - inherit from itemsTablet option
  });

  $(
    ".section_video_register .box_button_see_more #button_show_more_video"
  ).bind("click", function() {
    $("#vedio .vedio-item.item-hide").slideDown(500);

    $(this).hide(10);
  });

  $(".show-more-btn #button_show_more_video").bind("click", function() {
    //$(this).parents('.show-more-btn').children('#item_show_more').css({'border':'1px solid red'});

    if (
      $(this)
        .parents(".show-more-btn")
        .children("#item_show_more")
        .is(":visible")
    ) {
      $("#vedio .vedio-item.item-hide").slideDown(500);

      $(this)
        .parents(".show-more-btn")
        .children("#item_show_more")
        .css({ display: "none" });

      $(this)
        .parents(".show-more-btn")
        .children("#item_show_less")
        .css({ display: "block" });

      //$(this).parents('.show-more-btn').hide(10);
    } else {
      $("#vedio .vedio-item.item-hide").slideUp(500);

      $(this)
        .parents(".show-more-btn")
        .children("#item_show_more")
        .css({ display: "block" });

      $(this)
        .parents(".show-more-btn")
        .children("#item_show_less")
        .css({ display: "none" });
    }
  });

  $("#write-comment-form .box_upload .btn_remove_file").bind(
    "click",
    function() {
      $("#write-comment-form .box_upload .btn_remove_file").hide(10);
      $("#write-comment-form .box_upload .btn_file").show(100);

      var img_default = $(
        "#write-comment-form .box_upload .box_img .img_user"
      ).attr("data-img");
      $("#write-comment-form .box_upload .box_img .img_user").attr(
        "src",
        img_default
      );
    }
  );

  $("#write-comment-form .box_upload .btn_file").bind("click", function() {
    $(this)
      .parents(".box_upload")
      .children('input[type="file"]')
      .click();
  });

  var aboutSl = $("#about-slider");
  if (aboutSl.length > 0) {
    aboutSl.slick({
      speed: 1000,
      slidesToShow: 3,
      centerMode: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }

  $('#write-comment-form .box_upload input[type="file"]').bind(
    "change",
    function() {
      var array_files = [];

      var total = $(this)[0].files.length;

      for (i = 0; i < total; i++) {
        var reader = new FileReader();

        reader.onload = function(e) {
          $("#write-comment-form .box_upload .box_img .img_user").attr(
            "src",
            e.target.result
          );
          $("#write-comment-form .box_upload .btn_remove_file").show(100);
          $("#write-comment-form .box_upload .btn_file").hide(10);
        };

        reader.readAsDataURL($(this)[0].files[i]);
      }
    }
  );

  $(document).on(
    "click",
    "#modal_hosting_course .item_upload .btn_remove",
    function() {
      $(this)
        .parents(".file_name")
        .slideUp();
    }
  );

  $("#modal_hosting_course .item_upload .btn_file").bind("click", function() {
    $(this)
      .parents(".item_upload")
      .children('input[type="file"]')
      .click();
  });

  function get_files_modal_hosting_course(input) {
    var array_files = [];

    var total = input[0].files.length;

    for (i = 0; i < total; i++) {
      var reader = new FileReader();

      reader.onload = function(e) {
        array_files[i] = e.target.result;
      };

      reader.readAsDataURL(input[0].files[i]);
    }

    /*setTimeout(function(){

            alert(array_files.length)

        }, 2000);*/
  }

  $('#modal_hosting_course .item_upload input[type="file"]').bind(
    "change",
    function() {
      get_files_modal_hosting_course($(this));

      var total = $(this)[0].files.length;

      if (total > 5) {
        alert("5 photos max");
      } else if (total > 0 && total <= 5) {
        rest = 5 - total;

        $("#modal_hosting_course .item_upload .text").html(
          rest + " photos max"
        );

        var load_names = $(this)
          .parents(".item_upload")
          .children("#load_names");
        load_names.html("");

        var btn_remove =
          '<button type="button" class="btn_remove"><span class="icon icon-trash-o"></span></button>';

        for (var i = 0; i < total; i++) {
          var file_name = $(this)[0].files[i].name;

          load_names.append(
            '<div class="file_name"><span class="icon icon-paperclip"></span> <span class="name">' +
              file_name +
              "</span> " +
              btn_remove +
              "</div>"
          );
        }
      }
    }
  );

  $(document).on(
    "click",
    "#modal_interested_model .item_upload .btn_remove",
    function() {
      $(this)
        .parents(".file_name")
        .slideUp();
    }
  );

  $("#modal_interested_model .item_upload .btn_file").bind("click", function() {
    $(this)
      .parents(".item_upload")
      .children('input[type="file"]')
      .click();
  });

  function get_files(input) {
    var array_files = [];

    var total = input[0].files.length;

    for (i = 0; i < total; i++) {
      var reader = new FileReader();

      reader.onload = function(e) {
        array_files[i] = e.target.result;
      };

      reader.readAsDataURL(input[0].files[i]);
    }

    /*setTimeout(function(){

            alert(array_files.length)

        }, 2000);*/
  }

  $('#modal_interested_model .item_upload input[type="file"]').bind(
    "change",
    function() {
      get_files($(this));

      var total = $(this)[0].files.length;

      if (total > 5) {
        alert("5 photos max");
      } else if (total > 0 && total <= 5) {
        rest = 5 - total;

        $("#modal_interested_model .item_upload .text").html(
          rest + " photos max"
        );

        var load_names = $(this)
          .parents(".item_upload")
          .children("#load_names");
        load_names.html("");

        var btn_remove =
          '<button type="button" class="btn_remove"><span class="icon icon-trash-o"></span></button>';

        for (var i = 0; i < total; i++) {
          var file_name = $(this)[0].files[i].name;

          load_names.append(
            '<div class="file_name"><span class="icon icon-paperclip"></span> <span class="name">' +
              file_name +
              "</span> " +
              btn_remove +
              "</div>"
          );
        }
      }
    }
  );

  $("#modal_interested_model label select#select_location").bind(
    "change",
    function() {
      if ($(this).val() == "other_location") {
        $("#modal_interested_model #other_location").addClass("active");
      } else {
        $("#modal_interested_model #other_location").removeClass("active");
      }
    }
  );

  $("#modal_interested_model .box_items .item_checkbox .show_more").bind(
    "click",
    function() {
      var all_items = $(this)
        .parents(".item_checkbox")
        .children(".all_items");

      if (all_items.is(":visible")) {
        var total = $(this).attr("id");

        $(this).html("Show " + total + " more");

        all_items.slideUp(500);
      } else {
        $(this).html("Show less");
        all_items.slideDown(500);
      }
    }
  );

  $(".box_white .item_upload .btn_file").bind("click", function() {
    $(this)
      .parents(".item_upload")
      .children('input[type="file"]')
      .click();
  });

  $('.box_white .item_upload input[type="file"]').bind("change", function() {
    //alert($(this)[0].files[0].name)

    var file_name = $(this)[0].files[0].name;

    $(this)
      .parents(".item_upload")
      .children(".text")
      .html("");

    $(this)
      .parents(".item_upload")
      .children(".file_name")
      .html('<span class="icon icon-paperclip"></span>' + file_name);

    $(this)
      .parents(".item_upload")
      .children(".btn_remove")
      .show(100);
  });

  $(".box_white .item_upload .btn_remove").bind("click", function() {
    $(this)
      .parents(".item_upload")
      .children('input[type="file"]')
      .val("");

    $(this)
      .parents(".item_upload")
      .children(".text")
      .html("No file selected");

    $(this)
      .parents(".item_upload")
      .children(".file_name")
      .html("");

    $(this).hide(100);
  }); /*



    }, 2000);*/ /*$('.box_white .box_check .box_picture .box_show_more .show_more').bind('click', function(){alert('ok');

        $('.box_white .box_check .box_picture .all_images').slideDown(1000);

        $(this).hide(100);

    });*/

  /*setTimeout(function(){

        var html_title = $('.mapTitle').html();

        $('.mapTitle').hide(100);

        $('#map').append('<div id="box_map_title" style="border: 1px solid red; position: absolute; left: 0; top: 200px; background: red;width: 100%; z-index: 0;">test</div>');




        /*$('#map').append('<div id="box_map_title" style="border: 1px solid red; position: absolute; left: 0; top: 0; width: 100%;"><div class="mapTitle"></div></div>');

        setTimeout(function(){
            $('#box_map_title .mapTitle').append(html_title);
        }, 2000);*/ $(
    ".certification .all_certification_tab .item"
  ).bind("click", function() {
    if (!$(this).hasClass("active")) {
      $(".certification .all_certification_tab .item").removeClass("active");

      $(this).addClass("active");

      var id_item = $(this).attr("id");

      $(".certification .all_certification_item").fadeOut(300);

      setTimeout(function() {
        $(".certification .all_certification_item").each(function(index) {
          if (id_item == index) {
            $(this).fadeIn(500);
          }
        });
      }, 300);

      if ($(window).width() < 703) {
        var header_height = $(".sticky").height();

        $("html, body").animate(
          {
            scrollTop:
              $(".certification .all_certification_item").offset().top -
              header_height
          },
          500
        );
      }
    }
  });

  //alert( $(window).width() );//1006

  $(".certification .all_certification_tab_mobile .item").bind(
    "click",
    function() {
      if (!$(this).hasClass("active")) {
        var selected_item = $(this);

        $(".certification .all_certification_tab_mobile .item").removeClass(
          "active"
        );

        $(this).addClass("active");

        var id_item = $(this).attr("id");

        $(".certification .all_certification_item_mobile").fadeOut(300);

        $(".certification .all_certification_item_mobile").each(function(
          index
        ) {
          if (id_item == index) {
            $(this).fadeIn(500);
          }
        });

        if ($(window).width() < 703) {
          var header_height = $(".sticky").height() + 20;

          setTimeout(function() {
            $("html, body").animate(
              { scrollTop: selected_item.offset().top - header_height },
              1000
            );
          }, 500);
        }
      }
    }
  );

  if ($(window).width() < 1007) {
    $(".certification .all_certification_tab_mobile .item").removeClass(
      "active"
    );
    $(".certification .all_certification_item_mobile").fadeOut(300);

    if ($(window).width() > 720) {
      setTimeout(function() {
        $(
          ".certification .all_certification_tab_mobile .item:nth-child(1)"
        ).addClass("active");

        $(".box_mobile .all_certification_item_mobile:nth-child(2)").fadeIn(
          "active"
        );
      }, 500);
    }
  }

  /*if( $(window).width() < 703 ){

        $('.certification .all_certification_tab_mobile .item:nth-child(1)').click();

    }*/

  $(document).scroll(function() {
    show_button();
  });

  $(".group1").colorbox({ maxHeight: "95%" });

  $(".carousel_products").owlCarousel({
    navigation: true,
    navigationText: [
      "<span class='icon icon-btn-left slider-prev'></span>",
      "<span class='slider-next icon icon-btn-right'></span>"
    ],
    items: 4, //10 items above 1000px browser width
    itemsDesktop: [1000, 4], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 3], // betweem 900px and 601px
    itemsTablet: [720, 2], //2 items between 600 and 0
    itemsMobile: [480, 1] // itemsMobile disabled - inherit from itemsTablet option
  });

  $(".widget-nav .lang").bind("click", function() {
    //clearTimeout(myVar);

    if (
      $(this)
        .children(".list_languages")
        .is(":visible")
    ) {
      $(this)
        .children(".list_languages")
        .stop()
        .slideUp(200);
    } else {
      $(this)
        .children(".list_languages")
        .stop()
        .slideDown(200);

      hide_menu_account();
    }
  });

  $(".widget-nav .lang").bind("mouseover", function() {
    clearTimeout(myVar);
  });

  $(".widget-nav .lang").bind("mouseleave", function() {
    myVar = setTimeout(function() {
      $(".widget-nav .lang .list_languages")
        .stop()
        .slideUp(200);
    }, 2000);
  });

  $(".widget-nav .drop_menu_account").bind("click", function() {
    //clearTimeout(myVar);

    if (
      $(this)
        .children(".menu_account")
        .is(":visible")
    ) {
      $(this)
        .children(".menu_account")
        .stop()
        .slideUp(200);
    } else {
      $(this)
        .children(".menu_account")
        .stop()
        .slideDown(200);

      hide_languages();
    }
  });

  $(".widget-nav .drop_menu_account").bind("mouseover", function() {
    clearTimeout(myVar);
  });

  $(".widget-nav .drop_menu_account").bind("mouseleave", function() {
    myVar = setTimeout(function() {
      $(".widget-nav .drop_menu_account .menu_account")
        .stop()
        .slideUp(200);
    }, 2000);
  });

  $("nav ul li").hover(
    function() {
      $(this)
        .children(".list_li_menu")
        .stop()
        .slideDown(200);
    },
    function() {
      $(this)
        .children(".list_li_menu")
        .stop()
        .slideUp(200);
    }
  );

  $(".close_modal").bind("click", function() {
    $("body").css({ overflow: "auto" });

    $(".box_modal").fadeOut(400);

    $(".bg_modal").fadeOut(400);
  });

  $(".bg_modal").bind("click", function() {
    $("body").css({ overflow: "auto" });

    $(".box_modal").fadeOut(800);

    $(".bg_modal").fadeOut(800);
  });

  $("#icon_ask_code").hover(
    function() {
      $(this)
        .children(".tooltip")
        .show();
    },
    function() {
      $(this)
        .children(".tooltip")
        .hide();
    }
  );

  $("#icon_ask_code").bind("click", function() {
    if (
      $(this)
        .children(".tooltip")
        .is(":visible")
    ) {
      $(this)
        .children(".tooltip")
        .hide();
    } else {
      $(this)
        .children(".tooltip")
        .show();
    }
  });

  $('.box_payment input[type="radio"]').bind("click", function() {
    var id = ".option_payment#" + $(this).attr("id");

    if (!$(id).is(":visible")) {
      $(".option_payment").slideUp(100);

      setTimeout(function() {
        $(id).slideDown(100);
      }, 100);
    }
  });

  $("#training-price").bind("change", function() {
    var price = $("#training-price option:selected").text();

    $(".full-price #price").html(price);
  });

  $(window).resize(function() {
    resize_height();

    reposition_button();

    if ($(window).width() < 1007) {
      if (
        !$(
          ".certification .all_certification_tab_mobile .item:nth-child(1)"
        ).hasClass("active")
      ) {
        $(".certification .all_certification_tab_mobile .item").removeClass(
          "active"
        );
        $(".certification .all_certification_item_mobile").fadeOut(300);

        setTimeout(function() {
          $(
            ".certification .all_certification_tab_mobile .item:nth-child(1)"
          ).addClass("active");

          $(".box_mobile .all_certification_item_mobile:nth-child(2)").fadeIn(
            "active"
          );
        }, 500);
      }
    }
  });

  /*$('.box_cancelation_policy a').bind('click', function(){

        $(this).parents('.box_cancelation_policy').children('.box_text').toggle();

    });*/

  $("#call_upload").bind("click", function() {
    $(".box .title #upload").click();
  });

  $(".call_upload").bind("click", function() {
    $(this)
      .parents(".content_upload")
      .children("#upload")
      .click();
  });

  $(document).bind("click", function(e) {
    var container = $(".drop_menu_account");

    if ($(".drop_menu_account .menu_account").is(":visible")) {
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        hide_menu_account();
      }
    }
  });

  $("#open_search_desktop").bind("click", function() {
    if ($("#search_desktop").width() > 50) {
      $("#search_desktop").removeClass("active");
    } else {
      $("#search_desktop").addClass("active");
    }

    /*
        var brand = $('nav .brand').width();

        var position = $('#search_desktop').parents('li').parents('ul').position().left;

        var total = parseInt(position) - parseInt(brand);

        $('#search_desktop').css({'width':total});
        */

    /*
        if( $('#search_desktop').is(':visible') ){

            $('#search_desktop').removeClass('active');

        }else{

            $('#search_desktop').addClass('active');

        }
        */
  });

  $(document).bind("click", function(e) {
    var container = $("#search_desktop");

    if ($("#search_desktop").width() > 0) {
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("#search_desktop").removeClass("active");
      }
    }
  });

  $(document).bind("click", function(e) {
    var container = $(".widget-nav .lang");

    if ($(".widget-nav .lang .list_languages").is(":visible")) {
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        hide_languages();
      }
    }
  });

  /*$(window).load(function () {

       modal_load();

    });*/
});

/*
function modal_load(){

   $('.bg_modal_load').css({'height': $(document).height() });

   $('.bg_modal_load').fadeOut(800);

   $('.img_loader_home').fadeOut(800);

}*/

function resize_height() {
  var inner_product_info = $("#inner-product-info").height();

  var event_details = $("#inner-product-info .event-details").height();

  if ($(window).width() > 1007) {
    if (inner_product_info > event_details) {
      $("#inner-product-info .event-details").css({
        height: $("#inner-product-info").height()
      });
    } else {
      $("#inner-product-info .event-details").css({ height: "auto" });
    }
  }
}

resize_height();

function show_modal(id, item_tab) {
  $(".bg_modal").css({ height: $(document).height() });

  $("#" + id).css({ "margin-top": $(document).scrollTop() + 150 });

  reset_password(0);

  if (item_tab) {
    tab(item_tab);
  } else {
    tab(1);
  }

  $("#" + id).fadeIn(800);

  $(".bg_modal").fadeIn(800);

  setTimeout(function() {
    //alert('ok123456');
    reset_form_resetpassword();
  }, 500);
}

function close_modal() {
  $("body").css({ overflow: "auto" });

  $(".box_modal").fadeOut(400);

  $(".bg_modal").fadeOut(400);
}

function tab(item) {
  reset_form_resetpassword();

  reset_password(0);

  $(".box_tabs .tabs .tab").removeClass("active");
  $(".box_tabs .item_tab").removeClass("active");

  $(".box_tabs .tabs .tab").each(function(index, element) {
    if (index + 1 == item) {
      $(this).addClass("active");
    }
  });

  $(".box_tabs .item_tab").each(function(index, element) {
    if (index + 1 == item) {
      $(this).addClass("active");
    }
  });
}

function reset_password(show) {
  if (show == "1") {
    $(".modal_user .box_tabs .box_form_login").hide(100);

    $(".modal_user .box_tabs .box_reset_password").show(100);
  } else {
    $(".modal_user .box_tabs .box_form_login").show(100);

    $(".modal_user .box_tabs .box_reset_password").hide(100);
  }
}

function reset_form_resetpassword() {
  if ($(".modal_user .box_tabs .box_reset_successs").is(":visible")) {
    $(".modal_user .box_tabs .box_reset_successs").hide(100);

    //$('.modal_user .box_tabs .box_reset_password').hide(100);
  }
}

function show_button() {
  if ($(document).scrollTop() > 100) {
    if (!$(".back_top").is(":visible")) {
      $(".back_top").fadeIn(800);
    }
  } else {
    if ($(".back_top").is(":visible")) {
      $(".back_top").fadeOut(800);
    }
  }
}

function scroll_top_top() {
  $("html, body").animate({ scrollTop: $("body").offset().top }, 500);
}

function hide_languages() {
  $(".widget-nav .lang .list_languages")
    .stop()
    .slideUp(200);
}

function hide_menu_account() {
  $(".widget-nav .drop_menu_account .menu_account")
    .stop()
    .slideUp(200);
}

function scroll_about() {
  $("html, body").animate(
    { scrollTop: $("#course-info").offset().top - $("nav").height() * 2 - 20 },
    500
  );
  //$("html, body").animate({scrollTop: $("#course-info").offset().top -  ($("header").height() * 2) - 20}, 500);
}

function reposition_button() {
  var width_screen = $(window).width();

  if (width_screen < 1205) {
    var banner_slides_height = $("#banner-slides").height();
    //alert(banner_slides_height);

    banner_slides_height = banner_slides_height - 50;

    $("#fade-slideshow .slide .btn_register").css({
      bottom: "auto",
      top: banner_slides_height
    });
  }
}

window.onload = function(e) {
  setTimeout(function() {
    reposition_button();
  }, 1000);

  $("#fade-slideshow .slide .btn_register").show(10);
};

//show_modal('modal_reset');

function show_more(e) {
  $(e)
    .parents(".box_show_more")
    .parents(".box_picture")
    .children(".all_images")
    .slideDown(1000);

  $(e).hide(100);
}

function clear_field(e) {
  $(e)
    .parents(".code")
    .children("input")
    .val("");
}

function show_more_learn(e) {
  $(".inner-gal-des .content").animate(
    { height: $(".inner-gal-des .content .text").height() },
    800
  );
}
