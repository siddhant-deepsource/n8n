import {
	INodeProperties,
} from 'n8n-workflow';
import { LoadNodeParameterOptions } from 'n8n-core';

export const contactOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'contact',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a contact',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a contact',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a contact',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Retrieve all contacts',
			},
		],
		default: 'create',
		description: 'The operation to perform.'
	}
] as INodeProperties[];

export const contactFields = [
	/* -------------------------------------------------------------------------- */
	/*                                 contact:create                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Family Name',
		name: 'familyName',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'create',
				],
				resource: [
					'contact',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Given Name',
		name: 'givenName',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'create',
				],
				resource: [
					'contact',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: [
					'create',
				],
				resource: [
					'contact',
				],
			},
		},
		options: [
			{
				displayName: 'Addresses',
				name: 'addressesUi',
				placeholder: 'Add Address',
				type: 'fixedCollection',
				default: {},
				options: [
					{
						displayName: 'Address',
						name: 'addressesValues',
						values: [
							{
								displayName: 'Street Address',
								name: 'streetAddress',
								type: 'string',
								default: '',
							},
							{
								displayName: 'City',
								name: 'city',
								type: 'string',
								default: '',
								description: 'City',
							},
							{
								displayName: 'Region',
								name: 'region',
								type: 'string',
								default: '',
								description: 'Region',
							},
							{
								displayName: 'Country Code',
								name: 'countryCode',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Postal Code',
								name: 'postalCode',
								type: 'string',
								default: '',
								description: 'Postal code',
							},
							{
								displayName: 'Type',
								name: 'type',
								type: 'options',
								options: [
									{
										name: 'Home',
										value: 'home',
									},
									{
										name: 'Work',
										value: 'work',
									},
									{
										name: 'Other',
										value: 'other',
									},
								],
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'Birthday',
				name: 'birthday',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Company',
				name: 'companyUi',
				type: 'fixedCollection',
				default: '',
				placeholder: 'Add Company',
				typeOptions: {
					multipleValues: true
				},
				options: [
					{
						name: 'companyValues',
						displayName: 'Company',
						values: [
							{
								displayName: 'Current',
								name: 'current',
								type: 'boolean',
								default: false,
							},
							{
								displayName: 'Domain',
								name: 'domain',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Name',
								name: 'name',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Title',
								name: 'title',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'Custom Fields',
				name: 'customFieldsUi',
				type: 'fixedCollection',
				default: '',
				placeholder: 'Add Custom Field',
				typeOptions: {
					multipleValues: true
				},
				options: [
					{
						name: 'customFieldsValues',
						displayName: 'Custom Field',
						values: [
							{
								displayName: 'Key',
								name: 'key',
								type: 'string',
								description: 'The end user specified key of the user defined data.',
								default: '',
							},
							{
								displayName: 'Value',
								name: 'value',
								type: 'string',
								description: 'The end user specified value of the user defined data.',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'Emails',
				name: 'emailsUi',
				type: 'fixedCollection',
				default: '',
				placeholder: 'Add Email',
				typeOptions: {
					multipleValues: true
				},
				options: [
					{
						name: 'emailsValues',
						displayName: 'Email',
						values: [
							{
								displayName: 'Value',
								name: 'value',
								type: 'string',
								default: '',
								description: 'The email address.',
							},
							{
								displayName: 'Type',
								name: 'type',
								type: 'options',
								options: [
									{
										name: 'Home',
										value: 'home',
									},
									{
										name: 'Work',
										value: 'work',
									},
									{
										name: 'Other',
										value: 'other',
									},
								],
								default: '',
								description: `The type of the email address. The type can be custom or one of these predefined values`,
							},
						],
					},
				],
			},
			{
				displayName: 'Events',
				name: 'eventsUi',
				type: 'fixedCollection',
				default: '',
				placeholder: 'Add Event',
				description: 'An event related to the person.',
				typeOptions: {
					multipleValues: true
				},
				options: [
					{
						name: 'eventsValues',
						displayName: 'Event',
						values: [
							{
								displayName: 'Date',
								name: 'date',
								type: 'dateTime',
								default: '',
								description: 'The date of the event.',
							},
							{
								displayName: 'Type',
								name: 'type',
								type: 'options',
								options: [
									{
										name: 'Anniversary',
										value: 'anniversary',
									},
									{
										name: 'Other',
										value: 'other',
									},
								],
								default: '',
								description: `The type of the event. The type can be custom or one of these predefined values`,
							},
						],
					},
				],
			},
			{
				displayName: 'File As',
				name: 'fileAs',
				type: 'string',
				default: '',
				description: 'The name that should be used to sort the person in a list.',
			},
			{
				displayName: 'Group',
				name: 'group',
				type: 'multiOptions',
				typeOptions: {
					loadOptionsMethod: 'getGroups',
				},
				default: [],
			},
			{
				displayName: 'Middle Name',
				name: 'middleName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Notes',
				name: 'biographies',
				type: 'string',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				default: '',
			},
			{
				displayName: 'Phone',
				name: 'phoneUi',
				type: 'fixedCollection',
				default: '',
				placeholder: 'Add Phone',
				typeOptions: {
					multipleValues: true
				},
				options: [
					{
						name: 'phoneValues',
						displayName: 'Phone',
						values: [
							{
								displayName: 'Type',
								name: 'type',
								type: 'options',
								options: [
									{
										name: 'Home',
										value: 'home',
									},
									{
										name: 'Work',
										value: 'work',
									},
									{
										name: 'Mobile',
										value: 'mobile',
									},
									{
										name: 'Home Fax',
										value: 'homeFax',
									},
									{
										name: 'Work Fax',
										value: 'workFax',
									},
									{
										name: 'Other Fax',
										value: 'otherFax',
									},
									{
										name: 'Pager',
										value: 'pager',
									},
									{
										name: 'Work Mobile',
										value: 'workMobile',
									},
									{
										name: 'Work Pager',
										value: 'workPager',
									},
									{
										name: 'Main',
										value: 'main',
									},
									{
										name: 'Google Voice',
										value: 'googleVoice',
									},
									{
										name: 'Other',
										value: 'other',
									},
								],
								default: '',
							},
							{
								displayName: 'Value',
								name: 'value',
								type: 'string',
								default: '',
								description: 'The phone number.',
							},
						],
					},
				],
			},
			{
				displayName: 'Relations',
				name: 'relationsUi',
				type: 'fixedCollection',
				default: '',
				placeholder: 'Add Relation',
				typeOptions: {
					multipleValues: true
				},
				options: [
					{
						name: 'relationsValues',
						displayName: 'Relation',
						values: [
							{
								displayName: 'Person',
								name: 'person',
								type: 'string',
								default: '',
								description: 'The name of the other person this relation refers to.',
							},
							{
								displayName: 'Type',
								name: 'type',
								type: 'options',
								options: [
									{
										name: 'Spouse',
										value: 'spouse',
									},
									{
										name: 'Child',
										value: 'child',
									},
									{
										name: 'Mother',
										value: 'mother',
									},
									{
										name: 'Father',
										value: 'father',
									},
									{
										name: 'Parent',
										value: 'parent',
									},
									{
										name: 'Brother',
										value: 'brother',
									},
									{
										name: 'Sister',
										value: 'sister',
									},
									{
										name: 'Friend',
										value: 'friend',
									},
									{
										name: 'Relative',
										value: 'relative',
									},
									{
										name: 'Domestic Partner',
										value: 'domesticPartner',
									},
									{
										name: 'Manager',
										value: 'manager',
									},
									{
										name: 'Assistant',
										value: 'assistant',
									},
									{
										name: 'Referred By',
										value: 'referredBy',
									},
								],
								default: '',
								description: `The person's relation to the other person. The type can be custom or one of these predefined values`,
							},
						],
					},
				],
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                 contact:delete                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'delete',
				],
				resource: [
					'contact',
				],
			},
		},
		default: '',
	},
	/* -------------------------------------------------------------------------- */
	/*                                 contact:get                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'get',
				],
				resource: [
					'contact',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Fields',
		name: 'fields',
		type: 'multiOptions',
		options: [
			{
				name: 'Addresses',
				value: 'addresses',
			},
			{
				name: 'Biographies',
				value: 'biographies',
			},
			{
				name: 'Birthdays',
				value: 'birthdays',
			},
			{
				name: 'Cover Photos',
				value: 'coverPhotos',
			},
			{
				name: 'Email Addresses',
				value: 'emailAddresses',
			},
			{
				name: 'Events',
				value: 'events',
			},
			{
				name: 'Genders',
				value: 'genders',
			},
			{
				name: 'IM Clients',
				value: 'imClients',
			},
			{
				name: 'Interests',
				value: 'interests',
			},
			{
				name: 'Locales',
				value: 'locales',
			},
			{
				name: 'Memberships',
				value: 'memberships',
			},
			{
				name: 'Metadata',
				value: 'metadata',
			},
			{
				name: 'Names',
				value: 'names',
			},
			{
				name: 'Nicknames',
				value: 'nicknames',
			},
			{
				name: 'Occupations',
				value: 'occupations',
			},
			{
				name: 'Organizations',
				value: 'organizations',
			},
			{
				name: 'Phone Numbers',
				value: 'phoneNumbers',
			},
			{
				name: 'Photos',
				value: 'photos',
			},
			{
				name: 'Relations',
				value: 'relations',
			},
			{
				name: 'Residences',
				value: 'residences',
			},
			{
				name: 'Sip Addresses',
				value: 'sipAddresses',
			},
			{
				name: 'Skills',
				value: 'skills',
			},
			{
				name: 'URLs',
				value: 'urls',
			},
			{
				name: 'User Defined',
				value: 'userDefined',
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get',
				],
				resource: [
					'contact',
				],
			},
		},
		default: '',
		description: 'A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas.',
	},
	/* -------------------------------------------------------------------------- */
	/*                                 contact:getAll                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'contact',
				],
			},
		},
		default: false,
		description: 'If all results should be returned or only up to a given limit.',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'contact',
				],
				returnAll: [
					false,
				],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 100,
		description: 'How many results to return.',
	},
	{
		displayName: 'Fields',
		name: 'fields',
		type: 'multiOptions',
		options: [
			{
				name: 'Addresses',
				value: 'addresses',
			},
			{
				name: 'Biographies',
				value: 'biographies',
			},
			{
				name: 'Birthdays',
				value: 'birthdays',
			},
			{
				name: 'Cover Photos',
				value: 'coverPhotos',
			},
			{
				name: 'Email Addresses',
				value: 'emailAddresses',
			},
			{
				name: 'Events',
				value: 'events',
			},
			{
				name: 'Genders',
				value: 'genders',
			},
			{
				name: 'IM Clients',
				value: 'imClients',
			},
			{
				name: 'Interests',
				value: 'interests',
			},
			{
				name: 'Locales',
				value: 'locales',
			},
			{
				name: 'Memberships',
				value: 'memberships',
			},
			{
				name: 'Metadata',
				value: 'metadata',
			},
			{
				name: 'Names',
				value: 'names',
			},
			{
				name: 'Nicknames',
				value: 'nicknames',
			},
			{
				name: 'Occupations',
				value: 'occupations',
			},
			{
				name: 'Organizations',
				value: 'organizations',
			},
			{
				name: 'Phone Numbers',
				value: 'phoneNumbers',
			},
			{
				name: 'Photos',
				value: 'photos',
			},
			{
				name: 'Relations',
				value: 'relations',
			},
			{
				name: 'Residences',
				value: 'residences',
			},
			{
				name: 'Sip Addresses',
				value: 'sipAddresses',
			},
			{
				name: 'Skills',
				value: 'skills',
			},
			{
				name: 'URLs',
				value: 'urls',
			},
			{
				name: 'User Defined',
				value: 'userDefined',
			},
		],
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'contact',
				],
			},
		},
		default: '',
		description: 'A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas.',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'contact',
				],
			},
		},
		options: [
			{
				displayName: 'Sort Order',
				name: 'sortOrder',
				type: 'options',
				options: [
					{
						name: 'Last Modified Ascending',
						value: 'LAST_MODIFIED_ASCENDING',
						description: 'Sort people by when they were changed; older entries first.',
					},
					{
						name: 'Last Modified Descending',
						value: 'LAST_MODIFIED_DESCENDING',
						description: 'Sort people by when they were changed; newer entries first.',
					},
					{
						name: 'First Name Ascending',
						value: 'FIRST_NAME_ASCENDING',
						description: 'Sort people by first name.',
					},
					{
						name: 'Last Name Ascending',
						value: 'LAST_NAME_ASCENDING',
						description: 'Sort people by last name.',
					},
				],
				default: '',
				description: 'The order of the contacts returned in the result.',
			},
		],
	},
] as INodeProperties[];
