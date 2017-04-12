/**
 * Created by Administrator on 2017/1/7.
 */
$(window).scroll( function () {
    if ( $(window).scrollTop() < box.find('.main-content-footer-tojq').offset().top - $(window).height() -
        box.find('.source-answer-complete').height()){
        box.find('.each-collapse').hide();
    }
    else if ( box.find('.main-content-footer-tojq').offset().top - $(window).height() -
        box.find('.source-answer-complete').height() <= $(window).scrollTop() <= box.find('.main-content-footer-tojq').offset().top - $(window).height() ) {
        box.find('.each-collapse').show();
    }
    else if ( $(window).scrollTop() > box.find('.main-content-footer-tojq').offset().top - $(window).height() ){
        box.find('.each-collapse').hide();
    }
})