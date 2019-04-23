
basedir=$HOME/tmp/singularity


git checkout 2.4.6
./autogen.sh
./configure --prefix=/usr/local/singularity2.4.6
make -j 8
sudo make install


git checkout 2.5.2
./autogen.sh
./configure --prefix=/usr/local/singularity2.5.2
make -j 8
sudo make install



git checkout 2.6.0
./autogen.sh
./configure --prefix=/usr/local/singularity2.6.0
make -j 8
sudo make install






