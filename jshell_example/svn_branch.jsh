/*

$ svn copy http://svn.example.com/repos/calc/trunk \
           http://svn.example.com/repos/calc/branches/my-calc-branch \
           -m "Creating a private branch of /calc/trunk."
( http://svnbook.red-bean.com/en/1.7/svn.branchmerge.using.html )

 */


	String makeBranchingCommand(String repos, String branch, String message) {
		var buf = new StringBuffer();
		buf.append("svn copy ");
		buf.append(repos + "/trunk ");
		buf.append(repos + "/branches/" + branch + " ");
		buf.append("-m " + "\"" + message + "\"");

		return buf.toString();
	}


{
	var projectRepository = System.getProperty("projectRepository");
	var branchName        = System.getProperty("branchName");
	var message           = System.getProperty("message");

	if (projectRepository != null
		&& branchName != null
		&& message != null)
		System.out.println(makeBranchingCommand(projectRepository, branchName, message));
}

/exit
