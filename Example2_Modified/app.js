var main = function () {
    "use strict";

    // This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
    function AppViewModel() {
        this.title = "See Comments";
        this.comments = "This is a simple commenting app by GS7 & RKM";
        this.fullName = ko.computed(function(){
            //return this.firstName() + " " + this.lastName();
        }, this);
        this.capitalizeLastName = function() {
            var currentVal = this.lastName();        // Read the current value
            this.lastName(currentVal.toUpperCase()); // Write back a modified value
        };
    }

    // Activates knockout.js
    ko.applyBindings(new AppViewModel());

    var addCommentFromInputBox = function () {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    };

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};


$(document).ready(main);
