const allTabs = document.querySelectorAll('.tabheader__item');
const allTabContents = document.querySelectorAll('.tabcontent');
const tabsWrapper = document.querySelector('.tabheader__items');

function hideAllTabContents() {
  for (let singleContent of allTabContents) {
    singleContent.classList.add('hide');
    singleContent.classList.remove('show', 'fade');
  }

  for (let singleTab of allTabs) {
    singleTab.classList.remove('tabheader__item_active');
  }
}

function showSingleTabContent(tabIndex = 0) {
  allTabContents[tabIndex].classList.add('show', 'fade');
  allTabContents[tabIndex].classList.remove('hide');
  allTabs[tabIndex].classList.add('tabheader__item_active');
}

showSingleTabContent();
hideAllTabContents();
showSingleTabContent();

tabsWrapper.addEventListener('click', (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList.contains('tabheader__item')) {
    const clickedIndex = clickedElement.dataset.index;
    hideAllTabContents();
    showSingleTabContent(clickedIndex);
  }
});
