console.log(document.cookie);

 function GetGenderValue() {
  var genderRadio = document.getElementsByName('grade');
  var genderValue;
  for(var i = 0; i < genderRadio.length; i++){
      if(genderRadio[i].checked){
          genderValue = genderRadio[i].value;
      }
  }
  return genderValue;
 }
function SaveForm() {
  setCookie("grade", GetGenderValue());
}

const getCookies = () => {
      //splitEntry ['username', 'pet']
  const cookieItem = {};
  const cookiesString = document.cookie;
  //color=green; usename=pet; language=eng
  const separatedEntries = cookiesString.split(';');
  //  (3) ["color=green", " usename=pet", " language=eng"]
  separatedEntries.forEach((entry) => {
    //entry <=> ' username=pet'
    const trimmedEntry = entry.trim();
    //trim removes the extra space entry <=> 'username=pet'
    const splitEntry = trimmedEntry.split('=');
    //splitEntry ['username', 'pet']
    cookieItem[splitEntry[0]] = splitEntry[1]; 
    //cookieItem <=> {username: 'pet'}
  });  
  return cookieItem;  
}

window.onload = () => {
  //check the radio button for lang retrieved from cookies
  const cookies = getCookies();
  const userLang = cookies.grade;
  if(userLang) {
    document.querySelector(`[value=${userLang}]`).setAttribute('checked', true);
  }
  //update cookie when user changes lang option
  const radioBtns = document.querySelectorAll('input[type=radio]');
  radioBtns.forEach((btn) => {
    btn.addEventListener('change', (e) => {
    const newLang = e.target.value;
      document.cookie = `grade=${newLang}`; // "lang=" + newLang            
  })
  });
  }

  fetchData().then((response) => {
    const cookies = getCookies();
    const userDegrees = cookies.grade;
   if(userDegrees === "cel") {
      document.getElementById("weather").innerHTML = response.current_observation.temp_c + "\°C";
    } else if (userDegrees === "far") {
      document.getElementById("weather").innerHTML = response.current_observation.temp_f + "\°F";
    }
  })




