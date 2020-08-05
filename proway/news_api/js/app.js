import { NewsView } from "./newsView.js";
import { NewsController } from "./newsController.js";
import { FavoritesView } from "./favoritesView.js";

class App{

    constructor(){
        this.route(window.location.pathname);
        //console.log(window.location.pathname)
    }

    route(pathname){
        console.log(pathname)
        switch(pathname){
            case "/index.html":
                let view = new NewsView()
                view.renderNews()
                break;
            case "/favorites.html":
                let favorites = new FavoritesView()
                favorites.renderView()
                break;
        }
    }
}

new App()