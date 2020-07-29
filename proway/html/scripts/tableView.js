class TableView{

    constructor(){
        this.controler = new TableController();
        this.addEventListener('click', addEventButtonAdd);
    }

    addEventButtonAdd = () =>{
        const button = document.getElementById("buttonAdd");
        button.addEventListener('click', addItem)
    }

    addItemTable = () =>{
        this.controler.addItemTable()
    }
}