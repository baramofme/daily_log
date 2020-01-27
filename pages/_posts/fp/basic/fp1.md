---
title: 01. 함수형 자바스크립트 기본기
layout: post
categories:
  - javascript
  - functional
slug: 01-함수형-자바스크립트-기본기
---

## 일급 함수

- 값으로 다뤄질 수 있다.
- 인자의 값으로 넘길 수 있다.

## 고차 함수

- 인자의 값으로 함수를 받는 함수

### 함수를 인자로 받아서 실행하는 함수

- apply1
- times

```js
const apply1 = f => f(1);
const add2 = a => a + 2;
log(apply1(add2));
log(apply1(a => a - 1));

var times = (f, n) => {
  let i = -1;
  while (++i < n) f(i);
};

times(log, 3);

times(a => log(a + 10), 3);
```

<console :initScript="sc1"/>

## 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수)

- addMaker

```js
const addMaker = a => b => a + b;
const add10 = addMaker(10);
log(add10(5));
log(add10(10));
```

<console :initScript="sc2" />

<script>
import ConsoleBox from "@/components/ConsoleBox.vue";
import InitScript from "@/components/InitScript.js";

export default {
  components: {
    "console": ConsoleBox
  },
  data(){
    return { 
      sc1: [

new InitScript(`var log = console.log; //
var apply1 = f => f(1); //
var add2 = a => a + 2; //
var times = (f, n) => {
  let i = -1;
  while (++i < n) f(i);
};`, true),
      ],
      sc2: [
new InitScript(
  `var addMaker = a => b => a + b; //
  var add10 = addMaker(10);`, true),
  ]
  }
  },
};
</script>
