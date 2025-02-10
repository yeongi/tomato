// shallow copy > 얉은 복사

// const obj1 = {
//   name: "jang",
//   profile: {
//     email: "cbg5255@gmail.com",
//   },
// };

// console.log("obj1 원본 객체", obj1);

// const obj2 = {
//   ...obj1,
// };

// obj2.profile.email = "없어지지롱";

// console.log("obj2 수정 후 객체", obj1);

// deep copy > 깊은복사

// const user = {
//   name: "kang",
//   profile: {
//     number: "01012341234",
//   },
// };

// const copiedUser = JSON.parse(JSON.stringify(user));

// // 브라우저 API structureClone을 이용하는 경우
// const copiedUser2 = structuredClone(user);

// copiedUser.profile.number = null;
// copiedUser2.profile.number = "수정완료";

// console.log("user", user);
// console.log("copiedUser", copiedUser);
// console.log("copiedUser2", copiedUser2);

const deepClone = (value) => {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  // 추가적인 객체의 엣지 케이스
  // Date, Regex, Map, Set

  // [] , {} 둘다 객체이다. 그러므로 두가지의 처리를 같이 해줘야 한다.

  // 배열의 처리
  if (Array.isArray(value)) {
    // map 새로운 배열의 생성
    return value.map((item) => deepClone(item));
  }

  // 객체의 처리
  // map 새로운 배열의 생성
  const entries = Object.entries(value).map(([key, value]) => {
    return [key, deepClone(value)];
  });

  // map 새로운 배열을 객체로 변경
  return Object.fromEntries(entries);
};
