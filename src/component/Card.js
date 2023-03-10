import React from 'react';
// import imgs from '../image/player-1.png';
const Card = ({ Activities, SelectButton }) => {

    const { name, img, detail, age, Time } = Activities;

    const details = detail.slice(0, 100) + '...';

    return (
        <div className="overflow-hidden p-5 rounded-2xl border-solid xl:text-xl lg:text-gl md:text-md sm:text-sm  bg-white text-left ">
            <img src={img} alt='player img' className='w-100 rounded-lg'></img>
            <h3 className=" text-xl pt-4 font-bold  ">{name}</h3>
            <p className="text-base my-2 text-gray-700">{details.length < 100 ? detail : details}</p>
            <p className="text-base">For Age: <span className='font-bold'>{age}</span></p>

            <p className="text-base">Time required: <span className='font-bold'>{Time} Minutes</span></p>
            <button onClick={() => SelectButton(Activities)} className=" hover:bg-orange-500 bg-slate-700  rounded-lg py-2 text-lg0 mt-5 w-full text-white font-semibold"
                type="submit">SELECT</button>
        </div>
    );
};

export default Card;