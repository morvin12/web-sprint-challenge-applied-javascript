
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

import axios from "axios";

axios.get('http://localhost:5000/api/topics')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.error(err)
})
const webTabs = document.querySelector('.tabs-container');

const Tabs = (topics) => {

const tabTopics = document.createElement('div');
const tab1 = document.createElement('div');
const tab2 = document.createElement('div');
const tab3 = document.createElement('div')

tabTopics.classList.add('topics');
tabTopics.classList.add('tab');
tabTopics.classList.add('tab');
tabTopics.classList.add('tab');

tabTopics.appendChild(tab1);
tabTopics.appendChild(tab2);
tabTopics.appendChild(tab3);

topics.forEach(item => {
  const topicArr = document.createElement('tab');
  topicArr.textContent = item;
  topics.appendChild(topicArr);
})

}


const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

const tabsAppender = (selector) => {
axios.get(`http://localhost:5000/api/topics${topics}`)
.then(res => {
})
.catch(err => {

})

}
}

export { Tabs, tabsAppender }
