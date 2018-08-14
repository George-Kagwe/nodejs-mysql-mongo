
//1.  //create a  mongo db
// var MongoClient = require('mongodb').MongoClient;
// var url ="mongodb://localhost:27017/great";

// MongoClient.connect(url, function(err,db){
//     if(err) throw err;
//     console.log("database created successfully")
//     db.close();
// })



// // 2 lets create a collection
// var MongoClient =require('mongodb').MongoClient;
// var url ="mongodb://localhost:27017/";

// MongoClient.connect(url, function(err,db){
//     if(err)throw err;
//     var dbo=db.db('great');
//     dbo.createCollection("customers", function(err,res){
//         if(err) throw err;
//         console.log("collection Creacted");
//         db.close();
//     })
// })


// 3. lets insert a single record
// var MongoClient = require('mongodb').MongoClient;
// var url ="mongodb://localhost:27017/";

// MongoClient.connect(url, function(err,db){
//     var dbo = db.db('great');
//     var myob={name:"George Kagwe",address:"Kiambu"};
//     dbo.collection("customers").insertOne(myob, function(err,res){
//         if(err)throw err;
//         console.log("1 document inserted");
//         db.close();
//     });
// });


// 4. insert many records

// var MongoClient = require('mongodb').MongoClient;
// var url ="mongodb://localhost:27017/";

// MongoClient.connect(url, function(err,db){
//     var dbo = db.db('great');
//     var myob=[{ name: 'John', address: 'Highway 71'},
//     { name: 'Peter', address: 'Lowstreet 4'},
//     { name: 'Amy', address: 'Apple st 652'},
//     { name: 'Hannah', address: 'Mountain 21'},
//     { name: 'Michael', address: 'Valley 345'},
//     { name: 'Sandy', address: 'Ocean blvd 2'},
//     { name: 'Betty', address: 'Green Grass 1'},
//     { name: 'Richard', address: 'Sky st 331'},
//     { name: 'Susan', address: 'One way 98'},
//     { name: 'Vicky', address: 'Yellow Garden 2'},
//     { name: 'Ben', address: 'Park Lane 38'},
//     { name: 'William', address: 'Central st 954'},
//     { name: 'Chuck', address: 'Main Road 989'},
//     { name: 'Viola', address: 'Sideway 1633'}
//   ];
//     dbo.collection("customers").insertMany(myob, function(err,res){
//         if(err)throw err;
//         console.log(res.insertedCount+" documents inserted");
//         db.close();
//     });
// });

//5. Mongo db find

// var MongoClient = require('mongodb').MongoClient;
// var url ="mongodb://localhost:27017";

// MongoClient.connect(url, function(err,db){
//     if(err) throw err;
//     var dbo=db.db("great");
//      dbo.collection("customers").findOne({}, function(err,result){
//          if(err) throw err;
//          console.log(result.name);
//          db.close();
//      });
// });


 // 6 .making a query in mongodb

//  var MongoClient = require('mongodb').MongoClient;
//  var url ="mongodb://localhost:27017/";

//  MongoClient.connect(url,function(err,db){
//      if(err) throw err;
//      var dbo =db.db("great");
//      var query ={address:"Kiambu"};
//      dbo.collection("customers").find(query).toArray(function(err,result){
//          if(err) throw err;
//          console.log(result);
//          db.close();
//      });
//  });

// 7 sort

var MongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url, function(err,db){
    if(err) throw err;
    var dbo =db.db("great");
    var mysort ={name:1};
    dbo.collection("customers").find().sort(mysort).toArray(function(arr,result){
        console.log(result);
        db.close();
    });
   
});