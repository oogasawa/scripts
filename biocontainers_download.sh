#!/bin/bash
#$ -cwd
#$ -V
#$ -l d_rt=480:00:00 
#S -l s_rt=480:00:00
#$ -l s_vmem=24G 
#$ -l mem_req=24G
#$ -S /bin/bash
lftp -e "get abeona:0.23.0--py36_0" https://depot.galaxyproject.org/singularity/

