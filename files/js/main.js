$(document).ready(function() {
    
    /* Clicking the Task circles */
    $(document).on('click', '.graph_task_click_js', function(){
        var self = $(this);
        var task = self.attr('data-task'); 
    });

    /* Closing the RHS Div */
    $(document).on('click', '.close_rhs', function(){
        $('.timeline_rhs__sliding_rhs_div').removeClass('show').addClass('animated slideOutRight');
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
        var barvalue = self.attr('data-barvalue');

        self.closest('.graph_bar_div').addClass('hide');
        self.parent().parent().find('.graph_circle_div').addClass('show');

        /* click the LHS menu element */
        $('#menu_div_'+barvalue).click();

        $('.timeline_rhs__sliding_rhs_div').removeClass('animated slideOutRight').addClass('show');
        $('.rhs_title').html('Team '+barvalue);
    });

    /* Graph Collapse */
    $(document).on('click', '.graph_collapse_js', function(){
        var self = $(this);
        var circle_div_value = self.attr('data-circlevalue');
        var bar_div_value = self.attr('data-barvalue');

        
        $('#circle_div_'+circle_div_value).toggleClass('show');
        $('#bar_div_'+bar_div_value).toggleClass('hide');

        /* click the LHS menu element if it has already been opened */
        if($('#menu_div_'+bar_div_value).hasClass('show'))  {
            $('#menu_div_'+bar_div_value).click();
        }
        
        // if there are no more task divs open
        if($('.graph_circle_div.show').length == 0) {
            $('.close_rhs').click();
        }
        //$('.close_rhs').click();
    });


    /* LHS Click */
    $(document).on('click', '.timeline_lhs__menu__menu_element', function(){
        var self = $(this);
        var barvalue = self.attr('data-barvalue');

        self.find('.timeline_lhs__menu__menu_element__team_container').toggleClass('project_active');
        self.find('.timeline_lhs__menu__menu_element__project_container').toggleClass('show');

        self.toggleClass('show');
        
        /* click the RHS Bars */
       /*  $('#bar_'+barvalue).closest('.graph_bar_div').toggleClass('hide');
        $('#bar_'+barvalue).parent().parent().find('.graph_circle_div').toggleClass('show'); */

        /* $('#circle_div_'+barvalue).toggleClass('show');
        $('#bar_div_'+barvalue).toggleClass('hide'); */

    });

});