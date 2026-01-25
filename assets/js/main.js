(function ($) {
  "use strict";


  $(window).on('load', function () {
    $("#cover").fadeOut(750);
  });


  /*======================================================nav responsive ===============================================*/
  jQuery(document).ready(function ($) {
    var alterClass = function () {
      var ww = document.body.clientWidth;
      if (ww < 1024) {
        $('.navbar-item.has-dropdown').removeClass('is-hoverable');
      } else if (ww >= 1024) {
        $('.navbar-item.has-dropdown').addClass('is-hoverable');
      };
    };
    $(window).resize(function () {
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });
  /*=====================================================================================================*/
  $(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });
  });

  /*======================================Header============================================================= */
  function header_adj() {
    if ($(window).width() < 1023) {
      var header_height = $(".header").outerHeight();
      $(".nav-wrap .nav-list").css({ "padding-top": header_height + "px" });
    } else {
      $(".nav-wrap .nav-list").css({ "padding-top": "0" });
    }
  }
  function submenu_toggle() {
    if ($(window).width() < 1023) {
      $(".nav-list li.with-submenu")
        .off()
        .click(function () {
          $(this).toggleClass("is-open");
          $(".submenu").slideToggle("slow");
        });
    }
  }
  $(document).ready(function () {
    header_adj();
    submenu_toggle();
    if ($(window).width() < 1023) {
      $(".hamburger")
        .off()
        .click(function () {
          $(this).toggleClass("is-active");
          $("body,html").toggleClass("sidebar-open");
          $(".nav-wrap").toggleClass("is-open");
        });

      $(".overlay")
        .off()
        .click(function () {
          $(".hamburger").removeClass("is-active");
          $("body,html").removeClass("sidebar-open");
          $(".nav-wrap").removeClass("is-open");
        });
    } else {
      $(".hamburger").removeClass("is-active");
      $("body,html").removeClass("sidebar-open");
      $(".nav-wrap").removeClass("is-open");
    }
  });
  $(window).on("resize", function () {
    header_adj();
    submenu_toggle();
    if ($(window).width() < 1023) {
      $(".hamburger")
        .off()
        .click(function () {
          $(this).toggleClass("is-active");
          $("body,html").toggleClass("sidebar-open");
          $(".nav-wrap").toggleClass("is-open");
        });

      $(".overlay")
        .off()
        .click(function () {
          $(".hamburger").removeClass("is-active");
          $("body,html").removeClass("sidebar-open");
          $(".nav-wrap").removeClass("is-open");
        });
    } else {
      $(".hamburger").removeClass("is-active");
      $("body,html").removeClass("sidebar-open");
      $(".nav-wrap").removeClass("is-open");
    }
  });
  /*======================================Header====================================== */
  /*======================================Modal======================================*/
  document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }

    function closeModal($el) {
      $el.classList.remove('is-active');
    }

    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);

      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');

      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;

      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });
  /*======================================Modal======================================*/
  /*======================================Dropdown======================================*/
  $(document).ready(function () {
    var dropdown = document.querySelector('.dropdown');
    if (dropdown) {

      dropdown.addEventListener('click', function (event) {
        event.stopPropagation();
        dropdown.classList.toggle('is-active');
      });
    }

    /*======================================Hide/Show Button======================================*/
    $('.saved-course').hide();
    $('.stauts-option').on('click',
      function () {
        $('.saved-course, .add-to-archives').toggle();
      }
    );
  });

  /*======================================Hide/Show Button======================================*/

  /*======================================Taps======================================*/
  $('.tab').on('click', function (evt) {
    evt.preventDefault();
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    var sel = this.getAttribute('data-toggle-target');
    $('.tab-content').removeClass('active').filter(sel).addClass('active');
  });


  $('ul.booking li').on('click', function (evt) {
    evt.preventDefault();
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });

  /*--------------------------------------LocomotiveScroll---------------------------------------------*/
  /* const scroll = new LocomotiveScroll({
     el: document.querySelector('[data-scroll-container]'),
     smooth: true
 }); */

  const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: true,
    getDirection: true,

    tablet: {
      smooth: true
    },

  })

