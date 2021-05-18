function entrarConta(){
    document.getElementById("Login").style.display = 'Flex';
    document.getElementById("Alternar").style.display = 'Flex';
}   
function colorPage(id){
    if(id == "button-black"){
        document.getElementById("button-white").style.display = 'Flex';
        document.getElementById("button-black").style.display = 'none';
        document.getElementById("body-page").style.backgroundColor = 'black';
        document.getElementById("body-page").style.color = 'white'; 
        document.getElementById("instagram-phone-black").style.display = 'Flex';
        document.getElementById("instagram-phone-white").style.display = 'none';
        document.getElementsByClassName("group").style.display = 'none';
    }else{
        document.getElementById("button-white").style.display = 'none';
        document.getElementById("button-black").style.display = 'Flex';     
        document.getElementById("body-page").style.backgroundColor = 'rgb(247, 247, 247)'; 
        document.getElementById("body-page").style.color = 'black'; 
        document.getElementById("instagram-phone-white").style.display = 'Flex';
        document.getElementById("instagram-phone-black").style.display = 'none';
    }
}   