function getOrdinalNumber(num) {
  const str = String(num);

  const lastTwo = num % 100;

  if (lastTwo === 11 || lastTwo === 12 || lastTwo === 13) {
    return str + "th";
  }
 const lastDigit = num % 10;
if (lastDigit === 1) {
    return str + "st";
  } else if (lastDigit === 2) {
    return str + "nd";
  } else if (lastDigit === 3) {
    return str + "rd";
  } else {
    return str + "th";
  }


}

module.exports = getOrdinalNumber;
