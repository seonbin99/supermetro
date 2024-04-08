$(document).ready(function(){
    $('header').load('include/header.html', function(){

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


    


        });

    let winURL = window.location.href;
    console.log(winURL);
    let scrT 

    $(window).scroll(function(){
        scrT = $(window).scrollTop();
        console.log(scrT);

        winURL =  window.location.href;

        if(winURL.indexOf('index')>-1) {
            if (scrT>=100) {
            $('header').css({top:scrT, background:'#000'})
            } else {
            $('header').css({top:scrT, background:''})
            }

        }

    });

    // 서브페이지

    if(winURL.indexOf('sub')>-1) {

        // $('header nav ul.gnb > li > a').each(function() {
        //     let firstCate = $(this).text();
        //     console.log(firstCate);

        //     $('.section_sub .snb_box .cate1 .depth1').append('<li>'+firstCate+'</li>')
        // });

        $('header nav ul.gnb .lnb a').each(function(){
            let lnbHref = $(this).attr('href');
            
            if(winURL.indexOf(lnbHref) > -1){
                let gnbName = $(this).parents('.lnb').siblings('a').text();
                $('#visual_sub .textbox strong').text(gnbName);

                let thisPrents = $(this).parents('.lnb').siblings('.gnb_depth1').parent('li').clone();
                let gnbHtml = '<li>'+thisPrents.html()+'</li>';
                    gnbHtml += $(this).parents('.gnb').html();
                    
                $('.section_sub .snb_box .cate1 .depth1').html(gnbHtml);
                $('.section_sub .snb_box .cate1 .depth1 .lnb').remove()

                let thisHtml = $(this).parent().html()

                let lnbHtml = '<li>'+thisHtml+'</li>';
                    lnbHtml += $(this).parents('.lnb').html()
                $('.section_sub .snb_box .cate2 .depth2').html(lnbHtml)
            }
        })

        // $('.snb_box .cate1 .depth1 li').click(function(){
        //     let depthLi = $(this).index();
        //     let headerLi = $('header nav ul.gnb > li').eq(depthLi);

        //     // depth2 내부의 내용 비우기
        //     $('.snb_box .cate2 .depth2').empty();

        //     headerLi.find('.lnb li').each(function(){
        //         let lnbText = $(this).text();
        //         console.log(lnbText)
                
        //         $('.snb_box .cate2 .depth2').append('<li>'+lnbText+'</li>')
        //     });

            

            

        // });
        
        $('.section_sub .contents .since li a').click(function(){
            $('.section_sub .contents .since li a').removeClass('on');
            $(this).addClass('on');

            if($(this).hasClass('year2')) {
                $('.section_sub .contents .cont.year2').removeClass('active').siblings().addClass('active');
            } else {
                $('.section_sub .contents .cont.year2').addClass('active').siblings().removeClass('active')
            }

            
            
        })

        $(window).scroll(function(){
            scrT = $(window).scrollTop();
            
            if (scrT>500) {
            $('.snb_box').css({top:scrT-500})

            } else {
                
            $('.snb_box').css({top:0})
            }
        })


    }



// 헤더 끝나는 부분
    });



   
});




