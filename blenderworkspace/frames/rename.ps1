function Reset-Sequence($folder) {

    # ファイル一覧を先に取得
    $files = Get-ChildItem $folder -Filter *.webp | Sort-Object Name

    # 一旦全部 tmp_ に変更
    foreach($file in $files){
        Rename-Item -LiteralPath $file.FullName -NewName ("tmp_" + $file.Name)
    }

    # tmp一覧取得
    $tmpFiles = Get-ChildItem $folder -Filter "tmp_*.webp" | Sort-Object Name

    $i = 1
    foreach($file in $tmpFiles){
        Rename-Item -LiteralPath $file.FullName -NewName ("{0:D4}.webp" -f $i)
        $i++
    }
}

Reset-Sequence "C:\Users\amiur\Documents\workspace\attic.me\blenderworkspace\frames\station"
Reset-Sequence "C:\Users\amiur\Documents\workspace\attic.me\blenderworkspace\frames\kotatsu"