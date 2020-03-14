#!/usr/bin/env node

const sh=require('shelljs');

sh.exec("sudo ntpdate ntp.nict.jp");
