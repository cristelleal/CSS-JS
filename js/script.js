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

window.addEventListener('scroll', function() {
  const scrolledY = window.scrollY;
  const firstPatternBackground = document.querySelector('.head');
  const secondPatternBackground = document.querySelector('.pattern');
  firstPatternBackground.style.backgroundPosition = 'right ' + scrolledY + 'px';
  secondPatternBackground.style.backgroundPosition = 'right ' + scrolledY + 'px';
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

const slideText = document.getElementById('name');
const slideWork = document.getElementById('work');
slideText.classList.add('active');
slideWork.classList.add('active');

const firstPartOfProjects = document.querySelectorAll('.bloc-one');

window.addEventListener('scroll', () => {
  const {scrollTop, clientHeight} = document.documentElement;

  firstPartOfProjects.forEach(element => {
    const topElementToTopViewport = element.getBoundingClientRect().top;

    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.60) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
});

const secondPartOfProjects = document.querySelectorAll('.bloc-two');

window.addEventListener('scroll', () => {
  const {scrollTop, clientHeight} = document.documentElement;

  secondPartOfProjects.forEach(element => {
    const topElementToTopViewport = element.getBoundingClientRect().top;

    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.60) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
});
}


