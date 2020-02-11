handleLoad = (event) => {
    attachPopupEventListeners();
    displayPopups();
    attachClearLocalstorageEventListener();
}

attachPopupEventListeners = () => {
    popupCloses = document.getElementsByClassName('popup__close');
    for(let popupClose of popupCloses) {
        popupClose.addEventListener('click', handlePopupClose)
    }
}

handlePopupClose = (event) => {
    let target = event.target;
    let popup = target.parentElement.parentElement
    rememberPopupDismissal()
    hidePopup(popup);
}

displayPopups = () => {
    popupCloses = document.getElementsByClassName('popup__close');
    for(let popupClose of popupCloses) {
        let popup = popupClose.parentElement.parentElement;
        displayPopup(popup);
    }
}

displayPopup = (popup) => {
    const popupSetting = window.localStorage.getItem(popupKey);
    if (popupSetting && popupSetting === 'hide') { return; }

    showPopup(popup);
}

const popupKey = 'newFeaturePopup';

rememberPopupDismissal = () => {
    window.localStorage.setItem(popupKey, 'hide');
}

showPopup = (popup) => {
    popup.classList.remove('popup--hide');
}

hidePopup = (popup) => {
    popup.classList.add('popup--hide');
}

attachClearLocalstorageEventListener = () => {
    clearButton = document.getElementById('clear-localstorage');
    clearButton.addEventListener('click', clearLocalStorage);
}

clearLocalStorage = () => {
    window.localStorage.clear();
}

window.addEventListener('load', handleLoad);
