let ALPHABET_SIZE = 26;
 
// trie node
class TrieNode
{
    constructor()
    {
        this.isEnd = false;
        this.children = new Array(ALPHABET_SIZE);
        for (let i = 0; i < ALPHABET_SIZE; i++)
            this.children[i] = null;
        
        this.words = [];
    }
}

class Trie {

    
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        let len = word.length ;
        let node = root;
        for(let i=0; i< len; i++){
            let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if(node.children[index] == null){
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
            node.words.push(word);
        }
        node.isEnd = true;
    }

    search(word){
        let len = word.length ;
        let node = root;
        for(let i=0; i< len; i++){
            let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if(node.children[index] == null){
                return false;
            }
            node = node.children[index];
        }
        return node.isEnd;
    }

}

let trie = new Trie();
trie.insert("rohit");

// let root;
 
// // If not present, inserts key into trie
//     // If the key is prefix of trie node,
//     // just marks leaf node
// function insert(key)
// {
//     let level;
//         let length = key.length;
//         let index;
       
//         let node = root;
       
//         for (level = 0; level < length; level++)
//         {
//             index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
//             if (node.children[index] == null)
//                 node.children[index] = new TrieNode();
       
//             node = node.children[index];
//             node.words.push(key);
//         }
       
//         // mark last node as leaf
//         node.isEnd = true;
// }
 
// // Returns true if key presents in trie, else false
// function search(key)
// {
//     //let level;
//         let length = key.length;
//         let index;
//         let node = root;
       
//         for (let i = 0; i < length; i++)
//         {
//             index = key[i].charCodeAt(0) - 'a'.charCodeAt(0);
       
//             if (node.children[index] == null)
//                 return false;
       
//             node = node.children[index];
//             console.log(node.words);
//         }
       
//         return (node.isEnd);
// }
// root = new TrieNode();
// insert("Rohit");
// insert("Ronaldo")
// search("Roh");
