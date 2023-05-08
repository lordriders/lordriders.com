#!/bin/bash

set -e

if [[ $# -lt 2 ]] ; then
    echo 'USAGE:'
    echo 'bash scale_width.sh [FILE] [WIDTH_1 WIDTH_2 ...]'
    exit 0
fi

file=$1
filename="$(basename -- $file)"
path="$(dirname -- $file)"
ext="${file##*.}"
name="${filename%.jpg}"


shift

widths=$@

echo 'scaling '$file'...'

for width in $widths; do
    resized=$path/$name'_'$width'w.'$ext
    echo 'creating '$resized'...'
    cp $file $resized
    mogrify -resize $width $resized
    
    converted=$path/$name'_'$width'w.webp'
    echo 'creating '$converted'...'
    cwebp -q 100 $resized -o $converted
    rm $resized
done

echo 'done.'
