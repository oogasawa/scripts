sudo apt-get -y install python-software-properties software-properties-common
sudo sh -c "echo 'oracle-java9-installer shared/accepted-oracle-license-v1-1 select true' | debconf-set-selections"
sudo add-apt-repository -y ppa:webupd8team/java
sudo apt-get update
sudo apt-get -y install oracle-java9-installer

