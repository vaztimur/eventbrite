class Eventbrite {
    constructor (){
        this.auth_token = '5FFTBLR2QX7BG6MPRMM6';
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
}