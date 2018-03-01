import {
    BasePacket,
    IpPacket,
    TcpPacket,
    UdpPacket,
} from "../PacketsStruct"
import PacketUtils from "../PacketUtils"

import IpPacketFormatter from "./IpPacketFormatter"

export default class UdpPacketFormatter extends IpPacketFormatter {

    static build(obj: UdpPacket): Buffer {
        var udpPacketBuffer = Buffer.allocUnsafe(8);
        udpPacketBuffer.writeUInt16BE(obj.sourcePort, 0);
        udpPacketBuffer.writeUInt16BE(obj.destinationPort, 2);
        udpPacketBuffer.writeUInt16BE(udpPacketBuffer.length + obj.payload.length, 4);
        udpPacketBuffer.writeUInt16BE(0, 6);
        udpPacketBuffer = Buffer.concat([udpPacketBuffer, obj.payload]);

        var udpPacketTotalLength = Buffer.allocUnsafe(2);
        udpPacketTotalLength.writeUInt16BE(udpPacketBuffer.length, 0);

        udpPacketBuffer.writeUInt16BE(super.checksum(
            Buffer.concat([
                obj.sourceIp, obj.destinationIp,
                new Buffer([0x00, obj.protocol]),
                udpPacketTotalLength,
                udpPacketBuffer
            ])
        ), 6);

        return Buffer.concat([
            super.build(obj),
            udpPacketBuffer
        ]);
    }

}
