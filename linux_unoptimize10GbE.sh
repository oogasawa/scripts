#!/bin/bash

# set kernel parameters to the default values of Ubuntu Linux 18.04

sysctl -w net.core.rmem_max=212992
sysctl -w net.core.wmem_max=212992
sysctl -w net.core.rmem_default=212992
sysctl -w net.core.wmem_default=212992
sysctl -w net.ipv4.tcp_rmem='4096        87380   6291456'
sysctl -w net.ipv4.tcp_wmem='4096        16384   4194304'
sysctl -w net.ipv4.tcp_mem='769032       1025376 1538064'
