/**
 * Copyright (C) NAVER <http://www.navercorp.com>
 * @file layout.basic.js
 * @author NAVER (developers@xpressengine.com)
 *
 * Find and create module object by mif, act in Request Argument
 * Set module information
 *
 * @mainpage XpressEngine
 * @section intro introduction
 *
 * XE is an opensource and being developed in the opensource project.
 * For more information, please see the link below.
 * - Official website: http://www.xpressengine.com
 * - Offcial Repository: https://github.com/xpressengine/xe-core
 * 
 * "XpressEngine (XE)" is free software; you can redistribute it and/or 
 * modify it under the terms of the GNU Lesser General Public 
 * License as published by the Free Software Foundation; either 
 * version 2.1 of the License, or (at your option) any later version. 
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 *
 **/

jQuery(function($) {
    
    // 게시판 글등록 시 비로그인 상황에 노출 되는 닉네임, 비밀번호, 이메일, 홈페이지 영역  
	$('.write_author .cmt_user_form input').focus(function(){
        $(this).prev().find('i').addClass('input_focused');
    });
    $('.write_author .cmt_user_form input').focusout(function(){
        $(this).prev().find('i').removeClass('input_focused');
    });
    
    // 게시판 상세페이지 좌,우 화살표 인터렉션  
    $('.board .btn_page').hover(
        function() {
            $(this).find('.panel').show();
            $(this).stop().animate({
                width: "200"
            }, 200);
        }, function() {
            $(this).find('.panel').hide();
            $(this).stop().animate({
                width: "50"
            }, 100);
        }
    );
    
    // 게시판 상세페이지 좌,우 화살표 위치
    var bdwindowWidth = $(window).width();
    bdPageArrowCheck(bdwindowWidth);
    $( window ).resize(function() {
        bdwindowWidth = $(window).width();
        bdPageArrowCheck(bdwindowWidth);
    });
    
    function bdPageArrowCheck(pBdwindowWidth){
        if(pBdwindowWidth < 1260) {
            $('.board_read .btn_page.prev_page').css('left',0);
            $('.board_read .btn_page.next_page').css('right',0);
        } else {
            $('.board_read .btn_page.prev_page').css('left','-80px');
            $('.board_read .btn_page.next_page').css('right','-80px');
        }
    }
    
    // 게시판 상세 페이지 좌우, 화살표 Top 위치
    $(window).scroll(function() {
        var bdScroll = bdGetCurrentScroll();
        if( bdScroll >= 300 ) {
           //$containerEl.addClass('fixed_header');
            $('.board_read .btn_page').css('top',bdScroll + 70);    
        }
    });
    
    function bdGetCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
    
    // 툴팁
    $('.tooltip_wrap').hide();
    $('.tooltip').hover(
        function(){
            var tooltip = $(this);
            tooltip.find('.tooltip_wrap:hidden').css('bottom','150%').animate({bottom:'100%'},{duration:150,specialEasing:{left:'easeInOutQuad'},complete:function(){},step:null,queue:false}).fadeIn(150)
        },
        function(){
            $(this).find('.tooltip_wrap').fadeOut(100)
        }
    )
    // 모든 페이지
    $('.more_page .page_box').hide();
    $('.more_page .tooltip').click(function(){
        $(this).next('.page_box').toggle();
        return false;
    });
    
});


