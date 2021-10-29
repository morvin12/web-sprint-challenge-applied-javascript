// import axios from "axios"
// const Tabs = (topics) => {

// const tabTopics = document.createElement('div');
// const tab = document.createElement('div');

// tabTopics.classList.add('topics');
// tab.classList.add('tab');

// tab.textContent = topic;

// tabTopics.appendChild(tab);





  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

import axios from "axios"
const Tabs = (topics) => {
// topics.array.forEach(topic => {
const tabTopics = document.createElement('div');
const tab = document.createElement('div');

tabTopics.classList.add('topics');
tab.classList.add('tab');

tab.textContent = topic;

tabTopics.appendChild(tab);

topics.array.forEach(topic => {
  
});
return tabTopics
}


  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
const tabs = document.querySelector('.tabs-container');
const tabsAppender = (selector) => {
  axios.get('http://localhost:5000/api/topics')
  .then(res => {
    console.log(res)
  })
}

export { Tabs, tabsAppender }
