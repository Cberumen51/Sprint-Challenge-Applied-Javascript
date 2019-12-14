// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerComponent = document.querySelector('.header-container')

// axios
//     .get()
// const component = res.data.header;
// const newComponent = header(component);
// headerComponent.appendChild(newComponent);


function createHeader() {
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');

    //  appending items
    header.appendChild(headerDate);
    header.appendChild(headerTitle);
    header.appendChild(headerTemp);

    // adding classes back in
    header.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    console.log(createHeader);

    return header;
}

