//display current day
var curDay = moment().format('LLLL');
$("#currentDay").text(curDay);

// loop rows
//var time = $("#time")
//for (var i = 0; i>(time.length); i++){
    //get the time and place in section
    var timeBlock = 9
    $("#time").text(timeBlock + ":00");

//};
var appts = {};

var createAppt = function(appText) {
    // create elements that make up a app item
    var apptDiv = $("<div>").addClass("textarea");
    var app = $("<div>").addClass("textarea").text(appText)
    // append
    apptDiv.append(appt);
  
    // check due date
    //auditApp(apptDiv);
  
    // append to div list on the page
    $("#textarea" + apptList).append(apptDiv);
  };


//task text was clicked
$(".textarea").on("click", function() {
    // get current text of p element
    var text = $(this)
        .text()
        .trim();

    // replace p element with a new textarea
    var textInput = $("<textarea>")
        .addClass("col-sm-10 textarea past")
        .val(text);
        $(this).replaceWith(textInput);
        textInput.trigger("focus");
  
});

$(".saveBtn").on("click", function() {
    var loadAppts = function() {
        appts = JSON.parse(localStorage.getItem("appts"));
    
        // if nothing in localStorage, create a new object to track all task status arrays
        if (!appts) {
        appts = [];
        }
    
        // loop over object properties
        $.each(appts, function(list, arr) {
        console.log(list, arr);
        // then loop over sub-array
        arr.forEach(function(app) {
            createTask(appt.text);
            });
        });
    }
  
});
var saveAppt = function() {
    localStorage.setItem("appts", JSON.stringify(appt));
}

loadAppts();