#!/bin/bash

# http://www.math.kobe-u.ac.jp/HOME/kodama/tips-disk-cache-flush.html
# メモリ上のキャッシュが解放される。ディスク装置のキャッシュは解放されない。
sudo sync ; echo 3> sudo /proc/sys/vm/drop_caches

a=(1024 2048 4096 8192)
for fsize in ${a[@]}
do	       
    time bonnie++  -s $fsize -r 1024 -n 256 -d $1
done

(* 8192 2)

