import React from 'react';
import img from '../image/player-1.png';
const Card = () => {
    return (
        <div className="overflow-hidden p-5 rounded-2xl border-solid   bg-white text-left ">
            <img src={img} alt='player' className='w-100 rounded-lg'></img>
            <h3 className=" text-xl pt-4 font-bold  ">Name-1</h3>
            <p className="text-base my-2 text-gray-700">Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do
                amet sint.
            </p>
            <p className="text-base">For Age: <span className='font-bold'>10-15</span></p>

            <p className="text-base">Time required: <span className='font-bold'>20 minutes</span></p>
            <button className=" hover:bg-orange-500 bg-slate-700  rounded-lg py-2 text-lg0 mt-5 w-full text-white font-semibold"
                type="submit">SELECT</button>
        </div>
    );
};

export default Card;