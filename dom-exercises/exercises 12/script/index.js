let memory_array = ['red','red','black','black','white','white','yellow','yellow','blue','blue','green','green','aqua','aqua','purple','purple','orange','orange','cadetblue','cadetblue','cyan','cyan','teal','teal'];
let memory_values = [];
let memory_tile_ids = [];
let tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function(){
    let i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
};
function newBoard(){
    tiles_flipped = 0;
    let output = '';
    memory_array.memory_tile_shuffle();
    for(let i in memory_array) {
        output += '<div id="tile_'+ i + "onclick=""memoryFlipTile""(this,+memory_array[i]+)"></div>;
    }
    document.getElementById('memory_board').innerHTML = output;

}
function memoryFlipTile(tile,val){
    if(tile.style.background === tile.style.background && memory_values.length < 2){
        tile.style.background = val;
        if(memory_values.length === 0){
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
        } else if(memory_values.length === 1){
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
            if(memory_values[0] === memory_values[1]){
                tiles_flipped += 2;
                // Clear both arrays
                memory_values = [];
                memory_tile_ids = [];
                // Check to see if the whole board is cleared
                if(tiles_flipped === memory_array.length){
                    alert("Board cleared... generating new board");
                    document.getElementById('memory_board').innerHTML = "";
                }
            } else {
                function flip2Back(){
                    // Flip the 2 tiles back over
                    let tile_1 = document.getElementById(memory_tile_ids[0]);
                    let tile_2 = document.getElementById(memory_tile_ids[1]);
                    tile_1.style.background = 'deeppink';
                    tile_1.innerHTML = "";
                    tile_2.style.background = 'deeppink';
                    tile_2.innerHTML = "";
                    // Clear both arrays
                    memory_values = [];
                    memory_tile_ids = [];
                }
                setTimeout(flip2Back, 700);
                newBoard();
            }
        }
    }
}