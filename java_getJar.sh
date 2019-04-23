#!/bin/bash


IFS=$'\n' GLOBIGNORE='*' command eval  'jarlist=($(find ~/works* -name "*.jar"))'

for jar in "${jarlist[@]}" ; do
	tmpfile="$(mktemp)"
	jar -tf $jar | \
		grep '.class$' | \
		perl -ne 'if (/(ogalab)|(ddbj)/) { print $_; }' | \
		perl -ne 'if ($_ !~ /^BOOT-INF/) {print $_; }' | \
		perl -pe 's/(.+)\.class$/$1/' | \
		perl -pe 's/\//./g' > $tmpfile

	IFS=$'\n' GLOBIGNORE='*' command eval  'classlist=($(cat "${tmpfile}"))'
	rm ${tmpfile}

	for class in "${classlist[@]}" ; do
		printf '%s\t%s\n' "$class" "$jar"
	done
done
