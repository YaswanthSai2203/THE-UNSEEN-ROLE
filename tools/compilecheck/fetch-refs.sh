#!/usr/bin/env bash
# Downloads Unity reference assemblies from NuGet so the game scripts can be compile-checked without Unity.
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p ref/tmp
[ -f ref/UnityEngine.CoreModule.dll ] && exit 0
curl -sSL -o ref/tmp/m.nupkg https://api.nuget.org/v3-flatcontainer/unityengine.modules/2021.3.33/unityengine.modules.2021.3.33.nupkg
curl -sSL -o ref/tmp/s.nupkg https://api.nuget.org/v3-flatcontainer/unity3d.sdk/2021.1.14.1/unity3d.sdk.2021.1.14.1.nupkg
(cd ref/tmp && unzip -qo m.nupkg -d m && unzip -qo s.nupkg -d s)
cp ref/tmp/m/lib/netstandard2.0/*.dll ref/
mkdir -p ref/editor && cp ref/tmp/s/lib/UnityEditor.dll ref/editor/
rm -rf ref/tmp
