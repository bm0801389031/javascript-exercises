const ftoc = function(f) {
  let notround = (f - 32) * .5556;
  console.log(notround)
  if (Number.isInteger(notround)){
    return notround
  } else {
  let str = notround.toFixed(1);
  return parseFloat(str)
  }
};

const ctof = function(c) {
  let notround2 = (c * 1.8) + 32;
  console.log(notround2)
  if (Number.isInteger(notround2)){
    return notround2
  } else {
  let str2 = notround2.toFixed(1);
  return parseFloat(str2)
  }
};



module.exports = {
  ftoc,
  ctof
};
