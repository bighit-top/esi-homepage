import { useEffect, useState } from "react";
import { Button } from "../common/Button";
import { anyangOffice, goyangAddress, goyangFax, goyangLatitude, goyangLongitude, goyangOffice, goyangPhone } from "../../DataSet";
import { OfficeModel } from "../../models/OfficeModel";
import { SubTitle } from "../common/SubTitle";
import { handleResponseError } from "../../utils";
declare global {
    interface Window {
        kakao: any;
    }
}
export const ContactPage = () => {

    const [officesMap, setOfficeMap] = useState<Map<string, OfficeModel>>(new Map<string, OfficeModel>());
    const [name, setName]: any = useState("")
    const [address, setAddress]: any = useState("");
    const [phone, setPhone]: any = useState("");
    const [fax, setFax]: any = useState("");
    const [latitude, setLatitude]: any = useState(0);
    const [longitude, setLongitude]: any = useState(0);


    useEffect(() => {
        const getOffices = async () => {

            const url = `${process.env.REACT_APP_SERVER_API}/office`

            try {
                const response = await fetch(url);
                handleResponseError(response);

                const loadedOffices = new Map<string, OfficeModel>();
                const responseJson = await response.json();
                responseJson.forEach((office: any) => {
                    loadedOffices.set(office.name, office)
                });

                const initValue = loadedOffices.get(goyangOffice);
                setOfficeMap(loadedOffices);
                updateOfficeState(initValue);
            } catch (error) {
                console.error(error);
            }

        }
        getOffices();

    }, []);

    useEffect(() => {
        const drawMap = () => {

            const script = document.createElement('script');
            script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API_KEY}&autoload=false`;
            script.async = true;

            document.head.appendChild(script);

            script.addEventListener("load", () => {
                window.kakao.maps.load(() => {
                    // 지도
                    const container = document.getElementById("map");
                    const options = {
                        center: new window.kakao.maps.LatLng(latitude, longitude),
                        level: 2,
                    };
                    const map = new window.kakao.maps.Map(container, options);

                    // 마커
                    const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
                    const marker = new window.kakao.maps.Marker({
                        position: markerPosition
                    });
                    marker.setMap(map);

                });
            });
        }

        drawMap();
    }, [officesMap, name])


    const officeHandler = (office: any) => {
        const selectedOffice = officesMap.get(office);
        updateOfficeState(selectedOffice);
    }

    const updateOfficeState = (office: OfficeModel | undefined) => {
        setName(office?.name);
        setAddress(office?.address);
        setPhone(office?.phoneNumber);
        setFax(office?.faxNumber);
        setLatitude(office?.latitude);
        setLongitude(office?.longitude);
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <div className="flex flex-col w-[60%] max-xl:w-[80%]">
                    <SubTitle title="Contact" />
                    <div className="flex gap-3 p-1self-start text-xl mt-10 px-3 p-5 font-bold text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                        <Button title={officesMap.get(goyangOffice)?.name} onCallback={() => officeHandler(officesMap.get(goyangOffice)?.name)} />
                        <Button title={officesMap.get(anyangOffice)?.name} onCallback={() => officeHandler(officesMap.get(anyangOffice)?.name)} />
                        {/* <Button title={"서울시 관악 지사"} onCallback={() => officeHandler("관악")} /> */}
                    </div>
                    <div className="flex flex-col px-8 py-6 w-full font-semibold text-black bg-blue-800 bg-opacity-10 rounded-xl max-md:px-5 max-md:max-w-full">
                        <div id="map" style={{ width: '100%', height: '400px' }} className=" w-full max-md:flex-wrap max-lg:flex-wrap max-xl:flex-wrap max-2xl:flex-wrap max-md:max-w-full max-lg:max-w-full max-xl:max-w-full max-2xl:max-w-full"></div>
                        <div className="mt-3 text-right text-xl">
                            {address}
                            <br />
                            TEL : {phone}
                            <br />
                            FAX : {fax}
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}