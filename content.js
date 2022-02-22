chrome.runtime.onMessage.addListener(cont_func)
console.log("Running content js")

window.addEventListener('load', () => {
  console.log("Content reloaded")
  chrome.storage.sync.get('bg_color', (obj) => cont_func({property: 'bg_color'}))
})

function cont_func(request) {
  console.log("case",request)
  switch(request.property)
  {
    case 'bg_color':
      let selectors = document.getElementsByTagName('body')
      chrome.storage.sync.get('bg_color', (obj) => {selectors[0].style['background-color'] = obj.bg_color; console.log(obj.bg_color)})
      // selectors[0].style['background-color'] = request.value
      break;
    //case 'text_color':
    default:
      return
  }
}

// let bg_func = chrome.storage.local.get('bg_color', () => cont_func({property: 'bg_color'}))