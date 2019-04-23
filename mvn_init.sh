#!/bin/bash

groupId=$1
artifactId=$2

mvn archetype:generate \
    -DarchetypeArtifactId=maven-archetype-quickstart \
    -DgroupId=${groupId} \
    -DartifactId=${artifactId} \
    -DinteractiveMode=false

mv ${artifactId} ${artifactId}.bak
cp -rp ${artifactId}.bak/* .
rm -R -f ${artifactId}.bak
