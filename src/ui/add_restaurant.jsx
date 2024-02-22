import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addRestaurant } from "../core/repository";

export default function AddRestaurant({ initialData }) {
  const [formData, setFormData] = useState(
    initialData || { name: "", details: "" }
  );

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  //   METHOD TO HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
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
      <h1 className="text-center pt-5">Add Restaurant</h1>

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
          <label htmlFor="descrption">Description</label>
          <input
            name="descrption"
            value={formData.descrption}
            onChange={handleChange}
            placeholder="Descrption"
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
          Submit
        </button>
      </form>
    </div>
  );
}
