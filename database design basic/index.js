const moment = require('moment');
const fs = require('fs');  
const readlineSync = require('readline-sync');
var users = [];
var books = [];
// tao mot thu vien sach, moi cuon sach co id, lich su 
// lich su luu lai id nguoi muon, so ngay se muon, date muon, va date tra
// database user, gom id, pass, ngay qua han
// chuc nang dki, gom id va pass
// chuc nang dang nhap, dang nhap roi moi duoc muon va tra, va thoat 
function loadData(){
  let usersData = fs.readFileSync("./users.json");
  let booksData = fs.readFileSync("./books.json");
  users = JSON.parse(usersData);
  books = JSON.parse(booksData);
}
function saveUserData(){
  let data = JSON.stringify(users);
  fs.writeFileSync("./users.json", data); 
}
function saveBookData(){
  let data = JSON.stringify(books);
  fs.writeFileSync("./books.json", data); 
}
function option(option1, option2){
  console.log("1. ", option1);
  console.log("2. ", option2);
  return parseInt(readlineSync.question("Chon: "));
}
function login(){
  let id = readlineSync.question("ID: ");
  let pass = readlineSync.question("Mat khau: ");
  let user = users.find(function(user){
    return user.id === id && user.pass === pass;
  })
  return  user ? user : false;
}
function signUp(){
  let id = readlineSync.question("ID: ");
  let isSame = users.find(function(user){
    return user.id === id; 
  })
  if(!isSame){
    let pass = readlineSync.question("Mat khau: ");
    let user = {
      id: id,
      pass: pass,
      daysOverdue: 0
    }
    users.push(user);
    saveUserData();
  } else {
    console.log("Da ton tai ID nay, vui long nhap lai ID khac");
    signUp();
  }
}
function borrowBook(user){
  let bookId = readlineSync.question("ID cua sach: ");
  let book = books.find(function(book){
    return book.id === bookId;
  });
  if(book){
    let borrowedDate = readlineSync.question("Ngay muon (YYYY-MM-DD): ");
    let daysBorrowed = readlineSync.question("So ngay se muon sach: ");
    book.histories.push({
      borrowedBy: user.id,
      borrowedDate: borrowedDate,
      daysBorrowed: daysBorrowed
    })
    saveBookData();
  }
}
function returnedBook(user){
  let bookId = readlineSync.question("ID cua sach: ");
  let book = books.find(function(book){
    return book.id === bookId;
  });
  if(book){
    let turnedDate = readlineSync.question("Ngay tra (YYYY-MM-DD): ");
    let history = book.histories.find(function(history){
      return history.borrowedBy === user.id
    })
    history['turnedDate']= turnedDate;
    turnedDate = moment(turnedDate);
    let borrowedDate = moment(history.borrowedDate);
    let days = history.daysBorrowed;
    let diff = turnedDate.diff(borrowedDate)/1000/86400;
    let daysOverdue = diff - days;
    if(daysOverdue > 0){
      user.daysOverdue += daysOverdue;
    }
    saveBookData();
    saveUserData();
  }
}
function showMenu(){
  let choose = option("Dang nhap", "Dang ky");
  switch(choose){
    case 1:
      let user = login();
      if(user){
        choose = option("Muon sach", "Tra sach");
        if(choose === 1){
          borrowBook(user);
        } 
        else returnedBook(user);
      }
      showMenu();
      break;

    case 2:
      signUp();
      showMenu();
      break;
  }
}
function main(){
  loadData();
  showMenu();
}
main();

