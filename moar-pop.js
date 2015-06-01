chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.insertCSS({ code: '* { transition: transform 1s ease-in-out !important }' })
  chrome.tabs.insertCSS({ code: '*:hover { transform: rotate(360deg) !important }' })
})
