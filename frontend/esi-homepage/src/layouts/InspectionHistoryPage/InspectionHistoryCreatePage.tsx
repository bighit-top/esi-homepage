import React, { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useNavigate } from "react-router-dom";
import { handleResponseError } from "../../utils";

export const InspectionHistoryCreatePage = () => {

  // 카카오 지도 api
  const open = useDaumPostcodePopup('//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js');

  const navigate = useNavigate();

  const [tokenCookie, setTokenCookie, removeTokenCookie] = useCookies(['accessToken']);
  const token = tokenCookie.accessToken;

  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [purpose, setPurpose] = useState("");
  const [area, setArea] = useState<number | string>("");
  const [maintenance, setMaintenance] = useState(false);
  const [performance, setPerformance] = useState(false);
  const [consignment, setConsignment] = useState(false);
  const [image, setImage] = useState<File | null>(null);


  useEffect(() => {
    if (!token) {
      navigate('/history');
    }
  }, [token, navigate]);

  async function imageFileHandler(e: any) {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  const submitNewHistory = async (event: React.MouseEvent<HTMLButtonElement>) => {

    event.preventDefault();

    if (!(title && client && address && image)) {
      return false;
    }

    const url = `${process.env.REACT_APP_SERVER_API}/inspectionhistories`;

    const requestOptions = {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: createFormData()
    };

    try {
      const response = await fetch(url, requestOptions);
      handleResponseError(response);

      alert('저장되었습니다.');
      navigate(`/history`);
    } catch (error) {
      alert('네트워크 상태를 확인하고 다시 시도해주세요.');
    }
  };

  const createFormData = () => {
    const formData = new FormData();
    formData.append('serviceName', title);
    formData.append('clientName', client);
    formData.append('serviceDate', date);
    formData.append('clientBuildingAddress', address);
    formData.append('clientBuildingPurpose', purpose);
    formData.append('clientBuildingArea', area.toString());
    formData.append('maintenance', maintenance.toString());
    formData.append('performance', performance.toString());
    formData.append('consignment', consignment.toString());
    formData.append('image', image as Blob);
    return formData;
  }

  const handleComplete = (data: any) => {
    setAddress(data.address);
  };

  const postCodeHandler = () => {
    open({ onComplete: handleComplete });
  };

  return (

    <div className="flex justify-center items-center">
      <div className="flex flex-col w-[60%] max-xl:w-[80%]">
        <div className="w-full text-3xl mt-40 font-extrabold max-md:max-w-full">
          성능 점검 / 유지관리 점검 이력 - 생성
        </div>
        <div className="mt-20 mx-20 max-sm:mx-0 max-md:mx-0 max-lg:mx-0 max-xl:mx-0">
          <form>
            <div className="mb-6">
              <label className="block mb-2 text-base font-bold">
                제목
              </label>
              <input
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="게시할 제목을 입력해주세요."
                required
                onChange={e => setTitle(e.target.value)} value={title}
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-base font-bold">
                날짜
              </label>
              <input
                type="date"
                id="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="점검 날짜를 입력해주세요."
                required
                onChange={e => setDate(e.target.value)} value={date}
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-base font-bold">
                고객사
              </label>
              <input
                type="text"
                id="client"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="고객사를 입력해주세요."
                required
                onChange={e => setClient(e.target.value)} value={client}
              />
            </div>
            <div className="mb-6">
              <div className="relative">
                <label className="block mb-2 text-base font-bold">
                  건물 주소
                </label>
                <input
                  type="text"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="우편번호 검색을 이용해주세요."
                  readOnly
                  required
                  value={address}
                />
                <button
                  type="button"
                  className="text-white absolute end-3 bottom-1.5 bg-blue-800 font-medium rounded-lg text-xs px-4 py-2"
                  onClick={postCodeHandler}
                >
                  우편번호 검색
                </button>
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-base font-bold">
                건물 규모 m2
              </label>
              <input
                type="number"
                id="size"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={e => setArea(Number(e.target.value))}
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-base font-bold">
                건물 용도
              </label>
              <input
                type="text"
                id="purpose"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={e => setPurpose(e.target.value)} value={purpose}
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-base font-bold">
                점검내용
              </label>
              <div className="inline-flex">
                <div>
                  <label className="m-2">유지관리</label>
                  <input type="checkbox" name="maintenance" onChange={e => setMaintenance(e.target.checked)} />
                </div>
                <div>
                  <label className="m-2">성능점검</label>
                  <input type="checkbox" name="performance" onChange={e => setPerformance(e.target.checked)} />
                </div>
                <div>
                  <label className="m-2">위탁선임</label>
                  <input type="checkbox" name="consignment" onChange={e => setConsignment(e.target.checked)} />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-base font-bold">
                첨부파일
              </label>
              <input
                type="file"
                id="file"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                onChange={e => imageFileHandler(e)}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white bg-blue-800 border-blue-800 font-lg rounded-2xl text-sm sm:w-auto px-5 py-2.5 text-center border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5"
                onClick={submitNewHistory}
              >
                저장
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
