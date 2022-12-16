//background.js

async function getCurrentTab() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true, url: ["https://*/*", "http://*/*"]  });
  return tab;
}

function injectContentScript(tabId, file) {
  chrome.scripting.executeScript({
    target: { tabId },
    files: [file],
  });
}

async function initializeModal () {
  const tab = await getCurrentTab()
  if (!tab) return
  injectContentScript(tab.id, 'content.js')
}

async function deleteModal () {
  const tab = await getCurrentTab()
  if (!tab) return
  console.log('message', arguments)
  injectContentScript(tab.id, 'delete-content.js')
}

chrome.action.onClicked.addListener(initializeModal)

chrome.runtime.onMessage.addListener(deleteModal);