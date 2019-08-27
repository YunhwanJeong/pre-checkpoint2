/**pseudo code
 * 
 * -s 배열 입력 받음
 * 
 * -reduce 함수 사용. 초기값 [];로 제공
 * -array에서 현재 number가 이전 index의 element와 다르면 push
 * -아니면 맨 마지막 요소를 더한걸로 교체
 * -새로운 배열을 리턴
 *  
 */


function sumConsecutives(s) {
  let reducer = function(arr, num, i) {
    if(num !== s[i - 1]) {
      arr.push(num);
      return arr;
    } else {
      arr[arr.length - 1] = arr[arr.length - 1] + num;
      return arr;
    }
  }

  return s.reduce(reducer, []);
}

var output = sumConsecutives([1,4,4,4,0,4,3,3,1]);
console.log(output);
