export class CardModel{

    constructor(){
        this.cards = document.getElementById("cards")
    }

    createCard(button){
            this.card = document.createElement('div');
            this.cardHeader = document.createElement('div');
            this.cardContent = document.createElement('div');
            this.cardFooter = document.createElement('div');

            this.card.classList.add("card");
            this.cardHeader.classList.add("card-header");
            this.cardContent.classList.add("card-content");
            this.cardFooter.classList.add("card-footer");

            this.title = document.createElement("span");
            this.link = document.createElement("a");
            this.title.appendChild(this.link);
            this.cardHeader.appendChild(this.title);

            this.description = document.createElement("p");
            this.img = document.createElement("img");
            this.cardContent.append(this.description);
            this.cardContent.append(this.img);

            this.published = document.createElement("span");
            this.published.classList.add("card-published");
            this.author = document.createElement("span");
            this.author.classList.add("card-author");
    
            this.cardFooter.appendChild(this.published);
            this.cardFooter.appendChild(this.author);
            this.cardFooter.appendChild(button);

            this.card.appendChild(this.cardHeader);
            this.card.appendChild(this.cardContent);
            this.card.appendChild(this.cardFooter);

            this.cards.appendChild(this.card);

    } 

    createButton(nameButton){
        let button = document.createElement("button");
        button.innerHTML = nameButton
        button.classList.add("btn-" + nameButton.toLowerCase());

        return button;
    }

}