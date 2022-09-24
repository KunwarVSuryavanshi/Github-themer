console.log("background")

chrome?.browserAction?.onClicked?.addListener(btnFunction)

function btnFunction(tab) {
  console.log(tab.id)
  chrome.tabs.sendMessage(tab.id, true)
}