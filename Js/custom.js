const Dashboard = () =>{

    var y = document.getElementById('sidebarmenu');
    if(y.style.display == "block"){
      document.getElementById('sidebarmenu').style.display="none";
    }
    else{
        document.getElementById('sidebarmenu').style.display="block";
    }
}



const Firsttab = () => {
    document.getElementById('tab1-content').style.display="block";
    document.getElementById('tab2-content').style.display="none";
    document.getElementById('tab3-content').style.display="none";
    document.getElementById('tab1').style.color="red";
    document.getElementById('tab2').style.color="#ADADAD";
    document.getElementById('tab3').style.color="#ADADAD";
}

const Secondtab = () => {
    document.getElementById('tab1-content').style.display="none";
    document.getElementById('tab2-content').style.display="block";
    document.getElementById('tab3-content').style.display="none";
    document.getElementById('tab1').style.color="#ADADAD";
    document.getElementById('tab2').style.color="red";
    document.getElementById('tab3').style.color="#ADADAD";
}

const Thirdtab = () => {
    document.getElementById('tab1-content').style.display="none";
    document.getElementById('tab2-content').style.display="none";
    document.getElementById('tab3-content').style.display="block";
    document.getElementById('tab1').style.color="#ADADAD";
    document.getElementById('tab2').style.color="#ADADAD";
    document.getElementById('tab3').style.color="red";
}