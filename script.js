// PRELOADER
function prealoder() {
    var preloader = document.querySelector(".preloader");
    var progressText = document.querySelector(".progress-text");

    function disableScroll() {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
    }

    function enableScroll() {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
    }

    var preloaderAnimation1 = function () {
        gsap.from(".heading1", {
            transform: "translateY(-100%)",
            delay: 0.4,
        });
        gsap.from(".loader", {
            transform: "translateY(100%)",
            delay: 0.4,
        });
    };
    var preloaderAnimation2 = function () {
        gsap.to(".heading1", {
            transform: "translateY(-100%)",
            delay: 1,
            duration: 0.3,
        });
        gsap.to(".loader", {
            transform: "translateY(100%)",
            delay: 1,
            duration: 0.3,
        });
        gsap.to(preloader, {
            transform: "translateY(-100%)",
            delay: 1.7,
            ease: "power2.inOut",
            onComplete: function () {
                preloader.style.display = "none";
                enableScroll();
            },
        });
    };

    function counter() {
        let count = 0;
        var progress = setInterval(function () {
            setTimeout(function () {
                count++;
            }, 250);

            progressText.textContent = count;
            gsap.to(".heading2", {
                width: `${count}%`,
            });
            if (count === 100) {
                clearInterval(progress);
                preloaderAnimation2();
            }
        }, 20);
    }

    preloaderAnimation1();
    setTimeout(counter, 600);
    disableScroll();
}

// prealoder();

// HORIZONTAL SCROLL

function scrollHorizontal() {
    const stickySection = document.querySelector(".engage-page-middle-content");
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
                            <div class="engage-page-card w-[90vw] h-[34rem] sm:h-[45rem] lg:h-[92%] lg:h-[40rem] rounded-md bg-zinc-50">
                            <div
                                class="engage-page-card-content w-full h-full py-2.5 md:py-5 flex flex-col items-center justify-between">
                                <h1 class="w-[90%] sm:w-[65%] md:w-[60%] xl:w-[45%] text-[2.5rem] lg:text-[4rem] leading-none text-center font-[Helvetica] font-bold">
                                    ${cardData.title}
                                </h1>
                                <div
                                    class="engage-page-card-btn cursor-pointer w-fit aspect-square rounded-full flex items-center justify-center px-4 bg-[#E3E3E3]">
                                    <button class="font-[Gilroy] font-semibold text-2xl md:text-2xl lg:text-[1.67rem] min-[1600px]:text-3xl">
                                        ${cardData.btnText}
                                    </button>
                                </div>
                                <p class="w-[90%] sm:w-[65%] md:w-[60%] xl:w-[38%] font-[Helvetica] font-normal leading-tight text-lg lg:text-2xl text-center">
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
}

scrollHorizontal();

// ABOUT PAGE CARDS

function aboutPageCards() {
    const aboutPageCardsContainer = document.querySelector(
        ".about-page-bottom-content-container"
    );

    const CardsData = [
        {
            title: "Collaborative Learning",
            description:
                "Engage with like-minded individuals and enhance your skills through shared knowledge.",
            isWhiteCard: true,
        },

        {
            title: "Networking Opportunities",
            description:
                "Connect with industry professionals and peers, expanding your network and potential career paths.",
            isWhiteCard: false,
        },

        {
            title: "Skill Development",
            description:
                "Gain practical experience and improve your technical abilities in a supportive environment.",
            isWhiteCard: false,
        },

        {
            title: "Innovative Challenges",
            description:
                "Participate in hackathons and competitions that encourage creativity and critical thinking.",
            isWhiteCard: true,
        },

        {
            title: "Hands-On Projects",
            description:
                "Work on exciting projects that bridge the gap between web development and AI/ML technologies.",
            isWhiteCard: true,
        },

        {
            title: "Exclusive Resources",
            description:
                "Access a curated collection of tutorials, tools, and guides to support your learning journey.",
            isWhiteCard: false,
        },
    ];

    CardsData.map((cardData, index) => {
        const whiteCard = `<div
                        class="about-page-card group lg:relative ${index == 0
                ? "lg:top-[15vw]"
                : index == 3
                    ? "lg:top-[-8.5vw]"
                    : index == 4
                        ? "lg:top-[-2.5vw]"
                        : ""
            } w-[90vw] min-[500px]:w-96 lg:w-[28rem] h-[34rem] md:h-[36rem] lg:h-[38rem] rounded-md bg-zinc-50">
                        <div
                            class="about-page-card-content w-full h-full py-2.5 flex flex-col items-center justify-between">
                            <h1
                                class="w-[90%] text-[2.5rem] lg:text-[3rem] leading-none font-[Helvetica] font-bold text-zinc-950">
                                ${cardData.title}
                            </h1>
                            <div
                                class="about-page-card-btn w-20 md:w-24 cursor-pointer h-20 md:h-24 rounded-full flex items-center justify-center p-6 md:p-7 bg-[#E3E3E3] group-hover:rotate-90 transition-transform duration-300">
                                <img class="w-full h-full object-cover" src="assets/images/plusIcon.png">
                            </div>
                            <p
                                class="w-[90%] font-[Helvetica] font-medium leading-tight text-lg lg:text-xl text-zinc-950">
                                ${cardData.description}
                            </p>
                        </div>
                    </div>`;

        const grayCard = `<div
                        class="about-page-card group ${index == 2
                ? "lg:mt-[12vw]"
                : index == 5
                    ? "lg:mt-[-35vw]"
                    : ""
            } w-[90vw] min-[500px]:w-96 lg:w-[28rem] h-[34rem] md:h-[36rem] lg:h-[38rem] rounded-md bg-[#CBCBCB]">
                        <div
                            class="about-page-card-content w-full h-full py-2.5 flex flex-col items-center justify-between">
                            <h1
                                class="w-[90%] text-[2.5rem] lg:text-[3rem] leading-none font-[Helvetica] font-bold text-zinc-950">
                                ${cardData.title}
                            </h1>
                            <div
                                class="about-page-card-btn w-20 md:w-24 cursor-pointer h-20 md:h-24 rounded-full flex items-center justify-center p-6 md:p-7 bg-[#FFFFF7] group-hover:rotate-90 transition-transform duration-300">
                                <img class="w-full h-full object-cover" src="assets/images/plusIcon.png">
                            </div>
                            <p
                                class="w-[90%] font-[Helvetica] font-medium leading-tight text-lg lg:text-xl text-zinc-950">
                                ${cardData.description}
                            </p>
                        </div>
                    </div>`;

        if (window.innerWidth < 1024) {
            if (index % 2 == 0) {
                cardData.isWhiteCard = true;
            } else {
                cardData.isWhiteCard = false;
            }
        }

        cardData.isWhiteCard
            ? (aboutPageCardsContainer.innerHTML += whiteCard)
            : (aboutPageCardsContainer.innerHTML += grayCard);
    });
}

