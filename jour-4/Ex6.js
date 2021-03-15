function format(num) {
    hours = Math.floor(num / 3600);
    console.log(hours)
    minutes = Math.floor((num - (hours * 3600)) / 60);
    console.log(minutes)
    seconds = num - (hours * 3600) - (minutes * 60);
    console.log(seconds)
    return hours + ':' + minutes + ':' + seconds;
}

console.log(format(3700))