//window.indexedDB =  window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

/**
 * Class of Data Base
 * 
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 */
export class DataBase{

    constructor(){
        this.con((db) => {});
    }
    /**
     * Make connetion with database
     * 
     * @param {Function Callback} callback 
     */
    con(callback){
        this.db = null;
        this.request  = indexedDB.open("DBNews", 1);
        this.request.onerror = function(e) {
            console.log("Error " + e.target.errorCode);
        };

        this.request.onupgradeneeded = function(e){
            this.db = e.target.result;
        
            const news = this.db.createObjectStore("news",  { keyPath: "id", autoIncrement:true });
            news.createIndex("id", "id",)
            news.createIndex("author", "author", { unique: false });
            news.createIndex("content", "content", {unique: false});
            news.createIndex("description", "description", {unique: false});
            news.createIndex("title", "title", {unique: false});
            news.createIndex("url", "url", {unique: false});
            news.createIndex("urlImage", "urlImage", {unique: false});
            news.createIndex("published", "published", {unique: false})
        
        };

        this.request.onsuccess = function(e){
            this.db = e.target.result;
            callback(this.db)
        };
    }
}
