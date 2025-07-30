window.addEventListener("load", () => {


    //GSAP
    var textWrapper = document.querySelector('.code .letters');
    var helperText = document.querySelectorAll('.helper-text span');
    if (helperText.length > 0) {
        helperText.forEach(text => {
            text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        });
    }
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    let tlLetter;

// Animación inicial de las letras
function setupLetterAnimations() {
  // Limpiamos cualquier animación existente en las letras
  gsap.killTweensOf(".letter");
  
  // Resetear estado inicial de las letras (ahora con visibility: hidden)
  gsap.set(".letter", {
    y: "110%",
    opacity: 0,
    rotationZ: 10,
    visibility: "hidden"
  });

  tlLetter = gsap.timeline();
  
  // Primero hacemos visible las letras
  tlLetter.set(".letter", { visibility: "visible" });
  
  // Animación de entrada
  tlLetter.fromTo('.letter', {
    y: '110%',
    opacity: 0,
    rotationZ: 10
  }, {
    y: '0%',
    opacity: 1,
    rotationZ: 0,
    duration: 0.5,
    ease: 'power1.inOut',
    stagger: 0.05,
  });

  // Animación de flotación
  tlLetter.to(".letters .letter", {
    y: (i) => Math.sin(i * 0.5) * 8,
    duration: 0.5,
    stagger: 0.1,
    repeat: -1,
    yoyo: true,
    ease: "none"
  }, "+=0.5");
}

// Función para desaparecer el wrap
function hideWrap() {
  // Pausamos la animación de letras
  if (tlLetter) tlLetter.pause();

  gsap.to(".wrap", {
    scale: 0,
    rotation: 360,
    opacity: 0,
    duration: 1.5,
    ease: "power3.in",
    onComplete: () => {
      gsap.set(".wrap", { visibility: "hidden" });
      setTimeout(showWrap, 2000);
    }
  });
}

// Función para mostrar el wrap y reiniciar animaciones
function showWrap() {
  // Resetear propiedades del wrap y ocultar letras
  gsap.set(".wrap", { 
    visibility: "visible", 
    scale: 0, 
    opacity: 0, 
    rotation: 0 
  });
  gsap.set(".letter", { visibility: "hidden" });

  // Animación de entrada del wrap
  gsap.to(".wrap", {
    scale: 1,
    opacity: 1,
    duration: 1.2,
    ease: "elastic.out(1, 0.5)",
    onComplete: () => {
      // Reiniciamos las animaciones de letras después de que el wrap aparezca
      setupLetterAnimations();
      setTimeout(hideWrap, 15000);
    }
  });
}

// Inicializamos por primera vez
setupLetterAnimations();
setTimeout(hideWrap, 15000);


});