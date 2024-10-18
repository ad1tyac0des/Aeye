// function disableScroll(){
//     document.body.style.overflow = "hidden"
//     document.documentElement.style.overflow = "hidden"
// }

// function enableScroll(){
//     document.body.style.overflow = ""
//     document.documentElement.style.overflow = ""
// }


// PRELOADER

var preloader = document.querySelector(".preloader")
var progressText = document.querySelector(".progress-text")


var preloaderAnimation1 = function () {
    gsap.from(".heading1", {
        transform: "translateY(-100%)",
        delay: .4,
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
        duration: .3,
    })
    gsap.to(".loader", {
        transform: "translateY(100%)",
        delay: 1,
        duration: .3,

    })
    gsap.to(preloader, {
        transform: "translateY(-100%)",
        delay: 1.7,
        ease: "power2.inOut",
        onComplete: function () {
            preloader.style.display = "none"
            enableScroll()
        }
    })

}

function counter() {
    let count = 0
    var progress = setInterval(function () {
        setTimeout(function () {
            count++;
        }, 250)

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

// preloaderAnimation1()
// setTimeout(counter, 600)
// disableScroll()



// ABOUT PAGE CARDS

const aboutPageCardsContainer = document.querySelector(".about-page-bottom-content-container")

const CardsData = [
    {
        title: "Collaborative Learning",
        description: "Engage with like-minded individuals and enhance your skills through shared knowledge.",
        isWhiteCard: true
    },

    {
        title: "Networking Opportunities",
        description: "Connect with industry professionals and peers, expanding your network and potential career paths.",
        isWhiteCard: false
    },

    {
        title: "Skill Development",
        description: "Gain practical experience and improve your technical abilities in a supportive environment.",
        isWhiteCard: false
    },

    {
        title: "Innovative Challenges",
        description: "Participate in hackathons and competitions that encourage creativity and critical thinking.",
        isWhiteCard: true
    },

    {
        title: "Collaborative Learning",
        description: "Engage with like-minded individuals and enhance your skills through shared knowledge.",
        isWhiteCard: true
    },

    {
        title: "Exclusive Resources",
        description: "Access a curated collection of tutorials, tools, and guides to support your learning journey.",
        isWhiteCard: false
    },
]

CardsData.map((cardData, index) => {
    const whiteCard = `<div
                        class="about-page-card lg:relative ${index == 0 ? 'lg:top-[15vw]' : index == 3 ? 'lg:top-[-8.5vw]' : index == 4 ? 'lg:top-[-2.5vw]' : ''} w-[90vw] min-[500px]:w-96 lg:w-[28rem] h-[34rem] md:h-[36rem] lg:h-[38rem] rounded-md bg-zinc-50">
                        <div
                            class="about-page-card-content w-full h-full py-2.5 flex flex-col items-center justify-between">
                            <h1
                                class="w-[90%] text-[2.5rem] lg:text-[3rem] leading-none font-[Helvetica] font-bold text-zinc-950">
                                ${cardData.title}
                            </h1>
                            <div
                                class="about-page-card-btn w-20 md:w-24  h-20 md:h-24  rounded-full flex items-center justify-center p-6 md:p-7 bg-[#E3E3E3]">
                                <img class="w-full h-full object-cover" src="assets/images/plusIcon.png">
                            </div>
                            <p
                                class="w-[90%] font-[Helvetica] font-medium leading-tight text-lg lg:text-xl text-zinc-950">
                                ${cardData.description}
                            </p>
                        </div>
                    </div>`

    const grayCard = `<div
                        class="about-page-card ${index == 2 ? 'mt-[12vw]' : index == 5 ? 'mt-[-35vw]' : ''} w-[90vw] min-[500px]:w-96 lg:w-[28rem] h-[34rem] md:h-[36rem] lg:h-[38rem] rounded-md bg-[#CBCBCB]">
                        <div
                            class="about-page-card-content w-full h-full py-2.5 flex flex-col items-center justify-between">
                            <h1
                                class="w-[90%] text-[2.5rem] lg:text-[3rem] leading-none font-[Helvetica] font-bold text-zinc-950">
                                ${cardData.title}
                            </h1>
                            <div
                                class="about-page-card-btn w-20 md:w-24  h-20 md:h-24  rounded-full flex items-center justify-center p-6 md:p-7 bg-[#FFFFFFF7]">
                                <img class="w-full h-full object-cover" src="assets/images/plusIcon.png">
                            </div>
                            <p
                                class="w-[90%] font-[Helvetica] font-medium leading-tight text-lg lg:text-xl text-zinc-950">
                                ${cardData.description}
                            </p>
                        </div>
                    </div>`

    cardData.isWhiteCard ? aboutPageCardsContainer.innerHTML += whiteCard : aboutPageCardsContainer.innerHTML += grayCard;
})