import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addRestaurant, updateRestaurant } from "../core/repository";
import { useLocation } from "react-router-dom";

export default function AddRestaurant() {
  const location = useLocation();
  const initialData = location.state?.initialData;

  console.log("THE INITIAL DATA: ", initialData);

  const [formData, setFormData] = useState(initialData || {});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  //   METHOD TO HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();


    // UPDATING THE RESTAURANT
    if(initialData) {
      const res = await updateRestaurant(formData, initialData.id);
      if (res === true) {
        console.log("RESTAURANT UPDATED");
        toast.success("Restaurant updated successfully!");
        navigate("/");
      } else {
        toast.error("Something went wrong!");
      }

      return;
    }

    const res = await addRestaurant(formData);

    if (res === true) {
      console.log("RESTAURANT ADDED");
      toast.success("Restaurant deleted successfully!");
      navigate("/");
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center pt-5">  {initialData ? "Edit" : "Add"} Restaurant</h1>

      <hr className="mb-5" />

      <form onSubmit={handleSubmit}>
        {/* RESTAURANT NAME */}
        <div className="form-group mb-4">
          <label htmlFor="name">Restaurant Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="form-control"
          />
        </div>

        {/* RESTAURANT ADDRESS */}
        <div className="form-group mb-4">
          <label htmlFor="address">Address</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="form-control"
          />
        </div>

        {/* RESTAURANT DESCRIPTION */}
        <div className="form-group mb-4">
          <label htmlFor="description">Description</label>
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="form-control"
          />
        </div>

        {/* RESTAURANT PHONE NUMBER */}
        <div className="form-group mb-4">
          <label htmlFor="phone">Phone Number</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-success mt-4 form-control">
          {initialData ? "Save" : "Submit"}
        </button>
      </form>
    </div>
  );
}
