"use client";
import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Time from "./TimeManagement";
import SetPriority from "./SetPriority";
import CommunityEngagement from "./CommunityEngagement";

const WhyRevamp = () => {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	const handleSlideChange = (swiper: { activeIndex: number }) => {
		setActiveSlideIndex(swiper.activeIndex);
	};
	return (
		<div className="h-screen-height border-collapse">
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				navigation
				pagination={{ clickable: true }}
				onSlideChange={handleSlideChange}
				// scrollbar={{ draggable: true }}
				slidesPerView={1}
			>
				<SwiperSlide>
					<Time />
				</SwiperSlide>
				<SwiperSlide>
					<SetPriority />
				</SwiperSlide>
				<SwiperSlide>
					<CommunityEngagement />
				</SwiperSlide>
				...
			</Swiper>
		</div>
	);
};

export default WhyRevamp;
