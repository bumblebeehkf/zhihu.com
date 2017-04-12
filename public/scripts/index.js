$(document).ready( function () {

    //profile float
    $('.profile').hover( function () {
         $('.profile-float').fadeIn('fast');
    })
    $('.profile').mouseleave( function () {
        $('.profile-float').fadeOut('fast');
    })


    //close the ad in the right
    $('.right-ad').hover( function () {
        $('.right-ad-closed').show();
    })
    $('.right-ad').mouseleave(function () {
        $('.right-ad-closed').hide();
    })


    //ad tooltip
    $('.right-ad-closed').hover( function () {
        $('.right-tooltip').show();
    })
    $('.right-ad-closed').mouseleave( function () {
        $('.right-tooltip').hide();
    })


    //close ad
    $('.right-ad-closed').click( function () {
        $('.right-ad').hide();
    })


    //back to top
    $(window).scroll( function () {
        if ( $(window).scrollTop() > 800 ) {
            $('.backtotop').show();
        }
        else {
            $('.backtotop').hide();
        }
    })

    $('.backtotop').click( function () {
        $('body,html').animate({scrollTop:0},800);
    })


    //mainContent-boxes chances the footer
    $('.mainContent-box').each( function () {
        $(this).mouseover( function () {
            $(this).find('.main-content-footer').hide();
            $(this).find('.main-content-footer-hover').show();
        })
    })
    $('.mainContent-box').each( function () {
        $(this).mouseout( function () {
            $(this).find('.main-content-footer').show();
            $(this).find('.main-content-footer-hover').hide();
        })
    })


    //close a mainContent-box
    $('.mainContent-box-close').each( function () {
        $(this).click( function () {
            $(this).parents('.mainContent-box').hide();
        })
    })


    //extend an answer
    function extendBox () {
        var box = $(this).parents('.mainContent-box');
        box.find('.source-answer').hide();
        box.find('.source-answer-complete').show();

        box.find('.main-vote').hide();
        box.find('.main-vote-expand').show();

        box.find('.source-footer-collapse').show();

        box.find('.each-collapse').show();

        $(window).scroll( function () {

            var scrollTop = $(window).scrollTop();
            var footer_offset = box.find('.main-content-footer-tojq').offset().top;
            var answerHeight = box.find('.source-answer-complete').height();

            if ( scrollTop < footer_offset - $(window).height() - answerHeight) {
                box.find('.each-collapse').hide();
            }
            else if ( (footer_offset - $(window).height() - answerHeight <= scrollTop)
                              && (scrollTop <= footer_offset - $(window).height()) ) {
                box.find('.each-collapse').show();
            }
            else if ( scrollTop > footer_offset - $(window).height() ){
                box.find('.each-collapse').hide();
            }
        })
    }

    $('.main-vote').each( function () {
        $(this).click(extendBox)
    })

    $('.source-answer-show').each( function () {
        $(this).click(extendBox);
    })

    $('.source-answer').each( function () {
        $(this).click(extendBox);
    })


    //collapse an answer
    function collapseBox () {
        var box = $(this).parents('.mainContent-box');
        box.find('.source-answer-complete').hide();
        box.find('.source-answer').show();

        box.find('.main-vote-expand').hide();
        box.find('.main-vote').show();

        box.find('.source-footer-collapse').hide();

        box.find('.each-collapse').hide();
    }

    $('.source-footer-collapse').each( function () {
        $(this).click(collapseBox);
    })

})

