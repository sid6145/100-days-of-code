const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "17/05/2019 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "17/05/2019 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "17/05/2019 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "17/05/2019 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "17/05/2019 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function signUp(array, userName, email, password) {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  for (let i = 0; i < users.length; i++) {
    if (email == array[i].email) {
      return `You already have an account`;
    }
  }
  array.push({
    _id: Math.floor(100000 + Math.random() * 900000),
    username: userName,
    email: email,
    password: password,
    createdAt: `${date} ${hour}:${minutes}`,
    isLoggedIn: false,
  });

  return array;
}

// console.log(signUp(users, 'sid6145', 'siddhant@gmail.com', 'sid123'))

function signIn(array, email, password) {
  for (let i = 0; i < array.length; i++) {
    if (email == array[i].email && password == array[i].password) {
      array[i].isLoggedIn = true;
      console.log("login successful");
      return;
    } else {
      console.log("wrong email or password");
      return;
    }
  }
}

// console.log(signIn(users, 'alex@alex.com', '123123'))

function rateProducts(productArray, userArray, productName, userName, rating) {
  for (let i = 0; i < productArray.length; i++) {
    for (let j = 0; j < userArray.length; j++) {
      if (productName == productArray[i].name) {
        if (userName == userArray[j].username) {
          productArray[i].ratings.push({
            userId: userArray[j]._id,
            rate: rating,
          });
          console.log(productArray[i]);
        }
        else{
            console.log('wrong username ')
        }
      }
      else{
          console.log('product does not exist')
      }
    }
  }
}

// console.log(rateProducts(products, users, "TV", "Thomas", 4.5));



// average rating

function averageRating(productArray, productName){
    let totalRating = 0
    let average = 0

    for(let i = 0; i < productArray.length; i++){
       for(let j = 0; j < productArray[i].ratings.length; j++){
           if(productArray[i].name == productName){
               totalRating += parseFloat(productArray[i].ratings[j].rate)
               average = totalRating / productArray[i].ratings.length
           }
        //    else
        //    {
        //     console.log('product not found')      
        //    }
       }
    }

    return average
}



// console.log(averageRating(products, 'mobile phone'))


function likeProducts(productArray, userArray, productName, userName){


    for(let i = 0; i < productArray.length; i++){
        for(let j = 0; j < userArray.length; j++){
            if(productName == productArray[i].name){
                if(userName == userArray[j].username){
                  for(let k = 0; k < productArray[i].likes.length; k++){
                      if(productArray[i].likes[k] == userArray[j]._id){
                          productArray[i].likes.pop(userArray[j]._id)
                          console.log(productArray[i])
                      }else{
                          productArray[i].likes.push(userArray[j]._id)
                          console.log(productArray[i])
                      }
                  }
                }
            }
        }
    }
}

// console.log(likeProducts(products, users, "TV", "Brook"))