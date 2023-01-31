// variables used thoughout the file 
var today = dayjs();
var saveButton = $('.btn');
var targetDivs = $('.time-block')

// How the current day is displayed 
var displayTime = dayjs().format('dddd MMM D, YYYY');
$("#currentDay").text(displayTime);

// Function to add specific colors to the divs based on the time of day 
$(function () {

  function setColors() {
    var variableHour = dayjs().format('H');
    
    for (let i = 0; i < targetDivs.length; i++) {
      if ($(targetDivs[i]).attr('id').replace('hour-', '') > variableHour) {
        //add future css class
        $(targetDivs[i]).addClass('future');
      } if ($(targetDivs[i]).attr('id').replace('hour-', '') === variableHour) { 
        //add present
        $(targetDivs[i]).addClass('present');
      } if ($(targetDivs[i]).attr('id').replace('hour-', '') < variableHour){
        //add past
        $(targetDivs[i]).addClass('past');
      }
    }
  }  
  setColors();  
  
});

// for loop to cycle through the divs to output localStorage data onto Textarea
for (let i = 09; i < 18; i++) {
  if (i < 10) {
    var storage = $('#hour-0' + i);
  var textArea = localStorage.getItem('hour-0' + i);
  storage.children('textarea').val(textArea);
  }
  var storage = $('#hour-' + i);
  var textArea = localStorage.getItem('hour-' + i);
  storage.children('textarea').val(textArea);
}

// function to save the text input into the textareas and saving them into localStorage
function save() {
    var textArea = $(this).siblings('textarea');
    var timeblockID = $(this).parent().attr('id');
    localStorage.setItem(timeblockID, textArea.val());
    };
    
    // event listener on the save buttons for each div/textarea
saveButton.on('click', save);


//PsudoCode: 

// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
  // use dayjs to display the current date 
    // make sure the DayJS CDN link exists in the HTML file
      // create a variable, get DayJS data
    // set the format: MMM, dd, yyyy
    // Go to the Doc
    // Set the current time to an element in the html 


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
  //complete the rest of the timeblocks
    // remove past, present, and future classes 
    // find a way to programmatically (furnction) add or remove appropriate classes
    // NOTE: colors need to shift at the START  of a new hour. Do we need to worry about minutes?? Maybe use WHILE LOOP? 


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  // compare the time block (the hour that it is) against the current time from DayJS(). Then apply the correct class on the comparison between past, present, future. 


// WHEN I click into a timeblock
// THEN I can enter an event(text)
  // grab text input (from text areas)
  

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
  // eventlistener on the save button 
    // Create Variable (can be global), get the value 
    // set it to Local Storage (what will the data in local storage look like??)
      // times: [{},{}]
      //   

// WHEN I refresh the page
// THEN the saved events persist (confirms that data was wntered into localStorage)
    // Getting from Local storage 
      // Parse the data from localStorage to turn it back into an object (IF the data was stored as a JSON)
      // To have it display as the string it was entered as 