window.addEventListener("load", () => {
    var textWrapper = document.querySelector('.code .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    let tlBg = gsap.timeline();
    tlBg.to(".text-wrapper", { backgroundPositionY: "50%", backgroundPositionX: "100%", backgroundSize: "200%", yoyo: true, duration: 30, repeat: -1, repeatDelay: 5, ease: "none" });

    let tlLetter = gsap.timeline();
    tlLetter.to(".letter", { rotateY: 360, stagger: 0.1, yoyo: false, repeat: -1, repeatDelay: 15 })

    // let tlRemi = gsap.timeline();
    // tlRemi.to(".remi", {scale: 1.05, duration: 1, yoyo: true, repeat: -1});
});