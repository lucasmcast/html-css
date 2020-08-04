import { NewsDAO } from "./newsDAO.js";

export class FavoritesController{

    constructor(){
        this.newsDao = new NewsDAO()
    }


    async getAllNewsDB(){
        var response = await this.newsDao.getAllNewsDB();
        /* const data = await response.json();
        return data; */
        return response;
    }

}