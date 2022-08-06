#!/bin/bash
remoteRepos=("NeonX2.0" "Internet-Speed-Test" "Online-Calculator")

cd ./posts/deployments/

for element in "${remoteRepos[@]}"
do
    echo "Updating $element"
    cd $element
    git pull
    cd ..
done
