#!/bin/sh

webpack -p --optimize-minimize
mkdir -p build
cat userscript.txt > build/dragonchan.user.js
cat bundle.js >> build/dragonchan.user.js
rm bundle.js
