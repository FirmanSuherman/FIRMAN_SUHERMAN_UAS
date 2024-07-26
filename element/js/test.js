const base = "https://genshin.jmp.blue";
const url ="https://genshin.jmp.blue/characters";
let temp1 =[];
let imgurl=[];
let i=0;
// Make a GET request using the Fetch API
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(Data => {
    Data.forEach(character => {
        temp1=character;
        let char = url+"/"+character+"/icon";
        let btn = document.createElement('button');
        let icon = document.createElement('img');
        let temp = document.querySelector('.bar');

        icon.alt=character;
        icon.src =char;
        
        fetch(url+"/"+character)
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(DataChar => {
                if(DataChar.rarity === 5){
                    icon.style.background="yellow";
                }else{
                    icon.style.background="purple";
                }
          });
        btn.addEventListener("click", function(){
            descrip(character);
        });
        btn.appendChild(icon);
        const renderCard = () =>{
            temp.appendChild(btn);
        }
        setTimeout(() => {
            renderCard();
        }, 3000);
        console.log(char);
    })
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
function search() {
    var input, filter, ul, li, a, i;

    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.querySelector(".bar");
    li = ul.getElementsByTagName("img.alt");
    img =ul.getElementsByTagName("img");
    btn =ul.getElementsByTagName("button");

    console.log(li,img)
    // for(i = 0; i < img.length; i++){
    //     img[i].display="none";
    // }
    for (i = 0; i < img.length; i++) {
        a = img[i].alt.toUpperCase();
        if (a.includes(filter) === true) {
            btn[i].style.display = 'flex';
        } else {
            btn[i].style.display = "none";
        }
    }
}
let g=0;
function descrip(char){
    if(g===1){
        let erase= document.querySelectorAll('.info p');
        let eraseImg= document.querySelector('.card img');
        let eraseInfo= document.querySelector('.info');
        console.log(erase);
        for(let i=0 ;i<erase.length; i++){
            erase[i].remove();
        }
        eraseImg.remove();
        eraseInfo.style.display="none";
        g=0;
    }
    fetch(url+"/"+char)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(DataChar => {
        let info = document.querySelector('.info');
        let card = document.querySelector('.card');
        let img = document.createElement('img');
        let con = document.createElement('div');
        let nama=document.createElement('p');
        let title=document.createElement('p');
        let vision=document.createElement('p');
        let weapon=document.createElement('p');
        let gender=document.createElement('p');
        let nation=document.createElement('p');
        let rarity=document.createElement('p');

        let temp2;

        temp2= DataChar.name;
        nama.textContent="Nama : "+temp2;
        con.appendChild(nama);

        temp2=DataChar.title;
        title.textContent="Gelar : "+temp2
        con.appendChild(title);
        
        
        temp2=DataChar.vision;
        vision.textContent="Vison : "+temp2
        con.appendChild(vision);

        temp2=DataChar.weapon;
        weapon.textContent="Senjata : "+temp2
        con.appendChild(weapon);
        
        temp2=DataChar.gender;
        gender.textContent="Gender : "+temp2
        con.appendChild(gender);
        
        temp2=DataChar.nation;
        nation.textContent="Region : "+temp2
        con.appendChild(nation);
        
        temp2=DataChar.rarity;
        rarity.textContent="Bintang : "+temp2
        con.appendChild(rarity);



        img.src=url+"/"+DataChar.name.toLowerCase()+"/card";
        console.log(img.src);
        setTimeout(() => {
            info.style.display="block";
            info.appendChild(con);
            card.appendChild(img);
        }, 3000);
        g=1;
      });
}