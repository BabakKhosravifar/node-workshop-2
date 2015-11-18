

function getFortune(){
    var array = ["Life is 10% what happens to you and 90% how you react to it.", "Failure will never overtake me if my determination to succeed is strong enough.","What you do today can improve all your tomorrows.", "A creative man is motivated by the desire to achieve, not by the desire to beat others.", "In order to succeed, we must first believe that we can.", "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.", "Don't watch the clock; do what it does. Keep going.", "Always do your best. What you plant now, you will harvest later.", "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", "You are never too old to set another goal or to dream a new dream."];
    return array[Math.floor((Math.random() * 10) + 1)];
}

