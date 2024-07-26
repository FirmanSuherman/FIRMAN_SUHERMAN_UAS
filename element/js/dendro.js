let url ="https://genshin.jmp.blue/characters";
let urlel="https://genshin.jmp.blue/elements"

let url2;
let urlimage;
let i=[];
let j=0;
let k =0;
let a = 0,b = 0;

function showDiv() {
    if(a === 0){
        document.querySelector('.element').style.display = "block";
        document.querySelector('.desc').style.display ="none";
        document.querySelector('.reaction').style.display ="none";
        document.querySelector('.char').style.display ="none";
        document.querySelector('#backgdendro img').style.opacity ="0.4";
        function myFunction(x) {
          if (x.matches) { 
            document.querySelector('.container').style.display ="none";
            document.querySelector('#backgdendro').style.display = "none";
          } else {
           document.querySelector('#backgdendro').style.display = "block";
          }
        }
        
        let x = window.matchMedia("(max-width: 426px)")
        
        myFunction(x);
        
        x.addEventListener("change", function() {
          myFunction(x);
        });
        a=1;
    }else{
        document.querySelector('.element').style.display = "none";
        document.querySelector('.desc').style.display ="block";
        document.querySelector('.reaction').style.display ="block";
        document.querySelector('.char').style.display ="block";
        document.querySelector('#backgdendro img').style.display ="0.3";
        function myFunction(x) {
          if (x.matches) { 
            document.querySelector('.container').style.display ="block";
            document.querySelector('#backgdendro').style.display = "block";
          } else {
           document.querySelector('#backgdendro').style.display = "block";
          }
        }
        
        let x = window.matchMedia("(max-width: 426px)")
        
        myFunction(x);
        
        x.addEventListener("change", function() {
          myFunction(x);
        });
        a=0;
    }
}
function showTheme(){
    if(b === 0){
        document.querySelector('body').style.background = "white";
        document.querySelector('body').style.transition = "all 1.5s";
        let charHover = document.querySelectorAll('.char li');
        for(let i=0; i<charHover.length; i++){  
            charHover[i].addEventListener('mouseover', () => {     
                charHover[i].style.background = '#a9f7ae';
            });
            charHover[i].addEventListener('mouseout', () => {
                charHover[i].style.background = 'none';
            });
        }
        function myFunction(x) {
          if (x.matches) { 
            document.querySelector('#backgdendro').style.background ="white";
          } 
        }
        
        var x = window.matchMedia("(max-width: 426px)")
        
        myFunction(x);
        
        x.addEventListener("change", function() {
          myFunction(x);
        });
        b=1;
    }else{
        document.querySelector('body').style.background = "rgb(30, 30, 30";
        document.querySelector('body').style.transition = "all 1.5s";
        let charHover = document.querySelectorAll('.char li');
        for(let i=0; i<charHover.length; i++){  
            charHover[i].addEventListener('mouseover', () => {     
                charHover[i].style.background = '#005f07';
            });
            charHover[i].addEventListener('mouseout', () => {
                charHover[i].style.background = 'none';
            });
        }
        function myFunction(x) {
          if (x.matches) { 
            document.querySelector('#backgdendro').style.background ="black";
          } 
        }
        
        var x = window.matchMedia("(max-width: 426px)")
        
        myFunction(x);
        
        x.addEventListener("change", function() {
          myFunction(x);
        });
        b=0;
    }
}
fetch(url)
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    })
.then(data => {
    const list = document.getElementById('character-list');
    
    console.log(data);
    data.forEach(character => {
        console.log(character);
        const listItem = document.createElement('li');
        const img = document.createElement('img');
        const listchar = document.createElement('span');
        const linkchar = document.createElement('a');

        url2 = url+"/"+character;

        fetch(url2).then(response =>{
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        })
        .then(data1 => {
            if(data1.vision === "Dendro"){
                urlimage = url +"/"+character+"/icon";
                console.log(urlimage); // check lagi guys

                // reaction
                urlrec = urlel+"/"+data1.vision;
                if(k===0){
                    k=1;
                    fetch(urlrec)
                    .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                    })
                    .then(data2 => {
                    let elrec = data2.reactions[0].name;
                    let showrec = document.createElement('p');
                    showrec.textContent = elrec;
                    document.querySelector('#rec').appendChild(showrec);
                })
                }
                //reaction

                listchar.textContent = character;
                img.src = urlimage;
                
                const renderCard = () =>{
                    document.querySelector('main').classList.remove('skeleton');
                    document.querySelector('.char').classList.remove('skeleton-char');
                    document.querySelector('.desc').classList.remove('skeleton-des');
                    document.querySelector('.reaction').classList.remove('skeleton-reac');
                    document.querySelector('#des').style.display="block";
                    document.querySelector('#dendro').style.display="block";
                    document.querySelector('.reaction p').style.display="block";
                    document.querySelector('#urlphoto').style.display="block";
                    document.querySelector('.reaction .text-reac').style.display="block";
                    document.querySelector('#rec p').style.display="block";
                    document.querySelector('.btn .right').style.display="block";
                    document.querySelector('.btn .left').style.display="block";
                    
                    const line = document.querySelectorAll('.line');
                    for(let i=0; i<4; i++){
                        line[i].style.opacity="1";
                    }
                    linkchar.style.textDecoration="none";
                    linkchar.href="../html/char.html";

                    document.querySelector('.desc').style.border="5px solid #00ff11";
                    linkchar.appendChild(listchar);
                    linkchar.appendChild(img);
                    listItem.appendChild(linkchar);
                    list.appendChild(listItem);
                }
                setTimeout(() => {
                    renderCard();
                }, 3000);

            }
        })

    });
})
.catch(error => {
    console.error('Terjadi masalah dengan pengambilan data:', error);
});

