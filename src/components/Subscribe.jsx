import React, {useState} from "react";
import Banner from "../assets/images/orange-pattern.jpg";

const BannerImg = {
backgroundImage: `url(${Banner})`,
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
backgroundSize: "cover",
height: "100%",
width: "100%",
};

const Subscribe = () => {

    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        setEmail("");
    };

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };


return (
    <div
    data-aos="zoom-in"
    className="bg-gray-100 dark:bg-gray-800 text-white "
    style={BannerImg}
    >
    <div className="container backdrop-blur-sm py-10">
        <div data-aos="fade-up" className="space-y-6 max-w-xl mx-auto ">
        <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
        </h1>
        <input
            // data-aos="fade-up"
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 text-black"
            value={email}
            onChange={handleInputChange}
        />
        <button onClick={handleSubscribe} className='text-center mt-10 cursor-pointer bg-primary/100 text-white py-1 px-5 rounded-md transition-transform duration-300 transform hover:scale-105'>
            Subscribe
        </button>
        </div>
    </div>
    </div>
);
};

export default Subscribe;