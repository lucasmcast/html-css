import { NewsController } from "./newsController.js";
import { CardModel } from "./cardModel.js";

export class NewsView{

    constructor(){
        this.cards = new CardModel();
        this.controller = new NewsController();
        this.getTopNewsApi()
    }

    getTopNewsApi(){
        this.controller.getTopNewsApi();
    }

    singleton(){
        return this;
    }
}

