# Specifications

[logo1]: img/ravencoin.png
[logo2]: img/bitcoin_talk.png 

[link1]: https://bitcointalk.org/index.php?topic=3238497.0

| Logo | Ticker | Algo | Block Time | Block Reward | Port | Links |
|------|--------|------|:----------:| ------------:| ---: | :---:|
| ![][logo1] | RVN | X16R | 60 | 5000 | 8888 | <a href="https://bitcointalk.org/index.php?topic=3238497.0" target="_blank"><img src="../img/bitcoin_talk.png" width="30" height="30" /></a><a href="https://bitcointalk.org/index.php?topic=3238497.0" target="_blank"><img src="../img/twitter.png" width="40" height="40" /></a><a href="https://bitcointalk.org/index.php?topic=3238497.0" target="_blank"><img src="../img/website.png"/></a>





## Node Requirements

- 200gb SSD
- 8gb RAM


## Build
---

### Update Environment
```
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
```

### Install Docker
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install -y docker-ce git make
```

### Clone/Config/Build
```
git clone https://github.com/behemoth-dev/ravencore-deb.git
cd ravencore-deb/rvn
nano ravencore-deb/rvn/ravencore/nginx-ravencore
```

`Update line 5 for custom domain`

```
$ sudo make
```

## Deploy
---

### Update Environment
```
sudo apt-get update
sudo apt-get install -qy apt-transport-https curl python-minimal
```

### Install Node.js
```
curl https://deb.nodesource.com/node_10.x/pool/main/n/nodejs/nodejs_10.5.0-1nodesource1_amd64.deb > node.deb
sudo dpkg -i node.deb
rm node.deb
```

### Install Ravencore-deb
```
sudo dpkg -i ravencore_<version>_amd64.deb #change <version>. This will error, the next commands resolve those errors.
sudo apt-get update
sudo apt-get -f install -y
```

### Add URL Redirect
```
sudo nano /etc/nginx/conf.d/redirect.conf
```
`Edit the file with:`
```
server {
    server_name www.example.com;
    return 301 $scheme://example.com$request_uri;
}
```

### Undeploying
```
sudo apt-get install -y aptitude
sudo aptitude purge ravencore
```

### Updating Version
- Change version in git checkout in rvn/ravencore/Makefile
- Create a new entry in rvn/ravencore/debian/changelog by using 'dch -i'
- Then build as usual


## Commands 
---
```
sudo service ravencore start
sudo service ravencore stop
sudo service ravencore restart
sudo service ravencore status
journalctl -u ravencore

sudo service nginx start
sudo service nginx stop
sudo service nginx restart
sudo service nginx status
journalctl -u nginx
```


