chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.insertCSS({ code: '* { transition: transform 0.1s ease }' })
  chrome.tabs.insertCSS({ code: '*:hover { transform: rotate(180deg) }' })
})
