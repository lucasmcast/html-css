import { CardModel } from "./cardModel.js";
import { NewsView } from "./newsView.js";
import { NewsController } from "./newsController.js";

export class FavoritesView {

    constructor(){
        this.controller = new NewsController();
        this.view = new NewsView()
        this.card = new CardModel()
    }
    
    async renderView(){
        const data = await this.controller.getAllNewsDB();
        this.view.createCards(data, "Apagar", (noticia) => {
            this.clickBotao(noticia)
        });
    }

    clickBotao(noticia){
        this.controller.delete(noticia);
    }

}