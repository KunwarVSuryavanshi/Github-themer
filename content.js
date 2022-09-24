chrome.runtime.onMessage.addListener(cont_func)
console.log("Running content js")

window.addEventListener('load', () => {
  console.log("Content reloaded")
  chrome.storage.sync.get('bg_color', () => cont_func({property: 'bg_color'}))
  chrome.storage.sync.get('bg_color', () => cont_func({property: 'a_color'}))
})

var oldHref = document.location.href;
console.log("Link--->",oldHref)
// window.onload = function () {
//   var bodyList = document.querySelector("body")
//   console.log("WINDOW ONLOAD");
//   var observer = new MutationObserver(function (mutations) {
//     mutations.forEach(function (mutation) {
//       if (oldHref != document.location.href) {
//         oldHref = document.location.href;
//         /* Changed ! your code here */
//       }
//     });
//   });

//   var config = {
//     childList: true,
//     subtree: true
//   };

//   observer.observe(bodyList, config);
// };


let selectors_bg = document.getElementsByTagName('body')
let selectors_dashboard = document.getElementById('dashboard')
let selector_sidePanel = document.getElementsByClassName('team-left-column')
let selector_dash_main = document.getElementsByClassName('flex-auto col-md-8 col-lg-8 px-3 px-lg-5')
let selector_side_main = document.getElementsByClassName('dashboard-sidebar')
let selector_side_main_a = document.getElementsByClassName('dashboard-sidebar > div > div > ul')
let repo_tab = document.getElementsByClassName('application-main')

// let new_bg = document.getElementsByClassName('color-bg-default')

function cont_func(request) {
  console.log("cont_function", request)
  switch(request.property)
  {
    case 'bg_color':
      chrome.storage.sync.get('bg_color', (obj) => {
        selectors_bg[0].style['background-color'] = obj.bg_color; 
        selectors_dashboard.style['background-color'] = obj.bg_color;
        selector_sidePanel[1].style['background-color'] = `${obj.bg_color} !important`;
        selector_dash_main[0].style['background-color'] = `${obj.bg_color} !important`;
        selector_side_main[1].style['background-color'] = `${obj.bg_color} !important`;
        repo_tab[0].style['background-color'] = `${obj.bg_color} !important`;
        // new_bg[0].style['background-color'] = `${obj.bg_color} !important`;
      })
      // selectors[0].style['background-color'] = request.value
      break;
    case 'a_color': 
      chrome.storage.sync.get('a_color', (obj) => {
        console.log('OBJ---->',obj)
        console.log(selector_side_main_a)
      })
    default:
      return
  }
}

// let bg_func = chrome.storage.local.get('bg_color', () => cont_func({property: 'bg_color'}))