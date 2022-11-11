let name=prompt("Enter your name");
let roll=parseInt (prompt("Enter your roll"));

let bangla=parseFloat(prompt("Enter your bangla mark"));
let english=parseFloat(prompt("Enter your english mark"));
let math=parseFloat(prompt("Enter your math mark"));
let socialScience=parseFloat(prompt("Enter your socialScience mark"));
let physices=parseFloat(prompt("Enter your physices mark"));
let chemistry=parseFloat(prompt("Enter your chemistry mark"));
let biology=parseFloat(prompt("Enter your biology mark"));

let total=bangla+english+math+socialScience+physices+chemistry+biology;
let gpa=total/6;
console.log(`
    Student name    : ${name}
    Student roll    : ${roll}

    Bangla          : ${bangla}
    English         : ${english}
    Math            : ${math}
    SocialScience   : ${socialScience}
    Physics         : ${physices}
    Chemistry       : ${chemistry}
    Biology         : ${biology}
---------------------------------------
 Your total Mark    : ${total}
  GPA               : ${gpa.toFixed(2)}
`);
console.log(typeof name);