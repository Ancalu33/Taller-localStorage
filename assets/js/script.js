const btnLight = document.getElementById('light')

btnLight.addEventListener('click', () => {
    const container = document.getElementById('container').className = "container light";
    localStorage.setItem("colorConfig", 'light')
})
//-------------------------------------*----------------------------//
const btnDark = document.getElementById('dark')

btnDark.addEventListener('click', () => {
    const container = document.getElementById('container').className = "container dark";
    localStorage.setItem("colorConfig", 'dark')
})

//-------------------------------------*----------------------------//
const btnPink = document.getElementById('pink')

btnPink.addEventListener('click', () => {
    const container = document.getElementById('container').className = "container pink";
    localStorage.setItem("colorConfig", 'pink')
})

//-------------------------------------*----------------------------//

const btnYellow = document.getElementById('yellow')

btnYellow.addEventListener('click', () => {
    const container = document.getElementById('container').className = "container yellow";
    localStorage.setItem("colorConfig", 'yellow')
})



const traerConfColor = ()=>{
    const colorGuardado = localStorage.getItem('colorConfig')
    if (colorGuardado=="light") {
        document.getElementById('container').className="container light";
    }
    
    if (colorGuardado=="dark") {
        document.getElementById('container').className="container dark";
    }
    
    if (colorGuardado=="pink") {
        document.getElementById('container').className="container pink";
    }
    
    if (colorGuardado=="yellow") {
        document.getElementById('container').className="container yellow";
    }
    
    
}

traerConfColor()
