import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  <title>힐스테이트 고덕엘리스트 | 프리미엄</title>

  <meta
    name="description"
    content="힐스테이트 고덕엘리스트 프리미엄 안내. 평택 고덕국제화계획지구 A31BL·A34BL·A35BL에 조성되는 총 2,122세대 브랜드 대단지의 입지 가치, 생활 인프라, 교통환경, 삼성전자 평택캠퍼스 배후수요와 미래가치를 확인하세요."
  />

  <meta
    name="keywords"
    content="힐스테이트 고덕엘리스트 프리미엄, 평택 힐스테이트 고덕엘리스트, 고덕국제화계획지구 A31BL, 고덕국제화계획지구 A34BL, 고덕국제화계획지구 A35BL, 평택 고덕 아파트, 삼성전자 평택캠퍼스, 고덕국제신도시 미래가치"
  />

  <link
    rel="canonical"
    href="https://www.sujain-modellhouse.co.kr/LocationEnvironment/primium"
  />

  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="힐스테이트 고덕엘리스트" />

  <meta
    property="og:title"
    content="힐스테이트 고덕엘리스트 | 프리미엄"
  />

  <meta
    property="og:description"
    content="평택 고덕국제화계획지구 A31BL·A34BL·A35BL 힐스테이트 고덕엘리스트의 입지 가치, 교통 환경, 생활 인프라와 미래가치를 확인하세요."
  />

  <meta
    property="og:url"
    content="https://www.sujain-modellhouse.co.kr/LocationEnvironment/primium"
  />

  <meta
    property="og:image"
    content="https://www.sujain-modellhouse.co.kr/img/og/location.jpg"
  />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="프리미엄" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  힐스테이트 고덕엘리스트 - 프리미엄
</h1>

<p className={styles.screenReaderOnly}>
  힐스테이트 고덕엘리스트만의 프리미엄을 확인하세요.
  평택 고덕국제화계획지구 A31BL·A34BL·A35BL에 조성되는 총 2,122세대 규모의
  힐스테이트 고덕엘리스트는 브랜드 가치와 생활 인프라, 교통환경,
  교육 여건, 삼성전자 평택캠퍼스 배후수요 및 미래가치를 함께 고려한
  프리미엄 주거 단지입니다.
</p>

<div className={styles.textBox}>
  <div>평택 고덕국제신도시의 미래가치 위에</div>
  <div>힐스테이트 고덕엘리스트의 프리미엄을 누리세요.</div>
</div>

<img
  src={page1}
  className={styles.image3}
  alt="힐스테이트 고덕엘리스트 프리미엄 및 평택 고덕국제신도시 미래가치 이미지"
/>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
