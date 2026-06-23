import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './ComplexGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import Ready from "../../components/Ready/Ready"



const ComplexGuide1 = () => {
	const menuContents = [
		{ title: "단지 배치도", url: "/ComplexGuide/intro" },
		{ title: "호수 배치도", url: "/ComplexGuide/detailintro" },
		{ title: "커뮤니티", url: "/ComplexGuide/community" },
	];
	const [isScroll, setIsScroll] = useState(false);
	const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	// 이미지가 로드되면 호출되는 함수
	const handleImageLoad = () => {
		setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
	};

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
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
  {/* 페이지별 메타 */}
  <title>힐스테이트 고덕엘리스트 | 단지배치도</title>

  <meta
    name="description"
    content="힐스테이트 고덕엘리스트 단지배치도 안내. 평택 고덕국제화계획지구 A31BL·A34BL·A35BL에 조성되는 총 2,122세대 브랜드 대단지의 단지 구성, 조경 특화, 커뮤니티 시설, 보행 동선 및 생활 환경을 확인하세요."
  />

  <meta
    name="keywords"
    content="힐스테이트 고덕엘리스트 단지배치도, 평택 힐스테이트 고덕엘리스트, 고덕국제화계획지구 A31BL, 고덕국제화계획지구 A34BL, 고덕국제화계획지구 A35BL, 평택 고덕 아파트, 힐스테이트 고덕엘리스트 커뮤니티, 힐스테이트 고덕엘리스트 단지안내"
  />

  <meta name="robots" content="index,follow" />

  <link
    rel="canonical"
    href="https://www.sujain-modellhouse.co.kr/ComplexGuide/intro"
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="힐스테이트 고덕엘리스트" />

  <meta
    property="og:title"
    content="힐스테이트 고덕엘리스트 | 단지배치도"
  />

  <meta
    property="og:description"
    content="평택 고덕국제화계획지구 A31BL·A34BL·A35BL 힐스테이트 고덕엘리스트 단지배치도와 커뮤니티, 조경 특화, 생활 동선을 확인하세요."
  />

  <meta
    property="og:url"
    content="https://www.sujain-modellhouse.co.kr/ComplexGuide/intro"
  />

  <meta
    property="og:image"
    content="https://www.sujain-modellhouse.co.kr/img/og/complex.jpg"
  />

  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="힐스테이트 고덕엘리스트 | 단지배치도"
  />

  <meta
    name="twitter:description"
    content="힐스테이트 고덕엘리스트 단지 구성, 조경 설계, 커뮤니티 및 생활 동선을 확인하세요."
  />

  <meta
    name="twitter:image"
    content="https://www.sujain-modellhouse.co.kr/img/og/complex.jpg"
  />

  <meta
    name="twitter:url"
    content="https://www.sujain-modellhouse.co.kr/ComplexGuide/intro"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",

      name: "힐스테이트 고덕엘리스트 - 단지배치도",

      url: "https://www.sujain-modellhouse.co.kr/ComplexGuide/intro",

      description:
        "힐스테이트 고덕엘리스트 단지배치도 페이지입니다. 평택 고덕국제화계획지구 A31BL·A34BL·A35BL에 조성되는 총 2,122세대 규모의 브랜드 대단지 단지 구성과 조경 특화, 커뮤니티 시설, 생활 동선을 확인할 수 있습니다.",

      primaryImageOfPage: {
        "@type": "ImageObject",
        contentUrl:
          "https://www.sujain-modellhouse.co.kr/img/og/complex.jpg",
        width: 1200,
        height: 630,
      },

      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "홈",
            item: "https://www.sujain-modellhouse.co.kr/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "단지배치도",
            item: "https://www.sujain-modellhouse.co.kr/ComplexGuide/intro",
          },
        ],
      },
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="단지안내" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  힐스테이트 고덕엘리스트 - 단지배치도
</h1>

<p className={styles.screenReaderOnly}>
  힐스테이트 고덕엘리스트 단지배치도 페이지입니다.
  평택 고덕국제화계획지구 A31BL·A34BL·A35BL에 조성되는 총 2,122세대 규모의
  힐스테이트 고덕엘리스트 단지 구성과 조경 특화 설계, 커뮤니티 시설,
  보행 동선 및 생활 환경을 시각적으로 확인할 수 있습니다.
</p>

<div className={styles.textBox}>
  <div>평택 고덕국제화계획지구가 제안하는 대단지 주거 공간</div>
  <div>힐스테이트 고덕엘리스트, 프리미엄 단지 가치를 완성합니다.</div>
</div>


{/* <img
  className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
  src={page1}
  alt="힐스테이트 고덕엘리스트 단지배치도 및 단지안내 이미지"
  onLoad={handleImageLoad}
/> */}

<Ready/>
			<div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 상기 단지배치도 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 날 수 있습니다
				</div>
				<div className={styles.notice}>
					※ 단지 내 조경 및 세부 식재계획, 시설물의 위치는 실제 시공시 현장 상황에 따라 변경될 수 있습니다
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default ComplexGuide1;
