# uninstall old instance of rstudio
sudo gdebi -r rstudio

# install new instance
# install dependencies
sudo apt update
sudo apt install gdebi-core && sudo apt install r-base

# download working install file
wget https://s3.amazonaws.com/rstudio-ide-build/desktop/jammy/amd64/rstudio-2022.07.0-546-amd64.deb

# install and delete install file
sudo gdebi install ./rstudio-2022.07.0-546-amd64.deb && ./rstudio-2022.07.0-546-amd64.deb

# install and move libraries to appropriate runtime directories
var="sudo locate libcrypto.so.1.1 -n 1" && SSLLoc=$(eval $var) && cp $SSLLoc /usr/lib/libcrypto.so.1.1
