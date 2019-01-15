# Pre Course Self-Assessment 2

## Guidelines

- Self-assessments 를 하면서 최근에 학습한 부분들을 얼마나 잘 이해했는지 판단할 수 있습니다.
- 모든 Self-assessments 는 완료후 반드시 pull request 를 해야 합니다(아래 가이드라인 참고).
- TIP: 요구되지 않는 테스트를 작성하는데 많은 시간을 들이지 마시기 바랍니다. 대신 Chrome Console 을 활용해서 빠르고 쉽게 작성한 코드를 테스트할 수 있습니다.


## Grading Outline

- [ ] getTeenager
- [ ] isAgeDiverse
- [ ] oldest
- [ ] tenThousandClub
- [ ] sumConsecutives
- [ ] unique

## Self-Grading Process

각각의 prompt 를 완료한 후, `README.md` 파일을 수정해서 grade 를 작성하시면 됩니다. 위의 Grading Outline 섹션의 [ ] 에 grade 를 스스로 매기시길 바랍니다. ([Grading Scale](/grading-scale.md) 를 참고)

## Code Check

`SpecRunner.html` 파일을 통해, 구현한 각각의 과제가 테스트를 통과하는지 확인할 수 있습니다. 테스트의 자세한 내용은 `__spec/spec.js` 파일을 통해 확인할 수 있습니다.

## Submitting Solutions

**VERY IMPORTANT: solutions 을 제출하기 전에, 모든 syntax errors 를 수정하시기 바랍니다.**

Solutions 은 [Pull Request](https://help.github.com/articles/using-pull-requests) 를 활용해서 제출합니다.

Follow these steps:

1. 자신이 fork 한 repository 에서 `New pull request` 를 클릭합니다.
2. Pull Request comment block 에 완료된 Grading Outline 을 복사해서 붙여넣습니다.
3. `Create pull request` 를 클릭합니다.

* * *

## A note about `require('../salesTeam.js');`

getTeenager, isAgeDiverse, oldest, tenThousandClub 이 네 문제의 가장 상단에 다음과 같은 코드를 찾을 수 있을 것입니다.
```javascript
var salesTeam = require('../salesTeam.js');
```
이는 salesTeam이라는 변수에 [salesTeam.js](/salesTeam.js) 의 내용을 불러온다는 내용으로, JavaScript 모듈화에 관련한 [CommonJS](http://www.commonjs.org/) 문법입니다. 이런 낯선 코드에 당황할 필요 없이, 여러분이 테스트할 때에는 직접 salesTeam.js 내용을 복사/붙여넣기해서 salesTeam 변수에 할당해서 테스트하거나, SpecRunner를 통해 통과 여부를 확인할 수 있습니다.

```javascript
var salesTeam = [
  {
    "name": {
      "first": "Bruce",
      "last": "Wayne"
    },
    "age": 26,
    "sales": "$2314"
  },
  {
    "name": {
      "first": "Alvaro",
      "last": "Angelos"
    },
    "age": 55,
    "sales": "$1668"
  }
  // 생략
];
```
만일 여러분이 node.js 환경을 알고 있고, 이에 익숙하다면 node 명령어를 이용해 테스트를 해볼 수도 있을 것입니다. 참고로, 이 Self Assessments에서는 node.js 환경에 대한 이해나 이를 이용한 해결은 점수에 전혀 포함되지 않습니다.
