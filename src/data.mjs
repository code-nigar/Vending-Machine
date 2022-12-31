const products = [
  {
    id: 1,
    name: "Cold drink",
    price: 30,
    imgSrc: 'https://images.pexels.com/photos/4397824/pexels-photo-4397824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: "biscuits",
    price: 24,
    imgSrc: 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29va2llc3xlbnwwfHwwfHw%3D&w=1000&q=80'
  },
  {
    id: 3,
    name: "bread",
    price: 15,
    imgSrc: 'https://media.istockphoto.com/id/92206322/photo/sliced-loaf-of-bread-isolated-on-white.jpg?s=612x612&w=0&k=20&c=YJ7EVbkl5OLKG6pf_i4agjh-MsGrn4htLKkprlttzHM='
  },
  {
    id: 4,
    name: "egg",
    price: 5,
    imgSrc: 'https://media.istockphoto.com/id/467061077/photo/eggs-isolated-on-a-white-background.jpg?s=170667a&w=0&k=20&c=4MSoUaV9_ckLYkS_qaIlMiLB3YjGBcqZSbycVhdmTak='
  },
];

const packages = [
  {
    name: "2 drinks pkg",
    price: 68,
    items: [
      {
        id: 1,
        qty: 2,
      },
      {
        id: 2,
        qty: 1,
      },
    ],
  },
  {
    name: "breakfast pkg",
    price: 55,
    items: [
      {
        id: 2,
        qty: 1,
      },
      {
        id: 3,
        qty: 1,
      },
      {
        id: 4,
        qty: 6,
      },
    ],
  },
];

export {products, packages}