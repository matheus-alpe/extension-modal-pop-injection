declare var chrome: any;

export function get(key: string): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.get(key, resolve);
    } catch (error) {
      reject(error);
    }
  });
}

export function set(key: string, value: any): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.set({ [key]: value }, resolve);
    } catch (error) {
      reject(error);
    }
  });
}

export function emitMessage(message: string) {
  chrome.runtime.sendMessage({ message: message });
}
