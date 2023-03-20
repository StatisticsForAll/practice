// Arithmetic Mean
function A_mean() {
			var result=0;
			var number = [];
			number=document.getElementById('anumbers').value.split(",");
			var len=number.length;
			if(len!=0){
				for (var i = 0; i<number.length; i++) {
				 result=result+parseFloat(number[i]);
				}
				result=result/len;
				result=parseFloat(result.toFixed(4))
				if (!isNaN(result)){

					document.getElementById('avalue').innerText="The value of Arithmetic mean is "+(result);
				}else{
					document.getElementById('avalue').innerText=" ";
				}
				
			}
			

		}

//geometric Mean
function G_mean() {
			var result=1;
			var number = [];
			number=document.getElementById('gnumbers').value.split(",");
			var len=number.length;
			if(len!=0){
				for (var i = 0; i<number.length; i++) {
				 result=result*parseFloat(number[i]);
				}
				result=Math.pow(result,1/len);
				result=parseFloat(result.toFixed(4))
				if (!isNaN(result)){

					document.getElementById('gvalue').innerText="The value of Geometric mean is "+(result);
				}else{
					document.getElementById('gvalue').innerText=" ";
				}
				
			}
			

		}


//Harmonic Mean
function H_mean() {
			var result=0;
			var number = [];
			number=document.getElementById('hnumbers').value.split(",");
			var len=number.length;
			if(len!=0){
				for (var i = 0; i<number.length; i++) {
				 result=result+(1/parseFloat(number[i]));
				}
				result=len/result;
				result=parseFloat(result.toFixed(4))
				if (!isNaN(result)){

					document.getElementById('hvalue').innerText="The value of Harmonic mean is "+(result);
				}else{
					document.getElementById('hvalue').innerText=" ";
				}
				
			}
			

		}


//median 

function median() {
			var result=0;
			var number = [];
			if(!document.getElementById('menumbers').value.endsWith(",")){
				number=document.getElementById('menumbers').value.split(",");
				var len=number.length;
				//document.write(len);
				if(len!=0 ){
					number.sort(function(a, b){return a - b});
					if (len%2!=0){
						result=number[(len-1)/2];
					}else{
						result=(parseFloat(number[len/2])+parseFloat(number[(len/2)-1]))/2;
					}
					if (!isNaN(result) && result!=""){
					document.getElementById('mevalue').innerText="The value of Median is "+(result);
					}else{
						document.getElementById('mevalue').innerText=" ";
					}
				}
			}
		}

//mode
function mode(){
			var number = [];
			var counts={};
			var result=[];
			var vals=[]
			k=0;
			if (!document.getElementById('monumbers').value.endsWith(",") && document.getElementById('monumbers').value!=""){
				document.getElementById('movalue').style.display="block";
				number=document.getElementById('monumbers').value.split(",");
				var len=number.length;
				for (const num of number) {
  					counts[num] = counts[num] ? counts[num] + 1 : 1;
				}
				//console.log(counts);
				vals= Object.values(counts).sort();
			const max_val=vals[vals.length-1];
			//console.log(max_val)
			for (var val of Object.keys(counts)){
				//console.log(counts[val]);
				if(counts[val]==max_val){
					
					//console.log(Object.keys(counts));
					result[k]=val;
					k++;
				}
				
			}
			if (result.length!=0) {
			document.getElementById('movalue').innerText="The values of Mode  "+ result.join(",");	
		}else{
			document.getElementById('movalue').innerText=" ";
		}
			


			}else{
				document.getElementById('movalue').innerText=" ";
			}
			
		}