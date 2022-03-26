function check(str) {
  for (let i of str) {
    if (i !== "+") {
      return false;
    }
  }
  return true;
}

function method1(str, k) {
  let substr = Array(k + 1).join("-");
  if (str.indexOf(substr) != -1) {
    str = str.replace(substr, Array(k + 1).join("+"));
    return { str: str, status: true };
  }
  return { str: str, status: false };
}

function method2(str, k) {
  let index = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-") {
      index = i;
      break;
    }
  }

  if (index + k <= str.length) {
    for (let j = index; j < index + k; j++) {
      let x = str.split("");
      x[j] = x[j] === "+" ? "-" : "+";
      str = x.join("");
    }
    return { str: str, status: true };
  } else {
    return { str: str, status: false };
  }
}

function burger(str, k) {
  let counter = 0;
  for (let i = 0; i < k; i++) {
    if (method1(str, k).status) {
      str = method1(str, k).str;
      counter++;
    }
    if (check(str)) {
      return counter;
    }
  }
  for (let i = 0; i < k; i++) {
    if (method2(str, k).status) {
      str = method2(str, k).str;
      counter++;
    }
    if (method1(str, k).status) {
      str = method1(str, k).str;
      counter++;
    }
    if (check(str)) {
      return counter;
    }
  }
  return "IMPOSSIBLE";
}

console.log(burger("---+-++-", 3));
