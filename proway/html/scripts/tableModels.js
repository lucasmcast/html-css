class TableModel{
    
    constructor(items){
        this.items = items;
        this.table = document.getElementById("customers");
        this.thead = document.createElement("thead");
        this.tr = document.createElement("tr");
        this.createLineCol(this.items, this.tr);
        this.content = document.createElement("tbody");
    }

    renderTable = () => {
        this.content.id = "content";

        const tfoot = document.createElement("tfoot");

        this.thead.appendChild(this.tr);

        this.table.appendChild(this.thead);
        this.table.appendChild(this.content);
        this.table.appendChild(tfoot);
    }

    createLineCol = (items, tr) => {
        //Cria as colunas conforme os items passados por array e adiciona ao elemento tr
        for(let i=0; i < items.length; i++){
            let col = document.createElement("th");
            col.innerHTML = items[i];
            tr.appendChild(col);
        }
    }

    clickButtonDel(r) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("customers").deleteRow(i);
    }

    clickButtonFinish(r){
        let line = r.parentNode.parentNode;
        let status = line.querySelectorAll("td")[2]
        status.innerHTML = "Concluído"
    }

    clickButtonEdit(r){
        let line = r.parentNode.parentNode;
        let tarefa = line.querySelectorAll("td")[1]
        
        let btnSalve = document.createElement("button")
        btnSalve.innerHTML = "Salvar"
        let input = document.createElement("input")
        input.value = tarefa.innerHTML
        tarefa.innerHTML = ""
        tarefa.appendChild(input);
        tarefa.appendChild(btnSalve);
        
        
        btnSalve.addEventListener('click', function () {
            tarefa.innerHTML = input.value
        });
    }

    getContent(){
        return this.content;
    }

    setContent(){
        
    }
}