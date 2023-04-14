function addUp(a, b) {
  let easySum = a + b;

  return easySum;
}

console.log(addUp(12, 2));

// Write a javascript function that counts the words of the article only (not the comments) and updates DataLayer.article_data.word_count accordingly.
function wordCount() {
  // Get the article element
  const articleElement = document.getElementById("articleText");

  // Get the text content of the article
  const articleText = articleElement.textContent;

  // Split the text into words and count the number of words
  const wordCount = articleText.trim().split(/\s+/).length;

  // Update the DataLayer object with the new word count
  DataLayer.article_data.word_count = wordCount;

  return DataLayer.article_data.word_count;
}

console.log(wordCount());



// Declare DataLayer.article_data.original_article as true when window.location.href matches the content of DataLayer.journey_data.canonical_url

function originalArticleChanger() {
  if (window.location.href === DataLayer.journey_data.canonical_url) {
    DataLayer.article_data.original_article = true;
  }
}
