
let output_div = document.getElementById('output_div');
let output_content = document.getElementById('output_content');
let grid = document.getElementById('grid_content');

printToPage("The Weeknd");

function printToPage(content) {
  output_content.innerHTML = content;
}

let jsonArray = [
  {
    "album": "Kiss Land",
    "date": "2013",
    "album_color": "#76d699",
    "picture_url": "https://images-na.ssl-images-amazon.com/images/I/814PdZJQfeL._SL1400_.jpg",
    "mv": "https://www.youtube.com/watch?v=Wq6V9YpE1aE",
    "singles": [
      "Kiss Land",
      "Belong to the World",
      "Love in the Sky"
    ]
  },
  {
    "album": "Beauty Behind the Madness",
    "date": "2015",
    "album_color": "#7e7b7a",
    "picture_url": "https://images-na.ssl-images-amazon.com/images/I/71K19rihxhL._SL1200_.jpg",
    "singles": [
      "Often",
      "The Hills",
      "Can't Feel My Face",
      "In the Night",
      "Acquainted"
    ]
  },
  {
    "album": "Starboy",
    "date": "2016",
    "album_color": "#bc2845",
    "picture_url": "https://images-na.ssl-images-amazon.com/images/I/819e05qxPEL._SL1500_.jpg",
    "singles": [
      "Starboy",
      "I Feel It Coming",
      "Party Monster",
      "Reminder",
      "Rockin'",
      "Die For You",
      "Secrets"
    ]
  },
  {
    "album": "After Hours",
    "date": "2020",
    "album_color": "#e53223",
    "picture_url": "https://images-na.ssl-images-amazon.com/images/I/814afHph00L._AC_SL1500_.jpg",
    "singles": [
      "Heartless",
      "Blinding Lights",
      "In Your Eyes",
      "Save Your Tears"
    ]
  }
]



for (var i = 0; i < jsonArray.length; i++) {
  createDiv(jsonArray[i]);
}



function createDiv(incomingJSON) {

  let create_new_div = document.createElement("div");
create_new_div.style.backgroundColor = incomingJSON['album_color'];
create_new_div.classList.add('div_content');


  let create_header = document.createElement("h3");
  create_header.classList.add('album_title');
  create_header.innerText = incomingJSON['album'];




  create_new_div.appendChild(create_header);
  let new_image = document.createElement("img");
  new_image.classList.add("album_art");
  new_image.src = incomingJSON['picture_url'];
  create_new_div.appendChild(new_image);

  let create_date = document.createElement("h5");
  create_date.innerText = incomingJSON['date'];
  create_new_div.classList.add('contentStyle');
  create_new_div.appendChild(create_date);

  let small_header = document.createElement("h4");
  small_header.innerText = "Singles:";
  create_new_div.appendChild(small_header);


  let single_list = document.createElement("ul");
  create_new_div.appendChild(single_list);


  for (var i = 0; i < incomingJSON['singles'].length; i++) {
    var current_single = incomingJSON['singles'][i];
    var new_single = document.createElement("li");
    new_single.innerText = current_single;
    single_list.appendChild(new_single);
  }


  grid.appendChild(create_new_div);

}
AOS.init();
