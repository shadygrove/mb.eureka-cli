const spawn = require('child_process').spawn;
const log = require('./log');

let sshTerm; 

module.exports = {
    openTunnel (jumpServer, eurekaServer, localPort, eurekaPort, pemFile) {
        log.info('jumpServer', jumpServer);
        log.info('eurekaServer', eurekaServer);
        log.info('localPort', localPort);
        log.info('eurekaPort', eurekaPort);
        log.info('pemFile', pemFile);

        let portForward = `-L ${localPort}:${eurekaServer}:${eurekaPort}`;
        sshTerm = spawn('ssh', [
            jumpServer,
          "-o UserKnownHostsFile=/dev/null",
          "-o StrictHostKeyChecking=no",
          "-N",
          "-i",
          pemFile,
          portForward
        ], {
          shell: true,
          detached: false
        });
    },

    closeTunnel () {
        console.log('Closing tunnel');
        //kill child process opening tunnel when parent is terminated
        if (sshTerm) {
            sshTerm.kill();
            console.log('Tunnel closed');
        }
    }
}