var photos_w = [
{
  year: 2022,
  link: "florida.html",
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "img/W1.jpg",
  name:"Cherry blossoms on the ground"
},

{
  year: 2022,
  
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "img/W2.jpg",
  name:"Lincoln Memorial"
},

{
  year: 2022,
  
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "img/W3.jpg",
  name:"Lincoln Memorial"
},

{
  year: 2022,
  
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "img/W4.jpg",
  name:"United States Capitol"
},

{
  year: 2022,
  
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "img/W5.jpg",
  name:"Washington Monument"
},

{
  year: 2022,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "img/W6.jpg",
  name:"Library of Congress"
},
];

var photos_F = [
{
  year: 2021,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "img/F1.jpg",
  name:"Sunset over South Beach"
},

{
  year: 2021,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "img/F2.jpg",
  name:"Jellyfish"
},

{
  year: 2021,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "img/F3.jpg",
  name:"Evening Glow"
},

{
  year: 2021,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "img/F4.jpg",
  name:"Key West"
},

{
  year: 2021,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "img/F5.jpg",
  name:"Fishing man"
},

{
  year: 2021,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "img/F6.jpg",
  name:"Early morning in Key West"
},

];

function createPhotoshelf(photos, shelfSelector){
  let shelf= document.querySelector(shelfSelector);
  if (shelf){
    if(photos instanceof Array){
      for (let photo of photos){
        const cover = photo.cover;
        const year = photo.year;
        const name = photo.name;
        const publisher = photo.publisher;
        // You will add your content here for
        let html=`
        <div class="photo-info">
            <img class="cover" align="left" src=${cover} alt="Jacky's photo collection">
            <span class="publisher">&copy;${year} ${publisher}, ${name}</span> 
        </div>`;
        let container = document.createElement("div");
        container.className="photo";
        container.innerHTML = html;
        container.tabIndex = photos.indexOf(photo);
        shelf.append(container);
      }

    }

  }

}
