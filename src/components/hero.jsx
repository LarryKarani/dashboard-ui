import React from 'react'
import HeroImage from '../assets/agent.png'
function Hero() {
    return (
        <div className="bg-gray-50 pb-3 px-2">
            <main className="flex flex-wrap">
                <div className='md:w-1/2'>
                    <img
                        className=""
                        src={HeroImage}
                        alt=""
                    />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-normal tracking-tight mt-24  text-gray-600 text-3xl">
                        20% Safe On Your First Account
                    </h1>
                    <p className='text-normal mt-3'>
                        <span className='border-dashed font-light border-4 border-light-blue-500 px-3'>
                            NEWBIE20
                        </span>
                        <span className='ml-3'>
                            Copy Code
                        </span>
                        
                    </p>
                </div>
              
            </main>
        </div>
    )
}

export default Hero