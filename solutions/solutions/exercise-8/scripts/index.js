let colors = {
    1: 'red',
    2: 'green',
    3: 'pink',
    4: 'yellow',
    5: 'magenta'
};

function getColor(color) {
    color = colors[color];
    return `You chose ${color}`;
}

console.log(getColor(3));