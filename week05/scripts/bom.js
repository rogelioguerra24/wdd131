const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


let chaptersArray = getChapterList() || [];

// Display stored chapters
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Add new chapter on button click
button.addEventListener('click', function () {
  if (input.value.trim() !== '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});

function displayList(item) {
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');

  li.textContent = item;
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete'); // Fixed typo

  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(item); // Use original item value
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList')) || [];
}

function deleteChapter(chapter) {
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}



/*button.addEventListener('click', function(){
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        
        list.append(li)    

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        input.value = '';
    }
    input.focus();
});*/
