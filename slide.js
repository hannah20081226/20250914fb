let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    // すべてのスライドを非表示にする
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // 次のスライドを表示
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].style.display = "block";
    
    // 3秒ごとに次のスライドを表示
    setTimeout(showSlides, 3000);
}

// ページ読み込み時にスライドショー開始
window.onload = showSlides;

$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll_up');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 100;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  });
