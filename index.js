//Problem 1

class Books{
    constructor(name, rating, genre, author){
        this.name = name;
        this.rating = rating;
        this.genre = genre;
        this.author = author;
    }
}

function main(){
    let book1 = new Books("Good Book","2","Spooky","Guy Fieri");
    let book2 = new Books("Better Book","3","Fantasy","Guy Fieri");
    let book3 = new Books("Best Book","5","Nonfiction","Guy Fieri");
    let arrayOfBooks = [book1, book2, book3];

    arrayOfBooks.forEach(function(eachElement){
        console.log(`The book ${eachElement.name} has ${eachElement.rating} stars!!!`);
    })


}
main();