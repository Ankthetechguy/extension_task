chrome.runtime.onInstalled.addListener(function() {
    console.log('Extension installed!');
  });
  
  function fetchJoke() {
    return fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => data);
  }
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "getJoke") {
      fetchJoke().then(joke => {
        sendResponse(joke);
      });
      return true;
    }
  });
  