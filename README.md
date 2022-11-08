# fantastic_ecomerce
we're not sure yet...

## Description
Ecomerce site for corgis stickers

## New tech
next.js
shopify

# Dependencies
apollo-server-express 3.11.1  
bcrypt 5.1.0  
express 4.18.2  
graphql 16.6.0  
jsonwebtoken 8.5.1  
mongoose 6.7.1  
nodemon 2.0.20  

# Directions
start node server.js  
watch nodemon  
seed node seeders/seed.js  


![cards](https://raw.githubusercontent.com/hale-bopp97/fantastic_ecomerce/77e1fc2710ada47aea7680d276dac4fed5f5aa2a/assets/Screen%20Shot%202022-11-04%20at%201.17.39%20PM.png)

![single_item](https://raw.githubusercontent.com/hale-bopp97/fantastic_ecomerce/77e1fc2710ada47aea7680d276dac4fed5f5aa2a/assets/Screen%20Shot%202022-11-04%20at%201.18.27%20PM.png)


query Product($id: ID!) {
  product(_id: $id) {
    _id
    description
    image
    name
    price
  }
}


query Products {
  products {
    _id
    description
    image
    name
    price
  }
}
