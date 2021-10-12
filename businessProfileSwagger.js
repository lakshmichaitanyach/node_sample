/**/
const message = require('../../locales/en');

module.exports = (swaggerJson) => {
  swaggerJson.paths['/business/details'] = {
    get: {
      security: [
        {
          bearerAuth: []
        }
      ],
      tags: ['Business'],
      description: 'Business Details',
      summary: 'Business Details',
      parameters: [
        {
          in: 'query',
          name: 'id',
          description: 'Path parameter',
          schema: {
            id: '601a69e12d62a11f149354e5'
          }
        },
        {
          in: 'query',
          name: 'businessUsername',
          description: 'Path parameter',
          schema: {
            Businessname: 'happihome'
          }
        }
      ],
      responses: {
        200: {
          description: 'Get Business details',
          schema: {
            $ref: '#/definitions/success'
          }
        },
        400: {
          description: 'Invalid request',
          schema: {
            $ref: '#/definitions/validationError'
          }
        },
        401: {
          description: 'Unauthorized Access',
          schema: {
            $ref: '#/definitions/unauthorisedAccess'
          }
        },
        500: {
          description: 'Something went wrong. Try again.',
          schema: {
            $ref: '#/definitions/unexpextedError'
          }
        }
      }
    }
  };

  swaggerJson.paths['/business/follower'] = {
    get: {
      security: [
        {
          bearerAuth: []
        }
      ],
      tags: ['Business'],
      description: 'Get follower user List',
      summary: 'Get follower user List',
      parameters: [
        {
          in: 'query',
          name: 'Search',
          description: 'Path parameter',
          type: 'string',
          schema: {
            Search: '601a69e12d62a11f149354e5'
          }
        },
        {
          in: 'query',
          name: 'offset',
          description: 'Path parameter',
          type: 'integer',
          schema: {
            offset: '0'
          }
        },
        {
          in: 'query',
          name: 'limit',
          description: 'Path parameter',
          type: 'integer',
          schema: {
            limit: '10'
          }
        }
      ],
      responses: {
        200: {
          description: 'You have successfully logged in.',
          schema: {
            $ref: '#/definitions/successRegister'
          }
        },
        400: {
          description: 'Bad Request',
          schema: {
            $ref: '#/definitions/unauthorisedAccessEmail'
          }
        },
        500: {
          description: 'Internal Server Error',
          schema: {
            $ref: '#/definitions/unexpextedError'
          }
        }
      }
    }
  };

  swaggerJson.paths['/business/following'] = {
    get: {
      security: [
        {
          bearerAuth: []
        }
      ],
      tags: ['Business'],
      description: 'Get business following List',
      summary: 'Get business following List',
      parameters: [
        {
          in: 'query',
          name: 'Search',
          description: 'Path parameter',
          type: 'string',
          schema: {
            Search: '601a69e12d62a11f149354e5'
          }
        },
        {
          in: 'query',
          name: 'offset',
          description: 'Path parameter',
          type: 'integer',
          schema: {
            offset: '0'
          }
        },
        {
          in: 'query',
          name: 'limit',
          description: 'Path parameter',
          type: 'integer',
          schema: {
            limit: '10'
          }
        }
      ],
      responses: {
        200: {
          description: 'You have successfully logged in.',
          schema: {
            $ref: '#/definitions/successRegister'
          }
        },
        400: {
          description: 'Bad Request',
          schema: {
            $ref: '#/definitions/unauthorisedAccessEmail'
          }
        },
        500: {
          description: 'Internal Server Error',
          schema: {
            $ref: '#/definitions/unexpextedError'
          }
        }
      }
    }
  };

  swaggerJson.paths['/business/follower/{id}'] = {
    get: {
      security: [
        {
          bearerAuth: []
        }
      ],
      tags: ['Business'],
      description: 'Get follower List',
      summary: 'Get follower List',
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'Path parameter',
          required: true,
          schema: {
            id: '601a69e12d62a11f149354e5'
          }
        },
        {
          in: 'query',
          name: 'Search',
          description: 'Path parameter',
          type: 'string',
          schema: {
            Search: '601a69e12d62a11f149354e5'
          }
        },
        {
          in: 'query',
          name: 'offset',
          description: 'Path parameter',
          type: 'integer',
          schema: {
            offset: '0'
          }
        },
        {
          in: 'query',
          name: 'limit',
          description: 'Path parameter',
          type: 'integer',
          schema: {
            limit: '10'
          }
        }
      ],
      responses: {
        200: {
          description: 'You have successfully logged in.',
          schema: {
            $ref: '#/definitions/successRegister'
          }
        },
        400: {
          description: 'Bad Request',
          schema: {
            $ref: '#/definitions/unauthorisedAccessEmail'
          }
        },
        500: {
          description: 'Internal Server Error',
          schema: {
            $ref: '#/definitions/unexpextedError'
          }
        }
      }
    }
  };

  swaggerJson.paths['/business/following/{id}'] = {
    get: {
      security: [
        {
          bearerAuth: []
        }
      ],
      tags: ['Business'],
      description: 'Get following List',
      summary: 'Get following List',
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'Path parameter',
          required: true,
          schema: {
            id: '601a69e12d62a11f149354e5'
          }
        },
        {
          in: 'query',
          name: 'Search',
          description: 'Path parameter',
          type: 'string',
          schema: {
            Search: '601a69e12d62a11f149354e5'
          }
        },
        {
          in: 'query',
          name: 'offset',
          description: 'Path parameter',
          type: 'integer',
          schema: {
            offset: '0'
          }
        },
        {
          in: 'query',
          name: 'limit',
          description: 'Path parameter',
          type: 'integer',
          schema: {
            limit: '10'
          }
        }
      ],
      responses: {
        200: {
          description: 'You have successfully logged in.',
          schema: {
            $ref: '#/definitions/successRegister'
          }
        },
        400: {
          description: 'Bad Request',
          schema: {
            $ref: '#/definitions/unauthorisedAccessEmail'
          }
        },
        500: {
          description: 'Internal Server Error',
          schema: {
            $ref: '#/definitions/unexpextedError'
          }
        }
      }
    }
  };
  swaggerJson.paths['/business/follow'] = {
    put: {
      security: [
        {
          bearerAuth: []
        }
      ],
      tags: ['Business'],
      description: 'follow Business',
      summary: 'follow Business',
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Body parameter',
          required: true,
          schema: {
            $ref: '#/definitions/followBusiness'
          }
        }
      ],
      responses: {
        200: {
          description: 'Business followed',
          schema: {
            $ref: '#/definitions/success'
          }
        },
        400: {
          description: 'Invalid request',
          schema: {
            $ref: '#/definitions/validationError'
          }
        },
        401: {
          description: 'Unauthorized Access',
          schema: {
            $ref: '#/definitions/unauthorisedAccess'
          }
        },
        500: {
          description: 'Something went wrong. Try again.',
          schema: {
            $ref: '#/definitions/unexpextedError'
          }
        }
      }
    }
  };

  swaggerJson.paths['/business/unfollow'] = {
    put: {
      security: [
        {
          bearerAuth: []
        }
      ],
      tags: ['Business'],
      description: 'Unfollow Business',
      summary: 'Unfollow Business',
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Body parameter',
          required: true,
          schema: {
            $ref: '#/definitions/followBusiness'
          }
        }
      ],
      responses: {
        200: {
          description: 'Business followed',
          schema: {
            $ref: '#/definitions/success'
          }
        },
        400: {
          description: 'Invalid request',
          schema: {
            $ref: '#/definitions/validationError'
          }
        },
        401: {
          description: 'Unauthorized Access',
          schema: {
            $ref: '#/definitions/unauthorisedAccess'
          }
        },
        500: {
          description: 'Something went wrong. Try again.',
          schema: {
            $ref: '#/definitions/unexpextedError'
          }
        }
      }
    }
  };

  swaggerJson.paths['/business/edit-details'] = {
    put: {
      security: [
        {
          bearerAuth: []
        }
      ],
      tags: ['Business'],
      description: 'Edit Business Details',
      summary: 'Edit Business Details',
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Body parameter',
          required: true,
          schema: {
            $ref: '#/definitions/editBusinessProfile'
          }
        }
      ],
      responses: {
        200: {
          description: ' Business details Updated',
          schema: {
            $ref: '#/definitions/success'
          }
        },
        400: {
          description: 'Invalid request',
          schema: {
            $ref: '#/definitions/validationError'
          }
        },
        401: {
          description: 'Unauthorized Access',
          schema: {
            $ref: '#/definitions/unauthorisedAccess'
          }
        },
        500: {
          description: 'Something went wrong. Try again.',
          schema: {
            $ref: '#/definitions/unexpextedError'
          }
        }
      }
    }
  };

  swaggerJson.paths['/business/change-password'] = {
    put: {
      security: [
        {
          bearerAuth: []
        }
      ],
      tags: ['Business'],
      description: 'Change Password',
      summary: 'Change Password',
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Body parameter',
          required: true,
          schema: {
            $ref: '#/definitions/changePassword'
          }
        }
      ],
      responses: {
        200: {
          description: 'Business details Updated',
          schema: {
            $ref: '#/definitions/success'
          }
        },
        400: {
          description: 'Invalid request',
          schema: {
            $ref: '#/definitions/validationError'
          }
        },
        401: {
          description: 'Unauthorized Access',
          schema: {
            $ref: '#/definitions/unauthorisedAccess'
          }
        },
        500: {
          description: 'Something went wrong. Try again.',
          schema: {
            $ref: '#/definitions/unexpextedError'
          }
        }
      }
    }
  };

  swaggerJson.paths['/business/search-businesss/{id}'] = {
    get: {
      security: [
        {
          bearerAuth: []
        }
      ],
      tags: ['Business'],
      description: 'Search Business',
      summary: 'Search Business',
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'Path parameter',
          required: true,
          schema: {
            id: '601a8b08b42a35382cdc2523'
          }
        }
      ],
      responses: {
        200: {
          description: 'You have successfully logged in.',
          schema: {
            $ref: '#/definitions/successRegister'
          }
        },
        400: {
          description: 'Bad Request',
          schema: {
            $ref: '#/definitions/unauthorisedAccessEmail'
          }
        },
        500: {
          description: 'Internal Server Error',
          schema: {
            $ref: '#/definitions/unexpextedError'
          }
        }
      }
    }
  };

  swaggerJson.paths['/business/phone-number'] = {
    put: {
      security: [
        {
          bearerAuth: []
        }
      ],
      tags: ['Business'],
      description: 'Update Business phone number',
      summary: 'Update Business phone number',
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Body parameter',
          required: true,
          schema: {
            $ref: '#/definitions/phone'
          }
        }
      ],
      responses: {
        200: {
          description: 'Update Business profile phone number',
          schema: {
            $ref: '#/definitions/successPhone'
          }
        },
        400: {
          description: 'Invalid request',
          schema: {
            $ref: '#/definitions/validationError'
          }
        },
        401: {
          description: 'Unauthorized Access',
          schema: {
            $ref: '#/definitions/unauthorisedAccess'
          }
        },
        500: {
          description: 'Something went wrong. Try again.',
          schema: {
            $ref: '#/definitions/unexpextedError'
          }
        }
      }
    }
  };

  swaggerJson.paths['/business/resend-phone-otp'] = {
    put: {
      security: [
        {
          bearerAuth: []
        }
      ],
      tags: ['Business'],
      description: 'To resend OTP in case of not received in the first attempt',
      summary: 'To resend OTP',
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Body parameter',
          required: true,
          schema: {
            $ref: '#/definitions/phone'
          }
        }
      ],
      responses: {
        200: {
          description: 'To resend OTP',
          schema: {
            $ref: '#/definitions/successPhone'
          }
        },
        400: {
          description: 'Invalid request',
          schema: {
            $ref: '#/definitions/validationError'
          }
        },
        401: {
          description: 'Unauthorized Access',
          schema: {
            $ref: '#/definitions/unauthorisedAccess'
          }
        },
        500: {
          description: 'Something went wrong. Try again.',
          schema: {
            $ref: '#/definitions/unexpextedError'
          }
        }
      }
    }
  };

  swaggerJson.paths['/business/verify-phone-number'] = {
    put: {
      security: [
        {
          bearerAuth: []
        }
      ],
      tags: ['Business'],
      description: 'verify Business phone number',
      summary: 'verify Business phone number',
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Body parameter',
          required: true,
          schema: {
            $ref: '#/definitions/verifyPhone'
          }
        }
      ],
      responses: {
        200: {
          description: 'Update Business profile phine number verify',
          schema: {
            $ref: '#/definitions/successPhone'
          }
        },
        400: {
          description: 'Invalid request',
          schema: {
            $ref: '#/definitions/validationError'
          }
        },
        401: {
          description: 'Unauthorized Access',
          schema: {
            $ref: '#/definitions/unauthorisedAccess'
          }
        },
        500: {
          description: 'Something went wrong. Try again.',
          schema: {
            $ref: '#/definitions/unexpextedError'
          }
        }
      }
    }
  };

  swaggerJson.definitions.unexpextedError = {
    properties: {
      status: {
        type: 'number',
        example: 0
      },
      message: {
        example: message.ERROR_MSG
      }
    }
  };

  swaggerJson.definitions.validationError = {
    properties: {
      status: {
        type: 'number',
        example: 0
      },
      message: {
        example: message.INVALID_REQUEST
      }
    }
  };

  swaggerJson.definitions.unauthorisedAccess = {
    properties: {
      status: {
        type: 'number',
        example: 0
      },
      message: {
        example: message.ACCESS_DENIED
      }
    }
  };

  swaggerJson.definitions.successPersonalData = {
    properties: {
      status: {
        type: 'number',
        example: 1
      },
      message: {
        example: message.SUCCESS
      }
    }
  };

  swaggerJson.definitions.successDeleteProfilePicture = {
    properties: {
      status: {
        type: 'number',
        example: 1
      },
      message: {
        example: message.SUCCESS
      }
    }
  };

  swaggerJson.definitions.success = {
    type: 'object',
    properties: {
      status: {
        type: 'boolean',
        example: true
      },
      message: {
        example: message.SUCCESS
      }
    }
  };

  swaggerJson.definitions.unexpextedError = {
    properties: {
      status: {
        type: 'number',
        example: 0
      },
      message: {
        example: message.ERROR_MSG
      }
    }
  };

  swaggerJson.definitions.validationError = {
    properties: {
      status: {
        type: 'number',
        example: 0
      },
      message: {
        example: message.INVALID_REQUEST
      }
    }
  };

  swaggerJson.definitions.unauthorisedAccess = {
    properties: {
      status: {
        type: 'number',
        example: 0
      },
      message: {
        example: message.ACCESS_DENIED
      }
    }
  };

  swaggerJson.definitions.followBusiness = {
    type: 'object',
    properties: {
      followId: {
        type: 'string',
        example: '60179cefdf85bf52580884ea'
      }
    }
  };
  swaggerJson.definitions.changePassword = {
    type: 'object',
    properties: {
      oldPassword: {
        type: 'string',
        example:
          '8776f108e247ab1e2b323042c049c266407c81fbad41bde1e8dfc1bb66fd267e'
      },
      newPassword: {
        type: 'string',
        example:
          '849f1575ccfbf3a4d6cf00e6c5641b7fd4da2ed3e212c2d79ba9161a5a432ff0'
      }
    }
  };

  swaggerJson.definitions.editBusinessProfile = {
    type: 'object',
    properties: {
      businessName: {
        type: 'string',
        example: 'happii'
      },
      bio: {
        type: 'string',
        example: 'Get Out & Fish'
      },
      countryName: {
        type: 'string',
        example: 'India'
      },
      stateName: {
        type: 'string',
        example: 'Gujarat'
      },
      cityName: {
        type: 'string',
        example: 'Ahmedabad'
      },
      countryId: {
        type: 'number',
        example: 101
      },
      stateId: {
        type: 'number',
        example: 4030
      },
      cityId: {
        type: 'number',
        example: 57606
      },
      areaName: {
        type: 'string',
        example: 'Ranip'
      },
      postalCode: {
        type: 'number',
        example: 382480
      },
      profilePicture: {
        type: 'string',
        example: 'url'
      },
      coverPicture: {
        type: 'string',
        example: 'url'
      },
      region: {
        type: 'object',
        properties: {
          City: {
            type: 'string',
            example: ''
          },
          State: {
            type: 'string',
            example: ''
          },
          Country: {
            type: 'string',
            example: ''
          },
          Title: {
            type: 'string',
            example: 'Location Title'
          },
          Radius: {
            type: 'number',
            example: 72.57
          },
          Latitude: {
            type: 'number',
            example: 23.08
          },
          Longitude: {
            type: 'number',
            example: 72.57
          }
        }
      },
      category: {
        type: 'string',
        example: 'Restaurant'
      },
      autoDiscover: {
        type: 'boolean',
        example: true
      },
      workingHours: {
        type: 'object',
        properties:{
          days: {
            type: 'string',
            example: 'monday-friday'
          },
          opening: {
            type: 'string',
            example: '8:00AM'
          },
          closing: {
            type: 'string',
            example: '9:00PM'
          },
          closed: {
            type: Boolean,
            example: 'true',
            required: true
          }
        }
     }
    }
  };

  swaggerJson.definitions.phone = {
    type: 'object',
    properties: {
      countryCode: {
        type: 'string',
        example: '91'
      },
      phoneNumber: {
        type: 'string',
        example: '9925461330'
      }
    }
  };

  swaggerJson.definitions.verifyPhone = {
    type: 'object',
    properties: {
      otp: {
        type: 'number',
        example: 123456
      }
    }
  };

  swaggerJson.definitions.successPhone = {
    properties: {
      status: {
        type: 'number',
        example: 1
      },
      message: {
        example: message.SUCCESS
      }
    }
  };

  return swaggerJson;
};
