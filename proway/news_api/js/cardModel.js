export class CardModel{

    constructor(){
        this.cards = document.getElementById("cards")
        /* this.cardHeader = document.getElementsByClassName("card-header");
        this.cardContent = document.getElementsByClassName("card-content");
        this.cardImg = document.getElementsByClassName("card-img");
        this.cardFooter = document.getElementsByClassName("card-footer"); */
        this.createCard();
    }

    setValueTitle(title){
        var span = this.cardHeader[0].querySelector("span");
        span.innerHTML = title
    }

    createCard(){
        this.card = document.createElement('div');
        this.cardHeader = document.createElement('div');
        this.cardContent = document.createElement('div');
        this.cardImg = document.createElement('div');
        this.cardFooter = document.createElement('div');

        this.card.classList.add("card")
        this.cardHeader.classList.add("card-header");
        this.cardContent.classList.add("card-content");
        this.cardImg.classList.add("card-img");
        this.cardFooter.classList.add("card-footer")
        
        this.card.appendChild(this.cardHeader);
        this.card.appendChild(this.cardContent);
        this.card.appendChild(this.cardImg);
        this.card.appendChild(this.cardFooter);

        this.cards.appendChild(this.card);
    }   

}