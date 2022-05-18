const tabItem = document.querySelectorAll(".tab-item");
const tabPane = document.querySelectorAll(".tab-pane");
const tabline = document.querySelector(".tab-item.active");
const line = document.querySelector(".tabs .line");
line.style.left = tabline.offsetLeft +"px";
line.style.width = tabline.offsetWidth +"px";

  tabItem.forEach((tab,index) => {
      const pane = tabPane[index];

  tab.onclick= ()=>{
      line.style.left = tab.offsetLeft +"px";
      line.style.width = tab.offsetWidth +"px";
      document.querySelector(".tab-item.active").classList.remove("active")
      document.querySelector(".tab-pane.active").classList.remove("active")
      tab.classList.add('active');
      pane.classList.add('active');
  }
  
});