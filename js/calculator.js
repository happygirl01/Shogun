

		function run1 ( ) {
			document.calculator.result.value += "1" ;
		}

		function run2 ( ) {
			document.calculator.result.value += "2" ;	
		}

		function run3 ( ) {
			document.calculator.result.value += "3" ;	
		}

		function runadd ( ) {
			document.calculator.result.value += "+" ;
					}

		function calculation()
			{
				var calculation = eval(document.calculator.result.value)
				document.calculator.result.value = calculation;
			}

			function run4 ( ) {
			document.calculator.result.value += "4" ;
			
		}

		function run5 ( ) {
			document.calculator.result.value += "5" ;
			
		}

		function run6 ( ) {
			document.calculator.result.value += "6" ;
			
		}

		function runminus ( ) {
			document.calculator.result.value += "-" ;
					}

			function run7 ( ) {
			document.calculator.result.value += "7" ;
			
		}

		function run8 ( ) {
			document.calculator.result.value += "8" ;
			
		}

		function run9 ( ) {
			document.calculator.result.value += "9" ;
			
		}

		function rundivide ( ) {
			document.calculator.result.value += "/" ;
					}

			
			function run0 ( ) {
			document.calculator.result.value += "0" ;
			
		}

		function rundot ( ) {
			document.calculator.result.value += "." ;
			
		}

		function runtimes ( ) {
			document.calculator.result.value += "*" ;
			
		}

		function runclear ( ) {
			document.calculator.result.value = " " ;
			
		}

		function runsqr ( ) {
			var runsqr = eval(document.calculator.result.value*document.calculator.result.value)
			document.calculator.result.value = runsqr ;
		}
					function runsqrt ( ) {
				var runsqrt = Math.sqrt(document.calculator.result.value);	 
			document.calculator.result.value = runsqrt ;
		}

	