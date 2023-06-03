import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imgHostingToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  //   Image hosting url
  const imgHostingURL = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`;

  //   handle form
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    console.log(data.image[0]);
    fetch(imgHostingURL, {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(imageResponse => {
        if(imageResponse.success){
            const imgURL = imageResponse.data.display_url;
            const {name, price, category, recipe} =data;
            const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
            console.log(newItem);
            axiosSecure.post("/menu", newItem)
            .then(data => {
                console.log("after posting new menu", data.data);
                if(data.data.insertedId){
                    reset();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Menu Item Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
    })
  };

  return (
    <div className="w-full px-10">
      <SectionTitle
        subHeading={"What's New"}
        heading={"Add An Item"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="flex my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              {...register("category", { required: true })}
              defaultValue={"Pick One"}
              className="select select-bordered"
            >
              <option disabled>Pick One</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Drinks</option>
              <option>Desert</option>
              <option>Local Food</option>
            </select>
          </div>

          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              {...register("price", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="form-control my-4">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            {...register("recipe", { required: true })}
            placeholder="Detail"
          ></textarea>
        </div>

        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
