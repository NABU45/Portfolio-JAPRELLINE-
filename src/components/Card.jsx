import React from "react";

const Card = () => {
    const cards = [
        {
            id: 1,
            title: "Apple AirPods",
            text: "With plenty of talk and listen time, voice activated, and an available wireless charging case.",
            image: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80",
            price: "$95.00",
        },
        {
            id: 2,
            title: "Stunning iPhone",
            text: "The iPhone: where innovation meets elegance, shaping the future one touch at a time.",
            image: "https://th.bing.com/th/id/OIP.UTYxJA1B_kThUgeqysXTRwHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            price: "$120.00",
        },
        {
            id: 3,
            title: "Headphone",
            text: "Victory with every sound, every whisper of strategy, and every thundering with our headphone.",
            image: "https://improb.com/wp-content/uploads/2020/03/Fostex-T50RP-MK3-1.jpg",
            price: "$90.00",
        },
        {
            id: 4,
            title: "Headphone",
            text: "Victory with every sound, every whisper of strategy, and every thundering with our headphone.",
            image: "https://improb.com/wp-content/uploads/2020/03/Fostex-T50RP-MK3-1.jpg",
            price: "$90.00",
        },
        {
            id: 5,
            title: "Headphone",
            text: "Victory with every sound, every whisper of strategy, and every thundering with our headphone.",
            image: "https://improb.com/wp-content/uploads/2020/03/Fostex-T50RP-MK3-1.jpg",
            price: "$90.00",
        },
        {
            id: 6,
            title: "Headphone",
            text: "Victory with every sound, every whisper of strategy, and every thundering with our headphone.",
            image: "https://improb.com/wp-content/uploads/2020/03/Fostex-T50RP-MK3-1.jpg",
            price: "$90.00",
        },
    ];

    return (
        <div className="container mx-auto p-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {cards.map(({ id, title, image, text, price }) => (
                    <div
                        key={id}
                        className="flex flex-col items-center bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105"
                    >
                        <div className="w-full h-20">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-1">
                            <h3 className="text-xs font-bold text-gray-900">{title}</h3>
                            <p className="text-xs text-gray-700">{price}</p>
                            <p className="mt-1 text-[8px] justify-between items-center text-gray-600">{text}</p>
                        </div>
                        <div className="w-auto p-1">
                            <button className="w-full bg-indigo-500 text-white py-1 px-10 rounded-lg hover:bg-indigo-600 transition">
                                Buy
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
