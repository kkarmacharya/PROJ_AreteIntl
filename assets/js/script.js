function preSlider() {
  var e = $("#presentation");
  $("#presentation").fullpage({
    sectionsColor: ["#fff", "#fff", "#1a237e", "#fff", "#fff"],
    anchors: [
      "model-3",
      "model-X",
      "model-Y",
      "section-our-projects",
      "section-contact-us",
    ],
    menu: "#presentation-menu",
    slidesNavigation: !0,
    slidesToSections: !0,
    responsiveWidth: 900,
    responsiveSlides: !0,
    responsiveSlidesKey:
      "YWx2YXJvdHJpZ28uY29tX3RoVWNtVnpjRzl1YzJsMlpWTnNhV1JsY3c9PUVZdg==",
    afterLoad: function (o, t) {
      var i = e.children(".active"),
        l = i.attr("data-skin");
      $("body").attr("data-row-skin", l);
    },
  });
}
function GoogleMap() {
  function e() {
    var e = {
        zoom: 11,
        scrollwheel: !1,
        center: new google.maps.LatLng(40.6, -73.94),
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
              { saturation: 36 },
              { color: "#000000" },
              { lightness: 40 },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
              { visibility: "on" },
              { color: "#000000" },
              { lightness: 16 },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#000000" }, { lightness: 20 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 20 }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 21 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#000000" }, { lightness: 17 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: 0.2 }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 18 }],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 16 }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 19 }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 17 }],
          },
        ],
      },
      t = document.getElementById("map"),
      i = new google.maps.Map(t, e);
    new google.maps.Marker({
      position: new google.maps.LatLng(40.6, -73.94),
      map: i,
      title: "Location 1",
      icon: o,
    });
  }
  var o = "../img/map-marker.png";
  $("#map").length > 0 &&
    (void 0 != $("#map").attr("data-marker-image") &&
      (o = $("#map").attr("data-marker-image")),
    google.maps.event.addDomListener(window, "load", e));
}
function OwlCarousel() {
  $(".project-carousel").length > 0 &&
    $(".project-carousel").each(function () {
      $(this).owlCarousel({
        items: 1,
        loop: !0,
        mouseDrag: !0,
        navigation: !0,
        dots: !1,
        pagination: !1,
        autoPlay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        smartSpeed: 1e3,
        autoplayHoverPause: !0,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
        transitionStyle: "backSlide",
      });
    }),
    $(".navi-carousel").length > 0 &&
      $(".navi-carousel").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
          items: $(this).attr("data-desktop"),
          loop: !0,
          mouseDrag: !0,
          navigation: !0,
          dots: !1,
          pagination: !1,
          autoPlay: e,
          autoplayTimeout: 5e3,
          autoplayHoverPause: !0,
          smartSpeed: 1e3,
          autoplayHoverPause: !0,
          itemsDesktop: [1199, $(this).attr("data-desktop")],
          itemsDesktopSmall: [979, $(this).attr("data-laptop")],
          itemsTablet: [768, $(this).attr("data-tablet")],
          itemsMobile: [479, $(this).attr("data-mobile")],
          navigationText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
          ],
        });
      }),
    $(".drag-carousel").length > 0 &&
      $(".drag-carousel").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
          items: $(this).attr("data-desktop"),
          loop: !0,
          mouseDrag: !0,
          navigation: !1,
          dots: !1,
          pagination: !1,
          autoPlay: e,
          autoplayTimeout: 5e3,
          autoplayHoverPause: !0,
          smartSpeed: 1e3,
          autoplayHoverPause: !0,
          itemsDesktop: [1199, $(this).attr("data-desktop")],
          itemsDesktopSmall: [979, $(this).attr("data-laptop")],
          itemsTablet: [768, $(this).attr("data-tablet")],
          itemsMobile: [479, $(this).attr("data-mobile")],
        });
      }),
    $(".dots-carousel").length > 0 &&
      $(".dots-carousel").each(function () {
        $(this).owlCarousel({
          items: 1,
          loop: !0,
          mouseDrag: !0,
          navigation: !1,
          dots: !0,
          pagination: !0,
          autoPlay: !1,
          autoplayTimeout: 5e3,
          autoplayHoverPause: !0,
          smartSpeed: 1e3,
          autoplayHoverPause: !0,
          itemsDesktop: [1199, 1],
          itemsDesktopSmall: [979, 1],
          itemsTablet: [768, 1],
          itemsMobile: [479, 1],
        });
      });
}
function introHeight() {
  var e = $(window).height();
  $(".section-fullscreen").css({ height: e });
}
function Countdown() {
  $(".pl-clock").length > 0 &&
    $(".pl-clock").each(function () {
      var e = $(this).attr("data-time");
      $(this).countdown(e, function (e) {
        $(this).html(
          e.strftime(
            '<div class="countdown-item"><div class="countdown-item-value">%D</div><div class="countdown-item-label">Days</div></div><div class="countdown-item"><div class="countdown-item-value">%H</div><div class="countdown-item-label">Hours</div></div><div class="countdown-item"><div class="countdown-item-value">%M</div><div class="countdown-item-label">Minutes</div></div><div class="countdown-item"><div class="countdown-item-value">%S</div><div class="countdown-item-label">Seconds</div></div>'
          )
        );
      });
    });
}
function RevolutionInit() {
  $("#rev_slider")
    .show()
    .revolution({
      sliderType: "standard",
      jsFileLocation: "assets/js/",
      sliderLayout: "fullwidth",
      dottedOverlay: "none",
      delay: 9e3,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "on",
        touch: {
          touchenabled: "on",
          touchOnDesktop: "off",
          swipe_threshold: 75,
          swipe_min_touches: 50,
          swipe_direction: "horizontal",
          drag_block_vertical: !1,
        },
        arrows: {
          style: "metis",
          enable: !0,
          hide_onmobile: !0,
          hide_under: 600,
          hide_onleave: !0,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          tmp: "",
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 30,
            v_offset: 0,
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 30,
            v_offset: 0,
          },
        },
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [800, 600, 500, 400],
      lazyType: "smart",
      parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 2e3,
        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
        disable_onmobile: "on",
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: !1,
      },
    });
}
function RevolutionInit_2() {
  $("#rev_slider_2")
    .show()
    .revolution({
      sliderType: "standard",
      jsFileLocation: "assets/js/",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9e3,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        arrows: {
          style: "metis",
          enable: !0,
          hide_onmobile: !1,
          hide_onleave: !0,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          tmp: "",
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 20,
            v_offset: 0,
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 20,
            v_offset: 0,
          },
        },
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [868, 768, 960, 720],
      lazyType: "none",
      parallax: {
        type: "mouse",
        origo: "enterpoint",
        speed: 400,
        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
        disable_onmobile: "on",
      },
      shadow: 0,
      spinner: "spinner3",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: !1,
      },
    });
}
function RevolutionInit_3() {
  $("#rev_slider_3")
    .show()
    .revolution({
      sliderType: "standard",
      jsFileLocation: "assets/js/",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9e3,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        touch: {
          touchenabled: "on",
          swipe_threshold: 75,
          swipe_min_touches: 50,
          swipe_direction: "horizontal",
          drag_block_vertical: !1,
        },
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [868, 768, 960, 720],
      lazyType: "smart",
      parallax: {
        type: "scroll",
        origo: "enterpoint",
        speed: 400,
        levels: [5, 10, 15, 25, 20, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
        type: "scroll",
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "on",
      stopAfterLoops: 0,
      stopAtSlide: 1,
      shuffle: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "60px",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: !1,
      },
    });
}
function RevolutionInit_4() {
  $("#rev_slider_4")
    .show()
    .revolution({
      sliderType: "standard",
      jsFileLocation: "assets/js/",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9e3,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        touch: {
          touchenabled: "on",
          touchOnDesktop: "off",
          swipe_threshold: 75,
          swipe_min_touches: 50,
          swipe_direction: "horizontal",
          drag_block_vertical: !1,
        },
        tabs: {
          style: "metis",
          enable: !0,
          width: 250,
          height: 40,
          min_width: 0,
          wrapper_padding: 0,
          wrapper_color: "",
          tmp: '<div class="tp-tab-wrapper"><div class="tp-tab-number">{{param1}}</div><div class="tp-tab-divider"></div><div class="tp-tab-title-mask"><div class="tp-tab-title">{{title}}</div></div></div>',
          visibleAmount: 5,
          hide_onmobile: !0,
          hide_under: 800,
          hide_onleave: !1,
          hide_delay: 200,
          direction: "vertical",
          span: !0,
          position: "inner",
          space: 0,
          h_align: "left",
          v_align: "center",
          h_offset: 0,
          v_offset: 0,
        },
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [868, 768, 960, 720],
      lazyType: "none",
      parallax: {
        type: "3D",
        origo: "slidercenter",
        speed: 1e3,
        levels: [2, 4, 6, 8, 10, 12, 14, 16, 45, 50, 47, 48, 49, 50, 0, 50],
        ddd_shadow: "off",
        ddd_bgfreeze: "on",
        ddd_overflow: "hidden",
        ddd_layer_overflow: "visible",
        ddd_z_correction: 100,
      },
      spinner: "off",
      stopLoop: "on",
      stopAfterLoops: 0,
      stopAtSlide: 1,
      shuffle: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "60px",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: !1,
      },
    });
}
function RevolutionInit_5() {
  $("#rev_slider_5")
    .show()
    .revolution({
      sliderType: "standard",
      jsFileLocation: "assets/js/",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9e3,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "on",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        touch: {
          touchenabled: "on",
          touchOnDesktop: "off",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "vertical",
          drag_block_vertical: !1,
        },
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [868, 768, 960, 720],
      lazyType: "none",
      shadow: 0,
      spinner: "off",
      stopLoop: "on",
      stopAfterLoops: 0,
      stopAtSlide: 1,
      shuffle: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: !1,
      },
    });
}
function RevolutionInit_6() {
  $("#rev_slider_6")
    .show()
    .revolution({
      sliderType: "standard",
      jsFileLocation: "assets/js/",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9e3,
      navigation: {
        keyboardNavigation: "on",
        keyboard_direction: "vertical",
        mouseScrollNavigation: "carousel",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        touch: {
          touchenabled: "on",
          touchOnDesktop: "off",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "vertical",
          drag_block_vertical: !1,
        },
        bullets: {
          enable: !0,
          hide_onmobile: !0,
          hide_under: 778,
          style: "hermes",
          hide_onleave: !1,
          direction: "vertical",
          h_align: "right",
          v_align: "center",
          h_offset: 20,
          v_offset: 0,
          space: 5,
          tmp: "",
        },
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [868, 768, 960, 720],
      lazyType: "smart",
      shadow: 0,
      spinner: "spinner2",
      stopLoop: "on",
      stopAfterLoops: 0,
      stopAtSlide: 1,
      shuffle: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: !1,
      },
    });
}
function RevolutionInit_7() {
  $("#rev_slider_7")
    .show()
    .revolution({
      sliderType: "standard",
      jsFileLocation: "assets/js/",
      sliderLayout: "fullwidth",
      dottedOverlay: "none",
      delay: 9e3,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "on",
        touch: {
          touchenabled: "on",
          touchOnDesktop: "off",
          swipe_threshold: 75,
          swipe_min_touches: 50,
          swipe_direction: "horizontal",
          drag_block_vertical: !1,
        },
        bullets: {
          enable: !0,
          hide_onmobile: !0,
          hide_under: 600,
          style: "ares",
          hide_onleave: !0,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          direction: "horizontal",
          h_align: "center",
          v_align: "bottom",
          h_offset: 0,
          v_offset: 50,
          space: 5,
          tmp: '<span class="tp-bullet-title">{{title}}</span>',
        },
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [700, 600, 500, 400],
      lazyType: "smart",
      parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 2e3,
        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
        disable_onmobile: "on",
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: !1,
      },
    });
}
function RevolutionInit_8() {
  $("#rev_slider_8")
    .show()
    .revolution({
      sliderType: "standard",
      jsFileLocation: "assets/js/",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9e3,
      navigation: {},
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [868, 768, 960, 720],
      lazyType: "none",
      shadow: 0,
      spinner: "spinner0",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: { simplifyAll: "off", disableFocusListener: !1 },
    });
}
function RevolutionInit_9() {
  $("#rev_slider_9")
    .show()
    .revolution({
      sliderType: "standard",
      jsFileLocation: "assets/js/",
      sliderLayout: "auto",
      dottedOverlay: "none",
      delay: 9e3,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        arrows: {
          style: "metis",
          enable: !0,
          hide_onmobile: !1,
          hide_onleave: !0,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          tmp: "",
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 20,
            v_offset: 0,
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 20,
            v_offset: 0,
          },
        },
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1780, 1024, 778, 480],
      gridheight: [800, 768, 960, 720],
      lazyType: "none",
      shadow: 0,
      spinner: "spinner0",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: !1,
      },
    });
}
function RevolutionInit_10() {
  $("#rev_slider_10")
    .show()
    .revolution({
      sliderType: "standard",
      jsFileLocation: "assets/js/",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9e3,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "on",
        touch: {
          touchenabled: "on",
          touchOnDesktop: "off",
          swipe_threshold: 75,
          swipe_min_touches: 50,
          swipe_direction: "horizontal",
          drag_block_vertical: !1,
        },
        bullets: {
          enable: !0,
          hide_onmobile: !0,
          hide_under: 600,
          style: "ares",
          hide_onleave: !0,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          direction: "horizontal",
          h_align: "center",
          v_align: "bottom",
          h_offset: 0,
          v_offset: 30,
          space: 5,
          tmp: '<span class="tp-bullet-title">{{title}}</span>',
        },
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [800, 600, 500, 400],
      lazyType: "smart",
      parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 2e3,
        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
        disable_onmobile: "on",
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: ".site-header",
      fullScreenOffset: "",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: !1,
      },
    });
}
function RevolutionInit_11() {
  $("#rev_slider_11")
    .show()
    .revolution({
      sliderType: "standard",
      jsFileLocation: "assets/js/",
      sliderLayout: "auto",
      dottedOverlay: "none",
      delay: 9e3,
      navigation: {},
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: 1258,
      gridheight: 724,
      lazyType: "none",
      shadow: 0,
      spinner: "spinner0",
      autoHeight: "off",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: { simplifyAll: "off", disableFocusListener: !1 },
    });
}
function RevolutionInit_12() {
  $("#rev_slider_12")
    .show()
    .revolution({
      sliderType: "standard",
      jsFileLocation: "assets/js/",
      sliderLayout: "fullwidth",
      dottedOverlay: "none",
      delay: 9e3,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "on",
        touch: {
          touchenabled: "on",
          touchOnDesktop: "off",
          swipe_threshold: 75,
          swipe_min_touches: 50,
          swipe_direction: "horizontal",
          drag_block_vertical: !1,
        },
        arrows: {
          style: "metis",
          enable: !0,
          hide_onmobile: !0,
          hide_under: 600,
          hide_onleave: !0,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          tmp: "",
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 30,
            v_offset: 0,
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 30,
            v_offset: 0,
          },
        },
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [650, 600, 500, 400],
      lazyType: "smart",
      parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 2e3,
        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
        disable_onmobile: "on",
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: !1,
      },
    });
}
!(function (e, o, t) {
  "use strict";
  t(e).on("load", function () {
    t(".noo-spinner").fadeOut(500, function () {
      t(".noo-spinner").remove();
    });
  }),
    t(e).on("resize", function () {}),
    t(e).on("scroll", function () {
      t(this).scrollTop() > 500
        ? t("#backtotop").addClass("on")
        : t("#backtotop").removeClass("on");
    }),
    t(o).ready(function (t) {
      if (t(".onepage-menu").length > 0) {
        var i = t(".onepage-menu").attr("data-offset");
        t(".onepage-menu").length > 0 &&
          t(".onepage-menu").singlePageNav({ offset: i, filter: ".onepage" });
      }
      t("body").on("click", "#backtotop", function () {
        return t("html, body").animate({ scrollTop: 0 }, 800), !1;
      }),
        t("#side-box-container").length > 0 &&
          (t(".header-icon-canvas").sidr({
            name: "side-box-container",
            source: "#side-box-container",
            side: "right",
            renaming: !1,
            displace: !1,
          }),
          t(".button-side-box-close").on("click", function (e) {
            e.preventDefault(), t.sidr("close", "side-box-container");
          })),
        OwlCarousel();
      var l = t(".mini-cart");
      l.on("click", function (e) {
        t(this).addClass("open");
      }),
        t(o).on("click", function (e) {
          0 == t(e.target).closest(l).length && l.removeClass("open");
        });
      var n = t(".search-form-container-full");
      if (
        (t(".header-icon-search").on("click", function (e) {
          e.preventDefault(), n.addClass("open");
        }),
        n.on("click", function (e) {
          t(e.target).parents(".search-form").length || n.removeClass("open");
        }),
        t(".counter").length > 0 &&
          t(".counter").each(function (e) {
            var o = t(this);
            o.waypoint({
              handler: function (e) {
                o.find(".counter-digit:not(.counted)")
                  .countTo()
                  .addClass("counted");
              },
              offset: "90%",
            });
          }),
        0 == t(".header-static").length &&
          0 == t(".header-left-menu").length &&
          t(".header").headroom(),
        t("#js-rotating").length > 0)
      ) {
        var s = 0,
          a = ["#3aacc7", "#bda068", "#d49496", "#67a275"];
        t("#js-rotating").Morphext({
          animation: "fadeInDown",
          separator: ",",
          speed: 2e3,
          complete: function () {
            t("#js-rotating").css("color", a[s]),
              s < a.length - 1 ? s++ : (s = 0);
          },
        });
      }
      t("a.prettyphoto").length > 0 &&
        (t("a[data-rel^='prettyPhoto']").prettyPhoto(),
        t("a.prettyphoto").prettyPhoto(),
        t("a[data-rel^='prettyPhoto']").prettyPhoto({
          hook: "data-rel",
          social_tools: !1,
          theme: "pp_default",
          horizontal_padding: 20,
          opacity: 0.8,
          deeplinking: !1,
        })),
        t(".group-progressbar").each(function () {
          var e = t(this);
          e.waypoint({
            handler: function (o) {
              e.find(".progressbar").progressbar({ display_text: "center" });
            },
            offset: "80%",
          });
        }),
        t("#typed").length > 0 &&
          t("#typed").typed({
            stringsElement: t("#typed-strings"),
            typeSpeed: 30,
            backDelay: 500,
            loop: !0,
            contentType: "html",
            loopCount: !1,
            cursorChar: "|",
          }),
        introHeight(),
        t(".smooth-scroll-link").on("click", function (o) {
          if ("" !== this.hash) {
            o.preventDefault();
            var i = this.hash;
            t("html, body").animate(
              { scrollTop: t(i).offset().top },
              800,
              function () {
                e.location.hash = i;
              }
            );
          }
        }),
        t(".popup-video").length > 0 &&
          t(".popup-video").magnificPopup({
            type: "iframe",
            iframe: {
              patterns: {
                youtube: {
                  index: "youtube.com/",
                  id: function (e) {
                    var o = e.match(/[\\?\\&]v=([^\\?\\&]+)/);
                    return o && o[1] ? o[1] : null;
                  },
                  src: "//www.youtube.com/embed/%id%?autoplay=1",
                },
                vimeo: {
                  index: "vimeo.com/",
                  id: function (e) {
                    var o = e.match(
                      /(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/
                    );
                    return o && o[5] ? o[5] : null;
                  },
                  src: "//player.vimeo.com/video/%id%?autoplay=1",
                },
              },
            },
          }),
        t(".page-open-mobile-menu, .page-close-mobile-menu").on(
          "click",
          function () {
            t(".page-mobile-main-menu").toggleClass("open");
          }
        ),
        t(".toggle-sub-menu").on("click", function () {
          t(this).parent("a").next().hasClass("open")
            ? (t(this).parent("a").next().toggleClass("open"),
              t(this).toggleClass("open"))
            : (t(".sub-menu").removeClass("open"),
              t(this).parent("a").next().toggleClass("open"),
              t(this)
                .parent("a")
                .parent("li")
                .parent(".sub-menu")
                .addClass("open"),
              t(".toggle-sub-menu").removeClass("open"),
              t(this)
                .parent("a")
                .parent("li")
                .parent(".sub-menu")
                .siblings("a")
                .children(".toggle-sub-menu")
                .toggleClass("open"),
              t(this).toggleClass("open"));
        }),
        t("#multiScroll").length > 0 &&
          t(e).width() > 768 &&
          (t("#multiScroll").multiscroll({
            sectionsColor: [],
            easing: "easeOutBack",
            menu: !1,
            navigation: !0,
            loopBottom: !0,
            loopTop: !0,
            navigationPosition: "right",
          }),
          t("#multiscroll-nav > ul > li ").each(function (e) {
            t(this).children("a").attr("href", "javascript:void()");
          })),
        t(".equalheight").length > 0 && t(".equalheight").equalHeights(),
        GoogleMap(),
        Countdown(),
        t("#presentation").length > 0 && preSlider(),
        t(".multimedia").length > 0 && t(".multimedia").fitVids(),
        t(o).on(
          "show.bs.collapse hide.bs.collapse",
          ".accordion",
          function (e) {
            var o = t(e.target);
            "show" == e.type && o.prev(".accordion-heading").addClass("active"),
              "hide" == e.type &&
                o.prev(".accordion-heading").removeClass("active");
          }
        ),
        t("#rev_slider").length > 0 && RevolutionInit(),
        t("#rev_slider_2").length > 0 && RevolutionInit_2(),
        t("#rev_slider_3").length > 0 && RevolutionInit_3(),
        t("#rev_slider_4").length > 0 && RevolutionInit_4(),
        t("#rev_slider_5").length > 0 && RevolutionInit_5(),
        t("#rev_slider_6").length > 0 && RevolutionInit_6(),
        t("#rev_slider_7").length > 0 && RevolutionInit_7(),
        t("#rev_slider_8").length > 0 && RevolutionInit_8(),
        t("#rev_slider_9").length > 0 && RevolutionInit_9(),
        t("#rev_slider_10").length > 0 && RevolutionInit_10(),
        t("#rev_slider_11").length > 0 && RevolutionInit_11(),
        t("#rev_slider_12").length > 0 && RevolutionInit_12();
    });
})(window, document, jQuery);
