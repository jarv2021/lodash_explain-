/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => true
 *
 * isObjectLike(Function)
 * // => false
 *
 * isObjectLike(null)
 * // => false
 * 
 * 
 * 
 * 您可使用js的typeof来确定js变量的类型：

  typeof运算符返回变量或表达式的类型：

  typeof  0  //返回"number"

  typeof  " "   //返回"string"

  typeof  "Bill"  //返回"string"

  typeof true   //返回"boolean"

  typeof false  //返回"boolean"

  typeof  x   //返回““undefined（假如x没有值）”

  typeof运算符把对象、数组或null返回object。
 */
function isObjectLike(value) {
  return typeof value === 'object' && value !== null
}

export default isObjectLike
