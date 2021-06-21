ame_of_students = []
function submitnames()
{
var name1 = document.getElementById ("stdnt1").value;
var name2 = document.getElementById ("stdnt2").value;
var name3 = document.getElementById ("stdnt3").value;
var name4 = document.getElementById ("stdnt4").value;
name_of_students.push(name1);
name_of_students.push(name2);
name_of_students.push(name3);
name_of_students.push(name4);
console.log(name_of_students)
document.getElementById("displaynames1234567890").innerHTML=name_of_students;
document.getElementById("submitnames2").style.display="none";
document.getElementById("sortingname").style.display="inline-block";
}
function sorting()
{
name_of_students.sort();
document.getElementById("displaynames1234567890").innerHTML=name_of_students;
}