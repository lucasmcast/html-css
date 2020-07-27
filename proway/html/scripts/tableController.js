class TableController{
    
    constructor(items){
        this.items = items;
        this.button = document.getElementById("buttonAdd");
    }

    renderTable = () => {
        const table = new TableModel(this.items);
        table.renderTable()
    }

    addItemTable = () => {
        const button = document.getElementById("buttonAdd");
    }
}