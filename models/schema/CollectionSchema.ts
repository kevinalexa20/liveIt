/**
 * This file describes the schema structure for Appwrite collections.
 * Use this as reference when creating collections in Appwrite console.
 */

export const ProfileCollectionSchema = {
  // Collection name: profiles
  name: 'profiles',
  attributes: [
    {
      key: 'userId',
      type: 'string',
      required: true,
      array: false
    },
    {
      key: 'email',
      type: 'string',
      required: true,
      array: false
    },
    {
      key: 'displayName',
      type: 'string',
      required: false,
      array: false
    },
    {
      key: 'firstName',
      type: 'string',
      required: false,
      array: false
    },
    {
      key: 'lastName',
      type: 'string',
      required: false,
      array: false
    },
    {
      key: 'phoneNumber',
      type: 'string',
      required: false,
      array: false
    },
    {
      key: 'profileImage',
      type: 'string',
      required: false,
      array: false
    },
    {
      key: 'bio',
      type: 'string',
      required: false,
      array: false
    },
    {
      key: 'birthDate',
      type: 'string',
      required: false,
      array: false
    },
    {
      key: 'location',
      type: 'string',
      required: false,
      array: false
    },
    {
      key: 'preferences',
      type: 'object',
      required: false,
      array: false
    },
    {
      key: 'createdAt',
      type: 'string',
      required: true,
      array: false
    },
    {
      key: 'updatedAt',
      type: 'string',
      required: true,
      array: false
    }
  ],
  indexes: [
    {
      key: 'userId_index',
      attributes: ['userId'],
      type: 'key'
    },
    {
      key: 'email_index',
      attributes: ['email'],
      type: 'key'
    }
  ]
};