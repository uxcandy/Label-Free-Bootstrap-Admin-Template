'use strict';


// THEME COLORS
var style = getComputedStyle(document.body);
var chartColors = ["#696ffb", "#7db8f9", "#05478f", "#00cccc", "#6CA5E0", "#1A76CA"];
var primaryColor = style.getPropertyValue('--primary');
var secondaryColor = style.getPropertyValue('--secondary');
var successColor = style.getPropertyValue('--success');
var warningColor = style.getPropertyValue('--warning');
var dangerColor = style.getPropertyValue('--danger');
var infoColor = style.getPropertyValue('--info');
var darkColor = style.getPropertyValue('--dark');


// BODY ELEMENTS
var Body = $("body");
var TemplateSidebar = $('.sidebar');
var TemplateHeader = $('.t-header');
var PageContentWrapper = $(".page-content-wrapper");
var DesktopToggler = $(".t-header-desk-toggler");
var MobileToggler = $(".t-header-mobile-toggler");

// SIDEBAR TOGGLE FUNCTION FOR MOBILE (SCREEN "MD" AND DOWN)
MobileToggler.on("click", function () {
  $(".page-body").toggleClass("sidebar-collpased");
});


// CHECK FOR CURRENT PAGE AND ADDS AN ACTIVE CLASS FOR TO THE ACTIVE LINK
var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
$('.navigation-menu li a', TemplateSidebar).each(function () {
  var $this = $(this);
  if (current === "") {
    //FOR ROOT URL
    if ($this.attr('href').indexOf("index.html") !== -1) {
      $(this).parents('li').last().addClass('active');
      if ($(this).parents('.navigation-submenu').length) {
        $(this).addClass('active');
      }
    }
  } else {
    //FOR OTHER URL
    if ($this.attr('href').indexOf(current) !== -1) {
      $(this).parents('li').last().addClass('active');
      if ($(this).parents('.navigation-submenu').length) {
        $(this).addClass('active');
      }
      if (current !== "index.html") {
        $(this).parents('li').last().find("a").attr("aria-expanded", "true");
        if ($(this).parents('.navigation-submenu').length) {
          $(this).closest('.collapse').addClass('show');
        }
      }
    }
  }
});

$(".btn.btn-refresh").on("click", function () {
  $(this).addClass("clicked");
  setTimeout(function () {
    $(".btn.btn-refresh").removeClass("clicked");
  }, 3000);
});


$(".btn.btn-like").on("click", function () {
  $(this).toggleClass("clicked");
  $(this).find("i").toggleClass("mdi-heart-outline clicked").toggleClass("mdi-heart");
});