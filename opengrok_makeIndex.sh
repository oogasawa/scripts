#!/bin/bash

cd /usr/local/opengrok-1.0/bin
./OpenGrok index

# opengrok_jar=/usr/local/opengrok-1.0/lib/opengrok.jar
# ctags=/usr/local/bin/ctags

# java -Djava.util.logging.config.file=/var/opengrok/logging.properties \
#      -jar ${opengrok_jar} \
#      -c ${ctags} \
#      -s /var/opengrok/src -d /var/opengrok/data -H -P -S -G \
#      -W /var/opengrok/etc/configuration.xml #-U 'http://localhost:8080/source'

