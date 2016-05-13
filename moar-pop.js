chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.executeScript({ code: 'document.body.classList.toggle("moar-pop")' })
  chrome.tabs.insertCSS({ file: 'moar-pop.css' })
})
