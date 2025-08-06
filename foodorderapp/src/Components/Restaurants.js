const restaurants = [
        { id:1,
          name:"PunjabiDhaba",
          distance:"2km",
          rating:"4-Star",
          cuisine:"Indian",
          image:'https://www.shutterstock.com/image-vector/punjabi-dhaba-translation-restaurent-logo-600w-2341283313.jpg',
          menu : [
            { menuid: 1, 
              name: 'PaneerLabadar', 
              price: 120, 
              image: 'https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-137249900.jpg' 
            },
            { menuid: 2, 
              name: 'DalMakhani', 
              price: 250, 
              image: 'https://septemberfarmcheese.b-cdn.net/wp-content/uploads/Blogs/Homemade-Pizza/homemade-pizza-monterey-jack-cheese.jpg' 
            },
            { menuid: 3, 
              name: 'Biryani', 
              price: 90, 
              image: 'https://media.istockphoto.com/id/614420426/photo/basket-of-french-fries.jpg?s=612x612&w=0&k=20&c=o6IZg_NPJkOaICTa883jd49BwZvvI7wlP6SnjhyxqsI=' 
            }
          ]
        },
          
        { id:2,
          name:"BigDaddy",
          distance:"2km",
          rating:"4-Star",
          cuisine:"Indian", 
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxgAdr9iG-lH3-WrGevYtXp7BD80FhBwjVDA&s',
          menu : [
            { menuid: 1, 
              name: 'Burger', 
              price: 120, 
              image: 'https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-137249900.jpg' 
            },
            { menuid: 2, 
              name: 'Pizza', 
              price: 250, 
              image: 'https://septemberfarmcheese.b-cdn.net/wp-content/uploads/Blogs/Homemade-Pizza/homemade-pizza-monterey-jack-cheese.jpg' 
            },
            { menuid: 3, 
              name: 'Fries', 
              price: 90, 
              image: 'https://media.istockphoto.com/id/614420426/photo/basket-of-french-fries.jpg?s=612x612&w=0&k=20&c=o6IZg_NPJkOaICTa883jd49BwZvvI7wlP6SnjhyxqsI=' 
            }
          ]
        },
        { id:3,
          name:"BurgerKing",
          distance:"2km",
          rating:"4-Star",
          cuisine:"Indian",
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQddjO3OrrASjQbnD5qA-h2LvpB8x8UaJy-Fa0XmMhtA0tawamMaXnlZKEsuiVldqo4bh4&usqp=CAU',
          menu : [
            { menuid: 1, 
              name: 'Burger', 
              price: 120, 
              image: 'https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-137249900.jpg' 
            },
            { menuid: 2, 
              name: 'Pizza', 
              price: 250, 
              image: 'https://septemberfarmcheese.b-cdn.net/wp-content/uploads/Blogs/Homemade-Pizza/homemade-pizza-monterey-jack-cheese.jpg' 
            },
            { menuid: 3, 
              name: 'Fries', 
              price: 90, 
              image: 'https://media.istockphoto.com/id/614420426/photo/basket-of-french-fries.jpg?s=612x612&w=0&k=20&c=o6IZg_NPJkOaICTa883jd49BwZvvI7wlP6SnjhyxqsI=' 
            }
          ]
        },
        { id:4,
          name:"Karim's",
          distance:"2km",
          rating:"4-Star",
          cuisine:"Indian",
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YHBtQihSQZ22d-NEGGfrhIg1Y6MjLLl_yw&s',
          menu : [
            { menuid: 1, 
              name: 'Burger', 
              price: 120, 
              image: 'https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-137249900.jpg' 
            },
            { menuid: 2, 
              name: 'Pizza', 
              price: 250, 
              image: 'https://septemberfarmcheese.b-cdn.net/wp-content/uploads/Blogs/Homemade-Pizza/homemade-pizza-monterey-jack-cheese.jpg' 
            },
            { menuid: 3, 
              name: 'Fries', 
              price: 90, 
              image: 'https://media.istockphoto.com/id/614420426/photo/basket-of-french-fries.jpg?s=612x612&w=0&k=20&c=o6IZg_NPJkOaICTa883jd49BwZvvI7wlP6SnjhyxqsI=' 
            }
          ]
        },
        { id:5,
          name:"Sehzaade",
          distance:"2km",
          rating:"4-Star",
          cuisine:"Indian",
          image:'https://png.pngtree.com/template/20200704/ourmid/pngtree-restaurant-logo-design-vector-template-image_388753.jpg',
          menu : [
            { menuid: 1, 
              name: 'Burger', 
              price: 120, 
              image: 'https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-137249900.jpg' 
            },
            { menuid: 2, 
              name: 'Pizza', 
              price: 250, 
              image: 'https://septemberfarmcheese.b-cdn.net/wp-content/uploads/Blogs/Homemade-Pizza/homemade-pizza-monterey-jack-cheese.jpg' 
            },
            { menuid: 3, 
              name: 'Fries', 
              price: 90, 
              image: 'https://media.istockphoto.com/id/614420426/photo/basket-of-french-fries.jpg?s=612x612&w=0&k=20&c=o6IZg_NPJkOaICTa883jd49BwZvvI7wlP6SnjhyxqsI=' 
            }
          ]
        },
        { id:6,
          name:"AzadHindDhaba",
          distance:"2km",
          rating:"4-Star",
          cuisine:"Indian",
          image:'https://img.freepik.com/premium-vector/restaurant-logo-design-vector-illustration_917213-243861.jpg?w=360',
          menu : [
            { menuid: 1, 
              name: 'Burger', 
              price: 120, 
              image: 'https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-137249900.jpg' 
            },
            { menuid: 2, 
              name: 'Pizza', 
              price: 250, 
              image: 'https://septemberfarmcheese.b-cdn.net/wp-content/uploads/Blogs/Homemade-Pizza/homemade-pizza-monterey-jack-cheese.jpg' 
            },
            { menuid: 3, 
              name: 'Fries', 
              price: 90, 
              image: 'https://media.istockphoto.com/id/614420426/photo/basket-of-french-fries.jpg?s=612x612&w=0&k=20&c=o6IZg_NPJkOaICTa883jd49BwZvvI7wlP6SnjhyxqsI=' 
            }
          ]
        },
        { id:7,
          name:"Dominos",
          distance:"2km",
          rating:"4-Star",
          cuisine:"Indian",
          image:'https://www.shutterstock.com/image-photo/la-eliana-spain-october-27-600nw-2065881593.jpg',
          menu : [
            { menuid: 1, 
              name: 'Burger', 
              price: 120, 
              image: 'https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-137249900.jpg' 
            },
            { menuid: 2, 
              name: 'Pizza', 
              price: 250, 
              image: 'https://septemberfarmcheese.b-cdn.net/wp-content/uploads/Blogs/Homemade-Pizza/homemade-pizza-monterey-jack-cheese.jpg' 
            },
            { menuid: 3, 
              name: 'Fries', 
              price: 90, 
              image: 'https://media.istockphoto.com/id/614420426/photo/basket-of-french-fries.jpg?s=612x612&w=0&k=20&c=o6IZg_NPJkOaICTa883jd49BwZvvI7wlP6SnjhyxqsI=' 
            }
          ]
        },
        { id:8,
          name:"Chinmay",
          distance:"2km",
          rating:"4-Star",
          cuisine:"Indian",
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lzUuVQ9VhdY1D4ooWKHdm3-bCY_IQSe8Bw&s',
          menu : [
            { menuid: 1, 
              name: 'Burger', 
              price: 120, 
              image: 'https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-137249900.jpg' 
            },
            { menuid: 2, 
              name: 'Pizza', 
              price: 250, 
              image: 'https://septemberfarmcheese.b-cdn.net/wp-content/uploads/Blogs/Homemade-Pizza/homemade-pizza-monterey-jack-cheese.jpg' 
            },
            { menuid: 3, 
              name: 'Fries', 
              price: 90, 
              image: 'https://media.istockphoto.com/id/614420426/photo/basket-of-french-fries.jpg?s=612x612&w=0&k=20&c=o6IZg_NPJkOaICTa883jd49BwZvvI7wlP6SnjhyxqsI=' 
            }
          ]
        },
        { id:9,
          name:"DilliFood",
          distance:"2km",
          rating:"4-Star",
          cuisine:"Indian",
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwV__j8f0JzQKtQ_sKObit-JxYfFUBMEplrg&s',
          menu : [
            { menuid: 1, 
              name: 'Burger', 
              price: 120, 
              image: 'https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-137249900.jpg' 
            },
            { menuid: 2, 
              name: 'Pizza', 
              price: 250, 
              image: 'https://septemberfarmcheese.b-cdn.net/wp-content/uploads/Blogs/Homemade-Pizza/homemade-pizza-monterey-jack-cheese.jpg' 
            },
            { menuid: 3, 
              name: 'Fries', 
              price: 90, 
              image: 'https://media.istockphoto.com/id/614420426/photo/basket-of-french-fries.jpg?s=612x612&w=0&k=20&c=o6IZg_NPJkOaICTa883jd49BwZvvI7wlP6SnjhyxqsI=' 
            }
          ]
        },
        { id:10,
          name:"BengaliFood",
          distance:"2km",
          rating:"4-Star",
          cuisine:"Indian",
          image:'https://www.shutterstock.com/image-vector/illustration-greeting-background-bengali-text-600w-614912075.jpg',
          menu : [
            { menuid: 1, 
              name: 'Burger', 
              price: 120, 
              image: 'https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-137249900.jpg' 
            },
            { menuid: 2, 
              name: 'Pizza', 
              price: 250, 
              image: 'https://septemberfarmcheese.b-cdn.net/wp-content/uploads/Blogs/Homemade-Pizza/homemade-pizza-monterey-jack-cheese.jpg' 
            },
            { menuid: 3, 
              name: 'Fries', 
              price: 90, 
              image: 'https://media.istockphoto.com/id/614420426/photo/basket-of-french-fries.jpg?s=612x612&w=0&k=20&c=o6IZg_NPJkOaICTa883jd49BwZvvI7wlP6SnjhyxqsI=' 
            }
          ]
        },
        { id:11,
          name:"BihariDhaba",
          distance:"2km",
          rating:"4-Star",
          cuisine:"Indian",
          image:'https://mir-s3-cdn-cf.behance.net/projects/404/ff6148223282453.Y3JvcCw0NDUyLDM0ODIsMzUyLDg4.png',
          menu : [
            { menuid: 1, 
              name: 'Burger', 
              price: 120, 
              image: 'https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-137249900.jpg' 
            },
            { menuid: 2, 
              name: 'Pizza', 
              price: 250, 
              image: 'https://septemberfarmcheese.b-cdn.net/wp-content/uploads/Blogs/Homemade-Pizza/homemade-pizza-monterey-jack-cheese.jpg' 
            },
            { menuid: 3, 
              name: 'Fries', 
              price: 90, 
              image: 'https://media.istockphoto.com/id/614420426/photo/basket-of-french-fries.jpg?s=612x612&w=0&k=20&c=o6IZg_NPJkOaICTa883jd49BwZvvI7wlP6SnjhyxqsI=' 
            }
          ]
        },
        { id:12,
          name:"Rajhans",
          distance:"2km",
          rating:"4-Star",
          cuisine:"Indian",
          image:'https://dcassetcdn.com/design_img/1076389/24228/24228_5811938_1076389_thumbnail.jpg',
          menu : [
            { menuid: 1, 
              name: 'Burger', 
              price: 120, 
              image: 'https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-137249900.jpg' 
            },
            { menuid: 2, 
              name: 'Pizza', 
              price: 250, 
              image: 'https://septemberfarmcheese.b-cdn.net/wp-content/uploads/Blogs/Homemade-Pizza/homemade-pizza-monterey-jack-cheese.jpg' 
            },
            { menuid: 3, 
              name: 'Fries', 
              price: 90, 
              image: 'https://media.istockphoto.com/id/614420426/photo/basket-of-french-fries.jpg?s=612x612&w=0&k=20&c=o6IZg_NPJkOaICTa883jd49BwZvvI7wlP6SnjhyxqsI=' 
            }
          ]
        }
    ]

    export default restaurants