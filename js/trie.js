function Node(ch) {
    this.ch = ch;
    this.isEnd = false;
    this.links = {};
    this.words = [];    
}

// function add(str , i , root){
//     if( i == str.length ){
//         root.isEnd = true;
//         return ;
//     }
//     if(! root.links[str[i]]){
//         root.links[str[i]] = Node(str[i]);
//     }
//     root.words.push(str);
//     add(str , i+1 , root.links[str[i]]);
// }

class Trie{
    
    constructor(){
        this.root = Node();
    }
    insert(str){
        let node = root;
        for(let i=0; i<str.length ;i++){
            if(node.links[str[i]] == null){
                node.links[str[i]] = Node(str[i]);
            }
            node = node.links[str[i]];
            node.words.push(str);
            
        }
        node.isEnd = true;
    }
}
const trie = new Trie();
trie.insert("Rohit");
console.log(trie);