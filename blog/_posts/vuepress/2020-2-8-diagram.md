---
date: 2020-02-08
layout: post
author: 이지훈
categories:
  - vuepress
tags:
    - mermaid
    - plantuml
    - vuepress
title: 블로그 사용 설명서 - 다이어그램
location: Seoul
image: https://mermaid-js.github.io/mermaid/img/header.png
---

## Mermaid

머메이드로 다이어그램 그릴 수 있다. 머메이드 커스텀 컴포넌트 내부에 머메이드.js 가 제공하는 문법을 사용하면 된다.

```
<mermaid>
graph TD
  A[실베스터] -->|돈 갈취| B(쇼핑하러 가기)
  B --> C{생각 좀}
  C -->|하나| D[노트북]
  C -->|둘| E[아이폰]
  C -->|셋| F[자동차]
  C -->|넷| F[맥북]
</mermaid>
```

<mermaid>
graph TD
  A[실베스터] -->|돈 갈취| B(쇼핑하러 가기)
  B --> C{생각 좀}
  C -->|하나| D[노트북]
  C -->|둘| E[아이폰]
  C -->|셋| F[자동차]
  C -->|넷| F[맥북]
</mermaid>


```js
sequenceDiagram
    앨리스->>밥: 안녕 밥, 어찌살아?
    alt 아파
        밥->>앨리스: 안 좋네 :(
    else 어 좋아
        밥->>앨리스: 오 생기가 도네
    end
    opt 추가 반응
        밥->>앨리스: 물어봐줘 고마워
    end
```

