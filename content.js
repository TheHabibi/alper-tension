document.addEventListener("click", function (event) {
  const isYouTubeSearchBar =
    event.target.tagName === "INPUT" &&
    event.target.type === "text" &&
    event.target.id === "search";

  if (isYouTubeSearchBar) {
    const videoTitle = document.title;

    chrome.runtime.sendMessage({
      action: "searchYouTube",
      videoTitle: videoTitle,
    });
  }
});
