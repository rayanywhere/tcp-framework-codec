module.exports = class {
	static encode(packet) {
		return Buffer.from(JSON.stringify(packet));
	}

	static decode(packet) {
		return JSON.parse(packet.toString('utf8'));
	}
};