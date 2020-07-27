class TableModel{
    
    constructor(items){
        this.items = items;
    }

    renderTable = () => {
        //renderiza na pagina html a tabela
        const button = document.getElementById("buttonAdd");

        button.addEventListener("click", this.addItem);

        const table = document.getElementById("customers");
        const thead = document.createElement("thead");
        const tr = document.createElement("tr")

        this.createLineCol(this.items, tr);

        const content = document.createElement("tbody");
        content.id = "content";

        const tfoot = document.createElement("tfoot");

        thead.appendChild(tr);

        table.appendChild(thead);
        table.appendChild(content);
        table.appendChild(tfoot);
    }

    createLineCol = (items, tr) => {
        //Cria as colunas conforme os items passados por array e adiciona ao elemento tr
        for(let i=0; i < items.length; i++){
            let col = document.createElement("th");
            col.innerHTML = items[i];
            tr.appendChild(col);
        }
    }

    addItem = () => {
        const controler = Controler();
        controler.addItem();
    }
}