const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")

setInterval(()=>{
    let time = new Date()

    let hr = time.getHours() * 30
    let mt = time.getMinutes() * 6
    let sd = time.getSeconds() * 6

    hour.style.transform = `rotate(${(hr)+(mt/12)}deg)`

    minute.style.transform = `rotate(${mt}deg)`

    second.style.transform = `rotate(${sd}deg)`

})