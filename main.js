
$(".checkbox_row").on('click', function () {

    var check_row_id = $(this).attr('check_row_id');
    if ($(this).prop('checked') != true) {
        $(this).val('');
        $("#set_exist_user_id_" + check_row_id).val('');
        $("#set_checked_email_" + check_row_id).val('');
    } else {
        var get_file_url = $("#show_file_url_" + check_row_id).html();
        var get_email_address = $("#show_email_address_" + check_row_id).val();
        if (get_file_url) {
            var set_checked_file = $("#set_checked_file_" + check_row_id);
            var get_exist_user_id = $("#get_exist_user_id_" + check_row_id).val();
            $("#set_exist_user_id_" + check_row_id).val(get_exist_user_id);
            $("#set_checked_email_" + check_row_id).val(get_email_address);
            set_checked_file.val(get_file_url);
        } else {
            alert("At first upload file pls");
            $(this).prop('checked', false);
        }

    }

});
