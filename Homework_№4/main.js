
//////    TASK 1   /////

class Worker{
  
  constructor(name, sname, rate, days) {
    this.name = name;
    this.sname = sname;
    this.rate = rate;
    this.days = days
  }
   getSalary() {
     return this.rate * this.days
  }
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);

console.log(worker.name)
console.log(worker.sname)
console.log(worker.rate)
console.log(worker.days)
console.log(worker.getSalary())



//////    TASK 2   /////

class MyString{
  reverse(word) {
    return word.split('').reverse().join('')
  }
  ucFirst(word) {
    word = word.toLowerCase()
    return  word.charAt(0).toUpperCase() + word.substr(1)
  }
  ucWords(word) {
     word = word.toLowerCase()
     return word = word.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase()); 
  }
}

const str = new MyString();

console.log(str.reverse('IVAN'))
console.log(str.ucFirst('arsenal'))
console.log(str.ucWords('arsenal arsenal arsenal'))



