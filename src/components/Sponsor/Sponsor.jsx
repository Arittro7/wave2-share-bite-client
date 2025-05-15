import Marquee from "react-fast-marquee";
import img1 from '../../assets/1.avif'
import img2 from '../../assets/2.avif'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
const Sponsor = () => {
    return (
        <div className="container mx-auto my-20 px-2">

            <div className="text-xl font-bold pb-10  w-full">
                <h2 className="pb-2 text-2xl">GLOBAL <span className="text-[#9d174d] font-semibold">5K+</span> HAPPY SPONSORS WITH US</h2>
                <hr className="w-[393px] border-2 border-[#62918b]" />
            </div>

            <Marquee pauseOnHover={true} speed={70}>
                <div className="flex items-center">
                
                    <img className="mr-20 w-36 rounded-full" src={img1} alt="" />
                
                    <img className="mr-20 w-36 rounded-full" src={img2} alt="" />
                
                    <img className="mr-20 w-36 rounded-full" src={img3} alt="" />
                
                    <img className="mr-20 w-36 rounded-full" src={img4} alt="" />
               
                    <img className="mr-20 w-36 rounded-full" src={img5} alt="" />

                </div>
            </Marquee>
        </div>
    );
};

export default Sponsor;