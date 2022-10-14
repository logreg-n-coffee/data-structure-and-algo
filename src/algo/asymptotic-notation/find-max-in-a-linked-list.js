import LinkedList from "../../data-structure/linked-list";

export const findMax = list => {
    let current = list.head;
    let max = current.data;
    while (current.getNextNode() !== null) {
        current = current.getNextNode();
        let val = current.data;
        if (val > max) {
            max = val;
        }
    }
    return max;
};

const myList = new LinkedList();

const listItems = [1, 5, 9, 40, 50, 60, 70, 80, 90, 100];

for (const item of listItems) {
    myList.addToTail(item);
}

myList.printList();

console.log('findMax', findMax(myList));

// Big O: O(N) - the loop will run once based on the number of items
