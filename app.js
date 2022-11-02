const inputBox = document.getElementById("searchTerm")
const button = document.getElementById('button')
const results = document.getElementById("results")

const getData = (searchTerm) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3ad125af40msha3fe0c6e8a0b18ep15f567jsn1747f4551c09",
      "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
    },
  };

  fetch(
    `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${searchTerm}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {

      const data = response.list.map(
        (item) =>
          `<div class="Item">
                <div class="word">
                    <h3>${item.word}</h3>
                </div>
                <div class="definition">
                    <p>${item.definition}</p>
                </div>
                <div class="examples">
                    <p>${item.example}</p>
                </div>
                <div class="author">
                    <h4><p>author:</p>${item.author}</h4>
                </div>
                <div class="Likes">
                    <p><span>${item.thumbs_up}</span> Likes</p><p><span>${item.thumbs_down}</span> DisLikes</p>
                </div>
            </div>`
      );
       results.innerHTML = data.length !== 0 ? data : `Sorry we couldnt find a definition for '${inputBox.value}'`; 
            console.log(response.list)
    })
    .catch((err) => console.error(err));
};

button.addEventListener('click', ()=>{
 let searchTerm = inputBox.value;
    getData(searchTerm)
    console.log(searchTerm)

    setTimeout(() => {
      inputBox.value == "";
    }, 1000);
})

// setTimeout(()=>{
//     inputBox.value = ''
// }, 3000)
