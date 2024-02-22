import './App.css';
import { useEffect, useState } from 'react';
import { deleteRestaurant, getRestaurants } from '../core/repository';


export default function App() {

  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [deleting, setDeleting] = useState(false);


  // GET DATA
  useEffect(() => {
    async function fetchData() {
      const response = await getRestaurants();
      console.log(response);
      setRestaurants(response);
    }
    fetchData();
  }, []);

  // HANDLE EDIT RESTAURANT
  function handleEditRestaurant(restaurant) {
    console.log("EDIT");
    setSelectedRestaurant(restaurant);
  }

  // HANDLE DELETE RESTAURANT
  async function handleDeleteRestaurant(restaurantId) {

    console.log("deleting");

    setDeleting(true);
    console.log("deleting");

    const res = await deleteRestaurant(restaurantId);
    if (res) {
      setRestaurants(restaurants.filter(restaurant => restaurant.id !== restaurantId));
    }

    setDeleting(false);
  }

  function RestaurantList({ restaurants, onSelect, onDelete }) {
    return (
      <div className='container mt-5'>
        <h1 className='text-center py-5'>Restaurant List</h1>

        {/* add restaurant button */}
        <div className="text-end">
          <a href="/add_restaurant"><button className="btn btn-success btn-sm mb-4">Add Restaurant </button></a>
        </div>

        {/* TABLE TO DISPLAY RESTAURANTS */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Restaurant Name</th>
              <th scope="col">Address</th>
              <th scope="col">Description</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map(restaurant => (
              <tr key={restaurant.id}>
                <th scope="row">{restaurant.id}</th>
                <td>{restaurant.name}</td>
                <td>{restaurant.address}</td>
                <td>{restaurant.description}</td>
                <td>{restaurant.phone_number}</td>
                <td>

                  {/* EDIT RESTAURANT BUTTON */}
                  <button className="btn btn-info btn-sm me-2" onClick={() => handleEditRestaurant(restaurant)}>
                    <i className="bi bi-pencil-square"></i> Edit
                  </button>

                  {/* DELETE RESTAURANT BUTTON */}
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteRestaurant(restaurant.id)}>
                    <i className="bi bi-trash"></i> {deleting === true ? 'Deleting...' : 'Delete'}
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }


  // method to handle add restaurant
  function handleAddRestaurant(restaurantData) {
    // call backend to add restaurant
  }

  // Method to handle update restaurant
  function handleUpdateRestaurant(updatedData) {
    // call backend to update restaurant data
  }

  // Method to handle delete restaurant
  function handleDeleteRestaurant(restaurantId) {
    // call backend to delete restaurant
  }


  return (
    <div>
      <RestaurantList
        restaurants={restaurants}
        onSelect={(id) => setSelectedRestaurant(restaurants.find(r => r.id === id))}
        onDelete={handleDeleteRestaurant}
      />
      {/* {selectedRestaurant ? (
        <RestaurantForm 
          initialData={selectedRestaurant} 
          onSubmit={handleUpdateRestaurant} 
        />
      ) : (
        <RestaurantForm onSubmit={handleAddRestaurant} />
      )} */}
    </div>
  );

}
