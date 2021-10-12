const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const assert = chai.assert;
const request = require('supertest');
const TestCase = require('./testcaseBusinessProfile');
chai.use(chaiHttp);
const trueDataStatus = 1;
let requestPayload;

describe('Business Profile', () => {
    try {
        it('As a business user should I must login to use all other test cases below', async () => {
            const loginUser = {
                email: 'talent@mailinator.com',
                password: '8776f108e247ab1e2b323042c049c266407c81fbad41bde1e8dfc1bb66fd267e'
            };

            const res = await request(process.env.BASE_URL)
                .post('/auth/signin')
                .send(loginUser);
            expect(res.body.status).to.be.status;
            assert.equal(res.body.status, trueDataStatus);
            assert.equal(res.statusCode, 200);
            requestPayload = res.body.data;
        });

        TestCase.basicProfile.forEach((data) => {
            it(data.it, (done) => {
                request(process.env.BASE_URL)
                    .put('/talent/personal-details')
                    .set({ Authorization: requestPayload.token })
                    .send(data.options)
                    .end((err, res) => {
                        expect(res.body.status).to.be.status;
                        assert.equal(res.body.status, data.status);
                        assert.equal(res.statusCode, 400);
                        done();
                    });
            });
        });

        it('As a business user I can save my personal details with new create language name', (done) => {
            const personalDetails = {
                firstName: 'talent',
                countryCode: '91',
                phoneNumber: '9925061220',
                postcode: '380015',
                addressLineOne: 'Some House, Some Buildding',
                addressLineTwo: 'Some Road, Somewhere',
                city: 'Ahmedabad',
                country: 'India',
                language: [{
                    name: 'demo',
                    rate: 8
                }],
                timeZone: 'Asia/Kolkata'
            };

            request(process.env.BASE_URL)
                .put('/talent/personal-details')
                .set({ Authorization: requestPayload.token })
                .send(personalDetails)
                .end((err, res) => {
                    expect(res.body.status).to.be.status;
                    assert.equal(res.statusCode, 200);
                    done();
                });
        });

        it('As a user I can save my personal details', (done) => {
            const personalDetails = {
                firstName: 'talent',
                countryCode: '91',
                phoneNumber: '9925061220',
                postcode: '380015',
                addressLineOne: 'Some House, Some Buildding',
                addressLineTwo: 'Some Road, Somewhere',
                city: 'Ahmedabad',
                country: 'India',
                language: [{
                    name: 'en',
                    rate: 8
                }, {
                    name: 'fr',
                    rate: 7
                }],
                timeZone: 'Asia/Kolkata'
            };

            request(process.env.BASE_URL)
                .put('/talent/personal-details')
                .set({ Authorization: requestPayload.token })
                .send(personalDetails)
                .end((err, res) => {
                    expect(res.body.status).to.be.status;
                    assert.equal(res.statusCode, 200);
                    done();
                });
        });

        it('As a user I can save my personal details', (done) => {
            const personalDetails = {
                firstName: 'talent',
                countryCode: '91',
                phoneNumber: '9925061220',
                postcode: '380015',
                addressLineOne: 'Some House, Some Buildding',
                addressLineTwo: 'Some Road, Somewhere',
                city: 'Ahmedabad',
                country: 'India',
                language: [{
                    name: 'en',
                    rate: 8
                }],
                timeZone: 'Asia/Kolkata'
            };

            request(process.env.BASE_URL)
                .put('/talent/personal-details')
                .set({ Authorization: requestPayload.token })
                .send(personalDetails)
                .end((err, res) => {
                    expect(res.body.status).to.be.status;
                    assert.equal(res.statusCode, 200);
                    done();
                });
        });
    } catch (exception) {
        CONSOLE_LOGGER.error(exception);
    }
});

describe('talent Profile Picture', () => {
    try {
        // Check all validation;
        TestCase.uploadProfilePicture.forEach((data) => {
            it(data.it, (done) => {
                request(process.env.BASE_URL)
                    .put('/business/picture')
                    .set({ Authorization: requestPayload.token })
                    .attach('doc', data.options.doc)
                    .end((err, res) => {
                        expect(res.body.status).to.be.status;
                        assert.equal(res.body.status, data.status);
                        done();
                    });
            });
        });

        it('As a user, I should not be able to invalid profile picture', async () => {
            const res = await request(process.env.BASE_URL)
                .put('/business/picture')
                .set({ Authorization: requestPayload.token })
                .attach('photo', 'test/mock-data/TEST.pdf');
            assert.equal(res.body.status, 0);
            assert.equal(res.statusCode, 400);
        });

        it('As a user, I should not be upload valid file with less than 5 kb', async () => {
            const res = await request(process.env.BASE_URL)
                .put('/business/picture')
                .set({ Authorization: requestPayload.token })
                .attach('photo', 'test/mock-data/3kb_file.png');
            assert.equal(res.body.status, 0);
            assert.equal(res.statusCode, 400);
        });



        it('As a user, I should not be upload valid file with more than 2 mb', async () => {
            const res = await request(process.env.BASE_URL)
                .put('/business/picture')
                .set({ Authorization: requestPayload.token })
                .attach('photo', 'test/mock-data/2_5mb_file.jpg');
            assert.equal(res.body.status, 0);
            assert.equal(res.statusCode, 400);
        });

        it('As a user, I should upload valid file for user profile', async () => {
            const res = await request(process.env.BASE_URL)
                .put('/business/picture')
                .set({ Authorization: requestPayload.token })
                .attach('photo', 'test/mock-data/valid_profile_pic.jpg');
            assert.equal(res.body.status, 0);
            assert.equal(res.statusCode, 200);
        });

        it('As a user, I should be able to delete uploaded file', async () => {
            const res = await request(process.env.BASE_URL)
                .delete('/business/picture')
                .set({ Authorization: requestPayload.token });
            assert.equal(res.body.status, 0);
            assert.equal(res.statusCode, 200);
        });
    } catch (exception) {
        CONSOLE_LOGGER.error(exception);
    }
});

describe('talent Profile get', () => {
    try {
        it('Get user details', (done) => {
            request(process.env.BASE_URL)
                .get('/business/details')
                .set({ Authorization: requestPayload.token })
                .end((err, res) => {
                    expect(res.body.status).to.be.status;
                    assert.equal(res.statusCode, 200);
                    done();
                });
        });

        it('Get user details', (done) => {
            request(process.env.BASE_URL)
                .get('/business/details')
                .set({ Authorization: requestPayload.token })
                .end((err, res) => {
                    expect(res.body.status).to.be.status;
                    assert.equal(res.statusCode, 200);
                    done();
                });
        });

    } catch (exception) {
        CONSOLE_LOGGER.error(exception);
    }
});
