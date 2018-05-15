$(document).ready(function(){


    $(document).on('click', '.content_show_hide, .content_title', function(){
        var self = $(this);
        var to_expand = self.attr('data-expand');

        //$('.content_div_content').removeClass('show');
        $('#'+to_expand).toggleClass('show');
        self.closest('.content_div').find('.material-icons').html($('#'+to_expand).hasClass('show') ? 'remove_circle_outline' : 'add_circle_outline');


    });
});