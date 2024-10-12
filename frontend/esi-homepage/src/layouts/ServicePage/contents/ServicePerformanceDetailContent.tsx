import effect from "../../../image/effect.png";

export const ServicePerformanceDetailContent = () => {
    return (
        <div className="justify-center px-10 py-10 mt-10 w-full leading-loose rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="bg-gray-100 p-14 rounded-lg shadow-lg max-w-5xl mx-auto -mt-10">
                <div className="text-2xl font-bold text-blue-800 mb-4 max-md:text-xl"> {/* 반응형 텍스트 크기 조정 */}
                    기계설비 성능점검 주요업무
                </div>
                <div className="text-xl leading-relaxed text-gray-700 max-md:text-base"> {/* 반응형 텍스트 크기 조정 */}
                    - 성능점검 계획 수립 <br />
                    - 성능점검 실시 및 보고서 작성 <br />
                    - 성능점검 결과 분석 및 진단 <br />
                    - 기계설비 성능 개선 제안 <br />
                    - 성능점검 보고서 제출
                </div>
            </div>

            <div className="bg-gray-100 p-14 rounded-lg shadow-lg max-w-5xl mx-auto mt-10">
                <div className="text-2xl font-bold text-blue-800 mb-4 max-md:text-xl"> {/* 반응형 텍스트 크기 조정 */}
                    기계설비 성능점검 기준
                </div>
                <div className="text-xl leading-relaxed text-gray-700 max-md:text-base"> {/* 반응형 텍스트 크기 조정 */}
                    - 기계설비 성능점검은 노후화 및 관리자의 능력과 운전 방법 등으로
                    효율성 저하, 에너지 증감, 비용 발생을 방지하기 위함이다. <br />
                    - 관리주체는 년 1회 이상 난방 점검, 냉방 점검을 격년으로 실시해야 한다. <br />
                    - 관리주체는 성능점검을 성능점검 등록업자에게 대행시킬 수 있다.
                </div>
            </div>

            <div className="bg-gray-100 p-14 rounded-lg shadow-lg max-w-5xl mx-auto mt-10">
                <div className="text-2xl font-bold text-blue-800 mb-4 max-md:text-xl"> {/* 반응형 텍스트 크기 조정 */}
                    유지관리자 선임 및 성능점검 대상 건축물
                </div>
                <div className="text-xl leading-relaxed text-gray-700 max-md:text-base"> {/* 반응형 텍스트 크기 조정 */}
                    관리주체는 지정된 기준에 따라 유지관리자를 선임해야 하며, 건축물의 성능과 안전을 위해 적절한 점검이 이루어져야 합니다.
                </div>
            </div>

            <div className="bg-gray-100 p-14 rounded-lg shadow-lg max-w-5xl mx-auto mt-10">
                <div className="text-2xl font-bold text-blue-800 mb-4 max-md:text-xl"> {/* 반응형 텍스트 크기 조정 */}
                    기계설비 성능점검 대상 설비
                </div>
                <div className="text-xl leading-relaxed text-gray-700 mt-5 max-md:text-base"> {/* 반응형 텍스트 크기 조정 */}
                    <table className="border-collapse border border-black size-full text-center">
                        <thead className="bg-gray-300">
                            <tr>
                                <th className="border">점검대상 설비</th>
                                <th className="border">세부항목</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border" rowSpan={6}>열원 및 냉난방</td>
                                <td className="border">냉동기 / 냉각탑</td>
                            </tr>
                            <tr>
                                <td className="border">축열조</td>
                            </tr>
                            <tr>
                                <td className="border">보일러</td>
                            </tr>
                            <tr>
                                <td className="border">열교환기 / 팽창탱크 / 펌프(냉,난방)</td>
                            </tr>
                            <tr>
                                <td className="border">신재생에너지(연교전지, 지열 등)</td>
                            </tr>
                            <tr>
                                <td className="border">패키지에어컨(EHP, GHP) / 항온항습기</td>
                            </tr>
                            <tr>
                                <td className="border">공기조화기</td>
                                <td className="border">공기조화기(AHU) / 팬코일 유닛</td>
                            </tr>
                            <tr>
                                <td className="border">환기설비</td>
                                <td className="border">환기 설비 / 필터</td>
                            </tr>
                            <tr>
                                <td className="border">위생기구</td>
                                <td className="border">위생기구 / 수전</td>
                            </tr>
                            <tr>
                                <td className="border">오수정화 및 물재이용</td>
                                <td className="border">오수정화설비 / 물재이용 설비</td>
                            </tr>
                            <tr>
                                <td className="border">배관</td>
                                <td className="border">배관 및 배관 설비</td>
                            </tr>
                            <tr>
                                <td className="border">덕트</td>
                                <td className="border">덕트 및 덕트 설비</td>
                            </tr>
                            <tr>
                                <td className="border">보온</td>
                                <td className="border">보온 및 보온 설비</td>
                            </tr>
                            <tr>
                                <td className="border">자동제어</td>
                                <td className="border">자동제어 설비</td>
                            </tr>
                            <tr>
                                <td className="border">방음, 방진, 내진</td>
                                <td className="border">방음 / 방진 / 내진 설비</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="bg-gray-100 p-14 rounded-lg shadow-lg max-w-5xl mx-auto mt-10">
                <div className="text-2xl font-bold text-blue-800 mb-4 max-md:text-xl"> {/* 반응형 텍스트 크기 조정 */}
                    성능점검으로 인한 기대 효과
                </div>
                <div className="text-xl leading-relaxed text-gray-700 max-md:text-base"> {/* 반응형 텍스트 크기 조정 */}
                    <img src={effect} className="inset-0 w-full max-md:w-full" alt="효과 이미지" />
                </div>
            </div>
        </div>
    );
}