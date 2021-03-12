function format(num) {
    hours = Math.floor(num / 3600);
    minutes = Math.floor((num - (hours * 3600)) / 60);
    seconds = num - (hours * 3600) - (minutes * 60);
    return hours + ':' + minutes + ':' + seconds;
}

console.log(format(3700))