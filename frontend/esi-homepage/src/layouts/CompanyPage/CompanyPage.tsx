import sign from "../../image/ceo_sign.png";
import chart from "../../image/org_chart.png";

export const CompanyPage = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-[60%] max-xl:w-[80%]">
          <div className="mt-20 max-sm:mt-10 max-lg:mt-15">
            <div className="w-full text-3xl mt-20 mb-10 font-extrabold max-md:text-2xl">
              인사말
            </div>
            <div className="items-center mt-10 justify-center h-auto w-full px-10 py-10 text-xl bg-gray-100 leading-loose rounded-3xl shadow-lg max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-base">
              <section>
                최근 전 세계적으로 에너지효율, 안전에 대한 관심이 커져 감에 따라,
                건축물 관리를 통하여 에너지 절감 및 안전사고 예방에 국가적으로도 큰 관심을 가지고 있습니다.
                <br />
                이러한 국가적 정책에 맞추어 건축물의 냉난방 설비 외 기타 기계설비 시설물에 대하여
                최첨단 계측 장비를 사용하여 건축물의 기계설비들을 주기적으로 진단 관리 함으로써
                문제가 발생되기 전에 설비 부품들을 교체 및 개선을 통하여 설비 사용 수명 연장,
                냉난방효율 향상, 에너지 효율 절감, 잠재적인 위험 조기 발굴을 통하여 설비의 안전과
                성능 확보에 노력하고 있습니다.
                <br />
                저희 주식회사 이에스아이 기계설비는 국가에서 인정받은 전문 기술 인력을 투입하여
                건축물의 기계설비를 사전점검 하고 성능점검에 대한 계획수립 후,
                현장방문 하여 첨단 계측 장비를 사용하여 효율적으로 기계설비를 유지관리 할 수 있도록
                체계적으로 관리하고 있습니다.
                <br />
                차별화된 기술과 인력으로 생활환경 개선, 에너지 절감을 실현하여 고객 모두 안전하고
                편안하게 생활하는데 이바지 할 것을 약속 드립니다.
                대단히 감사드립니다.
              </section>

              <section className="text-right -mt-5">
                <section style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '10px', marginBottom: '-30px' }}>
                  <section style={{ marginRight: '-10px', fontSize: '20px' }}>
                    대표이사 채수경
                  </section>
                  <section style={{ marginRight: '-50px' }}>
                    <img loading="lazy" src={sign} className="w-10/12 max-md:px-5 max-md:mt-10 max-md:max-w-full" />
                  </section>
                </section>
              </section>
            </div>
          </div>
          <div className="mt-10">
            <div className="w-full text-3xl mt-10 font-extrabold max-md:text-2xl">
              조직도
            </div>
            <div className="flex justify-center mt-8 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img src={chart} className="inset-0 w-10/12 max-md:w-full" />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
