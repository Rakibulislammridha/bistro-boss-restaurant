import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-items bg-fixed my-20 text-white pt-8'>
            <SectionTitle
            subHeading="Check It Out"
            heading="Featured Items"
            ></SectionTitle>
            <div className='md:flex justify-center items-center pt-12 pb-20 px-36 bg-slate-500 bg-opacity-60'>
                <div>
                <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 '>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where Can I Get Some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;