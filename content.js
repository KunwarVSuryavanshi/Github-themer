chrome.runtime.onMessage.addListener(cont_func)

function cont_func(request) {
  let selectors = document.getElementsByTagName('body')

  selectors[0].style['background-color'] = request.color.includes('#',0) ? request.color : `#${request.color}`
}