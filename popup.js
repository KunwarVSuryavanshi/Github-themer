console.log("Running pop up.js file")

window.addEventListener("load", function() { 
  console.log("window on load")
  document.getElementById('color_code_input').addEventListener('change', getBgColorCode)

  // chrome.storage.local.get('bg_color', (result) => {
  //   document.getElementById('color_code_input').value = result.bg_color
  //   console.log(result.bg_color)
  // })
});

function getBgColorCode(e){
  console.log("get bg color function")
  if(e?.target?.value)
  {
    chrome.storage.sync.set({'bg_color': e.target.value}, () => getColorCode('bg_color'))
  }
}

function getColorCode(location) {
  // document.getElementById('color_code_input').addEventListener('change', getColorCode)
  // let code = document.getElementById('color_code_input').value
  console.log("Getcolrocode")
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {property: location})
  })
}