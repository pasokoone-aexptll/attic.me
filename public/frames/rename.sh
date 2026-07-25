#!/bin/zsh

reset_sequence() {
    dir="$1"

    # 一旦 tmp_ を付ける
    for file in "$dir"/*.webp; do
        mv "$file" "$dir/tmp_$(basename "$file")"
    done

    # 0001から振り直す
    i=1
    for file in $(find "$dir" -maxdepth 1 -name 'tmp_*.webp' | sort); do
        printf -v newname "%04d.webp" "$i"
        mv "$file" "$dir/$newname"
        ((i++))
    done
}

reset_sequence "footer"