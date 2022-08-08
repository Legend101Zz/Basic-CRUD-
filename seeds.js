const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/Hiteshi")
  .then(() => {
    console.log("Connection open!!");
  })
  .catch((err) => {
    console.log("oh no error!");
    console.log(err);
  });

// const p = new Product({
//   name: "Workshop File",
//   price: 70,
//   category: "writing",
// });
// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
const seedProducts = [
  {
    name: "pen",
    price: 10,
    category: "writing",
  },
  {
    name: "Drafter",
    price: 250,
    category: "drawing",
  },
  {
    name: "Lab Manual",
    price: 50,
    category: "writing",
  },
  {
    name: "photocopy colored",
    price: 5,
    category: "printing",
  },
  { name: "photocopy black", price: 5, category: "printing" },
];
Product.insertMany(seedProducts)
  .then((p) => {
    console.log(p);
  })
  .catch((e) => {
    console.log(e);
  });
