# clean-and-build.ps1
if (Test-Path -Path "dist") {
    Remove-Item -Recurse -Force dist
}

ng build