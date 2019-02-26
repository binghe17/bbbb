


// ------------- 1. 배열의 문자 정렬하기

var string_array = ['ban', 'kim' , 'han', 'choi' , 'kang' , 'an'];
console.log(string_array.sort()); // ["an", "ban", "choi", "han", "kang", "kim"]


var string_hangule_array = ['트와이스', '위너' , '에이핑크', '나중에' ,'가오가이거' , '쿠쿠다스' , '빵빠레'];
console.log(string_hangule_array.sort()); //["가오가이거", "나중에", "빵빠레", "에이핑크", "위너", "쿠쿠다스", "트와이스"]


var string_mix_array = ['에이핑크', 'ban', '나중에' , '트와이스' , 'kim' , '위너' , 'han', '쿠쿠다스' , '빵빠레', 'choi' ,'가오가이거' , 'kang' , 'an'];
console.log(string_mix_array.sort()); // ["an", "ban", "choi", "han", "kang", "kim", "가오가이거", "나중에", "빵빠레", "에이핑크", "위너", "쿠쿠다스", "트와이스"]




// ------------- 2. 배열 숫자 정렬하기

number_array = [10 , 99 , 7 , 12 , 3];
console.log(number_array); //  [10, 99, 7, 12, 3]
console.log(number_array.sort()); //[10, 12, 3, 7, 99]



number_array = ['10' , '99' , '7' , '12' , '3'];
console.log(number_array.sort(number_ascending)); //[3, 7, 10, 12, 99]
console.log(number_array.sort(number_descending)); //[99, 12, 10, 7, 3]
function number_ascending(a, b) { return a - b; }// 오름차순
function number_descending(a, b) { return b - a;}// 내림차순




// -------------- 3. 배열 날짜 정렬하기
var data = [
    { '날짜': "2012-11-14", '학년': 3, '점수': 200, 'dom':document.body},
    { '날짜': "2013-11-14", '학년': 1, '점수': 300, },
    { '날짜': "2017-11-14", '학년': 2, '점수': 90, },
    { '날짜': "2018-11-14", '학년': 2, '점수': 90, },
    { '날짜': "2019-11-14", '학년': 2, '점수': 90, },
    { '날짜': "2020-11-14", '학년': 2, '점수': 90, },
    { '날짜': "2021-11-31", '학년': 3, '점수': 200, },
    { '날짜': "2023-11-01", '학년': 2, '점수': 190, },
    { '날짜': "2002-11-14", '학년': 2, '점수': 90, },
    { '날짜': "2010-11-14", '학년': 2, '점수': 190, },
    { '날짜': "2008-11-14", '학년': 2, '점수': 90, },
    { '날짜': "2009-11-14", '학년': 1, '점수': 100, }
];
console.log(data.sort(date_ascending)); // 오름차순
console.log(data.sort(date_descending)) // 내림차순
function date_ascending(a, b) {
    var dateA = new Date(a['날짜']).getTime();
    var dateB = new Date(b['날짜']).getTime();
    return dateA > dateB ? 1 : -1;
};
function date_descending(a, b) {
    var dateA = new Date(a['날짜']).getTime();
    var dateB = new Date(b['날짜']).getTime();
    return dateA < dateB ? 1 : -1;
};
