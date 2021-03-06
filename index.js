const openTab = (event, tabName ) => {
    const tabFill = document.getElementsByClassName("tab-fill");

    Object.keys(tabFill).forEach((tab) => {
      tabFill[tab].style.display = "none";
    })

    const tabLink = document.getElementsByClassName("tab-link");

    Object.keys(tabLink).forEach((link) => {
      tabLink[link].className = tabLink[link].className.replace(" active", "");
    })

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

const mobileAcc = document.getElementsByClassName("tab-mobile");

for (let j = 0; j < mobileAcc.length; j++) {
  mobileAcc[j].onclick = function() {
    this.classList.toggle("active");
    const tabMobileFill = this.nextElementSibling;
    tabMobileFill.style.display === "block" ? tabMobileFill.style.display = "none" :  tabMobileFill.style.display = "block";
  }
}

  document.getElementById("defaultOpen").click();

  for(let i = 0; i < 7; i++) {
    const figNode = document.createElement('figure');
    const figCaptionNode = document.createElement('figcaption');
    const textNode = document.createTextNode('Lorem ipsum dolor sit con migo tu lo pasaras mejor ');
    const figImg = document.createElement('div');


    figCaptionNode.appendChild(textNode);
    figNode.appendChild(figCaptionNode);
    figNode.appendChild(figImg);
    figNode.classList.add('cards_card');

    document.getElementById("cards").appendChild(figNode);
  }

  const showNav = () => {
      const linkArea = document.getElementById("nav-area");
      if (linkArea.className === "nav-links") {
          linkArea.className += " show";
      } else {
          linkArea.className = "nav-links";
      }
  }
