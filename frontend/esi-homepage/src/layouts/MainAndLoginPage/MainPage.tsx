import gear from "../../image/gears.jpg";
import building from "../../image/building.png";
import plumber from "../../image/plumber.png";
import mechanics from "../../image/mechanics.png";
import { HistorySwiper } from "./components/HistorySwiper";

export const MainPage = () => {

    return (
        <>
            <div className="flex flex-col justify-center leading-[50px] text-zinc-300">
                <div className="flex overflow-hidden relative flex-col justify-center mt-10 py-12 w-full min-w-min max-w-full max-md:max-w-full">
                    <div className="">
                        <img
                            loading="lazy"
                            src={gear}
                            className="object-cover absolute size-fit"
                        />
                    </div>
                    <div className="mb-20 max-md:mb-0 max-lg:mb-0">
                        <div className="flex relative flex-col px-20 py-20 mt-32 bg-blue-800 bg-opacity-50 max-lg:mt-5">
                            <div className="text-5xl font-semibold max-md:text-lg max-lg:text-2xl max-xl:text-3xl max-2xl:text-4xl leading-normal max-md:-mt-10">
                                우리 <span className="text-white font-black">ESI 기계설비</span>는 최 강의 기술진이 최고의 서비스로 <br />
                                <p>기계설비의 유지관리 및 위탁선임 고민을 해결해드립니다.</p>
                            </div>
                            <div className="mt-5 text-3xl max-md:text-sm max-lg:text-lg max-xl:text-xl max-lg:mt-2">
                                건물에 점검/관리가 필요한 곳이라면 어디든 찾아가겠습니다.
                            </div>
                            <div className="flex justify-end mt-20 mb-2 max-md:-mt-10 max-lg:-mt-0 max-xl:mt-5">
                                <div >
                                    <div className="px-7 py-3.5 text-2xl font-extrabold text-blue-700 rounded-2xl border border-solid bg-zinc-300 bg-opacity-100 
                                    shadow-lg max-sm:px-1 max-sm:py-1 max-sm:-mr-16 max-md:px-3 max-md:py-2 max-md:-mr-16 max-md:-mb-20 max-md:mt-5 max-lg:px-5 max-lg:py-3 max-lg:-mb-10 max-lg:mt-2 
                                    max-md:text-sm max-lg:text-base hover:bg-opacity-100 hover:text-red-600 hover:shadow-xl">
                                        문의전화: 031-968-9990
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center mt-10 mb-10">
                <div className="text-4xl text-blue-800 font-[1000] max-sm:text-2xl max-md:text-3xl max-xl:text-4xl">
                    Inspection Service Histories
                </div>
            </div>
            <div className="mx-10 mt-12 mb-16">
                <HistorySwiper />
            </div>

            <div className="flex items-center justify-center mb-10">
                <div className="text-4xl text-blue-800 font-[1000] max-sm:text-2xl max-md:text-3xl max-xl:text-4xl">
                    Services
                </div>
            </div>

            <div className="flex justify-center items-center px-16 py-5 bg-blue-800 bg-opacity-10 max-md:px-5">
                <div className="w-full max-w-[1040px] max-md:max-w-full">
                    <div className="flex items-center gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col ml-5 w-[30%] max-md:w-1/2">
                            <img
                                loading="lazy"
                                src={mechanics}
                                className="mt-9 w-full aspect-square max-md:mt-10"
                            />
                        </div>
                        <div className="flex flex-col items-center w-[58%] mx-16 max-md:w-full ">
                            <div className="text-2xl font-[1000] leading-[50px] max-md:mt-10 max-md:max-w-full max-md:text-lg">
                                <p className="font-extrabold mb-5 text-3xl">
                                    성능점검
                                </p>
                                <p>
                                    건축물의 핵심, 성능을 철저하게 점검합니다. 안전과 효율성을 위해 성능점검 서비스를
                                    통해 건물의 잠재적인 문제점을 발견하고 해결책을 제시합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center px-16 py-5 max-md:px-5">
                <div className="w-full max-w-[1040px] max-md:max-w-full">
                    <div className="flex items-center gap-5 max-md:flex-col-reverse max-md:gap-0">
                        <div className="flex flex-col items-center w-[58%] max-md:w-full">
                            <div className="text-2xl text-black font-[1000] leading-[50px] max-md:mt-10 max-md:max-w-full max-md:text-lg">
                                <p className="font-extrabold mb-5 text-3xl">
                                    유지관리점검
                                </p>
                                <p>
                                    건축물을 지속적으로 관리하여 최상의 상태를 유지합니다. 유지관리점검 서비스를 통해 정기적인 점검과 보수를
                                    통해 건물의 수명을 연장하고 안전한 환경을 유지합니다.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col ml-3 w-[30%] max-md:ml-0 max-md:w-1/2">
                            <img
                                loading="lazy"
                                src={building}
                                className="mt-9 w-full aspect-square max-md:mt-10"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center px-16 py-5 bg-blue-800 bg-opacity-10 max-md:px-5">
                <div className="w-full max-w-[1040px] max-md:max-w-full">
                    <div className="flex items-center gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col ml-5 w-[30%] max-md:w-1/2">
                            <img
                                loading="lazy"
                                src={plumber}
                                className="mt-9 w-full aspect-square max-md:mt-10"
                            />
                        </div>
                        <div className="flex flex-col items-center w-[58%] mx-16 max-md:w-full">
                            <div className="text-2xl font-[1000] leading-[50px] max-md:mt-10 max-md:max-w-full max-md:text-lg">
                                <p className="font-extrabold mb-5 text-3xl">
                                    유지관리자 위탁 선임
                                </p>
                                <p>
                                    전문가의 손길로 건물을 안전하게 관리합니다. 유지관리자 업무위탁 서비스를 통해 건축물의 모든 측면을
                                    전문가가 관리하여 고객님의 편안한 생활을 지원합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}