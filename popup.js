document.getElementById('color_code_input').addEventListener('change', getColorCode)

function getColorCode(e) {
  // document.getElementById('color_code_input').addEventListener('change', getColorCode)

  // let code = document.getElementById('color_code_input').value
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {color: e.target.value})
  })
}