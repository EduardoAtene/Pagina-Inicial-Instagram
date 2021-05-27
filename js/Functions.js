function colorPage(id){
    if(id == "button-black"){
        document.getElementById("button-white").style.display = 'Flex';
        document.getElementById("button-black").style.display = 'none';
        document.getElementById("insta-logo-white").style.display = 'Block';
        document.getElementById("insta-logo-black").style.display = 'none';
        document.getElementById("body-page").style.backgroundColor = 'rgb(14, 14, 14)';
        document.getElementById("body-page").style.color = 'white'; 
        document.getElementById("instagram-phone-black").style.display = 'Flex';
        document.getElementById("instagram-phone-white").style.display = 'none';
        document.getElementById("Login").style.backgroundColor = 'rgb(7,7,7)';
        document.getElementById("Alternar").style.backgroundColor = 'rgb(7,7,7)';
        document.getElementById("Login").style.borderColor = 'rgb(31, 31, 31)';
        document.getElementById("Alternar").style.borderColor = 'rgb(31, 31, 31)';
        document.getElementById("not-conta-1").style.color = 'white';
        document.getElementById("not-conta-2").style.color = 'white';
    }else{
        document.getElementById("button-white").style.display = 'none';
        document.getElementById("button-black").style.display = 'Flex';     
        document.getElementById("insta-logo-white").style.display = 'none';
        document.getElementById("insta-logo-black").style.display = 'Block';
        document.getElementById("body-page").style.backgroundColor = 'rgb(247, 247, 247)'; 
        document.getElementById("body-page").style.color = 'black'; 
        document.getElementById("instagram-phone-white").style.display = 'Flex';
        document.getElementById("instagram-phone-black").style.display = 'none';
        document.getElementById("Login").style.backgroundColor = '#ffffff';
        document.getElementById("Alternar").style.backgroundColor = '#ffffff';
        document.getElementById("Login").style.borderColor = 'lightgray';
        document.getElementById("Alternar").style.borderColor = 'lightgray';
        document.getElementById("not-conta-1").style.color = 'rgb(160, 160, 160)';
        document.getElementById("not-conta-2").style.color = 'rgb(160, 160, 160)';
    }
}   