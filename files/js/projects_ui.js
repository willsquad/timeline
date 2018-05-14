$(document).ready(function(){


    $(document).on('click', '.content_show_hide', function(){
        var self = $(this);

        //$('.content_div_content').removeClass('show');
        self.parent().parent().find('.content_div_content').toggleClass('show');


    });
});