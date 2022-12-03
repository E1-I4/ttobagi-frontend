# [또바기도감] 제주 멸종위기 동물 도감

![또바기도감 노션 메인비주얼](https://user-images.githubusercontent.com/71865277/205436713-ff040556-fa2b-4536-8c0c-c780dcef38fc.jpg)


> 본 프로젝트는 2022년 11월 카카오 구름에서 주최하여 진행한 제 3회 Kakao 9rumthon 출품작입니다.


# ❶ **배경**

## 🦀 왜 ‘멸종위기 동물’에 초점을 두어 기획되었나요?

환경부가 2022년에 지정한 제주도의 멸종위기 야생동물은 무려 
<br /><br />
> 🦅 Ⅰ급 멸종위기 동물 **전국 49종 중 16종** <br />
> 🦎 Ⅱ급 멸종위기 동물 **전국 127종 중 72종** 에 달해요.

서식지를 잃고 서서히 지구를 떠나고 있는 이 동물들은, 사람들에게도 관심을 받지 못하고 잊혀지고 있답니다.
<br /><br />


> 🌏 **잊혀지는 동물들과 그 동물들을 아프게 하는 여러 환경 문제를 쉽고 재미있게 알려줌으로써 <br />
> 제주도의 멸종위기종, 더 나아가 환경 보호에 자연스럽게 관심을 가질 수 있다면 어떨까요?**

<br />
그래서 탄생된 저희의 서비스! 바로 또바기도감 이에요.

---

# ❷ **서비스 소개**

## 🦀 또바기도감은 어떤 서비스인가요? 
<br />

> 🚶 ‘또바기’란 ‘언제나 한결같이 꼭 그렇게’라는 뜻을 가진 제주도 방언으로, 
> <br /> **제주도의 멸종위기 동물들이 도감으로 남아 언제나 한결같이 꼭 그렇게 우리의 곁에 함께할 것**이라는 뜻을 담았어요.

> 👊 ‘또바기도감’은 제주도 멸종위기 동물을 위한 도감으로, **동물들의 실제 서식지에 직접 방문해 환경 문제 관련 미션을 수행하면 
> <br />동물 카드를 수집할 수 있는 참여형 게이미피케이션 서비스**예요.

<br />

## 🦀 서비스의 기능이 궁금해요.

또바기도감의 주요 기능은 크게 두가지예요.

1. 📖 **도감**
2. 🗺️ **서식지도**

### 🗺️ 서식지도

제주도 지도에서 서식지를 클릭해 동물의 실루엣으로 흥미로운 힌트를 얻고 해당 지역에 직접 방문해 보아요.

![%EB%85%B9%ED%99%94_2022_11_27_16_01_39_686_Trim_AdobeExpress](https://user-images.githubusercontent.com/71865277/205437831-698c1e81-c073-4f71-b2c1-2bbc371313f3.gif)


서식지에 도착하면 동물을 찾을 수 있어요! 환경오염으로 인해 아파하는 동물에게 도움을 주어 카드를 수집해 보아요.

![%EB%85%B9%ED%99%94_2022_11_27_16_05_25_499_Trim_Trim_Trim_AdobeExpress](https://user-images.githubusercontent.com/71865277/205437863-0400f736-c0a4-4bda-9ba1-661e58ec4ba8.gif)


### 📖 도감

수집한 동물들을 도감에서 다시 만나 보아요. 언제나 한결같이 꼭 그렇게 저희 곁에 머무를 거랍니다.

![%EB%85%B9%ED%99%94_2022_11_27_16_29_56_315_Trim_AdobeExpress](https://user-images.githubusercontent.com/71865277/205437870-3d8213ed-3f23-4b66-a69d-cb42365077a4.gif)


## 🦀 아키텍쳐는 어떻게 구성되어 있나요?

<img width="2119" alt="Slide 16_9 - 2" src="https://user-images.githubusercontent.com/71865277/205437928-058b6911-d709-4879-8253-86da531848c6.png">


<aside>
⚙ **안전하고 안정적인 배포를 위한 아키텍쳐 구성**

</aside>

- 직접 구입한 Domain(ttobagi.site) 연결과 SSL인증을 적용(프론트: [www.ttobagi.site](http://www.ttobagi.site), 백엔드: api.ttobagi.site)하여 안전한 웹서버를 구축했어요.
- 프론트는 **Cloud Front**와 **S3**를 이용해 정적 웹 호스팅으로 배포하였고, 백엔드는 **ELB**와 **EC2(t2.micro)**를 연결해 배포했어요.
- 특히 프론트는 Github Action을 이용해 자동 배포 환경을 구성했어요.

---

# ❸ 핵심 기술

## 🦀 프론트엔드에서 활용된 기술이 궁금해요.


<aside>
🔥 **쉽고 빠른 사용자 경험을 제공하는 Single Page Application**

</aside>

- 아래 기술을 사용해 React 프로젝트를 구현했어요.

<aside>
🗺️ **Kakao Map API에 여러 기능을 추가한 지도 구현**

</aside>

- 카카오맵 API를 사용해 지도 기능을 구현했어요.
- Geolocation을 활용해 사용자의 현재 위치를 표시했어요.
    - 다양한 브라우저를 지원하기 위해 SSL 인증서를 생성하여 https 환경으로 변경했어요.
- 다수의 마커를 생성하고, 마커 위에 마우스를 올려놓으면 이름과 주소가 보이도록 만들었어요.

<aside>
🎨 **Styled-Components를 사용한 컴포넌트별 스타일 적용**

</aside>

- 별도의 CSS 파일 없이 Styled-Components를 사용해 컴포넌트별로 스타일을 적용했어요.
- 컴포넌트 단위 스타일링을 통해 코드 재사용성을 높이고, 효과적인 UI 단위 테스트를 진행할 수 있어요.

<aside>
👤 **Kakao Login Api를 활용한 로그인 구현**

</aside>

- 카카오로부터 인가코드를 받고 백엔드에 넘겨주는 역할을 했어요.
- 백엔드에서 온 토큰을 확인하고 홈화면으로 리다이렉트 해주었어요.

<aside>
💡 **Axios 라이브러리를 활용한 HTTP 비동기 통신 라이브러리**

</aside>

- 요청 객체에 url이 존재하고 자동으로 JSON 데이터 형식으로 전환해주어 사용했어요.
- react hook 기반에서는 useEffect를 사용해 lifeCycle을 관리했어요.
- 사용자가 수집한 동물 도감을 전체 도감과 비교해 수집하지 않은 것은 색깔이 없는 이미지로 가져왔어요.

## 🦀 백엔드에서 활용된 기술이 궁금해요.

<aside>
🔥 **쉽고 빠르게 조회 · 추가 할 수 있는 동물 도감 API 구축**

</aside>

- 아래 기술을 사용해 REST API 서버를 설계 및 배포했어요.

<aside>
Python 기반의 Django REST API 프레임워크

</aside>

<aside>
**NGINX**
빠른 정적파일(이미지 등) 서빙 담당

</aside>

- 동물 도감을 쉽게 조회 및 추가할 수 있도록 모델 API를 설계했어요.

<aside>
🔒 **Kakao Social Login과 JWT를 활용한 안전한 로그인**

</aside>

- [JSON Web Token (JWT)](https://jwt.io/introduction)을 이용해 안전한 로그인 API를 구현했어요.
- 백엔드에서 카카오 로그인 API를 JWT와 연결하여 더욱 안전한 로그인 API를 설계했어요.


---

# + 앞으로의 계획

<br />

프론트엔드    

> 🙋 앞으로 프론트엔드에서는 이런 걸 구현해 볼 예정이에요.
    
    - JavaScript에서 TypeScript로 리팩토링을 진행할 예정이에요.
    - 보다 나은 사용자 경험을 위해 React Native를 활용하여 모바일 앱을 개발할 예정이에요.
    
<br />
    
백엔드
    

> 🙋 앞으로 백엔드에서는 이런 걸 구현해 볼 예정이에요.
    
    - 공공 데이터 포털의 오픈 API를 활용하여 제주도 멸종위기 동물을 조회해 도감에 추가해 갈 예정이에요.
    - 주변 상권 데이터를 조회하여 도감 지도와 연결해볼 예정이에요.
    - 모은 도감이나 동물 카드를 SNS에 공유할 수 있도록 API를 설계할 예정이에요.
    - 더욱 간편하고 안정적인 배포를 위해 Kubernetes를 도입해볼 예정이예요.
    
---

# ❺ 팀 소개

## 안녕하세요, 저희는 **또바기🦎**입니다!

> 또바기, 포기하지 않는다! 👊 <br />
> E가 1명, I가 4명… (그래서 원래 팀 이름이 E1I4였지만 읽기가 어려워 개명했어요😂)

<br />

![%EB%98%90%EB%B0%94%EA%B8%B0%EB%8F%84%EA%B0%90_%ED%8C%80%EC%86%8C%EA%B0%9C_2](https://user-images.githubusercontent.com/71865277/205436421-5e44fe03-74e1-4d05-9c60-9e740bacd254.png)


왼쪽부터 순서대로 또바기 팀원들을 소개해 드려요.

<table>
<tr>
    <td align="center"><a href="https://www.behance.net/gabinyun"><img width="180" alt="Group 427321978" src="https://user-images.githubusercontent.com/71865277/205436853-85f9f9ce-1707-4470-84f2-c236b67bb03d.png"
/><br /><sub><b>디자이너 : 윤가빈</b></sub></a></td>
    <td align="center"><a href="https://github.com/pitangland"><img width="180" alt="Group 427321946" src="https://user-images.githubusercontent.com/71865277/205436905-ed082c2f-1459-4f80-bd53-5b99728f3954.png">
<br /><sub><b>프론트엔드 : 김원표</b></sub></a></td>
    <td align="center"><a href="https://github.com/jangjia01234"><img width="180" alt="Group 427321947" src="https://user-images.githubusercontent.com/71865277/205436968-bb630e9e-52f8-4445-9536-52d73af4788f.png">
<br /><sub><b>프론트엔드 : 장지아 (팀장)</b></sub></a></td>
    <td align="center"><a href="https://github.com/echo724"><img width="180" alt="제주검독수리 카드 2차 수정" src="https://user-images.githubusercontent.com/71865277/205437006-e5dfe5c7-8fbc-4e53-bf9a-2f552b1c3c31.png">
<br /><sub><b>백엔드 : 조은찬</b></sub></a></td>
    <td align="center"><a href="https://github.com/shs6626"><img width="180" alt="Group 427321952" src="https://user-images.githubusercontent.com/71865277/205437042-80c8879a-da5f-4c96-989e-7546facf0399.png">
<br /><sub><b>기획 : 신홍석</b></sub></a></td>

