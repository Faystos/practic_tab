(function (){
  let tabNav = document.querySelectorAll('.tab'),
  tabContent = document.querySelectorAll('.tab_content'),
  tabData;

  tabNav.forEach(function (item) {
    item.addEventListener('click', selectTabNav);
  });

  function selectTabNav () {
    tabNav.forEach (function (item) {
      item.classList.remove('tab--active');
    }); 
    this.classList.add('tab--active');
    tabData = this.getAttribute('data-num');
    selectTabContent(tabData);
  }

  function selectTabContent (tabData) {
    tabContent.forEach(function (item) {
      item.classList.contains(tabData) ? item.classList.add('tab_content--active') : item.classList.remove('tab_content--active');      
    });  
  }

})();