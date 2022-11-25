
class Node{
    constructor(element){
        this.value = element;
        this.next = undefined;
    }
}

class Lista{
    constructor(){
        this.head = undefined;
        this.count = 0;
    }
    push(element){
        const node = new Node(element);
       
        if(this.head == null)
        {
            this.head = node
        }
        else
        {
            let current = this.head;

            while(current.next !=null)
            {
                current = current.next
            }
            current.next = node;

        }
        this.count++
    }
    getElementAt(position){
        if(position>=0 && position<=this.count){
            let node = this.head;
            for(let i = 0;i<position && node!=null;i++){
                node = node.next;
            }
            return node;
        }
        return undefined
    }
    insertAt(element,position){
        if(position>=0 && position<=this.count){
            let node = new Node(element)
            if(position==0){
                const current = this.head;
                node.next = current;
                this.head = node;
            }else{
                const previous = this.getElementAt(position - 1)
                const current = previous.next
                previous.next = node
                node.next = current
            }
            this.count++
            return true
        }
        return false
    }
    isEmpty(){
        if(this.count==0){
            return true
        }else{
            return false
        }
    }
    size(){
        return this.count
    }
    indexOf(element){
        let posicao
        let current = element
        let Elementos = this.getElementAt(0)
        while(current!=Elementos.value && posicao<this.count){
            posicao++
            Elementos = Elementos.next
        }
        return posicao
    }
    removeAt(position){
        if(position>=0 && position <=this.count){
            const current = this.head
            if(position == 0){
                this.head = current.next
            }else{
                const previous = this.getElementAt(position - 1)
                const current = previous.next
                previous.next = current.next
            }
        }
        this.count --
    }
    //Demais métodos da classe Lista
    //remove() remove um elemento da lista
    //indexOf(element) retornar o indice do elemento da lista 
    //removeAt(position) remover o elemento de uma posicao especifica da lista 
}

const nova_lista = new Lista()
nova_lista.push(2)
nova_lista.push(14)
nova_lista.push(6)
nova_lista.push(7)
nova_lista.push(5)
nova_lista.insertAt(17,2)

//document.getElementById("view").innerHTML = JSON.stringify(nova_lista,null,2)
//console.log(JSON.stringify(nova_lista,null,2))
console.log(nova_lista.indexOf(2))