# https://askubuntu.com/questions/1044449/install-neo4j-ubuntu-18-04

wget --no-check-certificate -O - https://debian.neo4j.org/neotechnology.gpg.key | apt-key add -
echo 'deb http://debian.neo4j.org/repo stable/' > /etc/apt/sources.list.d/neo4j.list
apt update
apt install neo4j
