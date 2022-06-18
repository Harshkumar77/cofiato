function conversion(n : string) : string {
    const numbers = n.split("").map(_ => Number(_));
    
    let counter = 1;
    let say = "";
    for(let i = 1; i < numbers.length; i++) {
        if(numbers[i] === numbers[i - 1])
            counter++;
        else {
            say += (`${counter}${numbers[i - 1]}`)
            counter = 1;
        }
    }
    
    if(counter > 0)
        say += `${counter}${numbers.pop()}`
        
    return say;
}
function countAndSay(n: number): string {
    if(n === 1) 
        return "1"
    let prev = "1" , cur = ""
    for(let i = 1; i < n; i++) {
        cur = conversion(prev);
        prev = cur
    } 
    return cur
};
// https://leetcode.com/problems/count-and-say/