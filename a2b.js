// Class Restaurant
//     Private Properties:
//         - name (string)
//         - foodType (string)
//         - rating (number)
//         - isVegetarianFriendly (boolean)
//         - menu (array of menu items)

//     Public Methods:
//         - Constructor(name, foodType, rating, isVegetarianFriendly)
//         - SetRating(rating)
//         - AddMenuItem(menuItem)
//         - RemoveMenuItem(menuItem)
//         - GetMenu()
//         - IsVegetarianFriendly()


class Restaurant {
    constructor(name, foodType, rating, isVegetarianFriendly) {
        this.name = name;
        this.foodType = foodType;
        this.rating = rating;
        this.isVegetarianFriendly = isVegetarianFriendly;
        this.menu = [];
    }

    setRating(rating) {
        this.rating = rating;
    }

    addMenuItem(menuItem) {
        this.menu.push(menuItem);
    }

    removeMenuItem(menuItem) {
        const index = this.menu.indexOf(menuItem);
        if (index !== -1) {
            this.menu.splice(index, 1);
        }
    }

    getMenu() {
        return this.menu;
    }

    isVegetarianFriendly() {
        return this.isVegetarianFriendly;
    }
}

// Instantiate the class for Anandha Bhavan
const anandhaBhavan = new Restaurant("Anandha Bhavan", "Indian", 4.5, true);

console.log(anandhaBhavan);
