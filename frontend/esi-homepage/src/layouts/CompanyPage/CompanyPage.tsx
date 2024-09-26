import gear from "../../image/gears.jpg";

export const CompanyPage = () => {
  return (
    <>
      {/* <div className="flex flex-col ml-80 mr-80 max-md:ml-14 max-md:mr-14 max-lg:mr-20 max-lg:ml-20 max-xl:ml-30 max-xl:mr-30 max-2xl:ml-40 max-2xl:mr-40"> */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-[60%] max-xl:w-[80%]">
          <div className="mt-20 max-sm:mt-10 max-lg:mt-15">
            <div className="w-full text-3xl mt-20 mb-10 font-extrabold max-md:max-w-full">
              인사말
            </div>
            <div className="items-center mt-10 justify-center h-1000 w-100 w-full px-10 py-8 text-xl bg-blue-800 bg-opacity-10 leading-loose rounded-3xl">
              <section>
                {/* 안녕하십니까. ESI기계설비입니다.
              <br />
              우리는 고객과 건물의 안전을 최우선으로 생각하며, 정직과 신뢰를
              바탕으로 유지관리 점검 및 성능 점검업을 하고 있습니다. 현재(2024년
              기준) 경기도 고양시 본사와 경기도 안양 지사, 서울 관악 지사를 두고
              있으며, 50개의 건물의 안전을 책임지고 있습니다.
              <br />
              수많은 경험을 토대로 탄탄한 기술력과 노하우를 가지고 있는 만큼
              어디서든 안전 하실 수 있도록 ESI 기계설비가 함께 하겠습니다. */}
                안녕하십니까.
                <br />
                저희 ESI기계설비는 건축물 기계설비 성능점검 및 유지관리점검
                서비스를 제공하는 전문 기업으로서, 항상 안전하고 효율적인 시설
                운영을 위해 최선을 다하고 있습니다.
                <br />
                건축물은 오랜 사용과 함께 정기적인 점검과 유지보수가 필수적입니다.
                우리는 최신 기술과 전문 지식을 바탕으로 고객의 요구에 부응하며,
                안전하고 효율적인 건축물 운영을 위해 최상의 서비스를 제공합니다.
                <br />
                고객 여러분께서는 우리의 전문가들이 준비한 철저한 점검과
                유지보수로 인해 안심하실 수 있습니다. 우리는 항상 최선을 다하고
                고객의 만족을 위해 노력할 것을 약속드립니다.
                <br />
                더 나은 건축물 관리를 위해 언제든지 저희 ESI기계설비에게 연락
                주시면 성심 성의껏 도와드리겠습니다.
                <br />
                감사합니다.
              </section>
              <section className="text-right">대표이사 채수경</section>
            </div>
          </div>

          <div className="mt-10">
            <div className="w-full text-3xl mt-10 font-extrabold max-md:max-w-full">
              조직도
            </div>

            <div className="justify-center mt-8 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img loading="lazy" src={gear} className="inset-0" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
