export default {
	'/': [
		{
			text: 'Home',
			children: [
				'/',
				'/whats-new'
			]
		},
		{
			text: 'Quarter 1',
			children: [
				'/1/variables',
				'/1/datatypes',
				'/1/input-output',
				'/1/control-structures',
				'/1/arrays'
			]
		},
		{
			text: 'Quarter 2',
			children: [
				'/2/classes-objects-packages',
				'/2/classes-extension',
				'/2/packages-extension',
				'/2/oop',
				'/2/gui'
			]
		},
		{
			text: `Quarter 3`,
			children: [
				'/3/gui-events',
				'/3/string-and-string-builder'
			]
		},
		{
			text: `Additional Information`,
			children: [
				'/additional-information/notation'
			]
		}
	]
};
