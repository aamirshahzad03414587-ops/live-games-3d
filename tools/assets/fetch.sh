#!/bin/sh
# Downloads the CC0 KayKit packs (official repos by Kay Lousberg, pinned) into ../assets-src (not committed).
set -e
D=${ASSETS_SRC:-$(dirname "$0")/../../../assets-src}; mkdir -p "$D"; cd "$D"
get() { [ -d "$1" ] || git clone -q https://github.com/KayKit-Game-Assets/$1.git; git -C "$1" fetch -q --depth 1 origin "$2" 2>/dev/null || true; git -C "$1" checkout -q "$2"; }
get KayKit-Character-Pack-Adventures-1.0 672074b73ba276876a19e8816ecdc5241817ab47
get KayKit-Character-Pack-Skeletons-1.0 15b62b9bad122f72926c10fb14d622c73819fa54
get KayKit-Dungeon-Remastered-1.0 b0ca9bd96a8072ab36a3a5464f00ed1e06a16d07
get KayKit-Halloween-Bits-1.0 6dc69bf6b2fa766a985754f35ec6a0324090e6c6
get KayKit-Medieval-Hexagon-Pack-1.0 84fa4e91af6a88989be7c99e0891cede11f2ca38
get KayKit-City-Builder-Bits-1.0 63976910ca04d16f0fc531b9c614244be8128713
echo "assets in $D"
