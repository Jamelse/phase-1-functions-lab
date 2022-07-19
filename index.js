function distanceFromHqInBlocks(blocks) {
    if (blocks > 42){
        return blocks - 42;
    } else return 42 - blocks;
}
function distanceFromHqInFeet(blocks) {
    const feet = distanceFromHqInBlocks(blocks) * 264;
    return feet;
}
function distanceTravelledInFeet(num1, num2){
    if (num1 > 42){
        return Math.abs(num1 - num2)* 264;
    } else return Math.abs(num2 - num1)* 264;
}
function calculatesFarePrice(num1, num2){
    if (distanceTravelledInFeet(num1, num2) < 400){
        return 0;
    } else if (distanceTravelledInFeet(num1, num2) >= 400 && distanceTravelledInFeet(num1, num2) <= 2000){
        return (distanceTravelledInFeet(num1, num2) - 400) * 0.02;
    } else if (distanceTravelledInFeet(num1, num2) >= 2000 && distanceTravelledInFeet(num1, num2) < 2500) {
        return 25;
    } else if (distanceTravelledInFeet(num1, num2) > 2500){
        return 'cannot travel that far';
    }
}