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

  document.getElementById("defaultOpen").click();
