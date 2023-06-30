import {motion} from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <>
        <div className=" w-full mx-auto border ">
          <div className="flex  mx-20 gap-20">
          <motion.div className="mt-28 rounded-md"
          initial={{ opacity:0}}
          whileHover={{scale: 1.2, boxShadow: '0px 0px 5px rgb(255,255,255)'}}
          animate={{opacity:1,scale:1.1}}
          transition={{delay:0.5, duration:1}}
          >
            <img src="https://i.ibb.co/HYnmVxd/pp.jpg" alt=""  className="h-80 w-full rounded-md "/>
          </motion.div>
          <div className="mt-28 border">
            <p>Hi I am</p>
            <h1 className='text-4xl text-[#9D7D28]'>Arzena AKter</h1>
            <p>Web Developer</p>
            <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'We produce food for Mice',
    1000,
    'We produce food for Hamsters',
    1000,
    'We produce food for Guinea Pigs',
    1000,
    'We produce food for Chinchillas',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
          </div>
          </div>
        </div>
        </>
    );
};

export default Banner;