<mermaid>
sequenceDiagram
    앨리스->>밥: 안녕 밥, 어찌살아?
    alt 아파
        밥->>앨리스: 안 좋네 :(
    else 어 좋아
        밥->>앨리스: 오 생기가 도네
    end
    opt 추가 반응
        밥->>앨리스: 물어봐줘 고마워
    end
</mermaid>

```js
gantt
section 영역
완료됨        :done,    des1, 2020-01-06,2020-01-08
활성중        :active,  des2, 2020-01-07, 3d
병렬 1   :         des3, after des1, 1d
병렬 2   :         des4, after des1, 1d
병렬 3   :         des5, after des3, 1d
병렬 4   :         des6, after des4, 1d
```
<mermaid>
gantt
section 영역
완료됨        :done,    des1, 2020-01-06,2020-01-08
활성중        :active,  des2, 2020-01-07, 3d
병렬 1   :         des3, after des1, 1d
병렬 2   :         des4, after des1, 1d
병렬 3   :         des5, after des3, 1d
병렬 4   :         des6, after des4, 1d
</mermaid>


### Mermaid 8.4.3

아래 다이어그램을 위해서는 8.4.3 버전 이상의 머메이드.js 가 필요함.

```
stateDiagram
  [*] --> Still
  Still --> [*]
  Still --> Moving
  Moving --> Still
  Moving --> Crash
  Crash --> [*]
```

<mermaid>
stateDiagram
  [*] --> Still
  Still --> [*]
  Still --> Moving
  Moving --> Still
  Moving --> Crash
  Crash --> [*]
</mermaid>

---

## PlantUml

플랜트UML 은 기능이 많다. 그런데 복잡하다.

```js
@startuml
밥 -> 앨리스 : 안녕
@enduml
```

@startuml
밥 -> 앨리스 : 안녕
@enduml

<br />

@startuml
@startmindmap
caption 캡션
title 마인드맵 제목

* <&flag>데비안
** <&globe>우분투
*** 리눅스 민트
*** 쿠분투
*** 루분투
*** KDE 네온
** <&graph>LMDE
** <&pulse>SolydXK
** <&people>스팀OS
** <&star>Raspbian with a very long name
*** <s>Raspmbc</s> => OSMC
*** <s>Raspyfi</s> => Volumio

header
헤더명
endheader

center footer 푸터명

legend right
  짧은
  레전드
endlegend
@endmindmap
@enduml

```js
@startuml
node in as "input"
node p as "Pre-processing"
node fm as "Feature Mining"
node fs as "Feature Selection"
node fr as "Feature Reduction"
node m as "Modelling"
node a as "Accepted Results?"
node pp as "Post-processing"
node o as "Output"

in -> p
p ..> fm
fm ..> fs
fs ..> fr
fr ..> m
m ..> a
a ..> fm : no
a -> pp : yes
pp -> o
@enduml
```

@startuml
  node in as "input"
  node p as "Pre-processing"
  node fm as "Feature Mining"
  node fs as "Feature Selection"
  node fr as "Feature Reduction"
  node m as "Modelling"
  node a as "Accepted Results?"
  node pp as "Post-processing"
  node o as "Output"

  in -> p
  p ..> fm
  fm ..> fs
  fs ..> fr
  fr ..> m
  m ..> a
  a ..> fm : no
  a -> pp : yes
  pp -> o
@enduml

```js
@startuml
  |필요 단계|
  :"사정 시작";
  |#AntiqueWhite|문서화|
  :Git 저장소/Overleaf 생성;
  :질문 복사;
  |#LightBlue|깃|
  :초기 베어본 커밋;
  |필요 단계|
  :"질문 답변";
  :"과제 제출";
  |깃|
  :"지역 저장소 업데이트";
  :"CENG4B 노트 업데이트;
  stop
@enduml
```

@startuml
  |필요 단계|
  :"사정 시작";
  |#AntiqueWhite|문서화|
  :Git 저장소/Overleaf 생성;
  :질문 복사;
  |#LightBlue|깃|
  :초기 베어본 커밋;
  |필요 단계|
  :"질문 답변";
  :"과제 제출";
  |깃|
  :"지역 저장소 업데이트";
  :"CENG4B 노트 업데이트;
  stop
@enduml

```js
  @startuml
 (*) --> [파일 시스템 ] "input.json "
  note left
  1. Read Entire File into memory
  end note
  -->[가용 메모리]"JSON data loaded in memory"
  note left
  2. Process file
  in memory.
  end note
  note right
  When loading a file into
  memory to be parsed as
  JSON or CSV, we’re limited
  by the max string size
  in Node.js: around 536 MB
  as of Node v8
  end note
  --> [File System] "output.json"
  note left
  3. Write transform data back into system
  end note
  --> (*)
  @enduml
```

@startuml
 (*) --> [파일 시스템 ] "input.json "
  note left
  1. 전체 파일을 메모리로 읽기
  end note
  -->[가용 메모리]"JSON 자료가 메모리에 적재됨"
  note left
  2. 메모리에서
  파일 처리.
  end note
  note right
  When loading a file into
  memory to be parsed as
  JSON or CSV, we’re limited
  by the max string size
  in Node.js: around 536 MB
  as of Node v8
  end note
  --> [파일 시스템] "output.json"
  note left
  3. Write transform data back into system
  end note
  --> (*)
@enduml


### Solidity Diagraph
@startuml
digraph foo {
  node [style=rounded]
  node1 [shape=box]
  node2 [fillcolor=yellow, style="rounded,filled", shape=diamond]
  node3 [shape=record, label="{ ㄱ | ㄴ | ㄷ }"]

  node1 -> node2 -> node3
}
@enduml

```js
@startuml
strict digraph cool {
  exists [color=blue]
  인증 [color=blue]
  필수
  생성
  사용자생성됨
  파괴
  사용자파괴됨
  가져오기 [color=blue]
  인증 -> 필수
  생성 -> 사용자생성됨
  파괴 -> 필수
  파괴 -> 사용자파괴됨
  가져오기 -> 필수
}
@enduml
```

@startuml
strict digraph cool {
  exists [color=blue]
  인증 [color=blue]
  필수
  생성
  사용자생성됨
  파괴
  사용자파괴됨
  가져오기 [color=blue]
  인증 -> 필수
  생성 -> 사용자생성됨
  파괴 -> 필수
  파괴 -> 사용자파괴됨
  가져오기 -> 필수
}
@enduml

### 참조

- [Mermaid](https://github.com/knsv/mermaid)
- [KaTeX](https://github.com/Khan/KaTeX)
