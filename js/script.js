window.onload = () => {

const switchInput = document.getElementById('switch');
      
    switchInput.addEventListener('change', () => {
        const body = document.body;
      
        if (switchInput.checked) {
              body.classList.add('dark');
              body.classList.remove('light');
        } else {
              body.classList.add('light');
              body.classList.remove('dark');
        }
    });

const enhance = (id) => {

    const element = document.getElementById(id);
    const text = element.innerText;
  
    element.innerText = "";
  
    for (let i = 0; i < text.length; i++) {
      const outer = document.createElement("span");
      outer.className = "outer";
  
      const inner = document.createElement("span");
      inner.className = "inner";
  
      const letter = document.createElement("span");
      letter.className = "letter";
      letter.innerText = text[i];
  
      inner.appendChild(letter);
      outer.appendChild(inner);
      element.appendChild(outer);
    }
  };

enhance("media-link");

// GSAP LIBRARY

gsap.set(".photo:not(:first-child)", {opacity:0, scale:0.5})

const animation = gsap.to(".photo:not(:first-child)", {
	opacity:1, scale:1, duration:1, stagger:1
})

ScrollTrigger.create({
	trigger:".gallery",
	start:"top top",
	end:"bottom bottom",
	pin:".right",
	animation: animation,
	scrub:true,
	markers:true
})


  
}