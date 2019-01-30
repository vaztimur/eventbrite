const eventBrite = new Eventbrite ();
const ui = new UI ();

//Listener for the submit button
document.getElementById('submitBtn').addEventListener('click', (e)=>{
    e.preventDefault();

    const eventName = document.getElementById('event-name').value;
    const category = document.getElementById('category').value;

    // Validation of the input
    if (eventName !== "") {
        eventBrite.queryAPI(eventName, category)
            .then (events => {
                const eventList = events.events.events
               if (eventList.length > 0) {
                    ui.displayEvents(eventList);
               } else {
                ui.printMessage('No results found', 'text-center alert alert-danger mt-4');
               }
            })
    } else {
        ui.printMessage('Add an Event or City', 'text-center alert alert-danger mt-4');
    }

});
