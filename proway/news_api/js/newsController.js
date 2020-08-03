import { NewsDAO } from "./newsDAO.js";
import { CardModel } from "./cardModel.js";

export class NewsController{

    constructor(){
        this.newsDao = new NewsDAO()
        this.setNewsCards()
    }
    
    getTopNewsApi(){
        var result = this.newsDao.getTopNewsApi();
        console.log(result)
    }

    setNewsCards(){
        var cardModel = new CardModel()
        cardModel.setValueTitle("Olamundo")

        var cardModel1 = new CardModel()
        cardModel1.setValueTitle("Olamundo")
    }
}