$("#add-family-member").click(function () {
    // $("tr#family-member-01").clone(true).attr("id", "added").insertBefore("#new-family-member");
    var rows = $("#family-table > tbody > tr").length;
    var appendNum = parseInt( $("#family-table > tbody > tr").eq(rows - 2).find('td input').eq(0).attr('id').slice(-2) ) + 1;
    var appendNum = ("0" + appendNum).slice(-2);
    // console.log(appendNum);

    $("tr#family-member-").clone(true).attr("id", function (i, val) {
        return (val + appendNum);
    }).removeAttr("style").insertBefore("#family-member-").find('td input').each( function(j) {
        $(this).attr({
            id: function(j, valu){ return ( valu + appendNum); },
            name: function(j, valu){ return ( valu + appendNum); }
        });
    });
   
    return false;
});

$("#family-table a.delete-family-member").click(function () {
    $(this).parent().parent().remove();
    return false;
});