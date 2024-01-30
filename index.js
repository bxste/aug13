const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const cors = require('cors');
const app = express();
app.use(bodyParser.json());

app.use(cors());

//database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'library',
    port: 3306
  });

  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });

// //get all data
// app.get('/library', (req, res) => {
//     let sql = "SELECT * FROM library";
//     db.query(sql, function (error, result) {
//         if (err)
//         {
//           console.log(err,'errs');
//         }
//         if (result.length){
//             res.send({
//                 message:'all user data',
//                 data:result
//             });
//           }
        
//         else{
//           res.send({ status: true, data: result })
//         }
//       });
//   });

//get all data
app.get('/library', (req, res) => {
  let sql = "SELECT * FROM library";
  db.query(sql, (err, result)=> {
      if (err)
      {
        console.log(err,'errs');
      }
      if (result.length>0){
          res.send({
              message:'all user data',
              data:result
          });
        }
      
      else{
        res.send({ status: true, data: result })
      }
    });
});
app.get('/total-row-count', (req, res) => {
  const query = "SELECT COUNT(*) AS totalCount FROM library.addbook";

  db.query(query, (error, results) => {
    if (error) {
      console.error('Errror executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ count: results[0].totalCount });
    }
  });

});

//get all data books
app.get('/books', (req, res) => {
  let sql = "SELECT * FROM library.books";
  db.query(sql, (err, result)=> {
      if (err)
      {
        console.log(err,'errs');
      }
      if (result.length>0){
          res.send({
              message:'all user data',
              data:result
          });
        }
      
      else{
        res.send({ status: true, data: result })
      }
    });
});


//get all data book2
app.get('/bookNovel', (req, res) => {
  let sql = "SELECT * FROM library.bookNovel;";
  db.query(sql, (err, result)=> {
      if (err)
      {
        console.log(err,'errs');
      }
      if (result.length>0){
          res.send({
              message:'all user data',
              data:result
          });
        }
      
      else{
        res.send({ status: true, data: result })
      }
    });
});

//get all data fantasy
app.get('/bookFantasy', (req, res) => {
  let sql = "SELECT * FROM library.bookFantasy;";
  db.query(sql, (err, result)=> {
      if (err)
      {
        console.log(err,'errs');
      }
      if (result.length>0){
          res.send({
              message:'all user data',
              data:result
          });
        }
      
      else{
        res.send({ status: true, data: result })
      }
    });
});

app.get('/bookFiction', (req, res) => {
  let sql = "SELECT * FROM library.bookFiction;";
  db.query(sql, (err, result)=> {
      if (err)
      {
        console.log(err,'errs');
      }
      if (result.length>0){
          res.send({
              message:'all user data',
              data:result
          });
        }
      
      else{
        res.send({ status: true, data: result })
      }
    });
});
app.get('/addBook', (req, res) => {
  let sql = "SELECT * FROM library.addBook;";
  db.query(sql, (err, result)=> {
      if (err)
      {
        console.log(err,'errs');
      }
      if (result.length>0){
          res.send({
              message:'all user data',
              data:result
          });
        }
      
      else{
        res.send({ status: true, data: result })
      }
    });
});

//create
app.post('/library', (req, res) => {
    console.log(req.body,'createdata');

    let stName = req.body.stname;
    let course2 = req.body.course;
    let fee2 = req.body.fee;
    let iD = req.body.id;
    // let sql = `insert into library (stname,course,fee) VALUES('${stname}','${course}','${fee}')`;

    // let details = {
    //   stName: req.body.stname,
    //   course2: req.body.course,
    //   fee2: req.body.fee,
    // };
    // let sql = `INSERT INTO library SET ?`
    let sql = `INSERT INTO library.library (id, stname, course, fee) VALUES ('${iD}','${stName}', '${course2}', '${fee2}')`;
    db.query(sql,(err,result)=>{
      if(err){console.log(err);}
      console.log(result,'result')
      if(res.length>0)
      {
        res.send({
          message: 'data inserted'
        });
      }
      else{
        res.send({
          message:'wrong'
        })
      }
    })
  });

  //create
app.post('/addBook', (req, res) => {
  console.log(req.body,'createdata2');

  let iD = req.body.id;
  let bookTitle = req.body.book_title;
  let author2 = req.body.author;
  let bookSummary = req.body.book_summary;
  let bookEdition = req.body.book_edition;
  let bookPublisher = req.body.book_publisher;
  let bookImg = req.body.book_img;
  let studName = req.body.stud_name;
  let studId = req.body.stud_id;
  let studEmail = req.body.stud_email;
  let studPhone = req.body.stud_phone;

  // let sql = `insert into library (stname,course,fee) VALUES('${stname}','${course}','${fee}')`;

  // let details = {
  //   stName: req.body.stname,
  //   course2: req.body.course,
  //   fee2: req.body.fee,
  // };
  // let sql = `INSERT INTO library SET ?`
  let sql = `INSERT INTO library.addBook (id, book_title, author, book_summary, book_edition, book_publisher, book_img, stud_name, stud_id, stud_email, stud_phone) VALUES ('${iD}','${bookTitle}', '${author2}', '${bookSummary}', '${bookEdition}', '${bookPublisher}', '${bookImg}', '${studName}', '${studId}', '${studEmail}', '${studPhone}')`;
  db.query(sql,(err,result)=>{
    if(err){console.log(err);}
    console.log(result,'result')
    if(res.length>0)
    {
      res.send({
        message: 'data inserted'
      });
    }
    else{
      res.send({
        message:'wrong'
      })
    }
  })
});

  //create
  app.post('/addBook2', (req, res) => {
    console.log(req.body,'createdata2');
  
    let iD = req.body.id;
    let bookTitle = req.body.book_title;
    let author2 = req.body.author;
    let bookSummary = req.body.book_summary;
    let bookEdition = req.body.book_edition;
    let bookPublisher = req.body.book_publisher;
    let bookImg = req.body.book_img;
  
    // let sql = `insert into library (stname,course,fee) VALUES('${stname}','${course}','${fee}')`;
  
    // let details = {
    //   stName: req.body.stname,
    //   course2: req.body.course,
    //   fee2: req.body.fee,
    // };
    // let sql = `INSERT INTO library SET ?`
    let sql = `INSERT INTO library.addBook2 (id, book_title, author, book_summary, book_edition, book_publisher, book_img) VALUES ('${iD}','${bookTitle}', '${author2}', '${bookSummary}', '${bookEdition}', '${bookPublisher}', '${bookImg}')`;
    db.query(sql,(err,result)=>{
      if(err){console.log(err);}
      console.log(result,'result')
      if(res.length>0)
      {
        res.send({
          message: 'data inserted'
        });
      }
      else{
        res.send({
          message:'wrong'
        })
      }
    })
  });
  // //create
  // app.post('/addBook', (req, res) => {
  //   console.log(req.body,'createdata2');
  
  //   // let sql = `insert into library (stname,course,fee) VALUES('${stname}','${course}','${fee}')`;
  
  //   let details = {
  //     iD: req.body.id,
  //     bookTitle: req.body.book_title,
  //     author2: req.body.author,
  //     bookSummary : req.body.book_summary,
  //     bookEdition : req.body.book_edition,
  //     bookPublisher : req.body.book_publisher,
  //     bookImg : req.body.book_img,
  //   };
  //   // let sql = `INSERT INTO addBook SET ?`
  //   let sql = `INSERT INTO library.addBook (id, book_title, author, book_summary, book_edition, book_publisher, book_img) VALUES
  //                                   (${iD},'${bookTitle}', '${author2}', '${bookSummary}', '${bookEdition}', '${bookPublisher}', '${bookImg}')`;
  //   db.query(sql, details, (error) =>{
  //     console.log('Result: ', details)
  //     if (error) {
  //       res.send({"message": "Error"});
  //     }
  //     else {
  //       res.send({"message": "Success"});
  //     }
  //   })
  // });

  // app.post('/Books', (req, res) => {
  //   console.log(req.body,'createdata');

  //   let bookTitle = req.body.book_title;
  //   let Author2 = req.body.Author;
  //   let book_summary2 = req.body.book_summary;
  //   let book_edition2 = req.body.book_edition;
  //   let book_publisher2 = req.body.book_publisher;
  //   let book_img2 = req.body.book_img;
  //   // let sql = `insert into library (stname,course,fee) VALUES('${stname}','${course}','${fee}')`;

  //   // let details = {
  //   //   stName: req.body.stname,
  //   //   course2: req.body.course,
  //   //   fee2: req.body.fee,
  //   // };
  //   // let sql = `INSERT INTO library SET ?`
  //   let sql = `INSERT INTO library.Books (book_title, Author, book_summary, book_edition, book_publisher, book_img) VALUES ('${bookTitle}','${Author2}', '${book_summary2}', '${book_edition2}', '${book_publisher2}', '${book_img2}')`;
  //   db.query(sql,(err,result)=>{
  //     if(err){console.log(err);}
  //     console.log(result,'result')
  //     if(res.length>0)
  //     {
  //       res.send({
  //         message: 'data inserted'
  //       });
  //     }
  //     else{
  //       res.send({
  //         message:'wrong'
  //       })
  //     }
  //   })
  // });
// //update
  app.put('/addBook/:id', (req, res) => {

    console.log(req.body,'updatedata');
    // let details = {
    //   stname: req.body.stname,
    //   course: req.body.course,
    //   fee: req.body.fee,
    // };
    let iD = req.body.id;
    let bookTitle = req.body.book_title;
    let author2 = req.body.author;
    let bookSummary = req.body.book_summary;
    let bookEdition = req.body.book_edition;
    let bookPublisher = req.body.book_publisher;
    let bookImg = req.body.book_img;
    let studName = req.body.stud_name;
    let studId = req.body.stud_id;
    let studEmail = req.body.stud_email;
    let studPhone = req.body.stud_phone;

    let sql = `UPDATE library.addBooks set = ${iD}, ${bookTitle}, ${author2}, ${bookSummary}, ${bookEdition}, ${bookPublisher}, ${bookImg}, ${studName}, ${studId}, ${studEmail}, ${studPhone} WHERE id = ${gID}`;

    db.query(sql,(err,result)=>{
      if(err){console.log(err);}
      res.send({
        message:'data updated'
      })
    })
  });

//view

app.get('/books/:id',(req,res)=>{
    let gID = req.params.id;
    let qr = `SELECT * FROM library.books WHERE ID = ${gID}`;

    db.query(qr,(err,result)=>{
      if(err){console.log(err);}

      if(result.length>0){
        res.send({
          message:'get single data',
          data:result
        });
      }
      else{
        res.send({
          message:'data not found'
        })
      }
    })
});

//delete
app.delete('/addBook/:id',(req,res)=>{
  let gID = req.params.id;
  let qr = `DELETE FROM addBook WHERE id = '${gID}'`;
  db.query(qr,(err,result)=>{
    if(err){console.log(err);}
    res.send(
      {
        message:'data deleted'
      }
    )
  })
})

  app.listen(3000, () => {
    console.log(`Server is running`);
  });
