document.getElementById('searchButton').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const titleResp = await chrome.runtime.sendMessage({ action: 'getVideoTitle' });
  
  chrome.runtime.sendMessage({
    action: 'searchYouTube',
    videoTitle: titleResp.videoTitle
  });
});