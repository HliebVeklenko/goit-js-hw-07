const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const list = document.querySelector('.gallery');

const prototypeString =     `<li class = "image">
                                <img src = "${images[0].url}" alt = "${images[0].alt}"></img>
                             </li>

                             <li class = "image">
                                <img src = "${images[1].url}" alt = "${images[1].alt}"></img>
                             </li>

                             <li class = "image">
                                <img src = "${images[2].url}" alt = "${images[2].alt}"></img>
                             </li>

                             <li class = "image">
                                <img src = "${images[3].url}" alt = "${images[3].alt}"></img>
                             </li>

                             <li class = "image">
                                <img src = "${images[4].url}" alt = "${images[4].alt}"></img>
                             </li>

                             <li class = "image">
                                <img src = "${images[5].url}" alt = "${images[5].alt}"></img>
                             </li>`;
                          
  list.insertAdjacentHTML("afterbegin", prototypeString);
