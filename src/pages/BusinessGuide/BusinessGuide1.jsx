import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";



const projectData = [
  { label: '사업명', value: '힐스테이트 고덕엘리스트' },
  { label: '대지위치', value: '경기도 평택시 고덕국제화계획지구 내 A-67BL' },
  { label: '주택형', value: '전용 84㎡ 타입 구성' },
  { label: '세대수', value: '총 403세대' },
  { label: '입지환경', value: '고덕국제화계획지구 중심 생활권' },
  { label: '교통환경', value: '광역 교통망과 삼성 평택캠퍼스 접근성이 우수한 입지' },
  { label: '생활인프라', value: '교육·상업·공원 등 생활 인프라를 가까이 누리는 주거환경' },
  { label: '브랜드', value: '힐스테이트 고덕엘리스트 브랜드 프리미엄 아파트' },
];

const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
    // { title: "공급안내", url: "/BusinessGuide/documents" }
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

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
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>

<Helmet>
  <title>힐스테이트 고덕엘리스트 | 평택 고덕국제화계획지구 사업안내</title>

  <meta
    name="description"
    content="힐스테이트 고덕엘리스트 사업안내. 경기도 평택시 고덕국제화계획지구 A31BL·A34BL·A35BL에 조성되는 총 2,122세대 브랜드 대단지의 사업개요, 입지환경, 생활 인프라와 주거 가치를 확인하세요."
  />

  <meta
    name="keywords"
    content="힐스테이트 고덕엘리스트, 평택 힐스테이트 고덕엘리스트, 고덕국제화계획지구 A31BL, 고덕국제화계획지구 A34BL, 고덕국제화계획지구 A35BL, 평택 고덕 아파트, 평택 아파트 분양, 고덕신도시 아파트, 힐스테이트 고덕엘리스트 사업안내"
  />

  <meta name="robots" content="index,follow" />

  <link
    rel="canonical"
    href="https://hillstategodeok-elisth.co.kr/BusinessGuide/intro"
  />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="힐스테이트 고덕엘리스트" />

  <meta
    property="og:title"
    content="힐스테이트 고덕엘리스트 | 평택 고덕국제화계획지구 사업안내"
  />

  <meta
    property="og:description"
    content="평택 고덕국제화계획지구 A31BL·A34BL·A35BL 힐스테이트 고덕엘리스트 사업안내. 총 2,122세대 규모의 브랜드 대단지 사업개요와 주거 프리미엄을 확인하세요."
  />

  <meta
    property="og:url"
    content="https://hillstategodeok-elisth.co.kr/BusinessGuide/intro"
  />

  <meta
    property="og:image"
    content="https://hillstategodeok-elisth.co.kr/img/og/business.jpg"
  />

  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="힐스테이트 고덕엘리스트 | 평택 고덕국제화계획지구 사업안내"
  />

  <meta
    name="twitter:description"
    content="힐스테이트 고덕엘리스트 사업개요와 브랜드 프리미엄 정보를 확인하세요."
  />

  <meta
    name="twitter:image"
    content="https://hillstategodeok-elisth.co.kr/img/og/business.jpg"
  />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "힐스테이트 고덕엘리스트 사업안내",
      url: "https://hillstategodeok-elisth.co.kr/BusinessGuide/intro",
      description:
        "평택 고덕국제화계획지구 A31BL·A34BL·A35BL 힐스테이트 고덕엘리스트 사업개요, 입지환경, 생활 인프라와 브랜드 프리미엄 정보를 제공합니다.",
      primaryImageOfPage: {
        "@type": "ImageObject",
        contentUrl: "https://hillstategodeok-elisth.co.kr/img/og/business.jpg",
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
            item: "https://hillstategodeok-elisth.co.kr/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "사업안내",
            item: "https://hillstategodeok-elisth.co.kr/BusinessGuide/intro",
          },
        ],
      },
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  힐스테이트 고덕엘리스트 - 사업안내
</h1>

<p className={styles.screenReaderOnly}>
  힐스테이트 고덕엘리스트는 경기도 평택시 고덕국제화계획지구 A31BL·A34BL·A35BL에 조성되는 브랜드 대단지 아파트입니다.
  A31BL 690세대, A34BL 679세대, A35BL 753세대로 총 2,122세대 규모로 계획되며,
  전용 58㎡와 84㎡ 타입으로 구성됩니다.
  고덕국제신도시의 생활 인프라와 삼성전자 평택캠퍼스 배후수요, 광역 교통망을 함께 누릴 수 있는 주거 단지입니다.
</p>

<div className={styles.textBox}>
  <div>평택 고덕국제화계획지구가 품은 대단지 주거 가치</div>
  <div>힐스테이트 고덕엘리스트, 브랜드 프리미엄을 완성합니다.</div>
</div>


<img className={styles.img3} src={page1} alt="힐스테이트 고덕엘리스트 사업개요 이미지"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
