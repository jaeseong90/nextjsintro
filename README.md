# Next JS Intro
## 1. Start
- vscode 진행
- node 버전 낮으면 윈도우라면 최신버전 설치하면 덮어씀
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
- 404 페이지 커스텀 가능 기본 있음
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
### 5.1 module css
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
### 5.2 StyleJSX
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
---

## 6. _app.js
- nextjs 가 _app.js 먼저 확인
- 기본적인 형태
```
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```
- globals.css 는 _app.js 만 import 가능


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
