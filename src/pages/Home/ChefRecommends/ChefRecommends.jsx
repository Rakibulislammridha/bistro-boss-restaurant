import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SingleRecommendCart from "../SingleRecommendCart/SingleRecommendCart";

const ChefRecommends = () => {

    const [recommends, setRecommends] = useState([]);

    useEffect(()=> {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => setRecommends(data))
    }, [])

  return (
    <section>
      <SectionTitle
        subHeading={"Short By"}
        heading={"chef recommends"}
      ></SectionTitle>
      <div className="my-10 grid grid-cols-2 lg:grid-cols-3 gap-6">
        {
            recommends.map(recommend => <SingleRecommendCart
            key={recommend._id}
            recommend={recommend}
            ></SingleRecommendCart>)
        }
      </div>
    </section>
  );
};

export default ChefRecommends;
