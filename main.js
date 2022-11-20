var books = [
{
  title: "Florida Dream",
  author: "Jacky's trip to Florida in the Summer of 2021",
  year: 2021,
  link: "florida.html",
  publisher: "Jiaqiguo",
  pages:"Florida, Miami",
  ebook:false,
  cover: "img/FL.jpg",
  description: "Every day, the Sunshine State attracts hundreds of newcomers to its sandy shores – and it's not hard to see why. " +
      "No state income tax, sunny weather, its diverse population," +
      " delectable food and exciting attractions make it a particularly interesting place to live."
},

{
  title: "Blooming in Washington",
  author: "Jacky's trip to Washington, DC in the Spring of 2022",
  year: 2022,
  link: "washington.html",
  publisher: "Jiaqiguo",
  pages: "Washington, DC, Cherry Blossom Festival",
  ebook:false,
  cover: "img/WashingtonDC.jpg",
  description: "The cherry blossom trees are without a doubt the stars of springtime in Washington, DC. " +
      "Visit the District during this time and you’ll find the nation’s capital is accented in pink " +
      "for the National Cherry Blossom Festival."
},



];

function createBookshelf(books, shelfSelector){
  let shelf= document.querySelector(shelfSelector);
  if (shelf){
    if(books instanceof Array){
      for (let book of books){
        const title = book.title;
        const link = book.link;
        const author = book.author;
        const cover = book.cover;
        const year = book.year;
        const pages = book.pages;
        const description = book.description;
        const publisher = book.publisher;
        // You will add your content here for
        let html=`<a href=${link} class="homelink">
        <div class="title">${title}</div>
        <div class="author">${author}</div>
        <img class="cover" align="left" src=${cover} alt="Jacky's photo collection">
        <div class="book-info">
            <span class="publisher">&copy;${year} ${publisher}</span>,
            <span class="pages">${pages} </span>
        </div></a><br>
        <div class="desc">
            <span>${description}</span>
        </div>`;


        let container = document.createElement("div");
        container.className="book";
        container.innerHTML = html;
        container.tabIndex = books.indexOf(book);
        shelf.append(container);
      }

    }

  }

}
