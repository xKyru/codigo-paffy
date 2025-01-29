window.addEventListener("load", () => {

    const totalImages = 38;
    function randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const conmeticUrl = `./img/cosmetics/cosmetic-${randomNumber(1, totalImages)}.png`;
    const cosmeticImg = document.querySelector("#cosmetic");
    // cosmeticImg.src = conmeticUrl;

    //GSAP
    var textWrapper = document.querySelector('.code .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // let tlBg = gsap.timeline();
    // tlBg.to(".text-wrapper", { backgroundPositionY: "80%", backgroundPositionX: "95%", backgroundSize: "150%", yoyo: true, duration: 60, repeat: -1, repeatDelay: 5, ease: "none" });
    
    // let tlCloud1 = gsap.timeline();
    // tlCloud1.to(".cloud-1", { x: -30, y: "50%", yoyo: true, duration: 20, repeat: -1, repeatDelay: 4, ease: "none" });
    // let tlCloud2 = gsap.timeline();
    // tlCloud2.to(".cloud-2", { x: 150, y: "35%", yoyo: true, duration: 22, repeat: -1, repeatDelay: 3, ease: "none" });
    // let tlCloud3 = gsap.timeline();
    // tlCloud3.to(".cloud-3", { x: 200, y: "25%", yoyo: true, duration: 25, repeat: -1, repeatDelay: 4, ease: "none" });
    // let tlCloud4 = gsap.timeline();
    // tlCloud4.to(".cloud-4", { x: -180, y: "15%", yoyo: true, duration: 21, repeat: -1, repeatDelay: 5, ease: "none" });
    // let tlCloud5 = gsap.timeline();
    // tlCloud5.to(".cloud-5", { x: -30, y: "30%", yoyo: true, duration: 23, repeat: -1, repeatDelay: 3, ease: "none" });

    let tlLetter = gsap.timeline();
    tlLetter.to(".letter", { scale:1.1, repeat: -1, stagger:0.1, repeatDelay: 5, yoyo: true, ease: "bounce.out" })
    tlLetter.to(".letter", { rotateY: 360, stagger: -0.1, yoyo: false, repeat: -1, repeatDelay: 11.9, delay: 5.1 })
    tlLetter.to(".letter", { textShadow: "0px 0px 3px rgba(0, 0, 0, 0.7), 0px 0px 3px #d0672b, 0px 0px 6px #d0672b, 0px 0px 10px #d0672b, 0px 0px 20px #f2de4b, 0px 0px 50px rgba(242, 222, 75, 0.5)", yoyo: true, repeat: -1, repeatDelay: 0, duration: 2  })
    // tlLetter.to(".letter", { textShadow: "0px 0px 15px #003648, 0px 0px 15px rgba(88, 234, 255, 0.8)", stagger: 0.1, yoyo: true, repeat: -1, repeatDelay: 0.2, duration: 2  })
    // tlLetter.to(".letter", { textShadow: "0px 0px 15px #18331C, 0px 0px 15px rgba(122, 253, 139, 0.6)", stagger: 0.1, yoyo: true, repeat: -1, repeatDelay: 0.2, duration: 2  })
    // let tlRemi = gsap.timeline();
    // tlRemi.to(".remi", {scale: 1.05, duration: 1, yoyo: true, repeat: -1});

    // Image fade
    // let img1 = gsap.timeline();
    // img1.to(".code .img1", {opacity: 0, repeat: -1, repeatDelay: 300, delay: 300, yoyo: true});

    // let img2 = gsap.timeline();
    // img2.to(".code .img2", {opacity: 1, repeat: -1, repeatDelay: 300, delay: 300, yoyo: true});

    particlesJS.load('particles-js', './particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
});