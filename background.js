chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "searchYouTube") {

    const videoTitle = request.videoTitle;

    const encodedVideoTitle = encodeURIComponent(videoTitle);

    const searchURL = `https://www.youtube.com/results?search_query=${encodedVideoTitle}`;

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

      chrome.tabs.update(tabs[0].id, { url: searchURL });
    });
  }
});
