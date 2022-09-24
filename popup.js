console.log("Running pop up.js file")

window.addEventListener("load", function () {
  console.log("window on load")
  let bg_color = this.localStorage.getItem('bg_color', () => { })
  let a_color = this.localStorage.getItem('a_color', () => { })

  if (bg_color) {
    document.getElementById('color_code_input_bg').value = bg_color;
    getColorCode('bg_color');
  }
  if (a_color) {
    document.getElementById('color_code_input_a').value = a_color;
    getColorCode('a_color');
  }

  document.getElementById('color_code_input_bg').addEventListener('change', (e) => {
    chrome.storage.sync.set({ 'bg_color': e.target.value }, () => getColorCode('bg_color'))
    this.localStorage.setItem('bg_color', e.target.value)
  })
  document.getElementById('color_code_input_a').addEventListener('change', (e) => {
    chrome.storage.sync.set({ 'a_color': e.target.value }, () => getColorCode('a_color'))
    this.localStorage.setItem('a_color', e.target.value)
  })

  // chrome.storage.local.get('bg_color', (result) => {
  //   document.getElementById('color_code_input').value = result.bg_color
  //   console.log(result.bg_color)
  // })
});

// function getBgColorCode(e, region){
//   console.log("get bg color function")
//   if(e?.target?.value)
//   {
//     chrome.storage.sync.set({region: e.target.value}, () => getColorCode(region))
//   }
// }

function getColorCode(location) {
  // document.getElementById('color_code_input').addEventListener('change', getColorCode)
  // let code = document.getElementById('color_code_input').value
  console.log("GET COLOR CODE")
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {property: location})
  })
}