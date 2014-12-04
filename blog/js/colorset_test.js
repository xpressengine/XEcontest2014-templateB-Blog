(function($){
    $(function(){
        // Color Set TEST
        var $colorList = $('#gnb > ul > li').eq(1).find('.depth2 a');
        $colorList.click(function(){
            
            var $bodyEl = $('body');
            var color = $(this).text();
            $bodyEl.removeClass();
            
            switch (color) {
                case 'black & yellow':
                    $('.top_bg').removeClass('top_bg_none');
                    $('.header_img').hide();
                    break;
                case 'white & yellow' :
                    $bodyEl.addClass('color_white');
                    $('.top_bg').addClass('top_bg_none');
                    $('.header_img').show();
                    break;
            }
            return false;
        });
    })
})(jQuery);
