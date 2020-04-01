/**
 * A specialized version of `forEachRight` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 * 
 * 简单来说： == 代表相同， ===代表严格相同, 为啥这么说呢， 
   这么理解： 当进行双等号比较时候： 先检查两个操作数数据类型，如果相同，
   则进行===比较， 如果不同， 则愿意为你进行一次类型转换， 转换成相同类型后再进行比较，
   而===比较时， 如果类型不同，直接就是false.
 */
function arrayEachRight(array, iteratee) {
  let length = array == null ? 0 : array.length

  while (length--) {
    if (iteratee(array[length], length, array) === false) {
      break
    }
  }
  return array
}

export default arrayEachRight
