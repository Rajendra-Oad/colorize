function darkmode(){
    let root = document.documentElement;
    root.style.setProperty('--main-theme', '#171717');
    root.style.setProperty('--primary-color', '#fff');
    root.style.setProperty('--secondary-color', '#000');
}

function lightmode(){
    let root = document.documentElement;
    root.style.setProperty('--main-theme', '#fff');
    root.style.setProperty('--primary-color', '#000');
    root.style.setProperty('--secondary-color', '#fff');
}

document.querySelectorAll('.color-themes .color').forEach(color =>{
    color.onclick=() =>{
        let background=color.style.background;
        document.querySelector(':root').style.setProperty('--main-theme', background);
    }
})