$(document).ready(function () {
    $("#search").keyup(function () {
        var searchField = $(this).val();
        var regExp = new RegExp(searchField, "i");
        $.getJSON("JSON/products.json", function (data) {
            var output = "<ul class='searchResults'>";
            $.each(data, function (key, val) {
                if (val.name.search(regExp) !== -1) {
                    output += "<li>"
                        + "<p>" + val.name + "</p>"
                        + "<p>" + val.about + "</p>"
                        + "<img src='" + val.image + "' alt='" + val.name + "'/>"
                        + "</li>";
                }
            });
            output += "</ul>";
            $("#update").html(output);
        });
    });
})