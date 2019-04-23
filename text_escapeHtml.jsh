
/env -class-path /Users/oogasawa/jar-files/commons-text-1.6.jar

import org.apache.commons.text.StringEscapeUtils;

int main() {

	try {
	var stdin = new BufferedReader(new InputStreamReader(System.in));


	String line;
	while ((line = stdin.readLine()) != null) {
    	  System.out.println(StringEscapeUtils.escapeHtml4(line));
	}
	}
	catch (Exception e) {
	    e.printStackTrace();
	}


	return 0;
}


{
	main();
}	


/exit
