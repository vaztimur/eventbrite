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
}