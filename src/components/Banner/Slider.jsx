import { Link } from "react-router-dom";
import { useTypewriter } from 'react-simple-typewriter'


const Slider = ({ image}) => {

    const [typeEffect] = useTypewriter({
        words: ['Cook', 'Connect', 'Explore'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
      })

    return (
        <div
      className='w-full bg-center bg-cover h-[38rem] rounded-2xl'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex flex-col justify-end items-start w-full h-full bg-gray-900/70 rounded-2xl'>
        <div className='text-center p-10 w-full mx-auto mb-10 rounded-2xl'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl   flex flex-col items-center'>
          From Kitchen to Globe 
          </h1>
          <p className="font-extrabold text-3xl text-[#dc8a03] pb-10 ml-2">
          {typeEffect}
          </p>
          <p className="text-lg text-slate-200 w-[600px] pb-5  mx-auto">Discover, Share, and Savor the World’s Best Recipes – Join the Ultimate Foodie Community Today and Share Your Culinary Creations with the World!</p>
          <br />
          <Link
            to='/all-foods'
            className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform rounded-md lg:w-auto className="btn border-2 btn-outline hover:bg-gradient-to-r from-[#dc8a03] to-[#8b9710]'
          >
            Explore All Foods
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Slider;