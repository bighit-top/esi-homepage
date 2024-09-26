import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { HistoryModel } from '../../models/HistoryModel';
import { ImageModel } from '../../models/ImageModel';
import { handleResponseError } from '../../utils';

export const InspectionHistoryDetailPage = () => {

    const navigate = useNavigate();
    const [historyIdCookie] = useCookies(['historyId']);
    const [tokenCookie, removeTokenCookie] = useCookies(['accessToken']);

    const historyId = historyIdCookie.historyId;
    const token = tokenCookie.accessToken;

    const [history, setHistory] = useState<HistoryModel>({} as HistoryModel);
    const [image, setImage] = useState<ImageModel>({} as ImageModel);

    useEffect(() => {

        if (!token) {
            navigate('/history')
        }

        const getHistory = async () => {

            const url = `${process.env.REACT_APP_SERVER_API}/inspectionhistories/${historyId}`

            const requestOptions = {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            };

            try {
                const response = await fetch(url, requestOptions);
                handleResponseError(response);

                const responseData = await response.json();
                setHistory(() => responseData.history);
                setImage(() => responseData.image);
            } catch (error) {
                console.error(error);
            }
        }
        getHistory();
    }, []);

    const updateHistoryHandler = (id: number) => {
        navigate(`/history/update`,
            {
                state: {
                    historyId: id
                }
            });
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <div className="flex flex-col w-[60%] max-xl:w-[80%]">
                    <div className="w-full text-3xl mt-40 mb-20 font-extrabold max-md:max-w-full">
                        점검 서비스 이력 상세 페이지
                    </div>

                    <div className="flex flex-col px-8 py-6 w-full font-semibold text-black bg-blue-800 bg-opacity-10 max-md:px-5 max-md:max-w-full">
                        <div className="flex justify-center">
                            <img
                                loading="lazy"
                                src={`${process.env.REACT_APP_SERVER_API}/uploads/${image.fileName}`}
                                className="w-fit"
                            />
                        </div>
                        <div className="mt-14">
                            <div className="mb-6">
                                <label className="block mb-2 text-base font-bold">
                                    제목
                                </label>
                                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2 shadow-sm">
                                    {history.serviceName}
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-base font-bold">
                                    날짜
                                </label>
                                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2 shadow-sm">
                                    {history.serviceDate}
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-base font-bold">
                                    고객사
                                </label>
                                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2 shadow-sm">
                                    {history.clientName}
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-base font-bold">
                                    건물 주소
                                </label>
                                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2 shadow-sm">
                                    {history.clientBuildingAddress}
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-base font-bold">
                                    건물 규모 m2
                                </label>
                                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2 shadow-sm">
                                    {history.clientBuildingArea}
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-base font-bold">
                                    건물 용도
                                </label>
                                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2 shadow-sm">
                                    {history.clientBuildingPurpose}
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-base font-bold">
                                    점검내용
                                </label>
                                <div className="inline-flex">
                                    {history.maintenance ?
                                        <div>
                                            <label className="m-2">유지관리</label>
                                            <input type="checkbox" name="maintenance" checked disabled />
                                        </div>
                                        : null
                                    }
                                    {history.performance ?
                                        <div>
                                            <label className="m-2">성능점검</label>
                                            <input type="checkbox" name="performance" checked disabled />
                                        </div>
                                        : null
                                    }
                                    {history.consignment ?
                                        <div>
                                            <label className="m-2">위탁선임</label>
                                            <input type="checkbox" name="consignment" checked disabled />
                                        </div>
                                        : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-1 mt-10">
                        <button
                            type="submit"
                            className="text-white bg-blue-800 border-blue-800 font-lg rounded-2xl text-sm sm:w-auto px-5 py-2.5 text-center border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5"
                            onClick={() => updateHistoryHandler(historyId)}
                        >
                            수정
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
