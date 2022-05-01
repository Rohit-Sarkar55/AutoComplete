class TrieNode{
    constructor(ch){
        this.ch = ch;
        this.isEnd = false;
        this.links ={};
        this.words =[];
    }
};

function insert(root , str , i){
    if( i == str.length){
        root.isEnd = true;
        return;
    }
    if( ! root.links[str[i]] ){
        root.links[str[i]] = new TrieNode(str[i]);
    }
    root.words.push(str);
    insert(root.links[str[i]] , str , i+1 );
};

const root = new TrieNode();
