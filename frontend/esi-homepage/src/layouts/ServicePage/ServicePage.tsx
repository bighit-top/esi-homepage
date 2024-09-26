import { useState } from "react";
import { Button } from "../common/Button"
import { ServiceDetailPage } from "./ServiceDetail";
import { SubTitle } from "../common/SubTitle";

export const ServicePage = () => {

    const [serviceName, setServiceName] = useState("주요업무");

    const serviceHandler = (name: string) => {
        setServiceName(name);
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <div className="flex flex-col w-[60%] max-xl:w-[80%]">
                    <SubTitle title="Services" />
                    <div className="leading-10 p-3 text-xl">
                        <div>
                            우리 ESI기계설비는 건축물 기계설비의 <b className="text-red-500">성능 점검, 유지관리 점검, 유지관리자 업무 위탁, 기계설비 공사</b> 서비스를 제공하고 있습니다.
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-start gap-3 p-1self-start text-xl px-3 p-5 mb-5 font-bold text-white whitespace-nowrap max-md:max-w-full">
                        <Button title={"주요업무"} onCallback={() => serviceHandler("주요업무")} />
                        <Button title={"성능점검"} onCallback={() => serviceHandler("성능점검")} />
                        <Button title={"유지관리점검"} onCallback={() => serviceHandler("유지관리점검")} />
                        <Button title={"유지관리자업무위탁"} onCallback={() => serviceHandler("유지관리자업무위탁")} />
                        <Button title={"기계설비공사"} onCallback={() => serviceHandler("기계설비공사")} />
                        <Button title={"부수서비스"} onCallback={() => serviceHandler("부수서비스")} />
                    </div>

                    <div>
                        <ServiceDetailPage title={serviceName} />
                    </div>
                </div>
            </div>
        </>
    );
}