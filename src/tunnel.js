const spawn = require('child_process').spawn;

let sshTerm; 

module.exports = {
    openTunnel (jumpServer, eurekaServer, localPort, eurekaPort, pemFile) {
        let envVariable = `-L ${localPort}:${eurekaServer}:${eurekaPort}`;
        sshTerm = spawn('ssh', [
            jumpServer,
          "-o UserKnownHostsFile=/dev/null",
          "-o StrictHostKeyChecking=no",
          "-N",
          "-i",
          pemFile,
          envVariable
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