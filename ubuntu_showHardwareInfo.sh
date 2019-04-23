#/bin/bash -x

lsb_release -d
echo "number of CPUs (threads)"
cat /proc/cpuinfo | grep 'processor' | wc
sudo dmidecode -t processor | grep Version
cat /proc/meminfo | head -n 3
sudo dmidecode -t memory | perl -n -e 'if(/Size|Speed/) {print $_}'
sudo parted -l
df -h
lspci | grep Ethernet
lspci | grep -i nvidia
