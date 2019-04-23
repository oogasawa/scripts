
/env -class-path /Users/oogasawa/jar-files/MicroUtil-English-1.0.0-jar-with-dependencies.jar

int main() {

	var f = System.getProperty("f");
	var t = System.getProperty("t");
	
	
	var HOME       = System.getenv("HOME");
	var baseDir    = HOME + "/English"
	var src        = baseDir + "/" + f;
	var reverse    = baseDir + "/rev_" + f;
	var dest       = baseDir + "/" + t;
	




	return 0;
}


{
	main();
}	


/exit
