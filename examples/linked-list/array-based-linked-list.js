import LinkedList from "../../src/data-structure/array-based-linked-list";

const list = new LinkedList();

for (const i of Array(10).keys()) {
    list.insertLast(i);
}


console.log(list);

list.printValues();
