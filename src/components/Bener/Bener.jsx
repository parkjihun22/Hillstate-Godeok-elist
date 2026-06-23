import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="힐스테이트 고덕엘리스트 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '힐스테이트 고덕엘리스트') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 고덕국제신도시에서 만나는 힐스테이트 고덕엘리스트의 새로운 주거 가치.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          힐스테이트 브랜드 프리미엄과 고덕국제신도시의 미래가치를 함께 누리는 주거 단지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          삼성 평택캠퍼스 배후수요와 교통·교육·생활 인프라를 품은 고덕 주거 선택지.
        </div>
      </>
    );
  } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 고덕국제신도시 A31BL·A34BL·A35BL 일원에 조성되는 힐스테이트 고덕엘리스트 사업 안내.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          현대건설 힐스테이트 브랜드 가치와 고덕신도시 중심 생활권을 담은 대단지 주거 프로젝트.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          청약 정보부터 모집공고, 세대 구성, 인테리어까지 한눈에 확인하세요.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          힐스테이트 고덕엘리스트
        </div>
      </>
    );
  } else if (text === '입지환경' || text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          고덕국제신도시의 교통, 교육, 상업, 공원 인프라를 가까이 누리는 입지 프리미엄.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          삼성전자 평택캠퍼스 배후수요와 고덕신도시 개발가치를 기대할 수 있는 미래형 주거 환경.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          쾌적한 단지 설계와 실용적인 평면 구성을 갖춘 힐스테이트 고덕엘리스트.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          일상 속 여유를 더하는 조경, 커뮤니티, 주거 편의 설계를 확인하세요.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          힐스테이트 고덕엘리스트, 고덕국제신도시의 새로운 주거 기준을 제안합니다.
        </div>
      </>
    );
  }
};
