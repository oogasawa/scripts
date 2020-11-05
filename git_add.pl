#!/usr/bin/perl


main();


sub main {
    while (<>) {
	chomp;
	if (/^\t(.+)/) {
	    my $matched = $1;
	    if ($matched =~ /\S+:\s+(\S.+)/) {
		print "git add '", $1, "'\n";
	    }
	    else {
		print "git add '", $matched, "'\n";
	    }
	}
    }
}

