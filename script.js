
//Binary Tree Class
class BST{
    constructor(){
        this.root = null
       
    }
    insert(data){
        let newNode = new Node(data)
        if(this.root === null){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(node,newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode

            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }
    inOrderTraverse(node, callback) {
        if (node != null) {
            this.inOrderTraverse(node.left, callback);
            callback(node.data);
            this.inOrderTraverse(node.right, callback);
        }
    }
  

    
    
}
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


///in this sections I write whe functions to drow tree and childs

 const createSubTreeForNode = (treeNode) => {
    if (!treeNode.left && !treeNode.right) {
        return;
    }
    
    let list, item;
    
    list = document.createElement('ul');
    list.className = "list"
    
    item = createListItem(treeNode.left);
    if (item) {
        list.appendChild(item);
    }
    
    item = createListItem(treeNode.right);
    if (item) {
        list.appendChild(item);
    }
   
    return list;
};
 const createListItem = (treeNode) => {
    if (!treeNode) {
        return;
    }
    
    let item, subTree;
    
    item = document.createElement('div');
    item.className= "branch"
    item.textContent = treeNode.data;
    
    subTree = createSubTreeForNode(treeNode);
    if (subTree) {
        item.appendChild(subTree);
    }
    
    return item;
};

 const createItem = (value)=>{
       
    let item
    
    let ul = document.querySelector(".list").lastChild
    item = document.createElement('div');
    item.className= "branch"
    item.textContent = value
    
    ul.appendChild(item)


}

 const renderTree = (treeNode, parentElement) => {
    parentElement = parentElement || document.getElementById("app");
    
    let rootList, item;
    
    rootList = document.createElement('ul');
    item     = createListItem(treeNode);
    if (item) {
        rootList.appendChild(item);
    }
    
    parentElement.appendChild(rootList);
};

//Utill function to generate random Number
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
  


//app renders

const res = new BST()





res.insert(15)
res.insert(14)
res.insert(23)
res.insert(19)
res.insert(65)
res.insert(56)
res.insert(15)



document.onkeydown = function (e){
    if(e.keyCode == 32){
        let randomNumber = randomInteger(-100,100)
        console.log(randomNumber)
        createItem(randomNumber)
        res.insert(randomNumber)
    }

}



renderTree(res.root)
let allBranchesInTree = document.querySelectorAll(".branch")
allBranchesInTree.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        e.target.remove()
    })
})