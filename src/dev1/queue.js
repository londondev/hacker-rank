//https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem

function processData(input) {
    let lines=input.split("\n");
    let queue=[];
    for(let i=1;i<lines.length;i++){
        let typeAction=lines[i].split(" ");
        switch(typeAction[0]){
            case '1':
                queue.push(typeAction[1]);
                break;
            case '2':
                queue.splice(0,1);
                break;
            case '3':
                console.log(queue[0]);
                break;
        }
    }
}
