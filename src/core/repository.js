    
  // METHOD TO ADD RESTAURANT
  export async function addRestaurant (restaurantData) {
    // Call backend to add restaurant

  };

  // METHOD TO UPDATE RESTAURANT
  export function updateRestaurant (updatedData) {
    // Call backend to update restaurant data


  };

  // METHOD TO DELETE A RESTAURANT
  export async function deleteRestaurant (restaurantId) {
    // call backend to delete restaurant

  };

// METHOD TO GET RESTAURANTS FROM THE BACKEND
export function getRestaurants () {
    // call backed to get restaurants
    return [
        {
            id: 1,
            name: 'Pizza Hut',
            address: 'Bukoto Living road',
            description: 'The Best restaurant in the building',
            phone_number: '+256777889966',
        },
        {
            id: 2,
            name: 'Pizza Hut',
            address: 'Bukoto Living road',
            description: 'The Best restaurant in the building',
            phone_number: '+256777889966',
        },
    ]

}
