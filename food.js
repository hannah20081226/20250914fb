$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.chika');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 50;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  });

  