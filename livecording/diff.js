const diff = (obj1, obj2) => {
  // 같은 참조이면 비교할 필요가 없다.
  if (obj1 === obj2) return {};

  // null undefined string number ... 속성값들이 원시값일 경우 그대로 리턴
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return {
      before: obj1,
      after: obj2,
    };
  }

  // 여기까지 오면 obj1, obj2가 배열이거나 객체라는 뜻이다.
  const diffs = {};

  // 두 객체의 key를 하나의 리스트로 만든다.
  // 삭제됐던 속성이나 추가됐단 속성을 모두 탐색할 수 있다.
  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

  for (const key of keys) {
    const valueA = obj1[key];
    const valueB = obj2[key];

    if (
      typeof valueA === "object" &&
      typeof valueB === "object" &&
      valueA !== null &&
      valueB !== null
    ) {
      // 키에 접근했는데 객체거나 배열이면 재귀호출을 통해 변경점을 다시 반환
      const nestedDiffs = diff(valueA, valueB);

      // 경로를 만들어준다.
      Object.entries(nestedDiffs).forEach(([nestedKey, value]) => {
        diffs[`${key}.${nestedKey}`] = value;
      });
      // 값이 다른 경우
    } else if (valueA !== valueB) {
      diffs[key] = { before: valueA, after: valueB };
    }
    // 값이 같은 경우는 생략
  }

  return diffs;
};

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 2, b: 3, d: 4 };

console.log(diff(obj1, obj2));
