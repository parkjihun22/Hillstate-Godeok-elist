// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>힐스테이트 고덕엘리스트</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>경기도 평택시 평택고덕국제화계획지구<br/> A31BL<br/> A34BL<br/> A35BL</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>A31BL 지하 1층~지상 33층 <br/> A34BL 지하 2층~지상 20층 <br/> A35BL 지하 1층~지상 20층</span>
        </li>
        <li>
          <strong>세대정보</strong>
          <span>A31BL 690세대 <br/> A34BL 679세대<br/>A35BL 753세대<br/> 총 2,122세대</span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>전용 58㎡, 84㎡ 타입 구성</span>
        </li>
        <li>
          <strong>입지환경</strong>
          <span>평택 고덕국제신도시 생활권과 삼성전자 평택캠퍼스 배후수요를 누리는 주거 입지</span>
        </li>
        <li>
          <strong>브랜드</strong>
          <span>현대건설 힐스테이트 브랜드 프리미엄</span>
        </li>
        <li>
          <strong>단지특징</strong>
          <span>3개 블록으로 조성되는<br/> 고덕국제신도시 대단지 주거 프로젝트</span>
        </li>
      </ul>
    ),
  },
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="힐스테이트 고덕엘리스트 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="힐스테이트 고덕엘리스트 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            고덕국제신도시 생활 인프라와 미래가치를 누리는<br />
            힐스테이트 고덕엘리스트 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "총 2,122세대 브랜드 대단지",
      desc:
        "A31BL·A34BL·A35BL 총 2,122세대 규모의 대단지<br/>고덕국제신도시를 대표하는 랜드마크 주거단지<br/>힐스테이트 브랜드 프리미엄을 누리는 주거 가치",
    },
    {
      img: slide2,
      title: "58㎡·84㎡ 실속형 주거 구성",
      desc:
        "실거주 선호도가 높은 59㎡·84㎡ 타입 구성<br/>효율적인 공간 활용과 실용적인 평면 설계<br/>신혼부부부터 가족 단위까지 만족하는 주거 공간",
    },
    {
      img: slide3,
      title: "삼성 평택캠퍼스 직주근접",
      desc:
        "세계 최대 규모 삼성전자 평택캠퍼스 배후 입지<br/>직주근접 프리미엄을 누리는 주거 환경<br/>풍부한 배후수요가 기대되는 고덕국제신도시",
    },
    {
      img: slide4,
      title: "광역 교통망의 중심",
      desc:
        "SRT·수도권 전철 이용이 편리한 교통 환경<br/>평택제천고속도로와 경부고속도로 접근 우수<br/>수도권과 전국을 연결하는 광역 교통 프리미엄",
    },
    {
      img: slide5,
      title: "교육·생활·자연을 품은 입지",
      desc:
        "학교와 학원가, 생활 인프라를 가까이 누리는 환경<br/>상업시설과 공원 이용이 편리한 신도시 생활권<br/>가족 중심 라이프를 완성하는 주거 입지",
    },
    {
      img: slide6,
      title: "고덕국제신도시 미래가치",
      desc:
        "지속적인 개발이 진행되는 고덕국제신도시 중심 입지<br/>산업·교통·주거 인프라 확충에 따른 미래가치 기대<br/>실거주와 투자가치를 함께 갖춘 힐스테이트 고덕엘리스트",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
