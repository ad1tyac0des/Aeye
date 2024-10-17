// PRELOADER

// var preloader = document.querySelector(".preloader")
// var progressText = document.querySelector(".progress-text")

// var preloaderAnimation1= function(){
//     gsap.from(".heading1",{
//         transform: "translateY(-100%)",
//         delay:.4,
//     })
//     gsap.from(".loader", {
//         transform: "translateY(100%)",
//         delay: .4,
//     })
// }
// var preloaderAnimation2 = function () {
//     gsap.to(".heading1", {
//         transform: "translateY(-100%)",
//         delay: 1,
//         duration:.3,
//     })
//     gsap.to(".loader", {
//         transform: "translateY(100%)",
//         delay: 1,
//         duration:.3,

//     })
//     gsap.to(preloader, {
//         transform:"translateY(-100%)",
//         delay:1.7,
//         ease:"power2.inOut",
//         onComplete:function(){
//             preloader.style.display = "none"
//         }
//     })
// }

// function counter() {
//     let count = 0
//     var progress = setInterval(function () {
//         setTimeout(function(){
//             count++;
//         },250)

//         progressText.textContent = count
//         gsap.to(".heading2", {
//             width: `${count}%`,
//         })
//         if (count === 100) {
//             clearInterval(progress)
//             preloaderAnimation2()
//         }
//     }, 60)
// }

// preloaderAnimation1()
// setTimeout(counter, 600)

// HORIZONTAL SCROLL

const stickySection = document.querySelector(".engage-page-bottom-content");
const horizontalScrollSection = stickySection.querySelector(
    ".horizontail-scroll-section"
);

const cardsData = [
    {
        title: "Contribute as a Developer",
        description:
            "Bring your coding skills and contribute to open-source projects or exciting real-world applications.",
        btnText: "Contribute Now",
    },

    {
        title: "AI/ML Research and Innovation",
        description:
            "Explore the intersection of AI and coding by working on groundbreaking research and experiments",
        btnText: "Innovate with AI",
    },

    {
        title: "Mentorship Opportunities",
        description:
            "Share your expertise and help guide the next generation of tech innovators.",
        btnText: "Become a Mentor",
    },

    {
        title: "Content Creators",
        description:
            "Create tutorials, write blogs, or host webinars to help others grow.",
        btnText: "Start Creating",
    },

    {
        title: "Community Engagement",
        description:
            "Organize events, manage the community, or just get involved in making connections!",
        btnText: "Engage with Us",
    },
];

cardsData.map((cardData, index) => {
    const card = `<div class="card-container w-screen h-full flex items-center justify-center">
                            <div class="engage-page-card w-[90vw] min-[500px]:w-96 lg:w-[28rem] h-[34rem] md:h-[36rem] lg:h-[40rem] rounded-md bg-zinc-50">
                            <div
                                class="engage-page-card-content w-full h-full py-2.5 flex flex-col items-center justify-between">
                                <h1 class="text-[2.5rem] lg:text-[3rem] leading-none text-center font-[Helvetica] font-bold">
                                    ${cardData.title}
                                </h1>
                                <div
                                    class="engage-page-card-btn w-fit aspect-square rounded-full flex items-center justify-center px-4 bg-[#E3E3E3]">
                                    <button class="font-[Gilroy] font-semibold text-2xl md:text-2xl lg:text-[1.67rem]">
                                        ${cardData.btnText}
                                    </button>
                                </div>
                                <p class="w-[90%] font-[Helvetica] font-medium leading-tight text-lg lg:text-xl text-center">
                                    ${cardData.description}
                                </p>
                            </div>
                        </div>
                        </div>`;

    horizontalScrollSection.innerHTML += card;
});

function transformCards() {
    const offsetTop = stickySection.parentElement.offsetTop;
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
    horizontalScrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}

window.addEventListener("scroll", transformCards);
