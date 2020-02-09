---
date: 2020-02-09
layout: post
title: 블로그 설명서 - 커스텀 컴포넌트
author: 누군가
categories:
  - vuepress
tags:
  - custom-component
location: Seoul
image: https://www.mathjax.org/badge/mj-logo.svg
---

# 커스텀 컴포넌트

## 테이블

<my-component/>

### 테이블 컴포넌트 코드

The code for table component is listed below
```vue
<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
     />
  </div>
</template>

<script>
import Styles from './Styles'
export default {
  name: 'my-component',
  // add to component
  data(){
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'YYYY-MM-DD',
          dateOutputFormat: 'MMM Do YY',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, createdAt: '201-10-31:9: 35 am',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
    };
  },
};
</script>
```

패키지 css 는 컴포넌트 내부에서 임포트 될 수 없기 때문에 또다른 컴포넌트가 필요하다.

```js
<script>
import "vue-good-table/dist/vue-good-table.css";

export default {
  name: "Styles",
};
</script>

<style>
</style>
```

## 타임라인

An example timeline of the courses I took

<sample-timeline/>

Nice timeline :rocket:


## 퀴즈

The way this is implemented requires the definition of `json` files containing a certain format.

Such as and requires the component to manually import the json file of interest (may be revised later)

```json
{
  "questions": [
     {
        "text": "Who is the Batman",
        "responses": [
           {
              "text": "Laughing Bat"
           },
           {
              "text": "Bruce Wayne",
              "correct": true
           },
           {
              "text": "Dick Grayson"
           },
           {
              "text": "None of the above"
           }
        ]
     },
     {
        "text": "\"Yahoo\", \"Infoseek\" and \"Lycos\" are _________?",
        "responses": [
           {
              "text": "Browsers "
           },
           {
              "text": "Search Engines",
              "correct": true
           },
           {
              "text": "News Group"
           },
           {
              "text": "None of the above"
           }
        ]
     }
  ]
}
```

<Quiz v-bind:quizNum=2 />

## Details

Styled details and summary html elements.

<Details title="This is a title" content="This is the details html element" />

```vue
<Details title="This is a title" content="This is the details html element" />
```
## Comparsion


What is going on?
```js
<pros-cons
  intro="There are a couple of things we need to cover:"
  :good="[
    'Documentation Theme Based on Vue.',
    'Use of markdown-it plugins.',
    'Static Site Generator.'
  ]"
  :bad="[
    'Vuepress is not very stable yet',
    'Can be complex to configure',
  ]"
/>
```
<pros-cons
  intro="There are a couple of things we need to cover:"
  :good="[
    'Documentation Theme Based on Vue.',
    'Use of markdown-it plugins.',
    'Static Site Generator.'
  ]"
  :bad="[
    'Vuepress is not very stable yet',
    'Can be complex to configure',
  ]"
/>

## Admonition Task List

Tasks can be made using

```
- [ ] incomplete
- [x] complete
```

!!! danger Major Backlog
The tasks listed below are expected to be done by the end of the term ENGR 004, haha?.
- [ ] cool [firebase Vue Dapp](https://medium.com/@sebinatx/building-an-ethereum-firebase-user-profile-dapp-part-2-226bcc11ae62, ), typescript
- [x] Soldiity contracts repo for games, explaining how to use then and more. Also, use solcdoc to make markdoown files and a script for latex/vuepress to include the source?
- [ ] Update the Blockchain notes repo.
- [x] When making the solidity contracts use boostnote minus the admonitions, but write the code in either js or solidity and use [Pandoc Markdown Code Blocks in LaTeX](http://weibeld.net/markdown/pandoc_code_blocks.html) with a custom pandoc template. Idk, don't really care about documenting smart contracts.
- [x] update python script to probably with jinja based format and maybe latex output.
- [ ] [Building a chat bot with Nest.js and Dialogflow](https://pusher.com/tutorials/chat-bot-nestjs), extend this app. and look at [How to Build a Vue.js Chat App with ChatEngine | PubNub](https://www.pubnub.com/tutorials/chatengine/vuejs/chat-app/)
- [ ] Dash application to track ethereum stats and hashgraph
- [x] Update the Bchain application, Vue-Dapp and finish a basic IPFS app using a box.
- [ ] Ability to upload sites to ipfs and look into cloudiary
- [x] Build a basic scrappy bot for reddit, host on scrappy hub and maybe even send data to apis. Used Rss feeds instead.
- [ ] Consider using [GitHub - thomasreinecke/git-playbook: GIT Playbook is a documentation framework that allows you to create Documentation for your project using Markdown and GH-Pages rapidly](https://github.com/thomasreinecke/git-playbook) as a good final repo for all of my documentation, particularly when it comes to searching for things.
!!!

## Build-in admonitions Middle badge

```
!!! <admonition type> <Admonition title>
Admonition content
!!!
```

```
!!! note Testing Notes
Good Note
!!!
```

!!! note Testing Notes
Good Note
!!!

```
!!! abstract Course Outline
This is an abstract
!!!
```

!!! abstract Course Outline
This is an abstract
!!!

```
!!! info Information
Info icon
!!!
```

!!! info Information
Info icon
!!!

```
!!! tip Cool
This is a tip.
!!!
```

!!! tip Cool
This is a tip.
!!!

```
!!! success SUCCESS Thing
This is a success box
!!!
```

!!! success SUCCESS Thing
This is a success box
!!!

!!! question Cool Question
I have questions
!!!

```
!!! warning A good warning
Example of a warning
!!!
```

!!! warning A good warning
Example of a warning
!!!

```
!!! failure I failed
Fail in life.
!!!
```

!!! failure I failed
Fail in life.
!!!

```
!!! danger More danger
DANGEROUS
!!!
```

!!! danger More danger
DANGEROUS
!!!

```
!!! bug Software Bug
I love bugs
!!!
```
!!! bug Software Bug
I love bugs
!!!

```
!!! example Example 1.1
$$x^2=6.5*5$$
!!!
```
!!! example Example 1.1
$$x^2=6.5*5$$
!!!

```
!!! quote Qutation
Quote 1.1
!!!
```
!!! quote Qutation
Quote 1.1
!!!