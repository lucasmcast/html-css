class TableView{

    constructor(){
        this.controler = new TableController();
        this.renderTable();
        this.buttonAdd = document.getElementById("buttonAdd");
        this.buttonAdd.addEventListener('click', this.addItem);
    }

    addEventButton = () =>{
        this.controler.addEventButton();
    }

    addItem = () => {
        this.controler.addItemTable();
    }

    renderTable = () => {
        const itemsTable = ["ID", "Descrição", "Situação", "Ação"];
        this.controler.renderTable(itemsTable);
    }
}