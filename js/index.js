words=["Apple" , "abd" , "ipl","india" , "rohit" , "cr7"];

const root = new TrieNode('\0');
for(var word of words){
    insert(root ,word , 0);
}

const text_box = document.getElementById("text-box");
const list = document.getElementById("list");

function handleClick(e){
    text_box.value = e.innerText;
}

function handler(e){
    const str = e.target.value;
    const wordslist = search(root, str , 0);
    console.log(wordslist);
    
    list.innerHTML = "";
    for(var word of wordslist){
        list.innerHTML += `<li class="list-group-item clickable"  onclick = "handleClick(this)">
            <b>${str}</b>${word.substring(str.length)}</li>`;
    }

    
}

if(text_box)
    text_box.addEventListener('keyup' , handler);