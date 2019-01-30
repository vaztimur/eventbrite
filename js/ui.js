class UI {
    constructor (){
        // App initialization
        this.init();

        this.result = document.getElementById('result');
    }
    init(){
        
        // Displays Categories in <select> tag
        this.printCategories();
    }
    printCategories(){
        const categorieList = eventBrite.getCategoriesAPI()
                .then(categories => {
                    const categoriesList = categories.categories.categories;
                    const categorieSelect = document.querySelector('#category');

                    categoriesList.forEach(category => {
                        //Create an option and insert it to select tag
                        const option = document.createElement('option');
                        option.value = category.id;
                        option.appendChild(document.createTextNode(category.name));
                        categorieSelect.appendChild(option);
                    })

                })
                .catch (error =>{window.alert('There is an error in the server connection')})
    }

    printMessage(message, cssclass){
        const div = document.createElement('div');
        div.className = cssclass;
        div.appendChild(document.createTextNode(message));

        const searchDiv = document.querySelector('#search-events');
        searchDiv.appendChild(div);

        // remove the alert after 3 seconds
        setTimeout(()=>{
            this.removeMessage();
        }, 3000);
   }

   removeMessage(){
       const alert = document.querySelector('.alert');
       if (alert){
        alert.remove();
   }
}
    // Display events from the API
    displayEvents(events){
       

        // Template for the results
        let htmlTemplate = "";

        events.forEach(singleEvent =>{
            htmlTemplate += `
                <div class="col-md-4 mt-4">
                    <div class="card">
                        <div class="card-body">
                            <img class="img-fluid mb-2" src="${singleEvent.logo != null ? singleEvent.logo.url : ""}">
                        </div>
                        </div class="class-body">
                            <h2 class="text-center card-title">${singleEvent.name.text}</h2>
                            <p class="lead text-info">Event Information:</p>
                            <p>${singleEvent.description.text.substring(0,200)}...</p>
                            <span class="badge badge-primary">Capacity: ${singleEvent.capacity}</span>
                            <span class="badge badge-secondary">Date & Time: ${singleEvent.start.local}</span>
                            <a class="btn btn-primary btn-block" href="${singleEvent.url}" target="_blank">Get Ticket</a>
                        </div>
                    </div>
                </div>
            `;
        })
        this.result.innerHTML = htmlTemplate;

    }


}