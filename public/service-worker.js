//background.js
let tabId = null

async function getCurrentTab() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true, url: ["https://*/*", "http://*/*"]  });
  return tab;
}

function injectContentScript(file) {
  if (!tabId) return
  chrome.scripting.executeScript({
    target: {
      tabId
    },
    files: [
      file
    ],
  });
}

chrome.action.onClicked.addListener(async () => {
  const tab = await getCurrentTab()
  if (!tab) return
  tabId = tab.id
  injectContentScript('content.js')
})

chrome.runtime.onMessage.addListener((param) => {
  console.log('message', param)
  injectContentScript('delete-content.js')
});