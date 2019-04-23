
#
# USAGE:
#   scraper youtube-playlist URL
# 

function scrape-playlist() {
    java -cp $HOME/jar-files/scraper-1.0-SNAPSHOT-jar-with-dependencies.jar \
	net.ogalab.scraper.youtube.ChromeApp1 $1
}
