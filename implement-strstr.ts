// not using string inbuilt functions 

function matchFromIndex(index : number, haystack : string , needle : string) : Boolean {
    for(let I in needle.split("")){
        const i = Number(I)
        if(haystack[index + i] !== needle[i])
            return false;
    }
    return true;
}
function strStr(haystack: string, needle: string): number {
    for(let i = 0; i <= haystack.length - needle.length; i++) {
       if(matchFromIndex(i , haystack , needle)) 
           return i;
   }
   return -1;
};