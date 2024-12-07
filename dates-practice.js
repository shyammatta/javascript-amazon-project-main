import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import weekend from './dates2'
const today=dayjs();
console.log(today.format('dddd, MMMM D YYYY'))

const days5=today.add(30,'days');
console.log(days5.format('MMMM D'))

const dayssub=today.subtract(30,'days');
console.log(dayssub.format('MMMM D'))

const days10=today.add(10,'days');
console.log(days10.format('dddd'));

let date=dayjs();

 date=dayjs().add(2,'day');
console.log(date.format('D dddd, MMMM '))
console.log(weekend(date));

 date=dayjs().add(5,'days');
console.log(date.format('D dddd, MMMM '))
console.log(weekend(date));

 date=dayjs().add(10,'days');
console.log(date.format('D dddd, MMMM '))
console.log(weekend(date));


