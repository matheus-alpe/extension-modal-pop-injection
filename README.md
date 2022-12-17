# Chrome extension injecting an React Modal
<sub>Note: This setup can be done with any framework, this repo it only for showing how can be done.</sub>

- Manifest v3;
- Send message between modal and background.js (service_worker);
- Modal setting `chrome.storage`;

![gif](README/modal_injection.gif)

### Steps to see fully working:

1. Build project `yarn build`;
2. On Chrome, go to `Manage Extensions`;
3. Enable `Developer Mode`;
4. Click on `Load unpacked`;
5. Select `dist` folder generated from first step;
