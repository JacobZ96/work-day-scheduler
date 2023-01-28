// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
// var isToday =('dayjs/plugin/isToday')
// dayjs.extend(isToday);


var staticDate = dayjs('1-27-23').format('MMM D, YYYY');
$("#currentDay").text(staticDate);


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});



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