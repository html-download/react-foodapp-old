$(document).ready(function(){
new WOW().init();
// loader
  $('.loader').on('click', function() {
    var $this = $(this);
    var loadingText = '<i class="fa fa-circle-o-notch fa-spin"></i> loading...';
    if ($(this).html() !== loadingText) {
      $this.data('original-text', $(this).html());
      $this.html(loadingText);
    }
    setTimeout(function() {
      $this.html($this.data('original-text'));
    }, 2000);
  });
// smooth state
$(function(){
  'use strict';
  var $page = $('body'),
      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        onStart: {
          duration: 250, // Duration of our animation
          render: function ($container) {
            // Add your CSS animation reversing class
            $container.addClass('is-exiting');
            // Restart your animation
            smoothState.restartCSSAnimations();
          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-exiting');
            // Inject the new content
            $container.html($newContent);
          }
        }
      },
      smoothState = $page.smoothState(options).data('smoothState');
});

 $('[data-toggle="popover"]').popover();
 $('[data-toggle="tooltip"]').tooltip();

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 2) {
        $("header").addClass("white");
    } else {
    $("header").removeClass("white");
      }
});
$('.modal').on('hidden.bs.modal', function (e) {
    if($('.modal').hasClass('show')) {
    $('body').addClass('modal-open');
    }    
});
 // $("body").removeClass("modal-open");
// scroll nav
  $('.added').on('click', function() {
      iziToast.success({
    title: 'Arabic Grill Fish With Bread',
    message: 'Successfully Added!',
});
  });
// word limit
$(document).ready(function(){
    var maxLength = 50;
    $(".show-read-more").each(function(){
        var myStr = $(this).text();
        if($.trim(myStr).length > maxLength){
            var newStr = myStr.substring(0, maxLength);
            var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
            $(this).empty().html(newStr);
            $(this).append(' <a href="javascript:void(0);" class="read-more">read more...</a>');
            $(this).append('<span class="more-text">' + removedStr + '</span>');
        }
    });
    $(".read-more").click(function(){
        $(this).siblings(".more-text").contents().unwrap();
        $(this).remove();
    });
});
// sticky side
//Sticky Sidebar
(function(){var c,f;c=this.jQuery||window.jQuery;f=c(window);c.fn.stick_in_parent=function(b){var A,w,B,n,p,J,k,E,t,K,q,L;null==b&&(b={});t=b.sticky_class;B=b.inner_scrolling;E=b.recalc_every;k=b.parent;p=b.offset_top;n=b.spacer;w=b.bottoming;null==p&&(p=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=c(document);null==w&&(w=!0);J=function(a){var b;return window.getComputedStyle?(a=window.getComputedStyle(a[0]),b=parseFloat(a.getPropertyValue("width"))+parseFloat(a.getPropertyValue("margin-left"))+
parseFloat(a.getPropertyValue("margin-right")),"border-box"!==a.getPropertyValue("box-sizing")&&(b+=parseFloat(a.getPropertyValue("border-left-width"))+parseFloat(a.getPropertyValue("border-right-width"))+parseFloat(a.getPropertyValue("padding-left"))+parseFloat(a.getPropertyValue("padding-right"))),b):a.outerWidth(!0)};K=function(a,b,q,C,F,u,r,G){var v,H,m,D,I,d,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));if(!g.length)throw"failed to find stick parent";
v=m=!1;(h=null!=n?n&&a.closest(n):c("<div />"))&&h.css("position",a.css("position"));x=function(){var d,f,e;if(!G&&(I=A.height(),d=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),b=parseInt(g.css("padding-bottom"),10),q=g.offset().top+d+f,C=g.height(),m&&(v=m=!1,null==n&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-p,u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:J(a),
height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r,"position":"static"}),e))return l()};x();if(u!==C)return D=void 0,d=p,z=E,l=function(){var c,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+d>C+q,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:d}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,d=p,null==n&&("left"!==r&&"right"!==r||a.insertAfter(h),h.detach()),c={position:"",width:"",top:""},a.css(c).removeClass(t).trigger("sticky_kit:unstick")),
B&&(c=f.height(),u+p>c&&!v&&(d-=l,d=Math.max(c-u,d),d=Math.min(p,d),m&&a.css({top:d+"px"})))):e>F&&(m=!0,c={position:"fixed",top:d},c.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(c).addClass(t),null==n&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+d>C+q),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),a.css({position:"absolute",bottom:b,top:"auto"}).trigger("sticky_kit:bottom")},
y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);c(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==n&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",y),c(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,
0)}};q=0;for(L=this.length;q<L;q++)b=this[q],K(c(b));return this}}).call(this);


$(function() {
  return $("[data-sticky_column]").stick_in_parent({
    parent: "[data-sticky_parent]"
  });
});


// remove
$('.cart-mini-body .remove').on('click', function() {

iziToast.question({
    timeout: 20000,
    close: false,
    overlay: true,
    toastOnce: true,
    id: 'question',
    zindex: 999,
    title: 'Hey',
    message: 'Are you sure about that?',
    position: 'center',
    buttons: [
        ['<button><b>YES</b></button>', function (instance, toast) {
 
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
 
        }, true],
        ['<button>NO</button>', function (instance, toast) {
 
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
 
        }],
    ],
    onClosing: function(instance, toast, closedBy){
        console.info('Closing | closedBy: ' + closedBy);
    },
    onClosed: function(instance, toast, closedBy){
        console.info('Closed | closedBy: ' + closedBy);
    }
});
});


// date picker
$(".datepicker").datetimepicker({   
  minView: 2,
  format: "dd-M-yyyy",
  autoclose: true,
  showMeridian: true,
  todayBtn: false
});
$(".datetimepicker").datetimepicker({   
  autoclose: true,
  showMeridian: true,
  todayBtn: false
});

// change password


$("#changepassword").change(function() {
    if($(this).prop('checked')) {
        $(".show-hide").addClass("open");
    } else {
        $(".show-hide").removeClass("open");
    }
});

// mobile responsive
$(".side-toggle").click(function() {
  $(".navigation").addClass('open');
    $("body").addClass('overflow');
});

// menu responsive click
$(".menu-toggle").click(function() {
  $(".menu_navigation").addClass('open');
    $("body").addClass('overflow');
});


// close responsive
$(".navigation li a, .bg-over, .menu_navigation").click(function() {
  $(".navigation").removeClass('open');
    $("body").removeClass('overflow');
    $(".menu_navigation").removeClass('open');
});



// click to scroll


$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.sidebar-navigation a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.sidebar-navigation a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 500
                    }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.sidebar-navigation a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.sidebar-navigation ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}






});
