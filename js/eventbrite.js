class Eventbrite {
    constructor (){
        this.auth_token = '5FFTBLR2QX7BG6MPRMM6';
        this.orderby = 'date';
    }

    // Query the API
    async getCategoriesAPI(){
        const categoriesResponse = await fetch (`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

        // Hold for the response and then returns as JSON
        const categories = await categoriesResponse.json();

        return {
            categories
        }
    }

    // Getting the Events from the API
    async queryAPI(eventName, category){
        const eventResponse = await fetch (`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderby}&categories=${category}&token=${this.auth_token}`);
        // Waits for the response and return as JSON
        const events = await eventResponse.json();

        return {
            events
        }
    }
}