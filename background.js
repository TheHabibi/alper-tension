chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'searchYouTube' && msg.videoTitle) {
    const url = 'https://www.youtube.com/results?search_query=' +
      encodeURIComponent(msg.videoTitle);

    chrome.tabs.update(sender.tab.id, { url }, () => {
      if (chrome.runtime.lastError) {
        console.error('Could not update tab:', chrome.runtime.lastError);
      } else {
        console.log('Tab redirected to:', url);
      }
    });
  }

  return false;
});