$(document).ready(function () {
    $('.question-title').on('click', function () {
      const $thisAnswer = $(this).next('.answer');
  
      // 이미 열려있으면 닫기
      if ($thisAnswer.is(':visible')) {
        $thisAnswer.slideUp();
        $(this).removeClass('open');
      } else {
        // 모든 답변 닫기
        $('.answer').slideUp();
        $('.question-title').removeClass('open');
  
        // 선택한 답변 열기
        $thisAnswer.slideDown();
        $(this).addClass('open');
      }
    });
  });
  
// --------------------------------------------------

  $(document).ready(function () {
    function checkVisibility() {
      $('.box').each(function () {
        var boxTop = $(this).offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
  
        if (boxTop < scrollTop + windowHeight - 100) {
          $(this).addClass('show');
        } else {
          $(this).removeClass('show');
        }
      });
    }
  
    $(window).on('scroll', checkVisibility);
    checkVisibility(); // 페이지 로드 시 바로 체크
  });