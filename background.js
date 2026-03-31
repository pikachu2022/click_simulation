const sendMouseEvent = async ({ tabId, type, x, y }) => {
  await chrome.debugger.sendCommand({ tabId }, 'Input.dispatchMouseEvent', {
    type,
    x,
    y,
    button: 'left',
    clickCount: 1 // 这个参数很重要，表示点击次数，如果不设置或者为0，则无法触发点击事件
  });
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const tabId = sender.tab.id; // 这里我们用sender.tab.id来获取目标网页的ID，这是一种简单的方法，不需要额外的权限
  const { x, y } = request;
  chrome.debugger.attach({ tabId }, '1.2', async () => {
    await sendMouseEvent({ tabId, type: 'mousePressed', x, y });
    await sendMouseEvent({ tabId, type: 'mouseReleased', x, y });
    await chrome.debugger.detach({ tabId });
  });
});
