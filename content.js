// content.js

// Function to handle video page logic
function handleVideoPage() {
  console.log('Current Path:', location.pathname);
  if (location.pathname === '/watch') {
    document.addEventListener('click', (event) => {
      const tgt = event.target;
      const isSearchBar =
        tgt.tagName === 'INPUT' &&
        tgt.type === 'text' &&
        tgt.classList.contains('yt-searchbox-input') &&
        tgt.getAttribute('name') === 'search_query';

      console.log('Clicked:', tgt);
      console.log('Matches searchbar?', isSearchBar);

      if (isSearchBar) {
        const videoTitle = document.title;
        console.log('Triggering search for:', videoTitle);
        chrome.runtime.sendMessage({
          action: 'searchYouTube',
          videoTitle,
        });
      }
    }, true);
  }
}

// Initial check
handleVideoPage();

// Listen for YouTube's navigation event
document.addEventListener('yt-navigate-finish', handleVideoPage);