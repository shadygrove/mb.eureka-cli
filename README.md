# Eureka CLI

## Open Tunnel To Eureka Instance

```
export KEYFILE=~/.ssh/<key-file-name>.pem
export EUREKA_SERVER=eureka-cti-a.sapphirepri.com
export BASTION_USER=user@my.bastionserver.com
ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -i $KEYFILE -L 8765:$EUREKA_SERVER:8761 $BASTION_USER
```