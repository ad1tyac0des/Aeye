// PRELOADER

var preloader = document.querySelector(".preloader")
var progressText = document.querySelector(".progress-text")


var preloaderAnimation1= function(){
    gsap.from(".heading1",{
        transform: "translateY(-100%)",
        delay:.4,
    })
    gsap.from(".loader", {
        transform: "translateY(100%)",
        delay: .4,
    })
}
var preloaderAnimation2 = function () {
    gsap.to(".heading1", {
        transform: "translateY(-100%)",
        delay: 1,
        duration:.3,
    })
    gsap.to(".loader", {
        transform: "translateY(100%)",
        delay: 1,
        duration:.3,

    })
    gsap.to(preloader, {
        transform:"translateY(-100%)",
        delay:1.7,
        ease:"power2.inOut",
        onComplete:function(){
            preloader.style.display = "none"
        }
    })
}

function counter() {
    let count = 0
    var progress = setInterval(function () {
        setTimeout(function(){
            count++;
        },250)
        
        progressText.textContent = count
        gsap.to(".heading2", {
            width: `${count}%`,
        })
        if (count === 100) {
            clearInterval(progress)
            preloaderAnimation2()
        }
    }, 60)
}

preloaderAnimation1()
setTimeout(counter, 600)
