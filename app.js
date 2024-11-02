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

    let tlBg = gsap.timeline();
    tlBg.to(".text-wrapper", { backgroundPositionY: "80%", backgroundPositionX: "95%", backgroundSize: "150%", yoyo: true, duration: 60, repeat: -1, repeatDelay: 5, ease: "none" });

    let tlLetter = gsap.timeline();
    tlLetter.to(".letter", { scale:1.1, repeat: -1, stagger:0.1, repeatDelay: 5, yoyo: true, ease: "bounce.out" })
    tlLetter.to(".letter", { rotateY: 360, stagger: -0.1, yoyo: false, repeat: -1, repeatDelay: 11.9, delay: 5.1 })
    // tlLetter.to(".letter", { textShadow: "0px 0px 20px #110039, 0px 0px 20px #D235DB", stagger: 0.1, yoyo: true, repeat: -1, repeatDelay: 0, duration: 2  })
    // tlLetter.to(".letter", { textShadow: "0px 0px 15px #003648, 0px 0px 15px rgba(88, 234, 255, 0.8)", stagger: 0.1, yoyo: true, repeat: -1, repeatDelay: 0.2, duration: 2  })
    // tlLetter.to(".letter", { textShadow: "0px 0px 15px #18331C, 0px 0px 15px rgba(122, 253, 139, 0.6)", stagger: 0.1, yoyo: true, repeat: -1, repeatDelay: 0.2, duration: 2  })
    // let tlRemi = gsap.timeline();
    // tlRemi.to(".remi", {scale: 1.05, duration: 1, yoyo: true, repeat: -1});
});