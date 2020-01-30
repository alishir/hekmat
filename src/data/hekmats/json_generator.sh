#!/usr/bin/env bash

for i in $(seq $1 $2)
do
    [ -f $i.json ] || cat <<EOF > $i.json
{
  "No": $i,
  "ar":
  "",
  "fa":
  ""
}
EOF
done
