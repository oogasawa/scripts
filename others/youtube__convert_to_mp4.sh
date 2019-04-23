
#
# USAGE:
#   youtube__convert_to_mp4 mkv_dir
# 

function youtube__convert_to_mp4() {
    java -cp $HOME/jar-files/youtube__convert_to_mp4-assembly-0.1.0-SNAPSHOT.jar net.ogalab.microutil.youtube.ConvertToMp4 $1
}
