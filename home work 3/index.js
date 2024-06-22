// task 1
// Create the student object
student = {
    name: " sania",
    age: 26,
    grades: {
        science: 90,
      english: 95,
      math: 96,
    },
    subject: "Computer Science"
  };
  // for in loop
  for (let grade in student) {
  console.log(student[grade]);
  }
  
  
  // task 2
  // dom
  console.log("usingdom:");
  let element = document.getElementById("studentlist");
  element.innerHTML = "ayesha,iram,saba,wania ";
  console.log(element.innerHTML)
  // array
  let students = ["ayesha", "iram", "saba", "wania"];
  // for in loop
  for (let i in students) {
    console.log(students[i]);
      }
  
  // task 3
  let marks=[200,250,300,350,400,450,500,550,600]
  marks.map(function traverse(marks,index){
    console.log(marks);
    console.log(marks+10);
    console.log(marks-10);
    console.log(marks*10);
    console.log(marks/10);
    console.log(index)
  
  
          
      
      });
  // task 4
  
  let payment=[15,20,25,30,50,55,60,15]
   let filteredpayments = payment.filter(function higherpayment(payment) {
    if (payment > 15) {
      return payment;
    }
  });
  console.log(filteredpayments);