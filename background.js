const attachedTabs = new Set();

const sendMouseEvent = async ({ tabId, type, x, y }) => {
  await chrome.debugger.sendCommand({ tabId }, 'Input.dispatchMouseEvent', {
    type,
    x,
    y,
    button: 'left',
    clickCount: 1
  });
};

// 確保只 attach 一次
async function ensureAttached(tabId) {
  if (attachedTabs.has(tabId)) return;

  return new Promise((resolve) => {
    chrome.debugger.attach({ tabId }, '1.2', () => {
      if (chrome.runtime.lastError) {
        // 可能已經 attach，忽略
        console.log("attach error:", chrome.runtime.lastError.message);
      } else {
        attachedTabs.add(tabId);
        console.log("attached to tab:", tabId);
      }
      resolve();
    });
  });
}

// 可選：tab 關閉時清掉紀錄
chrome.tabs.onRemoved.addListener((tabId) => {
  attachedTabs.delete(tabId);
});

// 核心事件
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const tabId = sender.tab.id;
  const { x, y } = request;

  (async () => {
    await ensureAttached(tabId);

    await sendMouseEvent({ tabId, type: 'mousePressed', x, y });
    await sendMouseEvent({ tabId, type: 'mouseReleased', x, y });
  })();

  return true;
});

chrome.debugger.onDetach.addListener((source, reason) => {
  attachedTabs.delete(source.tabId);
  console.log("detached:", reason);
});