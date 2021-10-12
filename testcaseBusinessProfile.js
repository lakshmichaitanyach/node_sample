module.exports = {
    businessProfile: [{
        it: 'As a business user I should validate if name is not pass',
        options: {
        },
        status: 0
    },
    {
        it: 'As a business user I should validate if name is not minimum number',
        options: {
            businessName: 'A'
        },
        status: 0
    },
    {
        it: 'As a business user I should validate if first name is greater than maximum number',
        options: {
            businessName: '8776f108e247ab1e2b323042c049c266407c81fbad41bde1e8dfc1bb66fd267e'
        },
        status: 0
    },
    {
        it: 'As a business user I should validate if last name is not pass',
        options: {
            businessName: 'Talent'
        },
        status: 0
    },
    {
        it: 'As a user I should validate if country code is not pass',
        options: {
            businessName: 'Talent',
        },
        status: 0
    },
    {
        it: 'As a user I should validate if country code is passed incorrectly',
        options: {
            businessName: 'Talent',
            countryCode: ''
        },
        status: 0
    },
    {
        it: 'As a user I should validate if country code is greater than maximum number',
        options: {
            businessName: 'Talent',
            countryCode: '1111'
        },
        status: 0
    },
    {
        it: 'As a user I should validate if phone number is not pass',
        options: {
            businessName: 'Talent',
            countryCode: '91'
        },
        status: 0
    },
    {
        it: 'As a user I should validate if phone number is passed incorrectly',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: ''
        },
        status: 0
    },
    {
        it: 'As a user I should validate if phone number is greater than maximum number',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '123456789012345'
        },
        status: 0
    },
    {
        it: 'As a user I should validate if post code is not passed',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220'
        },
        status: 0
    },
    {
        it: 'As a user I should validate if post code is passed incorrectly',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: ''
        },
        status: 0
    },
    {
        it: 'As a user I should validate if address line one is not passed',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015'
        },
        status: 0
    },
    {
        it: 'As a user I should validate if address line one is passed incorrectly',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015',
            addressLineOne: ''
        },
        status: 0
    },
    {
        it: 'As a user I should validate if city is not passed',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015',
            addressLineOne: 'Some House, Some Buildding',
            addressLineTwo: 'Some Road, Somewhere'
        },
        status: 0
    },
    {
        it: 'As a user I should validate if city is passed incorrectly',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015',
            addressLineOne: 'Some House, Some Buildding',
            addressLineTwo: 'Some Road, Somewhere',
            city: ''
        },
        status: 0
    },
    {
        it: 'As a user I should validate if country is not passed',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015',
            addressLineOne: 'Some House, Some Buildding',
            addressLineTwo: 'Some Road, Somewhere',
            city: 'Ahmedabad'
        },
        status: 0
    },
    {
        it: 'As a user I should validate if country is passed incorrectly',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015',
            addressLineOne: 'Some House, Some Buildding',
            addressLineTwo: 'Some Road, Somewhere',
            city: 'Ahmedabad',
            country: ''
        },
        status: 0
    },
    {
        it: 'As a user I should validate if country value is not from the country list',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015',
            addressLineOne: 'Some House, Some Buildding',
            addressLineTwo: 'Some Road, Somewhere',
            city: 'Ahmedabad',
            country: 'Testing'
        },
        status: 0
    },
    {
        it: 'As a user I should validate if language value is not passed',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015',
            addressLineOne: 'Some House, Some Buildding',
            addressLineTwo: 'Some Road, Somewhere',
            city: 'Ahmedabad',
            country: 'India'
        },
        status: 0
    },
    {
        it: 'As a user I should validate if language value is passed incorrectly',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015',
            addressLineOne: 'Some House, Some Buildding',
            addressLineTwo: 'Some Road, Somewhere',
            city: 'Ahmedabad',
            country: 'India',
            language: ''
        },
        status: 0
    },
    {
        it: 'As a user I should validate if language value is not from the allowed',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015',
            addressLineOne: 'Some House, Some Buildding',
            addressLineTwo: 'Some Road, Somewhere',
            city: 'Ahmedabad',
            country: 'India',
            language: ['zz']
        },
        status: 0
    },
    {
        it: 'As a user I should validate if timezone is not passed',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015',
            addressLineOne: 'Some House, Some Buildding',
            addressLineTwo: 'Some Road, Somewhere',
            city: 'Ahmedabad',
            country: 'India',
            language: [{
                name: 'en', rate: 8
            }]
        },
        status: 0
    },
    {
        it: 'As a user I should validate if timezone value is passed incorrectly',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015',
            addressLineOne: 'Some House, Some Buildding',
            addressLineTwo: 'Some Road, Somewhere',
            city: 'Ahmedabad',
            country: 'India',
            language: [{
                name: 'en', rate: 8
            }],
            timeZone: ''
        },
        status: 0
    },
    {
        it: 'As a user I should validate if timezone value is not from the allowed list',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015',
            addressLineOne: 'Some House, Some Buildding',
            addressLineTwo: 'Some Road, Somewhere',
            city: 'Ahmedabad',
            country: 'India',
            language: [{
                name: 'en', rate: 8
            }],
            timeZone: 'test'
        },
        status: 0
    },
    {
        it: 'As a user I should validate if step is not passed',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015',
            addressLineOne: 'Some House, Some Buildding',
            addressLineTwo: 'Some Road, Somewhere',
            city: 'Ahmedabad',
            country: 'India',
            language: [{
                name: 'en', rate: 8
            }],
            timeZone: 'Asia/Kolkata'
        },
        status: 0
    },
    {
        it: 'As a user I can not save my personal details with invalid language rate',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015',
            addressLineOne: 'Some House, Some Buildding',
            addressLineTwo: 'Some Road, Somewhere',
            city: 'Ahmedabad',
            country: 'India',
            language: [{
                name: 'en',
                rate: 12
            }],
            timeZone: 'Asia/Kolkata'
        },
        status: 0
    },
    {
        it: `As a user I can not save my personal
        details with invalid language name & rate`,
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015',
            addressLineOne: 'Some House, Some Buildding',
            addressLineTwo: 'Some Road, Somewhere',
            city: 'Ahmedabad',
            country: 'India',
            language: [{
                name: 'demo',
                rate: 12
            }],
            timeZone: 'Asia/Kolkata'
        },
        status: 0
    },
    {
        it: 'As a user I cant save my personal details without language rate',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015',
            addressLineOne: 'Some House, Some Buildding',
            addressLineTwo: 'Some Road, Somewhere',
            city: 'Ahmedabad',
            country: 'India',
            language: [{
                name: 'en'
            }],
            timeZone: 'Asia/Kolkata'
        },
        status: 0
    },
    {
        it: 'As a user I cant save my personal details without language name',
        options: {
            businessName: 'Talent',
            countryCode: '91',
            phoneNumber: '9925061220',
            postcode: '380015',
            addressLineOne: 'Some House, Some Buildding',
            addressLineTwo: 'Some Road, Somewhere',
            city: 'Ahmedabad',
            country: 'India',
            language: [{
                rate: 8
            }],
            timeZone: 'Asia/Kolkata'
        },
        status: 0
    }
    ],
    uploadProfilePicture: [{
        it: 'As a user, I should validate profile picture should not be blank',
        options: {
            'photo': ''
        },
        status: 0
    }]
};
