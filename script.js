function mincost(arr)
{ 
//write your code here
// return the min cost
	let min_cost=0;
	arr.sort(function(a,b) {return a-b});
	
     for(let i=1;i<arr.length;i++)
		 {
			 min_cost=min_cost+arr[i]+arr[i-1];
			 arr[i]=arr[i]+arr[i-1];
		 }
	return min_cost;
}

module.exports=mincost;
