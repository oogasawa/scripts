/*
 * ## Usage:
 * 
 * 
 * ## References:
 *
 * - How do I make my first Maven project?
 *   - https://maven.apache.org/guides/getting-started/index.html
 */


int exists(File dir) {
	if (dir.exists()) 
		return 1;
	else
		return 0;
}



int main() {
	var projectName = System.getProperty("projectName");
	
	if (projectName == null) {
		System.err.println("ERROR: projectName is not specified.");
		System.out.println("USAGE: jshell -R-DprojectName=\"your_project_name\" svn_init_dir.jsh");
		return 1;
	}
	
	var HOME       = System.getenv("HOME");
	var baseDir    = new File(HOME + "/svn_base");
	var projectDir = new File(baseDir, "/" + projectName);
	var trunkDir   = new File(projectDir + "/trunk");
	var branchDir  = new File(projectDir + "/branches");
	var tagsDir    = new File(projectDir + "/tags");
	
	// If any of the above directories already exists, stop creating the directories.
	
	if (exists(projectDir) + exists(trunkDir) + exists(branchDir) + exists(tagsDir) == 0) {
		trunkDir.mkdirs();
		branchDir.mkdirs();
		tagsDir.mkdirs();
	}
	else {
		System.err.println("ERROR: Specified directory already exists.");
		return 1;
	}

	return 0;
}


{
	main();
}	


/exit


