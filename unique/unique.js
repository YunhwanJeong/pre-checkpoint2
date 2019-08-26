/**pseudo code
 * 
 * 요소들을 중복되는 값 없이 하나씩만 추려서 리턴
 * 
 * -array 입력
 * 
 *  -filter 메소드 활용
 * 
 */

function unique(array) {
  let uniqueArr = [];

  for(let i = 0; i < array.length; i++) {
    if(uniqueArr.indexOf(array[i]) === -1) {
      uniqueArr.push(array[i]);
    }
  }

  return uniqueArr;
}

var output = unique([1,2,2,4,6,6]); // should be [1,2,4,6]
console.log(output);