function findMinsu() {
  console.log("찾았다 민수");
  debugger;
}

function goToTheCave() {
  findMinsu();
}

function becomeAPrince() {
  goToTheCave();
}

function findAFriend() {
  // ¯\_(ツ)_/¯
}

function 술래잡기_시작() {
  const friends = [];
  while (friends.length < 2) {
    friends.push(findAFriend());
  }
  becomeAPrince();
}

console.log(술래잡기_시작());
