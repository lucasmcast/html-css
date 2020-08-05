import { NewsDAO } from "./newsDAO.js";
import { CardModel } from "./cardModel.js";

export class NewsController{

    constructor(){
        this.newsDao = new NewsDAO()
    }
    
    async getTopNewsApi(){
        var response = await this.newsDao.getTopNewsApi();
        const data = await response.json();
        return data;
    }

    save(noticia){
        this.newsDao.save(noticia);
    }

    getAllNewsDB(){
        var response = this.newsDao.getAllNewsDB();
        return response;
    }

    async delete(noticia){
        let title = noticia.getTitle()
        this.newsDao.delete(title);
    }
}