import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { HistoryAndImageModel } from "../../models/HistoryAndImageModel";
import { InspectionHistoryItem } from "./components/InspectionHistoryItem";
import { SubTitle } from "../common/SubTitle";
import { handleResponseError } from "../../utils";


export const InspectionHistoryPage = () => {

  const [histories, setHistories] = useState<HistoryAndImageModel[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  const navigate = useNavigate();
  const [historyIdCookie, setHistoryIdCookie, removeHistoryIdCookie] = useCookies(['historyId']);
  const [tokenCookie, setIsLogin] = useCookies(['accessToken']);

  const token = tokenCookie.accessToken;

  const getHistories = async () => {
    const baseUrl = `${process.env.REACT_APP_SERVER_API}/inspectionhistories`
    const url = baseUrl + `?page=${currentPage}`;

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
          image: encodeURIComponent(history.file_name),
        })
      });

      setHistories((oldData) => [...oldData, ...loadedHistory]);
      setLastPage(responseJson.meta.last_page);

    } catch (error) {
      console.error('히스토리 가져오기 오류:', error);
      alert('히스토리를 가져오는 중에 오류가 발생했습니다. 나중에 다시 시도해주세요.');
    }
  }

  useEffect(() => {
    removeHistoryIdCookie('historyId');
    getHistories();
  }, [currentPage]);

  const moreHandler = () => {
    setCurrentPage(currentPage + 1);
  }

  const detailHistoryHandler = (id: string) => {
    setHistoryIdCookie('historyId', id);
    navigate(`/history/${id}`,
      {
        state: {
          historyId: id
        }
      });
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-[60%] max-xl:w-[80%]">
        <SubTitle title="성능 점검 / 유지관리 점검 이력" />
        {typeof token == 'string' ?
          <div className="flex flex-col justify-center items-end py-2.5 pr-2.5 pl-16 w-full text-lg font-extrabold text-white whitespace-nowrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
            <div className="justify-center px-5 py-2 mt-2 bg-blue-800 rounded-2xl border border-blue-800 border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
              <a href="/history/create">등록</a>
            </div>
          </div>
          :
          <div className="flex flex-col justify-center items-end py-2.5 pr-2.5 pl-16 w-full text-lg font-extrabold text-white whitespace-nowrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          </div>
        }

        {histories && histories.length > 0 ?
          <div className="w-full max-md:max-w-full mt-3">
            <div className="flex flex-wrap gap-5 max-md:flex-col max-md:gap-0">

              {
                typeof token == 'string' ? (
                  histories.map(history => (
                    <InspectionHistoryItem key={history.id} history={history} onClick={detailHistoryHandler} />
                  ))
                ) : (
                  histories.map(history => (
                    <InspectionHistoryItem key={history.id} history={history} />
                  )))
              }
            </div>
          </div>
          :
          <div className="flex justify-center w-full mt-3">
            <div className="flex justify-center items-center h-40">
              <p className="text-black text-lg font-semibold">점검 서비스 이력이 없습니다.</p>
            </div>
          </div>
        }

        {lastPage > currentPage ? (
          <div className="flex flex-col justify-center items-center mt-10 text-lg font-extrabold text-white whitespace-nowrap w-full">
            <div className="justify-center item-center px-5 py-2 mt-2 bg-blue-800 rounded-2xl border border-blue-800 border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <button onClick={moreHandler}>더보기</button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
