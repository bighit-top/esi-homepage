export const ServiceMainDetailContent = () => {
    return (
        <>
            <div className="m-5">
                <div className="text-center font-extrabold">
                    &lt;기계설비 유지관리기준 및 위탁선임 관련 안내문&gt;
                </div>
                <ul className=" list-decimal leading-10">
                    <li>
                        관련 법규 및 목적
                        <p>
                            ■ 관련법규
                        </p>
                        <p className="mx-5">
                            ○ 기계설비법 제16조(기계설비 유지관리기준의 고시),
                            제17조(기계설비 유지관리에 대한 점검 및 확인 등),
                            제19조 (기계설비유지관리자 선임 등)
                            <br />
                            ○ 「기계설비 유지관리기준」 고시(2021.08.09)
                        </p>
                    </li>
                    <li>기계설비유지관리자 선임 목적
                        <p className="mx-5">
                            ○ 건축물 기계설비의 안전 및 성능 확보와 효율적인 관리를 위하여 건축물 등에 설치된 기계설비의 소유자 또는
                            관리자(이하 "관리주체"라 한다.)는 유지관리기준을 준수하기 위한 기계설비유지관리자선임 또는 시설물 관리 전문업체에 위탁해야 한다.
                        </p>
                    </li>
                    <li>건축물 관리주체 「기계설비 유지관리기준」 이행사항
                        <table className="border-collapse border border-black size-3/4 text-center">
                            <thead className="bg-sky-500">
                                <tr>
                                    <th className="border">구분</th>
                                    <th className="border">작성시가</th>
                                    <th className="border">적용기준</th>
                                    <th className="border">작성자</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border text-left">1. 유지관리 지침서 구비</td>
                                    <td className="border">선임 전</td>
                                    <td className="border">건축물 준공전</td>
                                    <td className="border">관리주체</td>
                                </tr>
                                <tr>
                                    <td className="border text-left">2. 유지관리계획서 수립</td>
                                    <td className="border">매년 초</td>
                                    <td className="border">계획수립(매년)</td>
                                    <td className="border">관리주체, 선임자</td>
                                </tr>
                                <tr>
                                    <td className="border text-left">3. 안전조치(재해대책, 응급상황매뉴얼)</td>
                                    <td className="border">점검 전</td>
                                    <td className="border"></td>
                                    <td className="border">관리주체</td>
                                </tr>
                                <tr>
                                    <td className="border text-left">4. 유지관리 점검</td>
                                    <td className="border">점검 후/수시</td>
                                    <td className="border">반기별 1회</td>
                                    <td className="border">관리주체, 선임자</td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                    <li>기계설비의 유지관리자 선임 및 성능점검 기준일
                        <table className="border-collapse border border-black size-3/4 text-center">
                            <thead className="bg-sky-500">
                                <tr>
                                    <th className="border">기계설비 유지관리자 선임대상 건축물 등</th>
                                    <th className="border">선임자격</th>
                                    <th className="border">선임인원</th>
                                    <th className="border">유지관리자 선임기한<p className="text-red-500">(기준일)</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <td className="border text-left">
                                        &bull; 학교시설사업 촉진법제2조에 따른 학교시설(1만m²미만)<br />
                                        &bull; 공공기관이 소유 관리하는 건축물(1만m² 미만)</td>
                                    <td className="border">초급<br /> 또는<br /> 보조</td>
                                    <td className="border">1명</td>
                                    <td className="border">
                                        ~ 2024.04.17.<br />
                                        국토부 고시 이후 추진
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                    <li>과태료 부과기준
                        <p>
                            ■ 법규 위반(관리주체 해당사항)시 과태료 부과기준(법 제30조)
                        </p>
                        <p className="mx-5">
                            ○ 500만원 이하의 과태료 부과 대상
                            <p className="mx-5">
                                - 유지관리기준을 준수하지 아니한 자(법 제30조제1항제1호) <br />
                                - 성능점검 등 점검기록을 작성하지 아니하거나 거짓으로 작성한 자(법 제30조제1항제2호)<br />
                                - 점검기록을 보존하지 아니한 자(법 제30조제1학제3호)<br />
                                - 기계설비유지관리자를 선임하지 아니한 자(법 제30조제1항제4호)<br />
                            </p>
                        </p>
                        <p className="mx-5">
                            ○ 100만원 이하의 과태료 부과 대상
                            <p className="mx-5">
                                - 성능점검 등 점검기록을 구청장에게 제출하지 아니한 자(법 제30항제2항제2호)<br />
                                - 유지관리교육을 받지 아니한 사람을 해임하지 아니한 자(법 제30항제2항제3호)<br />
                                - 기계설비유지관리자 선임 또는 해잉ㅁ 신고를 하지 아니하거나 거짓으로 신고한 자(법 제30항제2항제4호)<br />
                                - 기계설비유지관리자로 신임되고 유지관리교육을 받지 아니한 사람(법 제30항제2항제5호)<br />
                                <p className="mx-10">
                                    ⁋ 기타 자세한 사항은 「기계설비법, 「기계설비 유지관리기준」 , 「기계설비 기술기준」 참조
                                </p>
                            </p>

                        </p>
                    </li>
                    <li>기계설비 위탁선임 및 유지관리 점검 예상 일정표
                        <p>
                            <p className="text-blue-700">

                                ■ 기계설비 유지관리자 위탁선임(비상주) 1년(12개월)
                                <br />
                                ■ 기계설비 유지관리점검 반기별 1회(년2회)이상
                                <br />
                            </p>
                            <p className="mx-5">
                                ● 2024년도 비상주위탁선임 계약기간 기준(2024년 04월 부터 2025년 2월말까지)<br />
                                ● 2024년도 유지관리점검 4회 또는 6회 기준(2024년 04월 부터 2025년 2월말까지)
                            </p>
                        </p>
                    </li>
                </ul>
            </div>
        </>
    );
}
