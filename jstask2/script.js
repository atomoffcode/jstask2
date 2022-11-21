function con() {
    if (confirm("De Senol?!")) {
        alert('Onda zor')
        document.body.style.display='block'
        
    }else{
        alert('Onda sene olmaz')
    }
}
function pro() {
    let age = prompt("Yasinizi daxil edin");
    if (age != null) {
        if (age >= 18 && age<=100 ){
            con()
        }else if(age <18){
            alert('Onda sene olmaz')
        }else if(age >100){
            alert('Olmusenki sen XD')
        }
        else{
            alert('Duzgun deyer daxil edin')
        }
    }else{
        alert('Deyer daxil edin')
    }
}

pro()


function valueCheck() {
    var valcheck = document.getElementById('groupname').value;
    if (valcheck.length>=4) {
        var check = valcheck.slice(-3,-2);
        if(check==1){
            alert(`Xos geldiniz ${valcheck}`)
            document.getElementById('badi').style.backgroundColor = 'cyan'
            document.getElementById('par').innerText = `${valcheck}`
            document.getElementById('par').style.backgroundColor = 'yellow'
            document.getElementById('par').style.color = 'red'
            
        }else if(check==2){
            alert(`Xos geldiniz ${valcheck}`)
            document.getElementById('badi').style.backgroundColor = 'orange'
            document.getElementById('par').innerText = `${valcheck}`
            document.getElementById('par').style.backgroundColor = 'red'
            document.getElementById('par').style.color = 'black'
            

        }else if(check==3){
            alert(`Xos geldiniz ${valcheck}`)
            document.getElementById('badi').style.backgroundColor = 'midnightblue'
            document.getElementById('par').innerText = `${valcheck}`
            document.getElementById('par').style.backgroundColor = 'white'
            document.getElementById('par').style.color = 'black'
            
        }else {
            alert('Duzgun qrup adi daxil edin')
        }
        
    }
    else{
        alert('Duzgun qrup adi daxil edin')
    }
    
    
    
}





