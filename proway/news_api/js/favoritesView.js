import { FavoritesController } from "./favoritesController.js";
import { CardModel } from "./cardModel.js";
import { NewsView } from "./newsView.js";
import {News} from "./newsModel.js"

export class FavoritesView{

    constructor(){
        this.cards = new CardModel();
        this.controller = new FavoritesController();
        this.createCards();
    }

    async createCards(){
        const data = await this.controller.getAllNewsDB();
        console.log(data)
        let news = [];
        let qtdData = data.length;
        //console.log(qtdData)
        for(let i=0; i < qtdData; i++){
            let card = new CardModel();
            card.createCard();
            let noticia = new News();
            noticia.setTitle(data[i].title)
            noticia.setAuthor(data[i].author);
            noticia.setContent(data[i].content);
            noticia.setDescription(data[i].description);
            noticia.setPublishedAt(data[i].published);
            noticia.setUrlImage(data[i].urlImage);
            noticia.setUrl(data[i].url);

            news.push(noticia);
            
        }

        this.setNewsCards(news);
    }

    clickBotao(news){
        console.log(news)
    }
    setNewsCards(news){
        const container = document.getElementsByClassName("container");
        
        for(let i=0; i < news.length; i++){
            var cards = container.cards.children;
            let card = cards[i]
            let contentCard = card.querySelectorAll("div");
            contentCard[0].children[0].children[0].href = news[i].getUrl();
            contentCard[0].children[0].children[0].innerHTML = news[i].getTitle();
            
            let content = contentCard[1].children
            content[0].innerHTML = news[i].getDescription();
            content[1].src = news[i].getUrlImage();

            let footer = contentCard[2].children;
            //console.log(footer);
            footer[0].innerHTML = news[i].getPublishedAt();
            footer[1].innerHTML = news[i].getAuthor();
            let noticia = news[i]
            footer[2].addEventListener('click', () => {
                this.clickBotao(noticia);
            });
        }  
        
    }
    
}