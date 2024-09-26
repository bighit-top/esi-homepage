import { useEffect, useState } from "react";
import { HistoryAndImageModel } from "../../../models/HistoryAndImageModel";
import { Pagination, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import { handleResponseError } from "../../../utils";

export const HistorySwiper = () => {

    const [histories, setHistories] = useState<HistoryAndImageModel[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const getHistories = async () => {

            const baseUrl: string = `${process.env.REACT_APP_SERVER_API}/inspectionhistories`
            const url: string = baseUrl + `?page=${currentPage}`;

            try {
                const response = await fetch(url);

                handleResponseError(response);

                const responseJson = await response.json();
                const responseData = responseJson.data;
                const loadedHistory: HistoryAndImageModel[] = [];

                responseData.forEach((history: any) => {
                    loadedHistory.push({
                        id: history.service_history_id,
                        clientBuildingAddress: history.client_building_address,
                        clientBuildingArea: history.client_building_area,
                        clientName: history.client_name,
                        serviceName: history.service_name,
                        image: history.file_name,
                    });
                });

                setHistories(loadedHistory);
            } catch (error) {
                console.error('히스토리 가져오기 오류:', error);
            }
        }
        getHistories();
    }, [])

    return (
        <Swiper
            modules={[FreeMode, Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                768: {
                    slidesPerView: 4,  //브라우저가 768보다 클 때
                    spaceBetween: 40,
                    freeMode: true,
                    pagination: { clickable: true },
                },
                1024: {
                    slidesPerView: 6,  //브라우저가 1024보다 클 때
                    spaceBetween: 50,
                },
            }}
        >
            <div className="flex flex-row justify-center">
                {histories.map(history => (
                    <SwiperSlide key={history.id}>
                        <div key={history.id} className="flex flex-col max-md:w-full">
                            <div className="flex flex-grow items-center justify-center bg-blue-800 bg-opacity-10 max-md:px-5">
                                <img
                                    loading="lazy"
                                    src={`${process.env.REACT_APP_SERVER_API}/uploads/${history.image}`}
                                    className="aspect-square max-w-full"
                                />
                            </div>

                            <div className="text-2xl text-black font-[1000] truncate leading-10">
                                {history.serviceName}
                            </div>
                            <div className="text-lg text-black font-[1000] max-w-[72px]">{history.clientBuildingArea}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </div>
        </Swiper>
    );
}