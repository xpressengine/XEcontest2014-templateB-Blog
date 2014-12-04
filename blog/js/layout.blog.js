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
(function($){
    $(function(){
        var $gnb = $('.gnb');
        var $loginEl = $('.login_area');
        var $containerEl = $('.container');
        var $gnbOffsetTop = $('.gnb').offset().top;
        
        // Fixed header
        $(window).scroll(function() {
            var scroll = getCurrentScroll();
            if( scroll >= $gnbOffsetTop ) {
               $containerEl.addClass('fixed_header');
            }
            else {
               $containerEl.removeClass('fixed_header');
            }
        });
        
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
        
        // Gnb 
        $gnb.find('>ul>li>ul').hide();
        $gnb.find('>ul>li>a')
        .mouseover(function(){
            $gnb.find('>ul>li>ul:visible').hide().parent('li').removeClass('on')
            $(this).next('ul:hidden').stop().fadeIn(200).parent('li').addClass('on')
        })
        .focus(function(){
            $(this).mouseover();
        })
        .end()
        .mouseleave(function(){
            $gnb.find('>ul>li>ul').hide().parent().removeClass('on')
        });

        // login popup
        $loginEl.hover(
            function(){
                $(this).find('.ly_login').stop().fadeIn(200);
                $(this).addClass('hover');
            },
            function(){
                $(this).find('.ly_login').hide();
                $(this).removeClass('hover');
            }
        );
        
        // Scroll to top
        var scrollToTop = function() {
            var link = $('.btn_top');
            var windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
            $(window).scroll(function() {
                if (($(this).scrollTop() > 150) && (windowW > 1000)) {
                    link.fadeIn(100);
                } else {
                    link.fadeOut(100);
                }
            });
    
            link.click(function() {
                $('html, body').animate({scrollTop: 0}, 400);
                return false;
            });
        };
        scrollToTop();
        
    })
})(jQuery);
