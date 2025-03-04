import LocationButton from "./Map/LocationButton";
import mapNavigasi from "/assets/navigasi/peta.png";
import dataPeta from "../../data/dataPeta.json";

function Map() {
  
  return (
    <>
      <div className="flex justify-center">
        <div className="w-fit h-fit relative">
          <img
            src={mapNavigasi}
            alt=""
            className="w-[400px] md:w-[590px] lg:w-[800px] drop-shadow-lg"
          />
          <ul>
            <li className="absolute  top-[21px] left-[192px] md:top-[30px] md:left-[281px] lg:top-[42px] lg:left-[381px]">
              <LocationButton
                title={dataPeta[0].title}
                detail={dataPeta[0].detail}
                popImage={dataPeta[0].image}
                icons={dataPeta[0].icons}
              />
            </li>
            <li className="absolute  top-[75px] left-[184px] md:top-[112px] md:left-[267px] lg:top-[151px] lg:left-[363px]">
              <LocationButton
                title={dataPeta[1].title}
                detail={dataPeta[1].detail}
                popImage={dataPeta[1].image}
                icons={dataPeta[1].icons}
              />
            </li>
            <li className="absolute top-[81px] left-[217px] md:top-[121px] md:left-[316px] lg:top-[163px] lg:left-[430px]">
              <LocationButton
                title={dataPeta[1].title}
                detail={dataPeta[1].detail}
                popImage={dataPeta[1].image}
                icons={dataPeta[1].icons}
              />
            </li>
            <li className="absolute  top-[80px] right-[91px] md:top-[118px] md:right-[130px] lg:top-[161px] lg:right-[177px]">
              <LocationButton
                title={dataPeta[2].title}
                detail={dataPeta[2].detail}
                popImage={dataPeta[2].image}
                icons={dataPeta[2].icons}
              />
            </li>
            <li className="absolute  top-[46px] left-[48px] md:top-[69px] md:left-[68px] lg:top-[94px] lg:left-[93px]">
              <LocationButton
                title={dataPeta[3].title}
                detail={dataPeta[3].detail}
                popImage={dataPeta[3].image}
                icons={dataPeta[3].icons}
              />
            </li>
            <li className="absolute top-[112px] left-[69px] md:top-[168px] md:left-[99px] lg:top-[226px] lg:left-[134px]">
              <LocationButton
                title={dataPeta[4].title}
                detail={dataPeta[4].detail}
                popImage={dataPeta[4].image}
                icons={dataPeta[4].icons}
              />
            </li>
            <li className="absolute top-[112px] left-[120px] md:top-[167px] md:left-[173px] lg:top-[226px] lg:left-[236px]">
              <LocationButton
                title={dataPeta[5].title}
                detail={dataPeta[5].detail}
                popImage={dataPeta[5].image}
                icons={dataPeta[5].icons}
              />
            </li>
            <li className="absolute  top-[119px] left-[168px] md:top-[176px] md:left-[245px] lg:top-[239px] lg:left-[332px]">
              <LocationButton
                title={dataPeta[6].title}
                detail={dataPeta[6].detail}
                popImage={dataPeta[6].image}
                icons={dataPeta[6].icons}
              />
            </li>
            <li className="absolute  bottom-[117px] left-[51px] md:bottom-[175px] md:left-[73px] lg:bottom-[243px] lg:left-[99px]">
              <LocationButton
                title={dataPeta[7].title}
                detail={dataPeta[7].detail}
                popImage={dataPeta[7].image}
                icons={dataPeta[7].icons}
              />
            </li>
            <li className="absolute left-[52px]  bottom-[73px] md:bottom-[110px] md:left-[73px] lg:bottom-[155px] lg:left-[99px]">
              <LocationButton
                title={dataPeta[8].title}
                detail={dataPeta[8].detail}
                popImage={dataPeta[8].image}
                icons={dataPeta[8].icons}
              />
            </li>
            <li className="absolute  bottom-[74px] left-[116px] md:bottom-[113px] md:left-[168px] lg:bottom-[158px] lg:left-[229px]">
              <LocationButton
                title={dataPeta[9].title}
                detail={dataPeta[9].detail}
                popImage={dataPeta[9].image}
                icons={dataPeta[9].icons}
              />
            </li>
            <li className="absolute  bottom-[80px] left-[158px] md:bottom-[120px] md:left-[230px] lg:bottom-[167px] lg:left-[312px]">
              <LocationButton
                title={dataPeta[10].title}
                detail={dataPeta[10].detail}
                popImage={dataPeta[10].image}
                icons={dataPeta[10].icons}
              />
            </li>
            <li className="absolute  bottom-[92px] left-[179px] md:bottom-[140px] md:left-[260px] lg:bottom-[194px] lg:left-[353px]">
              <LocationButton
                title={dataPeta[11].title}
                detail={dataPeta[11].detail}
                popImage={dataPeta[11].image}
                icons={dataPeta[11].icons}
              />
            </li>
            <li className="absolute  bottom-[101px] right-[135px] md:bottom-[152px] md:right-[196px] lg:bottom-[210px] lg:right-[265px]">
              <LocationButton
                title={dataPeta[10].title}
                detail={dataPeta[10].detail}
                popImage={dataPeta[10].image}
                icons={dataPeta[10].icons}
              />
            </li>
            <li className="absolute  bottom-[64px] right-[135px] md:bottom-[98px] md:right-[196px] lg:bottom-[137px] lg:right-[265px]">
              <LocationButton
                title={dataPeta[12].title}
                detail={dataPeta[12].detail}
                popImage={dataPeta[12].image}
                icons={dataPeta[12].icons}
              />
            </li>
            <li className="absolute bottom-[25px] right-[13px] md:bottom-[40px] md:right-[16px] lg:bottom-[59px] lg:right-[22px]">
              <LocationButton
                title={dataPeta[13].title}
                detail={dataPeta[13].detail}
                popImage={dataPeta[13].image}
                icons={dataPeta[13].icons}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Map;
