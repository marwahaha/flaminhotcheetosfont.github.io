for file in *.svg
do
    start=$(cat $file | grep -n "xlink:href" | cut -d: -f1)
    end=$(cat $file | grep -n "\" \/>" | cut -d: -f1)
    cat $file | head -n $end | tail -n $(($end - $start + 1)) | sed 's/    xlink:href=\"data:image\/png\;base64,//' | sed 's/" \/\>//' | base64 -D > $file.png
done

for file in *.png
do
    pngquant --quality=64-80 $file
done

mkdir -p sm/

for file in *.svg
do
    start=$(cat $file | grep -n "xlink:href" | cut -d: -f1)
    end=$(cat $file | grep -n "\" \/>" | cut -d: -f1)
    len=$(cat $file | wc -l)
    cat $file | head -n $(($start - 1)) > sm/$file
    echo -n "    xlink:href=\"data:image/png;base64," >> sm/$file
    cat $file-fs8.png | base64 |  awk '{print$1"\" />"}' | fold -w76 >> sm/$file
    cat $file | tail -n $((len-end)) >> sm/$file
done

rm *.png