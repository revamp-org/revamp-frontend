
import React from 'react'
import Image from 'next/image';
const CommunityEngagement = () => {
	return (
		<>
			<div className="h-screen-height flex flex-col md:flex-row items-center w-4/5 mx-auto ">
				<div className='md:w-3/5 p-6 mr-8'>
					<h1 className='text-4xl md:text-7xl text-white font-bold md:mb-10'>Community Engagement </h1>
					<div className="md:mb-10"><p className="text-white font-normal text-lg md:text-2xl">Do you believe in mutual growth? How till you encourage yourself and others to be better?</p></div><div><p className='text-white font-light text-sm md:text-xl'>
						Share your progress with the community members. Let them know that they are not alone in the journey of self improvement. Grow better as a person.</p></div>

				</div>
				<div className="md:flex-1 p-6 ">
					<Image width={500} height={800} src="/assets/comm_engg.webp" alt="community-engagement" className='md:h-800 h-500 object-cover' />
				</div>
				{/* <div className='md:hidden p-6'> */}
				{/**/}
				{/* 	<Image */}
				{/* 		// src={require('./why-revamp-images/time_mgmt.webp')} */}
				{/* 		height={800} */}
				{/* 		width={500} */}
				{/* 		src="/assets/comm_engg.webp" */}
				{/* 		alt="community-engagement" */}
				{/* 		className='h-800 w-500 object-cover mb-4' /> */}
				{/**/}
				{/* </div> */}
				{/* </div> */}
			</div>
		</>
	)
}

export default CommunityEngagement;
