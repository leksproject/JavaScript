//Insert new node in BST

 ``

 class Node {
     constructor(data){
         this.data = data;
         this.left = null;
         this.right = null;
     }
 }

 class Bst {
     constructor(){
         this.root = null;
     }

     insert(data){
         let node = new Node(data);

         if(!this.root){
             this.root = node;
             return this;
         }
         let current = this.root;
         if(data === current.data)
         return;

         if(data < current.data){
             if(!current.left){
                 current.left = node;
             }
             current = current.left;
         }

         if(data > current.data){
            if(!current.right){
                current.right = node;
            }
            current = current.right;
        }
     }
 }

 let test = new Bst();
 test.insert(11);
 test.insert(4);
 test.insert(4);
 test.insert(12);

 console.log(test);
