import * as raw from "raw-socket"
import UdpPacketFormatter from "./formatter/UdpPacketFormatter"

export default class RawUdp {

    private socket: any;

    constructor() {
        this.socket = raw.createSocket({
            protocol: raw.Protocol.UDP
        });
        this.socket.setOption(raw.SocketLevel.IPPROTO_IP, raw.SocketOption.IP_HDRINCL, new Buffer([0x00, 0x00, 0x00, 0x01]), 4);
    }

    send(sourceIP: Buffer, sourcePort: number, targetIP: Buffer, targetPort: number, data: Buffer): Promise<number> {
        return new Promise(function (reslove, reject) {
            var buffer = UdpPacketFormatter.build({
                version: 4,
                TTL: 64,
                protocol: 17,
                sourceIp: sourceIP,
                destinationIp: targetIP,
                sourcePort: sourcePort,
                destinationPort: targetPort,
                totalLength: 28 + data.length,
                identification: 13858,
                TOS: 0,
                flags: 0,
                payload: data
            });

            this.socket.send(buffer, 0, buffer.length, "1.1.1.1", function (error, bytes) {
                error ? reject(error) : reslove(bytes);
            });
        }.bind(this))
    }
}