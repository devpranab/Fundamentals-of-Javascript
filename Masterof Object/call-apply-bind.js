//call-apply-bind
//bind
const normalPerson = {
    fname: "pranab",
    lname: "malik",
    salary: 40000,
    getFullName: function(){
        console.log(this.fname, this.lname);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

//console.log(normalPerson);
//console.log(normalPerson.fname);

//normalPerson.chargeBill(150);
// normalPerson.chargeBill(5000);
// console.log(normalPerson.salary);


const heroPerson = {
    fname: "ali",
    lname: "malik",
    salary: 30000,
}

const fdPerson = {
    fname: "asik",
    lname: "malik",
    salary: 35000,
}

// const heroPersonBill = normalPerson.chargeBill.bind(heroPerson);
// heroPersonBill(1200);
// console.log(heroPersonBill(1200));
// console.log(heroPerson);


//call
//normalPerson.chargeBill.call(heroPerson, 1000); //direct action- ha ha ha...
// normalPerson.chargeBill.call(heroPerson, 1400); //possible to give more para
// console.log(heroPerson.salary);


//apply
//parameter pass as array
normalPerson.chargeBill.apply(heroPerson, [1400]);//possible to give more para
console.log(heroPerson.salary);

normalPerson.chargeBill.apply(fdPerson, [500]);//possible to give more para
console.log(fdPerson.salary);