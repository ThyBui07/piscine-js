function letterSpaceNumber(str) {
  let result = []
  let regex = /([a-zA-Z])(\s)([\d])(?![a-zA-Z0-9])/g
  let match;
  while (match = regex.exec(str)) {
      result.push(match[1] + match[2] + match[3])
  }
  return result;
}
