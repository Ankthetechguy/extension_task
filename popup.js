document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.sendMessage({ action: "getJoke" }, function(response) {
      const jokeContainer = document.getElementById('joke-container');
      jokeContainer.innerHTML = `<p>${response.setup}</p><p>${response.punchline}</p>`;
    });
  });
  