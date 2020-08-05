import { DataBase } from "./db.js";

export class NewsDAO {

    constructor() {
        this.db = new DataBase();
    }
    getTopNewsApi() {
        var url = 'http://newsapi.org/v2/top-headlines?country=br&apiKey=35cbe59d9d144abebd03d7c457a45e75'
        return fetch(url);
    }

    save(news) {
        this.db.con((db) => {
            var transaction = db.transaction(["news"], "readwrite");
            // Do something when all the data is added to the database.
            transaction.oncomplete = function (event) {
                alert("Success Save!");
            };

            transaction.onerror = function (event) {
                // Don't forget to handle errors!
            };
            var customerData = [
                {
                    author: news.getAuthor(),
                    content: news.getContent(),
                    description: news.getDescription(),
                    title: news.getTitle(),
                    url: news.getUrl(),
                    urlToImage: news.getUrlImage(),
                    publishedAt: news.getPublishedAt()
                }
            ]
            var objectStore = transaction.objectStore("news");

            customerData.forEach(function (customer) {
                var request = objectStore.put(customer);
                request.onsuccess = function (event) {
                    //callback(request.result)
                };

                request.onerror = function (event) {
                    alert("Matéria ja esta salva");
                }
            });
        });
    }

    delete(title) {
        this.db.con((db) => {
            var objectStore = db.transaction(["news"], "readwrite")
                .objectStore("news");
                
            var index = objectStore.index("title");
            var filtro = IDBKeyRange.only(title);
            var request = index.openCursor(filtro);

            request.onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor){
                    objectStore.delete(cursor['primaryKey'])
                }
                alert("Noticia excluida com sucesso")
            }
            request.onerror = function (event) {
                console.log("deu erro ao apargar");
            }
        });
    }

    getByTitle(title){
        return new Promise((resolve, reject)=>{
            this.db.con((db) => {
                var objectStore = db.transaction(["news"]).objectStore("news");
                console.log(typeof(title))
                var request = objectStore.get(title);

                request.onsuccess = function(event) {
                    resolve(request.result);
                }
            });
        });
    }

    getAllNewsDB() {
        return new Promise((resolve, reject) => {
            this.db.con((db) => {
                var objectStore = db.transaction(['news']).objectStore('news');
                var request = objectStore.getAll();
                request.onsuccess = (event) => {
                    resolve(request.result);
                }
            });
        });
    }
}