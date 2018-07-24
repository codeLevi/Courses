// get cookies
console.log(document.cookie);
//set cookies
document.cookie = "color=green";
document.cookie = "usename=pet";
document.cookie = "language=eng";
console.log(document.cookie);

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
  const userLang = cookies.lang;
  if(userLang) {
    document.querySelector(`[value=${userLang}]`).setAttribute('checked', true);
  }
  //update cookie when user changes lang option
  const radioBtns = document.querySelectorAll('input[type=radio]');
  radioBtns.forEach((btn) => {
    btn.addEventListener('change', (e) => {
    const newLang = e.target.value;
      document.cookie = `lang=${newLang}`; // "lang=" + newLang
  })
  });
  }






















