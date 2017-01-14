$(document).ready(function(){

  $(".portfolio-content").hide();
  $(".portfolio-content2").hide();
  $("#portfolio-details").hide();
  $(".songLab-content").hide();
  $(".scoop-content").hide();
  $(".jcrew-content").hide();
  $(".movr-content").hide();
  $(".moon-content").hide();
  $(".closing-X").hide();
  $(".contact-content").hide();

  $(".contact-block").click(function(){
    $(".contact-content").slideToggle();
  })

  $(".portfolio-link").click(function(){
    $(".portfolio-block").addClass("full-width");
    $(".portfolio-content2").show();
    $(".closing-X").show();
    $(".contact-block").hide();
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
    return false;
  });

  $(".closing-X").click(function(){
    $(".portfolio-block").removeClass('full-width');
    $(".portfolio-content").hide();
    $(".portfolio-content2").hide();
    $(".closing-X").hide();
    $(".contact-block").show();
    $("#portfolio-details").hide();
    $(".songLab-content").hide();
    $(".scoop-content").hide();
    $(".fringe-content").hide();
    $(".jcrew-content").hide();
    $(".movr-content").hide();
    $(".moon-content").hide();
    $('html, body').animate({
      scrollTop: $("#siteTop").offset().top
    }, 1000);
    return false;
  });

  $("#allProjects").click(function(){
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
  })

  $(".songLab").click(function(){
    // Items to Hide
    $(".scoop-content").hide();
    $(".fringe-content").hide();
    $(".jcrew-content").hide();
    $(".movr-content").hide();
    $(".moon-content").hide();

    // Items to Show
    $("#portfolio-details").show();
    $(".songLab-content").show();

    // Scroll Code
    $('html, body').animate({
        scrollTop: $("#portfolio-details").offset().top
    }, 1000);
    return false;
  })

  $(".scoop").click(function(){
    // Items to Hide
    $(".songLab-content").hide();
    $(".fringe-content").hide();
    $(".jcrew-content").hide();
    $(".movr-content").hide();
    $(".moon-content").hide();

    //Items to Show
    $("#portfolio-details").show();
    $(".scoop-content").show();

    // Scroll Code
    $('html, body').animate({
        scrollTop: $("#portfolio-details").offset().top
    }, 1000);
    return false;
  })

  $(".fringe").click(function(){
    // Items to Hide
    $(".songLab-content").hide();
    $(".scoop-content").hide();
    $(".jcrew-content").hide();
    $(".movr-content").hide();
    $(".moon-content").hide();

    // Items to Show
    $("#portfolio-details").show();
    $(".fringe-content").show();

    //Scroll to Code
    $('html, body').animate({
        scrollTop: $("#portfolio-details").offset().top
    }, 1000);
    return false;
  })

  $(".j-crew").click(function(){
    // Items to Hide
    $(".songLab-content").hide();
    $(".scoop-content").hide();
    $(".fringe-content").hide();
    $(".movr-content").hide();
    $(".moon-content").hide();

    // Items to Show
    $("#portfolio-details").show();
    $(".jcrew-content").show();

    //Scroll to Code
    $('html, body').animate({
        scrollTop: $("#portfolio-details").offset().top
    }, 1000);
    return false;
  })

  $(".movr").click(function(){
    // Items to Hide
    $(".scoop-content").hide();
    $(".fringe-content").hide();
    $(".jcrew-content").hide();
    $(".songLab-content").hide();
    $(".moon-content").hide();

    // Items to Show
    $("#portfolio-details").show();
    $(".movr-content").show();

    // Scroll Code
    $('html, body').animate({
        scrollTop: $("#portfolio-details").offset().top
    }, 1000);
    return false;
  })

  $(".moon").click(function(){
    // Items to Hide
    $(".scoop-content").hide();
    $(".fringe-content").hide();
    $(".jcrew-content").hide();
    $(".songLab-content").hide();
    $(".movr-content").hide();

    // Items to Show
    $("#portfolio-details").show();
    $(".moon-content").show();

    // Scroll Code
    $('html, body').animate({
        scrollTop: $("#portfolio-details").offset().top
    }, 1000);
    return false;
  })

});
