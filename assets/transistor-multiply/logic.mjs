export const bit=(n,i)=>(n>>>i)&1;
export const binary=(n,w=16)=>n.toString(2).padStart(w,'0');
export function fullAdder(a,b,c){const p=a^b;return {sum:p^c,carry:(a&b)|(p&c)};}
export function add16(a,b){let carry=0,result=0;for(let i=0;i<16;i++){const next=fullAdder(bit(a,i),bit(b,i),carry);result|=next.sum<<i;carry=next.carry;}return result;}
export function multiply(a,b){if(![a,b].every(n=>Number.isInteger(n)&&n>=0&&n<=255))throw new RangeError('Expected unsigned 8-bit integers');const matrix=Array.from({length:8},(_,i)=>Array.from({length:8},(_,j)=>bit(a,j)&bit(b,i)));const rows=matrix.map((row,i)=>row.reduce((v,b,j)=>v|(b<<(i+j)),0));let result=0;const running=rows.map(row=>result=add16(result,row));return {matrix,rows,running,result};}
