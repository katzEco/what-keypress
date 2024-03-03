import keycode from 'keycode';

export function keyLib(key: Event) {
	const code = keycode(key);

	switch (key.keyCode) {
		case 18:
			return 'alt (on Windows) / option (on MacOS)';
			break;

		case 59:
			return ';';
			break;

		case 61:
			return '+';
			break;

		case 173:
			return '-';
			break;

		case 224:
			return 'Windows Key (on Windows) / Command Key on MacOS';
			break;

		default:
			if (code != undefined) {
				return code;
			} else {
				return key.keyCode;
			}
			break;
	}
}
