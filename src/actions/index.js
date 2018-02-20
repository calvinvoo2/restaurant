// import axios from "axios";
import {
  FETCH_TOP_RESTAURANT_LIST,
  BOOK_RESTAURANT,
  FETCH_RESTAURANT_DETAIL,
  CHANGE_LANGUAGE
} from "./types";

export const changeLanguage = lang => {
  return function(dispatch) {
    /*This is used to change language*/
    dispatch({ type: CHANGE_LANGUAGE, payload: lang });
  };
};

export const fetchRestaurantDetail = slug => {
  return function(dispatch) {
    /* It should fire the Get Restaurant Detail API here
    This API will get the restaurant detail based on the slug given
    The API parameters:
    Name      | Required  | Description           | Default Value | Example
    slug      | required  | restaurant slug       |               | sushi-tei

    Example GET Request
    The data will be based on the slug
    axios
      .get("/restaurant?slug=sushi-tei")
      .then(res => dispatch({ type: FETCH_RESTAURANT_DETAIL, payload: res }));

    Example Response
    {
      data: {
        _id: "5a883faaa3e0a81991f0dc46",
        name: "Sushi Tei",
        cuisineType: "Japanese Food",
        location: "North Jakarta",
        rating: 4,
        headerImageSrc:
          "http://www.gurneyplaza.com.my/-/media/cma-malls/websites/regional/malaysia/storefront_560/s/sushitei.jpg",
        description: "This lovely japanese family restaurant",
        slug: "sushi-tei",
        phone: "2-8956578",
        address: "Emporium Pluit 4th floor"
      }
    }
    */
    var res = {};
    res.data = {
      _id: "5a883faaa3e0a81991f0dc46",
      name: "Sushi Tei",
      cuisineType: "Japanese Food",
      location: "North Jakarta",
      rating: 4,
      headerImageSrc:
        "http://www.gurneyplaza.com.my/-/media/cma-malls/websites/regional/malaysia/storefront_560/s/sushitei.jpg",
      description: "This lovely japanese family restaurant",
      slug: slug,
      phone: "2-8956578",
      address: "Emporium Pluit 4th floor"
    };
    dispatch({ type: FETCH_RESTAURANT_DETAIL, payload: res });
  };
};
export const fetchTopRestaurantList = location => {
  if (!location) {
    location = "Jakarta";
  }
  return function(dispatch) {
    /* It should fire the Get Restaurant List API here
    This API will get the top restaurant on locations provided
    The API parameters:
    Name      | Required  | Description                 | Default Value | Example
    location  | required  | Location for the restaurants| Jakarta       | Jakarta

    Example GET Request
    axios
      .get("/top-restaurants?location='Jakarta'")
      .then(res => dispatch({ type: FETCH_USER, payload: res }));

    The data will be based on the location
    Example Response
    {
      data: {
        restaurantList: [
          {
            name: "Sushi Tei",
            cuisineType: "Japanese Food",
            location: "North Jakarta",
            rating: 4,
            headerImageSrc: "https://i.ytimg.com/vi/_RrOlmqAoKM/maxresdefault.jpg",
            description: "This lovely japanese family restaurant"
          }
        ],
        ...
      },
      location: "Jakarta"
    }
    */

    var res = {};
    res.restaurantList = [
      {
        _id: "5a883faaa3e0a81991f0dc46",
        name: "Sushi Tei",
        cuisineType: "Japanese Food",
        location: location,
        rating: 4,
        headerImageSrc:
          "http://www.gurneyplaza.com.my/-/media/cma-malls/websites/regional/malaysia/storefront_560/s/sushitei.jpg",
        description: "This lovely japanese family restaurant",
        slug: "sushi-tei"
      },
      {
        _id: "5a883faaa3e0a81991f0cc46",
        name: "Gyukaku",
        cuisineType: "Japanese Food",
        location: location,
        rating: 5,
        headerImageSrc: "https://i.ytimg.com/vi/_RrOlmqAoKM/maxresdefault.jpg",
        description: "Japanese barbeque all you can eat",
        slug: "gyukaku"
      },
      {
        _id: "5a883faaa3e0a81991f0cx46",
        name: "Veniam",
        cuisineType: "Western Food",
        location: location,
        rating: 1,
        headerImageSrc: "http://placehold.it/32x32",
        description:
          "Eiusmod aliqua est aliquip aliquip laborum. Esse nulla tempor ut commodo labore deserunt aliquip excepteur aute dolor duis. Culpa excepteur nulla consequat reprehenderit occaecat aliqua fugiat et veniam in qui. Nisi proident ipsum officia nulla consequat ad amet tempor.\r\n",
        slug: "veniam"
      },
      {
        _id: "5a883faa4c16533794024317",
        name: "Magnate",
        cuisineType: "Western Food",
        location: location,
        rating: 3,
        headerImageSrc: "http://placehold.it/32x32",
        description:
          "Nostrud aute cupidatat non consectetur commodo exercitation non ipsum proident eu. Aliquip eu pariatur cillum ad. Ex eiusmod adipisicing minim ullamco eu dolor. Cupidatat tempor ullamco voluptate voluptate laborum esse quis.\r\n",
        slug: "magnate"
      },
      {
        _id: "5a883faa35c2c365348ed695",
        name: "Excepteur",
        cuisineType: "Western Food",
        location: location,
        rating: 4,
        headerImageSrc: "http://placehold.it/32x32",
        description:
          "Ea et exercitation exercitation est sit deserunt nulla ullamco ullamco nostrud veniam. Aliqua fugiat in aliqua consequat. Ullamco veniam proident est proident ipsum ea amet aliquip aliqua voluptate labore. Nulla sit commodo sit cupidatat. Nostrud quis et consequat labore sunt voluptate consectetur ullamco irure consectetur laboris.\r\n",
        slug: "excepteur"
      },
      {
        _id: "5a883faa504e7fb8092499c1",
        name: "Reprehenderit",
        cuisineType: "Western Food",
        location: location,
        rating: 2,
        headerImageSrc: "http://placehold.it/32x32",
        description:
          "Excepteur ad fugiat nisi nulla ex veniam magna consequat consectetur proident. Reprehenderit nostrud tempor ea id ipsum et mollit sit deserunt aliqua cillum minim cillum. Aliqua ipsum minim ex reprehenderit commodo. Ipsum magna laborum tempor do commodo exercitation non voluptate commodo officia esse voluptate ad. Enim commodo nulla qui nostrud mollit sint sunt reprehenderit.\r\n",
        slug: "reprehenderit"
      },
      {
        _id: "5a883faa2ac0acf6ae82c9eb",
        name: "Eiusmod",
        cuisineType: "Western Food",
        location: location,
        rating: 1,
        headerImageSrc: "http://placehold.it/32x32",
        description:
          "Nulla laborum anim ea ullamco non magna. Aute duis duis duis anim non laborum laborum reprehenderit sunt id in velit. Duis tempor elit nostrud pariatur consequat occaecat occaecat qui. Deserunt velit eiusmod excepteur pariatur elit dolore. Ipsum incididunt aliquip non esse in. Consequat reprehenderit est culpa nostrud nisi magna veniam ad minim ullamco occaecat. Lorem dolor amet eiusmod consectetur ea elit sit dolor.\r\n",
        slug: "eiusmod"
      },
      {
        _id: "5a883faad0fac8b29bc3f5d2",
        name: "Magna",
        cuisineType: "Western Food",
        location: location,
        rating: 5,
        headerImageSrc: "http://placehold.it/32x32",
        description:
          "Sint ad dolore eu qui cupidatat qui anim nostrud et aliqua culpa irure excepteur. Minim commodo aliquip sunt quis sunt fugiat non ea non quis non ipsum. Elit do mollit anim magna in esse aute dolore ad minim eiusmod elit enim dolore. Laboris aliqua amet dolore sit cupidatat sit consectetur ipsum. Lorem amet labore dolor culpa id. Nulla aliquip irure consequat in laboris incididunt et aliquip deserunt aliquip ut. Ut anim ut amet ea duis mollit excepteur laborum Lorem exercitation.\r\n",
        slug: "magna"
      },
      {
        _id: "5a883faa7a369c217a893435",
        name: "Labore",
        cuisineType: "Western Food",
        location: location,
        rating: 1,
        headerImageSrc: "http://placehold.it/32x32",
        description:
          "Incididunt et ea fugiat nulla ullamco elit exercitation ut deserunt qui culpa mollit. Consequat non deserunt ullamco incididunt enim sint nisi duis. Ea cupidatat enim aliqua veniam aliquip veniam reprehenderit exercitation magna ex. Esse labore id est eu ipsum quis veniam minim pariatur.\r\n",
        slug: "labore"
      },
      {
        _id: "5a883faa87a545d6b6824acb",
        name: "Voluptate",
        cuisineType: "Western Food",
        location: location,
        rating: 1,
        headerImageSrc: "http://placehold.it/32x32",
        description:
          "Quis aliquip cupidatat sit esse adipisicing minim sit. Dolor veniam non pariatur anim dolor laboris qui. Quis ullamco fugiat elit amet incididunt do nisi. In nulla adipisicing id cillum culpa officia deserunt ex non Lorem cillum amet.\r\n",
        slug: "voluptate"
      }
    ];
    res.location = location;
    dispatch({ type: FETCH_TOP_RESTAURANT_LIST, payload: res });
  };
};

export const bookRestaurant = (currDetail, data) => {
  return function(dispatch) {
    /* It should fire the Book Restaurant API here
    This API will let user make reservation for the designated restaurant
    The API body consists:
    Name          | Required  | Description                 | Default Value | Example
    _id           | required  | Id of the restaurant        |               | 65sd7s6d76sd7b
    numberOfPerson| required  | No of person to reserve     |               | 3
    date          | required  | Date of the reservation     |               | 2018-02-14
    time          | required  | Time of the reservation     |               | 20.00
    name          | required  | Name of the person          |               | Calvin
    phone         | required  | Phone number to be called   |               | 0878855578

    Example POST Request
      axios.post('/book-restaurant', {
        _id: '65sd7s6d76sd7b',
        numberOfPerson: 5,
        date: "2018-07-02",
        time: "20:00",
        name: "Calvin",
        phone: "048856968"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


    Example Response
    {
      data: {
        isBooked: true,
        time: 20.00,
        date: 2018-02-14,
        numberOfPerson: 3,
      }
    }
    */
    var booked = {
      isBooked: true,
      formData: data
    };
    currDetail.booked = booked;
    dispatch({ type: BOOK_RESTAURANT, payload: currDetail });
  };
};