aboutPageCards();

// TEXT FADE EFFECT

function textFadeEffect() {
    let para = document.querySelector(".engage-page-bottom p");
    const paraContent = para.textContent;

    para.innerHTML = paraContent
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");

    gsap.to(".engage-page-bottom>p>span", {
        color: "#fff",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".engage-page-bottom>p",
            start: "top 85%",
            end: "bottom 60%",
            // markers: true,
            scrub: 0.6,
        },
    });
}

textFadeEffect();

// LANDING PAGE BACKGROUND ANIMATION

function landingPageBackgroundAnimation() {
    // Configuration variables
    const GRID_SIZE = 50; // Size of each grid cell in pixels
    const BASE_OPACITY = 0.09; // Base opacity for grid lines
    const MAIN_CONTENT_OPACITY = 0.095; // Opacity for grid lines in the main content area
    const ANIMATION_DURATION = 0.6; // Duration of the ray animation in seconds
    const ANIMATION_INTERVAL = 2; // Interval between animations in seconds
    const RAY_COLOR = "#dadada"; // Color of the ray
    const RAY_WIDTH = 1; // Width of the ray in pixels
    const RAY_LENGTH = 300; // Length of the ray in pixels
    const NUM_RAYS = 2; // Number of rays to animate simultaneously
    const RAY_DELAY = 0.2; // Delay between ray appearances in seconds

    // Horizontal ray controls
    const H_RAY_START_OFFSET = 500; // Distance from the left of the screen to begin the horizontal ray (-1 for default behavior)
    const H_RAY_END_OFFSET = -100; // Distance from the right of the screen to end the horizontal ray (-1 for default behavior)
    const H_FADE_IN_DURATION = 0.1; // Duration of the fade-in effect for horizontal rays in seconds
    const H_FADE_OUT_DURATION = 0.1; // Duration of the fade-out effect for horizontal rays in seconds

    // Vertical ray controls
    const V_RAY_START_OFFSET = 300; // Distance from the top of the screen to begin the vertical ray (-1 for default behavior)
    const V_RAY_END_OFFSET = -50; // Distance from the bottom of the screen to end the vertical ray (-1 for default behavior)
    const V_FADE_IN_DURATION = 0.12; // Duration of the fade-in effect for vertical rays in seconds
    const V_FADE_OUT_DURATION = 0.12; // Duration of the fade-out effect for vertical rays in seconds

    document.addEventListener("DOMContentLoaded", () => {
        const canvas = document.getElementById("backgroundCanvas");
        const ctx = canvas.getContext("2d");

        let horizontalLines = [];
        let verticalLines = [];
        let activeRays = [];
        let isAnimating = false;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initializeLines();
        }

        function initializeLines() {
            horizontalLines = [];
            verticalLines = [];

            for (let y = 0; y <= canvas.height; y += GRID_SIZE) {
                horizontalLines.push({ y, opacity: BASE_OPACITY });
            }

            for (let x = 0; x <= canvas.width; x += GRID_SIZE) {
                verticalLines.push({ x, opacity: BASE_OPACITY });
            }
        }

        function drawLine(x1, y1, x2, y2, opacity) {
            const centerX = (x1 + x2) / 2;
            const isMainContent =
                centerX > canvas.width * 0.2 && centerX < canvas.width * 0.8;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(255, 255, 255, ${isMainContent ? MAIN_CONTENT_OPACITY : opacity
                })`;
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        function drawRay(x1, y1, x2, y2, opacity) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(${parseInt(
                RAY_COLOR.slice(1, 3),
                16
            )}, ${parseInt(RAY_COLOR.slice(3, 5), 16)}, ${parseInt(
                RAY_COLOR.slice(5, 7),
                16
            )}, ${opacity})`;
            ctx.lineWidth = RAY_WIDTH;
            ctx.stroke();
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            horizontalLines.forEach((line) => {
                drawLine(0, line.y, canvas.width, line.y, line.opacity);
            });

            verticalLines.forEach((line) => {
                drawLine(line.x, 0, line.x, canvas.height, line.opacity);
            });

            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            activeRays.forEach((ray) => {
                const tailStart = ray.isHorizontal
                    ? { x: Math.max(ray.start.x - RAY_LENGTH, 0), y: ray.start.y }
                    : { x: ray.start.x, y: Math.max(ray.start.y - RAY_LENGTH, 0) };
                drawRay(
                    tailStart.x,
                    tailStart.y,
                    ray.start.x,
                    ray.start.y,
                    ray.opacity
                );
            });
            ctx.restore();

            requestAnimationFrame(animate);
        }

        function createRay() {
            const isHorizontal = Math.random() < 0.5;
            const lineIndex = isHorizontal
                ? Math.floor(Math.random() * horizontalLines.length)
                : Math.floor(Math.random() * verticalLines.length);
            const line = isHorizontal
                ? horizontalLines[lineIndex]
                : verticalLines[lineIndex];

            const startOffset = isHorizontal
                ? H_RAY_START_OFFSET === -1
                    ? -RAY_LENGTH
                    : H_RAY_START_OFFSET
                : V_RAY_START_OFFSET === -1
                    ? -RAY_LENGTH
                    : V_RAY_START_OFFSET;
            const endOffset = isHorizontal
                ? H_RAY_END_OFFSET === -1
                    ? RAY_LENGTH
                    : H_RAY_END_OFFSET
                : V_RAY_END_OFFSET === -1
                    ? RAY_LENGTH
                    : V_RAY_END_OFFSET;

            const rayStart = {
                x: isHorizontal ? startOffset : line.x,
                y: isHorizontal ? line.y : startOffset,
            };

            const rayEnd = {
                x: isHorizontal ? canvas.width + endOffset : line.x,
                y: isHorizontal ? line.y : canvas.height + endOffset,
            };

            return { start: rayStart, end: rayEnd, isHorizontal, opacity: 0 };
        }

        function animateRay() {
            if (activeRays.length < NUM_RAYS && isAnimating) {
                const newRay = createRay();
                activeRays.push(newRay);

                const fadeInDuration = newRay.isHorizontal
                    ? H_FADE_IN_DURATION
                    : V_FADE_IN_DURATION;
                const fadeOutDuration = newRay.isHorizontal
                    ? H_FADE_OUT_DURATION
                    : V_FADE_OUT_DURATION;

                const timeline = gsap.timeline();

                // Fade in
                timeline.to(newRay, {
                    opacity: 1,
                    duration: fadeInDuration,
                    ease: "power1.inOut",
                });

                // Move across screen
                timeline.to(
                    newRay.start,
                    {
                        x: newRay.end.x,
                        y: newRay.end.y,
                        duration: ANIMATION_DURATION - fadeInDuration - fadeOutDuration,
                        ease: "none",
                    },
                    "-=" + fadeInDuration
                );

                // Fade out
                timeline.to(
                    newRay,
                    {
                        opacity: 0,
                        duration: fadeOutDuration,
                        ease: "power1.inOut",
                        onComplete: () => {
                            const index = activeRays.indexOf(newRay);
                            if (index > -1) {
                                activeRays.splice(index, 1);
                            }
                            if (activeRays.length === 0 && isAnimating) {
                                isAnimating = false;
                                gsap.delayedCall(ANIMATION_INTERVAL, startNewAnimationCycle);
                            }
                        },
                    },
                    "-=" + fadeOutDuration
                );

                if (activeRays.length < NUM_RAYS) {
                    gsap.delayedCall(RAY_DELAY, animateRay);
                }
            }
        }

        function startNewAnimationCycle() {
            isAnimating = true;
            animateRay();
        }

        resizeCanvas();
        animate();
        startNewAnimationCycle();

        window.addEventListener("resize", resizeCanvas);
    });
}

landingPageBackgroundAnimation();