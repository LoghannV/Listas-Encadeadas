
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
    //Demais métodos da classe Lista
    //push() adicionar um elemento no fim da lista
    //inserAt(element,position) add um elemento em qualquer posicao da lista
    //remove() remove um elemento da lista
    //getElementAt(position) retornar o elemento da posicao especifica da lista 
    //indexOf(element) retornar o indice do elemento da lista 
    //removeAt(position) remover o elemento de uma posicao especifica da lista 
    //isEmpty() retorna se lista esta vazia 
    //size() retorna o tamanho da lista 
}

const nova_lista = new Lista()
nova_lista.push(2)
nova_lista.push(14)
nova_lista.push(6)
document.getElementById("view").innerHTML = JSON.stringify(nova_lista.getElementAt(2))
console.log(JSON.stringify(nova_lista.getElementAt(2)))