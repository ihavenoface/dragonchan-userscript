#!/bin/sh

webpack -p --optimize-minimize
mkdir -p build
cat userscript.txt > build/bundle.user.js
cat bundle.js >> build/bundle.user.js
rm bundle.js
