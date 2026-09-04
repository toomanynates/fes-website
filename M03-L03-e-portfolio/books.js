
function ratingToHtml(rating) {
  const full = rating | 0; //  Bitwise OR truncates the decimal.
  const isHalf = rating - full != 0;
  const empty = 5 - full - isHalf;  // 5 stars total - full stars - half star (if any)
  let strRating = '';

  // Add full stars
  for (let i = 0; i < full; i++) {
    strRating += '<i class="fas fa-star"></i>';
  }

  // Add half star if applicable
  if (isHalf) {
    strRating += '<i class="fas fa-star-half-alt"></i>';
  }

  // Add empty stars, if any
  for (let i = 0; i < empty; i++) {
    strRating += '<i class="fa-regular fa-star"></i>';
  }

  // Return the constructed HTML string
  return strRating;
}


function priceToHtml(isSale, priceOrg, priceSale) {
  if (isSale) {
    return `<span class="book__price--normal">$${priceOrg}</span> <span class="book__price--sale">$${priceSale}</span>`;
  } else {
    return `<span class="book__price--sale">$${priceOrg}</span>`;
  }
}

let books = null;

async function renderBooks(filter)
{
  const booksWrapper = document.querySelector(".books");

  booksWrapper.classList += " books__loading";
  if( !books ) {
    books = await getBooks();
  }
  booksWrapper.classList.remove("books__loading");

  console.log("renderBooks() wrapper = ", booksWrapper, "books = ", books);
  let priceOrg = 0;
  let priceSale = 0;
  let isSale = false;
  let filteredBooks = books;

    // Implement the filtering logic based on the selected value
  switch (filter) {
    case "LOW_TO_HIGH":
      // Implement low to high price filtering
      console.log("Filtering books from low to high price");
      filteredBooks = books.sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice));
      break;
    case "HIGH_TO_LOW":
      // Implement high to low price filtering
      console.log("Filtering books from high to low price");
      filteredBooks = books.sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice));
      break;
    case "RATING":
      // Implement rating filtering
      console.log("Filtering books by rating");
      filteredBooks = books.sort((a, b) => b.rating - a.rating);
      break;
  }

  const booksHtml = filteredBooks.map( (book) => {
    isSale = !!book.salePrice;
    priceOrg = book.originalPrice.toFixed(2);
    priceSale = (isSale) ? book.salePrice.toFixed(2) : priceOrg;
    return `<div class="book">
      <figure class="book__img--wrapper">
        <img src="${book.url}" alt="" class="book__title">
      </figure>
      <div class="book__title">
        ${book.title}
      </div>` +
      `<div class="book__ratings">
        ${ratingToHtml(book.rating)}
      </div>` + 
      `<div class="book__price">` + 
        priceToHtml(isSale, priceOrg, priceSale) + 
      `</div></div>`;
  });

    // Each element is separated by a comma that shows up visually. So return a
    // new array with the booksHtml strings joined together
    booksWrapper.innerHTML = booksHtml.join("");
}


//renderBooks()
setTimeout(() => {renderBooks()});

// FAKE DATA

function getBooks() {
  return new Promise( (resolve, reject) => {
    // Fake a promise resolution with a timeout. Normally this would fetch data.
    setTimeout( () => {
      resolve( [
            {
              id: 1,
              title: "Crack the Coding Interview",
              url: "./assets/crack the coding interview.png",
              originalPrice: 49.95,
              salePrice: 14.95,
              rating: 4.5,
            },
            {
              id: 2,
              title: "Atomic Habits",
              url: "assets/atomic habits.jpg",
              originalPrice: 39,
              salePrice: null,
              rating: 5,
            },
            {
              id: 3,
              title: "Deep Work",
              url: "assets/deep work.jpeg",
              originalPrice: 29,
              salePrice: 12,
              rating: 5,
            },
            {
              id: 4,
              title: "The 10X Rule",
              url: "assets/book-1.jpeg",
              originalPrice: 44,
              salePrice: 19,
              rating: 4.5,
            },
            {
              id: 5,
              title: "Be Obsessed Or Be Average",
              url: "assets/book-2.jpeg",
              originalPrice: 32,
              salePrice: 17,
              rating: 4,
            },
            {
              id: 6,
              title: "Rich Dad Poor Dad",
              url: "assets/book-3.jpeg",
              originalPrice: 70,
              salePrice: 12.5,
              rating: 5,
            },
            {
              id: 7,
              title: "Cashflow Quadrant",
              url: "assets/book-4.jpeg",
              originalPrice: 11,
              salePrice: 10,
              rating: 4,
            },
            {
              id: 8,
              title: "48 Laws of Power",
              url: "assets/book-5.jpeg",
              originalPrice: 38,
              salePrice: 17.95,
              rating: 4.5,
            },
            {
              id: 9,
              title: "The 5 Second Rule",
              url: "assets/book-6.jpeg",
              originalPrice: 35,
              salePrice: null,
              rating: 2,
            },
            {
              id: 10,
              title: "Your Next Five Moves",
              url: "assets/book-7.jpg",
              originalPrice: 40,
              salePrice: null,
              rating: 4,
            },
            {
              id: 11,
              title: "Mastery",
              url: "assets/book-8.jpeg",
              originalPrice: 30,
              salePrice: null,
              rating: 4.5,
            },
          ] )
    }, 2000 )
  } );
}

function filterBooks(e)
{
  console.log("filterBooks()");
  renderBooks(e.target.value);
}