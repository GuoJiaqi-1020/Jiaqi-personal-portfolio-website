var photos_w = [
{
  year: 2022,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "https://drive.google.com/file/d/1AxrWiR9LvrVlVnp0OkBBfL9pSZwlRdBQ/preview",
  name:"Cherry blossoms on the ground"
},

{
  year: 2022,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "https://drive.google.com/file/d/1tZyK6SwNbUJIc7r5c3IjDlSR72yw8AFG/preview",
  name:"Lincoln Memorial"
},

{
  year: 2022,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "https://drive.google.com/file/d/1Q4N6v8TWLENEVZEtAujTqDNw887ThA4s/preview",
  name:"Lincoln Memorial"
},

{
  year: 2022,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "https://drive.google.com/file/d/15bCRvXCJlJznXkALOn_5nhCIulsgmCkj/preview",
  name:"United States Capitol"
},

{
  year: 2022,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "https://drive.google.com/file/d/1-nI-ya6q8VW1U7c6vnc-hHbRvZgYkT6j/preview",
  name:"Washington Monument"
},

{
  year: 2022,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "https://drive.google.com/file/d/1hYGNHlkI8ucGZ24uIUcT0RfL0WbArbnm/preview",
  name:"Library of Congress"
},
];

var photos_F = [
{
  year: 2021,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "https://drive.google.com/file/d/1amsPS_r1gl46reWJoHNlmElBjwTeyxit/preview",
  name:"Sunset over South Beach"
},


{
  year: 2021,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "https://drive.google.com/file/d/12oDkL135pmJRcj5E1VfuvK6KH0YAs4TE/preview",
  name:"Jellyfish"
},

{
  year: 2021,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "https://drive.google.com/file/d/13Zf-toZrL_-V6fowPUNU6tvpvMUHYolP/preview",
  name:"Evening Glow"
},

{
  year: 2021,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "https://drive.google.com/file/d/1vvrMGBP17AtqC50mHD90cnEr1Vq67jNx/preview",
  name:"Key West"
},

{
  year: 2021,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "https://drive.google.com/file/d/1oL4nEIRkOx8jnqpXV2e3rrIeu-hm8fWE/preview",
  name:"Fishing man"
},

{
  year: 2021,
  publisher: "JiaqiGuo",
  ebook:false,
  cover: "https://drive.google.com/file/d/1k29mPhX6C2OJqnYn1lkA3u3i1aNgPGWf/preview",
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
            <iframe class="cover" src=${cover} allow="autoplay"></iframe>
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

