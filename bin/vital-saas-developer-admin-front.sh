#!/bin/sh

export VITAL_HOME=/home/centos/vital-install

appHome=/home/centos/vital-saas-developer-admin-front

cd $appHome

java -jar target/vital-saas-developer-admin-front-0.1.0-fat.jar conf/vital-saas-developer-admin-front.config > nohup.out 2>&1
