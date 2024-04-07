$('header nav .ham').click(function(){
    $(this).toggleClass('on')
    $('header nav .navbox').slideToggle();
});

let winW
$(window).resize(function(){
    winW = $(window).width();
    // console.log(winW)

    if (winW>914) {
        $('header nav .navbox').css({display:'none'});
    } else {
        $('header nav .navbox').css({display:''});
        $('header nav .ham').removeClass('on');

    }
})