/*===============================resize screen========================= */





  gsap.registerPlugin(ScrollTrigger)


  scroller.on('scroll', ScrollTrigger.update)

  ScrollTrigger.scrollerProxy(
    '.container', {
    scrollTop(value) {
      return arguments.length ?
        scroller.scrollTo(value, 0, 0) :
        scroller.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        left: 0, top: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  }
  )
  ScrollTrigger.create({
    scroller: "[data-scroll-container]"
  })
  window.addEventListener("load", function (event) {
    ScrollTrigger.refresh();
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update());
  ScrollTrigger.refresh();
  scroller.on("scroll", (position) => {
    if ($(".navbar").length) {
      if ((position.scroll.y) > 50) {
        document.querySelector(".navbar").classList.add("scrolled");
      } else {
        document.querySelector(".navbar").classList.remove("scrolled");
      }
    }
  });
  scroller.on('call', func => {
    $(document).trigger(func);
    if (func == 'checkCounter') {
      /*======================================counter======================================*/
      const counters = document.querySelectorAll(".counter");

      counters.forEach((counter) => {
        counter.innerText = "0";

        const updateCounter = () => {
          const target = +counter.getAttribute("data-target");
          const c = +counter.innerText;

          const increment = target / 200;

          if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
          } else {
            counter.innerText = target;
          }
        };

        updateCounter();
      });
    }
    if (func == 'checkProgress') {
      jQuery(document).ready(function () {

        jQuery('.progress-bar').each(function () {
          jQuery(this).find('.progress-content').animate({
            width: jQuery(this).attr('data-percentage')
          }, 2000);

          jQuery(this).find('.progress-number-mark').animate(
            { right: jQuery(this).attr('data-percentage') },
            {
              duration: 2000,
              step: function (now, fx) {
                var data = Math.round(now);
                jQuery(this).find('.percent').html(data + '%');
              }
            });
        });
      });
    }
    // Or do it your own way 😎
  });

  /*=================read-more==================================*/
  $(".readmore-link").click(function (e) {
    // record if our text is expanded
    var isExpanded = $(e.target).hasClass("expand");

    //close all open paragraphs
    $(".readmore.expand").removeClass("expand");
    $(".readmore-link.expand").removeClass("expand");

    // if target wasn't expand, then expand it
    if (!isExpanded) {
      $(e.target).parent(".readmore").addClass("expand");
      $(e.target).addClass("expand");
    }
  });

  /*=============Accordion======================================*/
  (function Accordion() {
    const triggers = document.querySelectorAll('[data-toggle="collapse"]');
    let activeToggle;

    triggers &&
      triggers.forEach(trigger => {
        trigger.collapseTarget = document.querySelector(
          trigger.hash || trigger.dataset.target);


        trigger.collapseTarget.dataset.parent &&
          trigger.collapseTarget.classList.contains("is-active") && (
            activeToggle = trigger);

        trigger.addEventListener("click", event => {
          event.preventDefault();
          event.stopPropagation();
          toggle(trigger);
        });

        // Remove height when end open transition
        trigger.collapseTarget.addEventListener("transitionend", ({ target }) => {
          if (!target.classList.contains("is-active")) return;

          target.style.height = null;
        });
      });

    function toggle(trigger) {
      if (trigger.collapseTarget.classList.contains("is-active")) {
        close(trigger);
        activeToggle = null;
      } else {
        activeToggle &&
          activeToggle.collapseTarget.dataset.parent &&
          close(activeToggle);

        trigger.collapseTarget.dataset.parent && (activeToggle = trigger);

        open(trigger);
      }
    }

    function close(trigger) {
      setHeight(trigger.collapseTarget);

      trigger.parentElement.classList.remove("is-active");
      trigger.classList.remove("is-active");
      trigger.collapseTarget.classList.remove("is-active");

      setTimeout(() => {
        trigger.collapseTarget.style.height = null;
      }, 0);
    }

    function open(trigger) {
      trigger.classList.add("is-active");
      trigger.parentElement.classList.add("is-active");

      setTimeout(() => {
        setHeight(trigger.collapseTarget);
        trigger.collapseTarget.classList.add("is-active");
      }, 0);
    }

    function setHeight(target) {
      target.style.height = target.scrollHeight + "px";
    }
  })();

  /*===================copy link================ */
  document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
    const inputField = copyLinkParent.querySelector(".copy-link-input");
    const copyButton = copyLinkParent.querySelector(".copy-link-button");
    const text = inputField.value;

    inputField.addEventListener("focus", () => inputField.select());

    copyButton.addEventListener("click", () => {
      inputField.select();
      navigator.clipboard.writeText(text);

      inputField.value = "تم النسخ!";
      setTimeout(() => (inputField.value = text), 2000);
    });
  });
/*========================================================== */
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
  });
/*========================================================== */
if ($('.otp')) {
  $(".otp").keyup(function () {
      if (this.value.length == this.maxLength) {
          var $next = $(this).next('.otp');
          if ($next.length)
              $(this).next('.otp').focus();
          else
              $(this).blur();
      }
  });
}
/*=================change profile================*/
$(document).ready(function() {

    
  var readURL = function(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
  
          reader.onload = function (e) {
              $('.profile-pic').attr('src', e.target.result);
          }
  
          reader.readAsDataURL(input.files[0]);
      }
  }
  
  
  $(".file-upload").on('change', function(){
      readURL(this);
  });
  
  $(".upload-button").on('click', function() {
     $(".file-upload").click();
  });
  });
/*====================================================== */

})(jQuery);


