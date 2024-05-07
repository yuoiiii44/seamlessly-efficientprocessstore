function removeKdigits(num, k) {
  const stack = [];
  for (const digit of num) {
    while (k > 0 && stack.length && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  let result = "";
  let leadingZero = true;
  for (const digit of stack) {
    if (leadingZero && digit === "0") continue;
    leadingZero = false;
    result += digit;
  }
  return result || "0";
}
