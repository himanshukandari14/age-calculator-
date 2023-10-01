const calcBtn=document.querySelector('#calcbtn');
const dobInput=document.querySelector('#dob');
const ageSection=document.querySelector('#agesection');
const bg=document.querySelector('#main');
const darkMode=document.querySelector("#dark");
const LightMode=document.querySelector("#light");
const wrapper=document.querySelector(".parent");
const right=document.querySelector("#right");


// dark mode

darkMode.addEventListener('click',()=>{
        console.log("Dark Mode activated");
         wrapper.classList.remove('.parent');
         wrapper.classList.toggle('.darkmode');
         wrapper.style.backgroundColor="black"
         wrapper.style.backgroundImage="none"
         darkMode.style.display="none"
         LightMode.style.display="block";
    })

    // light mode click
    LightMode.addEventListener('click',()=>{
        console.log('light mode activated');
         darkMode.style.display="block"
         LightMode.style.display="none";
         wrapper.style.backgroundColor="#8BC6EC"
    })


calcBtn.addEventListener('click',()=>{
    const dobvalue=dobInput.value;
    if(dobvalue===""){
        alert("please enter DOB");
    }
    else{
        const birthDate=new Date(dobvalue); //to conver inputted string into date object
        const today = new Date(); //to get current date
       
        const ageInYears= today.getFullYear() - birthDate.getFullYear(); //to get year difference
        console.log(ageInYears);
        ageSection.textContent="You Are "+ageInYears+" Years Old Now";

        if (ageInYears<=0) {
              ageSection.textContent="You are not born yet";
        }
    }
})
// packed by Hymanshu Kandari
