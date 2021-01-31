/* ======== STRINGS ======== */

String.prototype.toCapitalCase = function() {
  return this.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

/* ======== ARRAYS ======== */

Array.prototype.shuffle = function() {
  let newArr = []

  while(this.length > 0) {
    var tempIndex = Math.randInt(this.length)
    newArr.push(this[tempIndex])
    this.splice(tempIndex,1)
  }
  return newArr
}

Array.prototype.choose = function() {
  return this[Math.randInt(this.length)]
}


/* ======== MATH ======== */

Math.randInt = function () {
  var min, max = 0
	if (arguments.length == 1) {
		// Between 0 and max
		max = arguments[0]
		min = 0
	} else if (arguments.length == 2) {
		// between min and max
		min = arguments[0]
		max = arguments[1]
	} else {
    throw "Missing max value argument"
  }

	return Math.floor(Math.random() * (max - min)) + min

}

Math.radToDeg = function(rads) {
  return rads * 180/Math.PI
}

Math.degToRad = function(degs) {
  return degs * Math.PI/180
}
/**
 * @param {Number} n Number of total items
 * @param {Number} k Number of items to pick
 * @returns {Number} Binomial coefficient of n choose k
 */
Math.binom = function(n,k) {
  if(isNaN(n)) {
    throw "N is not a number"
    return false
  } else if(isNaN(k)) {
    throw "K is not a number"
    return false
  } else {
    x = BigInt(fact(n) / (fact(k)*fact(n-k)))
    return x
  }

}
/**
 *
 * @param {Number} n
 */
Math.factorial = function(n) {
  if(isNaN(n)) {
    throw "Argument is not a number!"
  } else {
    return fact(n)
  }
}

function fact(r) {
  r = BigInt(r)
  if(r == 1 || r == 0) {
    return 1
  }
  return r * fact(r-1)
}

/**
 *
 * @param {Number[]} valArr Array of Values to map
 * @param {Number} inMax Optional - Initial minimum value
 * @param {Number} inMin Optional - Initial maximum value
 * @returns {Number[]} - Mapped array between 0 and 1
 */
Math.normalize = function(valArr, inMax = Math.max(valArr), inMin = Math.min(valArr) ) {
  let mappedArr = valArr.map(x => Math.map(x,inMax, inMin))
  return mappedArr
}

/**
 *
 * @param {Number} val Value to map
 * @param {Number} inMax Initial minimum value
 * @param {Number} inMin Initial maximum value
 * @param {Number} outMax Max value to map to, default to 1
 * @param {Number} outMin Min value to map to, defaults to 0
 * @returns {Number} Value mapped from an initial range to between the output max and the output min, if given, or between 0 and 1
 */
Math.map = function(val, inMax, inMin, outMax = 1, outMin = 0) {

  var outRange = outMax - outMin
  var inRange = inMax - inMin

	return ((val-inMin)*(outRange)/(inRange) + outMin)
}


Math.TAU = 2*Math.PI // Makes using radians bearable
Math.POS_PHI = (1+Math.sqrt(5.0))/2 //Golden Ratio
Math.NEG_PHI = (1-Math.sqrt(5.0))/2 // The complement of the Golden Ratio
Math.REC_POS_PHI = Math.POS_PHI - 1 //Reciprocal of Golden Ratio
Math.REC_NEG_PHI = Math.NEG_PHI - 1