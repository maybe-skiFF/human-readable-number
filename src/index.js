module.exports = function toReadable (number) {
  const simpleNumDictionary = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tensNumDictionary = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let res = '';
  let numToStr = String(number);

  if (number === 0) {
    return res = 'zero'
  } else if (number <= 19) {
    res = simpleNumDictionary[number];
  } else if (numToStr.length === 2 && numToStr.slice(1) === '0') {
    res = tensNumDictionary[Math.trunc(number / 10) - 2]
  } else if (numToStr.length === 2) {
    res = `${tensNumDictionary[Math.trunc(number / 10) - 2]} ${simpleNumDictionary[numToStr.slice(1)]}`;
  } else if (numToStr.length === 3 && numToStr.slice(1, 2) === '0') {
    res = (`${simpleNumDictionary[Math.trunc(number / 100)]} hundred ${simpleNumDictionary[numToStr.slice(2)]}`).trim();
  } else if (numToStr.length === 3 && numToStr.slice(1) === '10') {
    res = `${simpleNumDictionary[Math.trunc(number / 100)]} hundred ten`;
  } else if (numToStr.length === 3 && (Number(numToStr.slice(1)) >= 11 && Number(numToStr.slice(1)) <= 19)) {
    res = (`${simpleNumDictionary[Math.trunc(number / 100)]} hundred ${simpleNumDictionary[numToStr.slice(1)]}`).trim();
  } else if (numToStr.length === 3) {
    res = (`${simpleNumDictionary[Math.trunc(number / 100)]} hundred ${tensNumDictionary[numToStr.slice(1, 2) - 2]} ${simpleNumDictionary[numToStr.slice(2)]}`).trim();
  }

  return res;
}