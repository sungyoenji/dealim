$(function(){
    //2단메뉴
    $('.gnb>li').mouseenter(function(){
        $('.gnb>li>.depth2').stop().slideDown(300)
        $('.header_wrap').stop().animate({'height':320},300)
        $('.menu_banner_wrap').stop().slideDown(300)
    })
    $('.header').mouseleave(function(){
        $('.gnb>li>.depth2').stop().slideUp(300)
        $('.header_wrap').stop().animate({'height':70},300)
        $('.menu_banner_wrap').stop().slideUp(300)
    })

    $('.search').click(function(){
        $('.search_form').toggle();
    });
});
   // 패밀리사이트 버튼_onClass
$(function(){
    $('.btn_left').click(function(){
        $('.right_family').hide();
        $('.btn_right').removeClass('on');
        $('.left_family').toggle();
        $('.btn_left').toggleClass('on');
    });
});
$(function(){
    $('.btn_right').click(function(){
        $('.left_family').hide();
        $('.btn_left').removeClass('on');
        $('.right_family').toggle();
        $('.btn_right').toggleClass('on');

    });


    // 전체메뉴 햄버거 버튼 클릭시 메뉴 보이게
    $('.btn_menu').click(function(){
        $('.allmenu_wrap').show();
    });

    $('.btn_close').click(function(){
        $('.allmenu_wrap').hide();
    });

    // 유튜브 제목, 문단 , 유튜브주소
    let video_tit = ['D TOWER', 'Canakkale 1915 Bridge', 'Petrochemical Plant']
    let video_p = ['도시를 개발하다.','세계 6번째 현수교 기술자립국, 세계최고의 기술력, DL이앤씨.','1973년 해외플랜트 수출1호, 기본과 원칙으로 쌓아온 플랜트 노하우 43년.']
    let video_url = ['https://www.youtube.com/embed/lAJ3SGjbdr4','https://www.youtube.com/embed/vM8b0CZd2Ww',
    'https://www.youtube.com/embed/gehtA1gfXPc']
 
    $('.list li').click(function(){
        console.log('클릭')
        let num = $(this).index()
        console.log(num)

        $('.modal_wrap').fadeIn()
        //동적 제목삽입
        $('.tit h2').text(video_tit[num])
        //동적 문단삽입
        $('.tit p').text(video_p[num])
        //동적 url삽입
        $('.tit iframe').attr('src',video_url[num])

        $('.btn_list .prev').click(function(){
            if(num==0){
                num = 2;
            }else{
                num--
            }
            $('.tit h2').text(video_tit[num])
            $('.tit p').text(video_p[num])
            $('.tit iframe').attr('src',video_url[num])
        })
        $('.btn_list .next').click(function(){
            if(num==2){
                num = 0;
            }else{
                num++
            }
            $('.tit h2').text(video_tit[num])
            $('.tit p').text(video_p[num])
            $('.tit iframe').attr('src',video_url[num])
        })
    
    })
    
    $('.btn_m_close').click(function(){
        $('.modal_wrap').fadeOut()
    })



});