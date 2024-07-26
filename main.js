
let a = 0;

function showDiv() {
    if(a === 0){
        document.querySelector('.element').style.display = "block";
        a=1;
    }else{
        document.querySelector('.element').style.display = "none";
        a=0;
    }
}