# Food Hunter

## 프로젝트 소개

Food Hunter 는 맛집 소개 사이트입니다. <br>
이미지 카드를 클릭하면 해당 맛집에 대한 정보를 알 수 있습니다. <br>

<br>

## 설치 및 실행 방법

```
$ cd food-hunter
$ npm install
$ npm run start
```

- 사용한 테크 스택은 아래와 같습니다.

  - 코어 : React, Next.js
  - 스타일링 : Muterial UI, styled-components

  <br>

## 데모 영상 - 과제

### 1. 이미지 카드 클릭 시, 디테일 모달로 띄우기

<img width="800" alt="video" src="https://user-images.githubusercontent.com/79828924/186097568-82ab9a32-65b7-4812-bdb9-25773acf868e.gif">

<br>

### 2. 없는 경로로 접근 시, 에러 페이지 보여 주고 5초 후 home 으로 이동

<img width="800" alt="video" src="https://user-images.githubusercontent.com/79828924/186098390-db9a4269-9b4c-4ef6-857c-76584bafce12.gif">

<br>
<br>

## 구현 요구 사항

> React 페이지 만들기

### 1-1. **API Server**

- json-server를 사용하고 첨부된 `db.json`을 이용합니다.
- 개발 피시에서 `json-server`를 실행하고 사용합니다. (9000 port)
  - `$ json-server -p 9000 db.json`
- API 명세는 다음과 같습니다.

  - 리스트 - GET /stores
  - 상세 - GET /stores/:id

  <br>

### 1-2. **화면**

맛집 리스트를 보여주고 리스트 중 하나의 아이템을 선택하면 팝업으로 상세 설명을 보여줍니다.

- 헤더 - 바디 - 푸터 형식으로 표현
- STORE 리스트는 정사각형 이미지 그리드로 표현 (REST API 사용)
- 하나의 아이템을 선택하면 팝업을 띄우고 맛집 이름과 사진, 설명, 홈페이지 바로가기(url이 있을 경우)를 표현
- 정의하지 않은 url로 접근시 에러 페이지를 보여주고 5초 후 메인 페이지로 이동

<br>

### 결과 샘플

[커먼그라운드 eat 화면](https://www.common-ground.co.kr/eat.html)을 참고하세요.
