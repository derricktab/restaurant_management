
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
export async function updateRestaurant(updatedData) {
  // Call backend to update restaurant data
  try {
    const response = await fetch('http://localhost:5000/restaurants', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedData)
    });

    if (response === null) {
      return false;
    }

    // if respone is successful
    if (response.status === 201 || response.status === 200) {
      return true;
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};


// METHOD TO DELETE A RESTAURANT
export async function deleteRestaurant(restaurantId) {
  // call backend to delete restaurant
  try {
    const response = await fetch('http://localhost:5000/restaurants', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
    });

    if (response === null) {
      return false;
    }

    // if respone is successful
    if (response.status === 201 || response.status === 200) {
      return true;
    }

    return true;
  } catch (error) {
    console.log(error);
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
