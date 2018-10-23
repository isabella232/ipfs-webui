This is a fork of https://github.com/ipfs-shipyard/ipfs-webui with custom changes to allow the UI to work on private IPFS networks.

# Steps to upgrade:
 - Clone the repository, make sure you are in the photic-v1 branch
 - Run `npm run build`
 - Make sure you have IPFS locally installed (no need to have the daemon running, just IPFS)
 - In the repo folder, run `ipfs add -r --only-hash dist`
 - The last line will include the hash for the directory
 - Add compress the dist folder into a tar file and set its name to the hash obtained in the previous step
 - Add the tar file to /webui in photic-ipfs and update `setup_web_ui.sh' to reference it
