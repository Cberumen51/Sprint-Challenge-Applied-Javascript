// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const topics = document.querySelector('.tabs')

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then((res) => {
        console.log(res)
        const user = res.data.topics;
    const topic = newTopic(user);
    topics.appendChild(topic)
    })
    .catch((err) => console.log(err))

const topicArray = ['javascript','bootstrap','technology','jquery','node.js']

// topicArray.forEach( topics=> {
//     axios
//     .get(`https://lambda-times-backend.herokuapp.com/${topics}`)
//     .then (res => {
//         const data = res.data;
//         const topic = newTopic(data);
//         topics.appendChild(topic)
//     })
//     .catch((err) => console.log(err))
    
// });

function newTopic(object){
    const topic = document.createElement('div')
    topic.classList.add('tab')
    topic.textContent = object.data

    console.log(topic)
    return topic
}