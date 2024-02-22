
// METHOD TO ADD RESTAURANT
export async function addRestaurant(restaurantData) {

  const reqData = JSON.stringify(restaurantData);
  console.log("THE DATA TO SEND: ", reqData);

  try {
    const response = await fetch('http://localhost:5000/restaurants', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" // Ensure header names are correctly cased
      },
      body: reqData
    });

    // Parse the JSON response body to get the actual data
    const data = await response.json();

    console.log("RESPONSE FROM SERVER: ", data);

    // Check if the response is successful (status code 200-299)
    if (response.ok) {
      // Here you might want to do something with the data, e.g., logging it or returning it
      console.log('Restaurant added successfully:', data);
      return true;
    } else {
      // If the server responded with an error status, log or handle it
      console.error('Failed to add restaurant:', data.message || 'Unknown error');
      return false;
    }
  } catch (error) {
    // Handle network errors or other unexpected errors
    console.error('Error adding restaurant:', error);
    return false;
  }
}

// METHOD TO UPDATE RESTAURANT
export async function updateRestaurant(updatedData, restaurantId) {
  // Call backend to update restaurant data
  try {
    const response = await fetch(`http://localhost:5000/restaurants/${restaurantId}`, {
      method: 'PUT',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedData)
    });
    
    const data = await response.json();

    console.log("RESPONSE FROM SERVER: ", data);

    if (response.ok) {
      console.log('Restaurant edited successfully:', data);
      return true;
    } else {
      console.error('Failed to add restaurant:', data.message || 'Unknown error');
      return false;
    }

  } catch (error) {
    console.log(error);
    return false;
  }
};


// METHOD TO DELETE RESTAURANT
export async function deleteRestaurant(restaurantId) {
  try {
    const response = await fetch(`http://localhost:5000/restaurants/${restaurantId}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      // If server returns a bad response, throw an error
      const errorData = await response.json();
      throw new Error(errorData.message || 'Could not delete the restaurant.');
    }

    // Return a success message or the deleted restaurant's data if needed
    return true;

  } catch (error) {
    console.error('Error deleting restaurant:', error);
    return false; 
  }
};


// METHOD TO GET RESTAURANTS
export async function getRestaurants() {
  try {
    const response = await fetch('http://localhost:5000/restaurants', {
      method: 'GET',
    });

    // Check if the response is successful
    if (response.ok) { // This checks if the status code is in the range 200–299
      const data = await response.json(); // Parse the JSON in the response
      return data; // Return the parsed data
    } else {
      // Handle HTTP errors
      console.error('Failed to fetch restaurants:', response.statusText);
      return [];
    }

  } catch (error) {
    // Handle network errors
    console.error('Network error:', error);
    return [];
  }
};
