class TableController{
    
    renderTable = (itemsTable) => {
        this.table = new TableModel(itemsTable);
        this.table.renderTable()
    }

    addItemTable = () => {
        const input = document.getElementById("inputAdd");
        
        let btnDel = document.createElement("button");
        btnDel.innerHTML = "Apagar";
        let btnEdit = document.createElement("button");
        btnEdit.innerHTML = "Editar";
        let btnFinish = document.createElement("button");
        btnFinish.innerHTML = "Concluir";
        
        const content = this.table.getContent()
        let linha = content.insertRow(-1);
        let coll1 = linha.insertCell(0);
        let coll2 = linha.insertCell(1);
        let coll3 = linha.insertCell(2);
        let coll4 = linha.insertCell(3);

        coll4.classList.add("btn-action");
        let qtd = content.getElementsByTagName("tr").length;

        btnDel.classList.add("btn-del");
        btnEdit.classList.add("btn-edit");
        btnFinish.classList.add("btn-finish")

        btnDel.addEventListener('click', () => {
            this.table.clickButtonDel(btnDel);
        }, false);
    
        btnFinish.addEventListener('click', () => {
            this.table.clickButtonFinish(btnFinish)
        }, false);

        btnEdit.addEventListener('click', () => {
            this.table.clickButtonEdit(btnEdit)
        })

        coll1.innerHTML = qtd;
        coll2.innerHTML = input.value;
        coll3.innerHTML = "Pendente"
        
        coll4.appendChild(btnDel);
        coll4.appendChild(btnFinish);
        coll4.appendChild(btnEdit);
        input.value = ""
    }

}