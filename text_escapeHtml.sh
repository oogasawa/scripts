#!/bin/bash


cat - | \
java -cp $HOME/works02/simplejlib-util/target/simplejlib-util-1.3.0-jar-with-dependencies.jar net.ogalab.simplejlib.util.text.Html
