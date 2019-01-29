class UI {
    constructor (){
        // App initialization
        this.init();
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
}