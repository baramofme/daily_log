---  
date: 2020-02-08
categories:
  - vuepress
tags:
    - blog
    - vuepress
title: 블로그 사용 설명서 - 베이스 테마
author: 이지훈
location: Seoul
image: https://vuepress.vuejs.org/hero.png
---

## 테마 독립적 설정

### 사용중인 테마

vuepress-theme-modern-blog 를 npm 설치가 아닌 직접 소스 복붙후 해당 폴더를 테마 경로 지정으로 사용.

테마에 사용되는 컴포넌트 등을 직접 수정하고 싶어서 위와 같이 했다.

### Frontmatter metadata 설정

```yml
---
date: 2018-11-7
categories:
  - vuepress
tag:
  - frontmatter
  - vuepress
author: 작성자
location: 위치
description: 설명, 작성해도 이 테마에서는 사용되지 않는다.
image: https://static.qdskill.com/2018/05/vuepress.jpg
---
```

**NOTE** 내부 이미지 경로 사용하려면, `.vuepress/public/images` 와 같이 퍼블릭 경로에 넣을 것

```yml
image: /images/<YOUR_IMAGE_HERE>
```

## 테마 의존적 설정

### 페이지당 보여줄 게시글 숫자 늘리기

지금 사용 중인 테마는 vuepress 공식 블로그 플러그인을 기반으로 개발된 테마다. 게시글을 그 플러그인 관련 옵션을 건드리면 되지만,
이 테마에서는 해당 설정을 modify 할 수 있는 또다른 기능을 제공하고 있다.

```js
    // path: /blog/.vuepress/config.js
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
```

위 설정이 기본이고, 중간에 조작을 해서 반환함으로써 설정을 변경한다.

```js
    modifyBlogPluginOptions(blogPluginOptions) {
      blogPluginOptions["directories"].find(
        el => el.id == "post"
      ).pagination.lengthPerPage = 10;
      return blogPluginOptions;
    },
```

구체적인 설명은 [여기](https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions)에 있다.

### 테마 색 바꾸기

`blog/.vuepress/styles/palette.styl` 에서 테마 색을 바꿀 수 있다.

[Stylus](http://stylus-lang.com/) 변수를 볼 수 있는데, `$accentColor` 값을 `#6A82FB` 로 바꾸고
`$secondaryColor` 변수를 만들고 값을 `#FC5C7D` 로 바꿔보자.

:tada: 테마 색이 변한 것을 확인할 수 있다.

### 커스텀 스타일 추가

하단을 바꾸고 싶다면, 개발자 도구로 해당 영역을 찍어보자.

```html
<footer data-v-b86fc7ea="" class="footer">
 .... 내용물
</footer>
```

클래스가 footer 인 footer 요소의 색을 변경하고 싶다면, 이제  `.vuepress/styles/index.styl` 로 가보자.

그리고 아래처럼 요소.클래스를 선택자로 설정한 뒤, 바로 다음 줄에 css 속성을 적용하자.

```stylus
footer.footer
  background lighten(#000, 20%) !important
```

`!important` 는 강제로 속성의 우선순위를 정하는 것이다. 기본속성 중에 바꾸지 못하게 설정한 경우에 사용한다.

### 히어로 이미지 변경

이 테마는 [Unsplash Random API](https://source.unsplash.com/) 를 히어로 이미지 플레이스홀터로 사용한다,
내가 가진 이미지로 바꾸고 싶으면 themeConfig 에 아래와 같이 설정한다.

```js
themeConfig: {
    heroImage: "<내 새 이미지 url>",
    ...
```

## 댓글 기능 추가

[Disqus](https://disqus.com/)를 댓글 엔진으로 쓸 건데, 계정을 만들자, 그리고 디스커스 설정에서 `Short Website Name` 을 가져와서, 
`.vuepress/config.js` 내부에 있는 themeConfig 객체에 아래와 같이 넣어준다.

```js
themeConfig: {
    disqus: "<DISQUS WEBSITE SHORT NAME>",
    ...
```

이제 각각의 게시글에 댓글이 붙는 걸 확인할 수 있다.

## 구글 애널리틱스 추가

after deploying your Blog you will need to know some statistics about your website, how much visitors you have and where your website visits are coming from, etc...

to have these cool features we will incorporate Google Analytics, to get started you just need to create an account on Google analytics, then you need to create a property that is linked to your domain, after that you can get the `Tracking ID` of this property, it is usually composed of some numbers, prefixed with `UA-`
copy this value and add it to themeConfig this way:

```js
themeConfig: {
    googleAnalytics: "UA-************", // replace this value with your tracking ID
    ...
```

## 사이트맵 추가

Sitemaps 은 구글에게 인덱스 되기 위해서 웹사이트에 중요하다, [여기](https://support.google.com/webmasters/answer/156184?hl=en)
에서 사이트맵에 대해서 더 배울 수 있다.

우리는 블로그에서 자동 생성되는 사이트맵을 사용할 건데, 당신이 할 일은 오직 다음의 두 설정을 themeConfig 에 넣는 것이다.

```js
themeConfig: {
    sitemap: true,
    hostname: "https://www.yourdomain.com/",
    ...
```

호소트이름 값을 당신의 도메인으로 변경한다, 예를 들면 내 것은 [https://www.ahmadmostafa.com/](https://www.ahmadmostafa.com/)이다.

## 소셜 공유 기능 추가

It is good to allow your users to share your posts on their Social Media accounts, [Disqus](https://disqus.com/) already offers this feature, but it is good to make it more visible to your users so you encourage them to share your content, we will add these settings to themeConfig to enable social sharing feature

```js
themeConfig: {
    socialShare: true,
    socialShareNetworks: ["twitter", "facebook"],
    ...
```

you can add other networks to `socialShareNetworks` array.

now you can see a cool floating button on the right side of your posts that help your users sharing your content! :tada:

That's It! :tada:
go and add some cool posts! :wink:
