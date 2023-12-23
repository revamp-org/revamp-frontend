import React from 'react'
import Image from 'next/image';
const Time = () => {
	return (
		<>
			<div className="h-screen-height flex flex-col md:flex-row items-center w-4/5 mx-auto ">
				<div className='md:w-3/5 p-6 mr-8'>
					<h1 className='text-4xl md:text-7xl text-white font-bold md:mb-10'>Time Management</h1>
					<div className="md:mb-10"><p className="text-white font-normal text-lg md:text-2xl">Where have you been wasting your time? How do you really want to spend your time?</p></div><div><p className='text-white font-light  text-sm md:text-xl'>
						Organize your responsibilities and commitments easily. Create and follow timely goals that keeps you motivated to become a better version of youtself. Omit procastination once and for all</p></div>

				</div>
				<div className="md:flex-1 p-6 ">
					<Image
						height={800}
						width={500}
						src="/assets/time_mgmt.webp"
						alt="time-management" className='h-500 md:h-800 w-full object-cover' />
				</div>
				{/* <div className='md:hidden p-6'> */}
				{/**/}
				{/* <Image */}
				{/* 	// src={require('./why-revamp-images/time_mgmt.png')} */}
				{/* 	height={800} */}
				{/* 	width={500} */}
				{/* 	src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png" */}
				{/* 	alt="time-management" */}
				{/* 	className='md:h-800 w-full object-cover mb-4' /> */}
				{/**/}
				{/* </div> */}
				{/* </div> */}
			</div>
		</>
	)
}

export default Time
