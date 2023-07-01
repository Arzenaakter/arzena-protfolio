

const Contact = () => {
    return (
        <div className="mt-20 ">
        <h1 className="title ">Contact Me</h1>
        <div className="relative z-10  bg-opacity-30 bg-black mt-10">
        <div className='grid grid-cols-1 p-10 gap-10 items-center '>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10  '>
                        <input type="text" placeholder='Your Name ' className='p-4 bg-black border-gradient ' />
                        <input type="text" placeholder='Your Email'className='p-4 bg-black border-gradient ' />
                        <input type="text" placeholder='Phone Number' className='p-4 bg-black border-gradient '/>
                        <input type="text" placeholder='Subject' className='p-4 bg-black border-gradient '/>
                    </div>
                    <input type="text" placeholder='Message' className='px-4 py-10   bg-black border-gradient '/>
                    <button className='btn-hover py-2  text-2xl border-gradient '>Submit</button>


                </div>


        </div>
        </div>
    );
};

export default Contact;