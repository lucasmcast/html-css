import { NewsController } from "./newsController.js";
import { CardModel } from "./cardModel.js";
import { News } from "./newsModel.js";

export class NewsView{

    constructor(){
        this.cards = new CardModel();
        this.controller = new NewsController();
        this.createCards();
    }

    async createCards(){
        const data = await this.controller.getTopNewsApi();
        let loader = document.getElementById("loader");
        loader.style.display = "none";
        //console.log(data)
        let news = [];
        let qtdData = data.articles.length;
        //console.log(qtdData)
        for(let i=0; i < qtdData; i++){
            let card = new CardModel();
            card.createCard();
            let noticia = new News();
            noticia.setTitle(data.articles[i].title)
            noticia.setAuthor(data.articles[i].author);
            noticia.setContent(data.articles[i].content);
            noticia.setDescription(data.articles[i].description);
            noticia.setPublishedAt(data.articles[i].publishedAt);
            noticia.setUrlImage(data.articles[i].urlToImage);
            noticia.setUrl(data.articles[i].url);

            news.push(noticia);
            
        }

        this.setNewsCards(news);
    }

    clickBotao(noticia){
        this.controller.save(noticia);
        //console.log(noticia.getContent())
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

