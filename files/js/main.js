$(document).ready(function() {
    
    /* Clicking the Task circles */
    $(document).on('click', '.graph_task_click_js', function(){
        var self = $(this);
        var task = self.attr('data-task'); 
    });

    /* Closing the RHS Div */
    $(document).on('click', '.close_rhs', function(){
        $('.timeline_rhs__sliding_rhs_div').addClass('animated slideOutRight');
    });

    /* Clicking the project Tabs */
    $(document).on('click', '.rhs_project_tab_js', function(){
        $('.rhs_project_tab_js').removeClass('active');
        $(this).addClass('active');
        var project_id = $(this).attr('data-project');
        var project_sumamry = $(this).attr('data-summary');

        $('.project_task_tbody_js').removeClass('active');
        $('#'+project_id).addClass('active');

        $('#project_name_title').html(project_id);
        $('.project_summary').html(project_sumamry);
    });

    /* Graph Bar Click */
    $(document).on('click', '.graph_bar', function(){
        var self = $(this);
        self.closest('.graph_bar_div').addClass('hide');
        self.parent().parent().find('.graph_circle_div').addClass('show')
    });

    /* Graph Collapse */
    $(document).on('click', '.graph_collapse_js', function(){
        var self = $(this);
        var circle_div_value = self.attr('data-circlevalue');
        var bar_div_value = self.attr('data-barvalue');

        
        $('#circle_div_'+circle_div_value).toggleClass('show');
        $('#bar_div_'+bar_div_value).toggleClass('hide');
    });


    /* LHS Click */
    $(document).on('click', '.timeline_lhs__menu__menu_element', function(){
        var self = $(this);

        self.find('.timeline_lhs__menu__menu_element__team_container').toggleClass('project_active');
        self.find('.timeline_lhs__menu__menu_element__project_container').toggleClass('show');
        

    });

});