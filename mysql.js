var mysql =require('mysql');

var con=mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"blockchain"

});


con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    //1 .create a database
    // con.query("CREATE DATABASE blockchain", function(err,result){
    //     if(err) throw err;
    //     console.log("Database created");
    // });

    //2 .create a table
    // var sql ="CREATE TABLE customers(name VARCHAR(225), address VARCHAR(225))";
    // con.query(sql,function(err,result){
    //     if (err) throw err;
    //     console.log("Table Created Successfully");

    // })

    // 3. insert into

    // var sql ="Insert into customers(name,address) values ('George Kagwe','Kiambu')";

    // con.query(sql,function(err,result){
    //     if(err) throw err;
    //     console.log("1 record inserted successfully");
    // });

    // 4. select from
     
    
       con.query("select * from customers",function(err,result,fields){
           if (err) throw err;
           console.log(result);
       })
    });
