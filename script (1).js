let weight = 0;
let height = 0;

 function saveWeight(){
   weight = document.getElementById("weightInput").value;
  document.getElementById("weightInput").value = "";
  return weight;
}
function saveHeight(){
  let feet = parseInt(document.getElementById("feetInput").value);
  let inches = parseInt(document.getElementById("inchesInput").value);
  document.getElementById("feetInput").value = "";
  document.getElementById("inchesInput").value = "";
  height = (feet * 12) + inches;
  return height;
  
}

function calc(){
  if(isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0){
    document.getElementById("bmi").innerHTML = "Please enter valid numbers";
    return;
  }
  
  let bmi = ((weight)/(height ** 2)) * 703;
  document.getElementById("bmi").innerHTML = bmi.toFixed(1); 

  if(bmi < 18.5){
    document.getElementById("weightScale").innerHTML = "Underweight"
  }
  if(bmi >= 18.5 && bmi <= 24.9){
    document.getElementById("weightScale").innerHTML = "Normal Weight";
  }
  if(bmi >= 25 && bmi <= 29.9){
    document.getElementById("weightScale").innerHTML = "Overweight";
  }
  if(bmi >= 30){
    document.getElementById("weightScale").innerHTML = "Obesity";
  }

}