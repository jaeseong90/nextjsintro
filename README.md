# Next JS Intro
## 1. Start
- vscode 진행
### 1.1 확장설치
- 개인적으로 사용하던것들 몇개 씀 / 재설치하면 이것만 깔자..
- colorize
- auto rename tag
- eslint
- korea language pack
- liveserver
- restclient
- highlightmatching tag
- path autoclmplete
- powershell
- prettier - codeformatter
- visual studio intellicode
- vscode-styled-components
- styled-jsx Language server
- graphql, prisma 는 사용할때 깔자 

### 1.2 node 
- 버전 낮으면 윈도우라면 최신버전 설치하면 덮어씀
- npm 도 버전낮으면 글로벌로 다시 설치해주자
- nextjs 프로젝트 생성
``` 생성
npx create-next-app@latest
```
---
## 2. Pages
- index는 홈
- pages 폴더에 .js 파일 url 로 호출됨 ( react 에서랑 다르게 routeDom 이 필요없네)
- component 이름과 js파일명 달라도 관계없음
- export default 로 export 해야함
- 404 페이지 커스텀 가능 기본 있음(404.js 루트에 만들면 해당 페이지)
---
## 3. Render
- cf. noscript 자바스크립트 비활성화 시 보여주는 메시지
- react 는 client side render
- next html 소스코드로 가지고 있어서 noscript 일 경우에도 화면이 보임 preRender 함
---
## 4. Routing 
- a 태그로 링크하면 안됨 nextjs 에서 제공하는 link태그 사용 / 경고메시지 나옴
---
## 5. Style
### 5.1. module css
 name.module.css 파일 생성
```module.css
.active{
    color:#c01
}
```
js파일
```
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href={'/'}>
        <a className={router.pathname === '/' ? styles.active : ''}>Home</a>
      </Link>
    </nav>
  );
}

```      
### 5.2. StyleJSX
- NEXTJS고유 방법
- stylejsx 사용 시 고유 id값으로 클래스명 충돌없이 사용 가능 
- Global style global prop 추가하면 글로벌됨

```
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href={'/about'}>
        <a className={router.pathname === '/about' ? 'active' : ''}>about</a>
      </Link>
      <style jsx global>{`
        nav {
          display: flex;
          flex-direction: column;
        }
        .active {
          color: yellow;
        }
        a {
          color: white;
        }
      `}</style>
    </nav>
  );
}
```
 - rewrites
 const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
---

## 6. _app.js
- nextjs 는 하나의 거대한 페이지가 아니라 각각의 페이지라고 생각하고 해야함
- nextjs 가 _app.js 먼저 확인
- 기본적인 형태
```
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```
- globals.css 는 _app.js 만 import 가능

## 7. React
- rehydration/ next pre-generation 하여 html 을 사전생성

## 8. Patterns
 - 일반적으로 _app.js 공통적인 많은 것들이 들어 있어서 Layout 따로 만들어서 진행한다.

### 9. img
 - public 경로 img 가져 오기 
 ```
 <img src="/vercel.svg" />
 ```

## 10. Redirect and Rewrite (next.config.js)
 - nextjs 설정파일 
 - key 값을 바로 사용하면 노출되니 rewrite 로 숨김처리
 - 수정 시 서버 재시작 필요
### 10.1. redirect 
- 고정값고 가능하고 path로 캐치도 가능하며, * 전체 가능
```
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/form',
        permanent: false,
      },
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
```
### 10.2. rewrite
- rewrite 를 통한 key 와 요청 mask 처리
```
/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;

```
### env
- env 사용은 .env 루트에 파일 생성하고 key=value 형태로 문자열로 받아와서 사용할 수 있음
- ex) process.env.API_KEY
```
.env
API_KEY=abcd

test.js
const API_KEY = process.env.API_KEY;
```

## 11. getServerSideProps (이름고정) 서버사이드렌더링
- 프레임워크 없이 reactjs 사용하면 클라이언트 사이드 렌더링으로 초기에 로딩이 오래걸리고 하얀 화면으로 대기
- nextjs는 기본적으로 미리 그려진 html 을 보여줘서 더 나은 사용자 경험 제공
- 백엔드에서 실행하는 소스코드
- _app.js 의 pageProps 객체에 넣어서 렌더링

## 12. Dynamic Routes(주소에 변수)
- 기본적으로 pages 디렉토리에 폴더를 만들고 js 파일만들면 그게 url 경로가됨
- [변수명].js 로 만들면 id를 받을 수있음 
- ex) pages/movies/[id].js /movies/123 
- id값은 router 의 query 를 통해서 문자열값으로 추출 가능
```
import { useRouter } from 'next/router';

export default function Detaile() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h4>{router.query.id || 'Loading..'}</h4>
    </div>
  );
}

```
### 12.1. Catch All
- [...변수명].js 로 만들면 array 로 query 전달 가능
- seo 최적화 하고 싶다면 detaile 페이지도 서버사이드렌더링을 통해서 전달하도록 한다.
- query 로 받아서 props 를 사용하면 serverside 렌더링이 아니라서 오류
- ctx로 받아서 parms를 서버사이드 렌더링해서 넘겨서 pre-render 가능

## ctx
- context 확인
```
export function getServerSideProps(ctx) {
  console.log(ctx);
  return {
    props: {},
  };
}
```

## github 배포
아름다운 배포 방법이 있겠지만 gitgub pages 에 빠르게 배포해봄. 
- yarn add gh-pages --dev 로 깃헙 페이지 배포 패키지 설치
- 깃허브 배포는 정적 페이지니까 getServerSideProps 소스코드 모두 수정 
- prefix 추가
- .env 안올라가서 key 오픈
- next build (.next) 에 빌드 
- next export (out) 에 정적 페이지 생성
- yarn gh-pages -d out 으로 pg-pages 에 배포 
- github pages 에 gh-pages 브랜치 root 로 사용
- next.config 동작 안해서 rewrites 와 redirects 모두 사용 안하고 수정
- api 호출 노출되도록 변경 
- 빈 .nojekyll 파일 gh-pages 에 있는지 확인 없으면 생성해줌

---------------
---------------
---------------


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