let c =0;
function moveDivRight(){
    if(c===0){
        document.querySelector('.photo-1').src="/image/bloom.png";
        document.querySelector('#rec p').textContent="Bloom";
        c=1;
    }else if(c===1){
        document.querySelector('.photo-1').src="/image/quicken.png";
        document.querySelector('#rec p').textContent="Quicken";
        c=2;
    }else if(c===2){
        document.querySelector('.photo-1').src="/image/hyper-bloom.png";
        document.querySelector('#rec p').textContent="Hyper Bloom";
        c=3;
    }else if(c===3){
        document.querySelector('.photo-1').src="/image/burgeon.png";
        document.querySelector('#rec p').textContent="Burgeon";
        c=4;
    }else if(c===4){
        document.querySelector('.photo-1').src="/image/spread.png";
        document.querySelector('#rec p').textContent="Spread";
        c=5;
    }else if(c===5){
        document.querySelector('.photo-1').src="/image/aggravate.png";
        document.querySelector('#rec p').textContent="Aggravate";
        c=6;
    }
}
function moveDivLeft(){
    if(c===1){
        document.querySelector('.photo-1').src="/image/burn.png";
        document.querySelector('#rec p').textContent="Burning";
        c=0;
    }else if(c===2){
        document.querySelector('.photo-1').src="/image/bloom.png";
        document.querySelector('#rec p').textContent="Bloom";
        c=1;
    }else if(c===3){
        document.querySelector('.photo-1').src="/image/quicken.png";
        document.querySelector('#rec p').textContent="Quicken";
        c=2;
    }else if(c===4){
        document.querySelector('.photo-1').src="/image/hyper-bloom.png";
        document.querySelector('#rec p').textContent="Hyper Bloom";
        c=3;
    }else if(c===5){
        document.querySelector('.photo-1').src="/image/burgeon.png";
        document.querySelector('#rec p').textContent="Burgeon";
        c=4;
    }else if(c===6){
        document.querySelector('.photo-1').src="/image/spread.png";
        document.querySelector('#rec p').textContent="Spread";
        c=5;
    }
}





