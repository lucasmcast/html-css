import {DataBase} from "./db.js";

export class NewsDAO{

    constructor(){
        this.db = new DataBase();
    }
    getTopNewsApi(){
        var url = 'http://newsapi.org/v2/top-headlines?country=br&apiKey=35cbe59d9d144abebd03d7c457a45e75'
        return fetch(url);
    }

    save(news){
        this.db.con((db) => {
            var transaction = db.transaction(["news"], "readwrite");
            // Do something when all the data is added to the database.
            transaction.oncomplete = function(event) {
                alert("Success Save!");
            };

            transaction.onerror = function(event) {
                // Don't forget to handle errors!
            };
            var customerData = [
                {
                    author: news.getAuthor(), 
                    content: news.getContent(),
                    description: news.getDescription(),
                    title: news.getTitle(),
                    url: news.getUrl(),
                    urlImage: news.getUrlImage(),
                    published: news.getPublishedAt()
                }
            ]
            var objectStore = transaction.objectStore("news");
            
            customerData.forEach(function(customer) {
                var request = objectStore.put(customer);
                request.onsuccess = function(event) {
                    //callback(request.result)
                };
            });
        });
    }
    
    getAllNewsDB(){
        return new Promise((resolve, reject) => {
            this.db.con((db) => {
                var objectStore = db.transaction(['news']).objectStore('news');
                var request = objectStore.getAll();
                request.onsuccess = (event) => {
                    resolve(request.result);
                }
            });  
        })
        
    }
}