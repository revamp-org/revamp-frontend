import React from 'react'
import Image from 'next/image';
const SetPriority = () => {
	return (
		<>
			<div className="h-screen-height flex flex-col md:flex-row items-center w-4/5 mx-auto ">

				<div className='md:w-3/5 p-6 mr-8'>
					<h1 className='text-4xl md:text-7xl text-white font-bold md:mb-10'>Prioritize Your Goals</h1>
					<div className="md:mb-10"><p className="text-white font-normal text-lg md:text-2xl">What do you really want to achieve now? What are your priorities?</p></div><div><p className='text-white font-light text-sm md:text-xl'>
						Select the goals that you want to achieve in the next few days or few months. Predict your anticipated timeline. Streamline your focus and enhance your overall proactivity.
					</p></div>

				</div>
				<div className="md:flex-1 p-6 ">
					<Image
						width={500} height={800} src="/assets/prioritize_goals.webp" alt="set-priority" className='md:h-800 h-500 object-cover' />
				</div>
				{/* <div className='md:hidden p-6'> */}
				{/**/}
				{/* 	<Image */}
				{/* 		// src={require('./why-revamp-images/time_mgmt.webp')} */}
				{/* 		height={800} */}
				{/* 		width={500} */}
				{/* 		src="/assets/prioritize_goals.webp" */}
				{/* 		alt="time-management" */}
				{/* 		className='h-800 w-500 object-cover mb-4' /> */}
				{/**/}
				{/* </div> */}
				{/* </div> */}
			</div>
		</>
	)
}

export default SetPriority 
