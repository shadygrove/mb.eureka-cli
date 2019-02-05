# Netflix Eureka CLI Tool

## About
This is a CLI tool for interacting with a Eureka Service Registry

Resources:  
[Eureka API Docs](https://github.com/Netflix/eureka/wiki/Eureka-REST-operations)  
[Netflix Eureka](https://github.com/Netflix/eureka)

## Usage
```
npm install -g mb.eureka-cli

export EUREKA_SERVER=http://localhost:8765/eureka  (assumes you are tunneled to Eureka and port forwarding 8765 to 8761)

eureka --help

eureka apps

eureka apps APPLICATION-KEY


```


