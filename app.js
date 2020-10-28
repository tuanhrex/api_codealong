
function fetchBook(genre){
    fetch(`http://openlibrary.org/subjects/${genre}.json`)
    .then((res) => res.json())
    .then((json) => {
        const randomBook = getRandomBook(json.works);
        const title = randomBook.title;
        const author = getAuthor(randomBook);
        console.log(randomBook.title);
        const cover = `http://openlibrary.org/b/ID/${randomBook.cover_id}-M.jpg`
        console.log(cover);
        console.log(author);
        
        
        
        appendBookToDom(title, author, cover)
        
        
    })
}



function getRandomBook(books) {
    const randomIndex = Math.floor(Math.random() * books.length);
    return books[randomIndex]
}

function appendBookToDom(title, author, cover) {
    const titleH1 = document.createElement('h3');
    titleH1.textContent = title;
    document.querySelector('#display-book').appendChild(titleH1);

    const coverImg = document.createElement('img');
    coverImg.src = cover;
    coverImg.alt = title;
    document.querySelector('#display-book').appendChild(coverImg);

    const authorDiv = document.createElement('h3');
    authorDiv.text = `By: ${author}`
    document.querySelector('#dispay-book').appendChild(authorDiv);
    
}

function getAuthor(book) {
    return book.authors[0].name
}

let genre = 'mystery'
const book = fetchBook(genre);