
document.getElementById("play").addEventListener ("click", function () {
        const num =document.getElementById("memory");
        const numgen = createNumRandomOrd(5, 1, 100);
        num.innerHTML = numgen;
        const timer = document.getElementById("timer");
        let seconds = 1;
        let score = 0;
        let clock = setInterval(
            function(){
                timer.innerHTML = "Timer= " + " " + seconds;
                if(seconds === 0){
                    clearInterval(clock);
                    num.innerHTML = " ";
                    for (let i = 0; i < 5; i++){
                        const numr =parseInt(prompt("Inserisci i numeri"));
                        console.log(numr);
                        if (numgen.includes(numr)){
                            score++;
                            document.getElementById("corretti").innerHTML += numr + " ";
                            console.log("corretto");
                        } else {
                            document.getElementById("sbagliati").innerHTML += numr + " ";
                            console.log("sbagliato");
                        }
                    }
                    document.getElementById("punteggio").innerHTML = score;
                } else {
                    seconds--;
                    console.log(seconds);
                    }     
            },
            1000
        )
        function createRandomNum(numMin, numMax) {
            return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
        }
        function createNumRandomOrd(numMax, min, max){
            let numArray = [];
            while (numArray.length < numMax){
                const numrand = createRandomNum(min, max);
                if (!numArray.includes(numrand)){
                    numArray.push(numrand);
                }
            }
            return numArray;
        }
    }
);