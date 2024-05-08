function letterCombinations(digits) {
  if (digits.length === 0) return [];
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const result = [];
  backtrack("", 0);
  return result;
  function backtrack(current, index) {
    if (current.length === digits.length) {
      result.push(current);
      return;
    }
    const letters = map[digits[index]];
    for (const letter of letters) {
      backtrack(current + letter, index + 1);
    }
  }
}
