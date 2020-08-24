//display current day
var curDay = moment().format('LLLL');
$("#currentDay").text(curDay);

var timeBlock = 9
$("#time").append(timeBlock + ":00");

var eventIdCounter = 0;
var events = [];

var editEvent = function(eventText) {
    // create elements that make up a event item
    var eventInput = $("<p>").addClass("textarea");
  
    // add id as a custom attribute
    events.setAttribute = "event-id", eventIdCounter;

    console.log(eventInput);
    // check due date
    //auditEvent(EventDiv);
  
    // append to div list on the page
    $("p").append(eventInput);
    saveEvents()

    eventIdCounter++;
};

var loadEvents = function() {
    events = JSON.parse(localStorage.getItem("event"));

    // if nothing in localStorage, create a new object to track all task status arrays
    if (!events) {
        events = {
        events:  []
        }
    }
};
  
var saveEvents = function() {
    localStorage.setItem("event", JSON.stringify(events));
};

//event text was clicked
$(".eventInput").on("click", "p", function() {
    // get current text of the textarea
    var text = $(this)
        .text()
        .trim();
  
      // replace the textarea with a new textarea
    var textInput = $("<textarea>")
        .addClass("col-sm-10 textarea")  
        .val(text);
        $(this).replaceWith(textInput);
        textInput.trigger("focus");

});

$(".eventInput").on("blur", "textarea", function() {
    // get the textarea's current value/text
    var text = $(this)
        .val()
        .trim();

    // get the task's position in the list of other li elements
    var index = $(this)
        .closest(".eventInput-item")
        .index();

    // update task in array and re-save to localstorage
    events[index] = text;
    saveEvents();
    console.log(text)

      // recreate p element
    var eventP = $("<textarea>")
    .addClass("col-sm-10 eventInput past")
    .text(text);

    // replace textarea with p element
    $(this).replaceWith(eventP);
    console.log(eventP)
    
  });

$(".saveBtn").on("click", function() {
    // get current text of textarea
    editEvent()
     
     console.log("button was clicked");
    });

    // update event in array and re-save to localstorage
     events.push({
        text: eventInput
      });
    eventIdCounter++;

    
saveEvents();


loadEvents()
