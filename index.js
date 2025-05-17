//Write your code here
//Managing Event Attendees
//Declare and initialize attendee object
  //Create variable named attendee
    //Assign variable an object with following properties
      //attendeeId = "T001"
      //name = "Alice"
      //event = "Javascript Conference"
      //ticketType = "VIP"
      //ticketPrice = 150.00
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "Javascript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00,
}
console.log(attendee); 

//Create function to log attendee name
  //Create function named logAttendeeName, taking (attendee) object as parameter and logs - name
function logAttendeeName(attendee) {
  console.log(attendee.name);
}
//Call function
logAttendeeName(attendee);

//Create function to log ticket price
//Create function named logTicketPrice, taking (attendee) object as parameter and logs - ticketPrice
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}
//Call function
logTicketPrice(attendee);

//Create function to update ticket type
//Create function named updateTicketType, taking (attendee and newTicketType) as parameters
//Update ticketType property of (attendee) object
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}
//Call function
updateTicketType(attendee, "General");
console.log(attendee.ticketType);

//Create function to remove event property
//Create function named removeEventProperty taking (attendee) object as parameter and removes - event
function removeEventProperty(attendee) {
  delete attendee.event; 
}
//Call function
removeEventProperty(attendee);
console.log(attendee.event); //Output: undefined 

//Create function to add checked-in property  
  //Create function named addCheckedInProperty taking (attendee) object as parameter
  //Add new property checkedIn with value of true
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}
addCheckedInProperty(attendee);
console.log(attendee.checkedIn);

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};