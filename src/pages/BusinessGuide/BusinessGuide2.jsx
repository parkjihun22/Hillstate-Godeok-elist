import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/BusinessGuide/BusinessGuide2/calendar.jpg";
import Ready from "../../components/Ready/Ready"

const BusinessGuide2 = () => {
    const menuContents = [
      { title: "사업안내", url: "/BusinessGuide/intro" },
      { title: "분양일정", url: "/BusinessGuide/plan" },
      // { title: "공급안내", url: "/BusinessGuide/documents" }
    ];

    const [isScroll, setIsScroll] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false); // ✅ 기존 이미지 가시성 상태 유지
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }

            // ✅ 기존 이미지 로딩 로직도 유지 (하지만 Ready가 표시됨)
            if (window.scrollY > 200) {
                setIsImageVisible(true);
            } else {
                setIsImageVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>힐스테이트 고덕엘리스트 | 분양일정 안내</title>

  <meta
    name="description"
    content="힐스테이트 고덕엘리스트 분양일정 안내. 평택 고덕국제화계획지구 A31BL·A34BL·A35BL에 조성되는 총 2,122세대 브랜드 대단지의 특별공급, 일반공급, 당첨자 발표, 서류접수, 정당계약 등 주요 청약 일정을 확인하세요."
  />

  <meta
    name="keywords"
    content="힐스테이트 고덕엘리스트 분양일정, 평택 힐스테이트 고덕엘리스트 청약, 고덕국제화계획지구 A31BL, 고덕국제화계획지구 A34BL, 고덕국제화계획지구 A35BL, 평택 아파트 분양, 힐스테이트 고덕엘리스트 모집공고, 힐스테이트 고덕엘리스트 계약"
  />

  <link
    rel="canonical"
    href="https://hillstategodeok-elisth.co.kr/BusinessGuide/plan"
  />

  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="분양일정" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  힐스테이트 고덕엘리스트 - 분양일정
</h1>

<p className={styles.screenReaderOnly}>
  힐스테이트 고덕엘리스트 분양일정을 한눈에 확인하세요.
  평택 고덕국제화계획지구 A31BL·A34BL·A35BL에 조성되는 총 2,122세대 규모의 힐스테이트 고덕엘리스트는
  전용 58㎡와 84㎡ 타입으로 구성됩니다.
  특별공급, 일반공급 1순위·2순위 청약 접수,
  당첨자 발표, 서류접수, 정당계약 등 주요 청약 일정을 안내합니다.
</p>

<div className={styles.textBox}>
  <div>평택 고덕국제화계획지구의 대단지 주거 가치</div>
  <div>힐스테이트 고덕엘리스트 분양일정을 확인하세요.</div>
</div>

{/* <img
  className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`}
  src={page1}
  alt="힐스테이트 고덕엘리스트 분양일정 및 청약 일정 안내"
/> */}

<div className={styles.readyContainer}>
  {/* 필요한 경우 Ready 또는 분양 카운트 컴포넌트 삽입 */}
</div>
<Ready/>


            <Footer />
        </div>
    );
};

export default BusinessGuide2;
