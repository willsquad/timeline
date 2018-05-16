$(document).ready(function(){


    $(document).on('click', '.content_show_hide, .content_title', function(){
        var self = $(this);
        var to_expand = self.attr('data-expand');
        //$('.content_div_content').removeClass('show');
        $('#'+to_expand).toggleClass('show');
        self.closest('.content_div').find('.expand-icon').html($('#'+to_expand).hasClass('show') ? 'remove_circle_outline' : 'add_circle_outline');
    });

    $(document).on('click', '#add_task', function(){
        $('.prompt_overlay').show();
        $('.prompt_add_task_div').show();
        $('body').addClass('overlay_applied');
    });

    $(document).on('click', '.cancel_task_delete_js, .cancel_task_modal_js', function() {
        $('.prompt_overlay').hide();
        $('.prompt_add_task_div').hide();
        $('body').removeClass('overlay_applied');
    });

    $(document).on('click', '#add_member', function(){
        $('.prompt_overlay').show();
        $('.prompt_add_member_div').show();
        $('body').addClass('overlay_applied');
    });

    $(document).on('click', '.cancel_member_delete_js, .cancel_member_modal_js', function() {
        $('.prompt_overlay').hide();
        $('.prompt_add_member_div').hide();
        $('body').removeClass('overlay_applied');
    });

});