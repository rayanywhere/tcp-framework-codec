module.exports = class {
	static encode(packet) {
		return Buffer.from(packet);
	}

	static decode(packet) {
		return packet.toString('utf8');
	}
};