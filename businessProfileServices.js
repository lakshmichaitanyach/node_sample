const mongoose = require('mongoose');
const Business = require('../../models/business.model');
const User = require('../../models/user.model');
const Post = require('../../models/post.model');
const crypt = require('../../util/crypt');
const fs = require('fs');
const BusinessProfileValidator = require('./BusinessProfileValidator');
const UtilFunctions = require('../../util/utilFunctions');
const isActive = {
  isActive: 1
};

class BusinessProfileService {
  /**
   * @desc This function is being used to follow
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {Object} req.body.followId followId
   * @param {Object} res Response
   * @param {function} next exceptionHandler
   **/
  static async follow(req, business) {
    let data = await Business.findByIdAndUpdate(
      req.body.followId,
      {
        $addToSet: { followers: business._id }
      },
      {
        new: true
      }
    );
    if (data) {
      let data2 = Business.findByIdAndUpdate(
        Business._id,
        {
          $addToSet: { following: req.body.followId }
        },
        { new: true }
      ).select(
        '-password -isActive -isPhoneActive -phoneOtp -otp -updatedAt -isDelete -__v'
      );

      return data2;
    } else {
      throw {
        message: MESSAGES.ERROR_MSG,
        statusCode: 400
      };
    }
  }
  /**
   * @desc This function is being used to unfollow
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {Object} req.body.followId followId
   * @param {Object} res Response
   * @param {function} next exceptionHandler
   */

  static async unFollow(req, business) {
    let data = await Business.findByIdAndUpdate(
      req.body.followId,
      {
        $pull: { followers: business._id }
      },
      {
        new: true
      }
    );
    if (data) {
      let data2 = Business.findByIdAndUpdate(
        business._id,
        {
          $pull: { following: req.body.followId }
        },
        { new: true }
      ).select(
        '-password -isActive -isPhoneActive -phoneOtp -otp -updatedAt -isDelete -__v'
      );
      return data2;
    } else {
      throw {
        message: MESSAGES.ERROR_MSG,
        statusCode: 400
      };
    }
  }

  /**
   * @desc This function is being used to get Business details
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {Object} res Response
   * @param {function} next exceptionHandler
   */
  static async getBusinessDetails(req, business) {
    let businessUserName =
      req.query.businessUsername !== undefined && req.query.businessUsername !== ''
        ? req.query.businessUsername
        : '';

    let businessId =
      req.query.id !== undefined && req.query.id !== '' && businessUserName === ''
        ? req.query.id
        : business._id;
    let query = businessUserName === '' ? { _id: businessId } : { businessUsername: businessUserName };
    let businessDetails = await Business.findOne({
      ...query
    }).lean();
    if (businessDetails) {
  

      //const avgRatings = businessDetails.ratings
      //add working hours

      const postCount = await Post.countDocuments({
        postedBy: businessDetails._id,
        IsDeleted: false
      });

      let BusinessData = await UtilFunctions.sanitizeUser(businessDetails);

      businessDetails.region && businessDetails.region.Latitude
        ? (businessDetails.region.Latitude = UtilFunctions.getFloat(
            businessDetails.region.Latitude
          ))
        : '';

      businessDetails.region && businessDetails.region.Longitude
        ? (businessDetails.region.Longitude = UtilFunctions.getFloat(
            businessDetails.region.Longitude
          ))
        : '';

      businessDetails.region && businessDetails.region.Radius
        ? (businessDetails.region.Radius = UtilFunctions.getFloat(
            businessDetails.region.Radius
          ))
        : '';

      let followingData = {
        followingCount:
          businessDetails.following && businessDetails.following.length
            ? businessDetails.following.length
            : 0,
        followerCount:
          businessDetails.followers && businessDetails.followers.length
            ? businessDetails.followers.length
            : 0,
        postCount: postCount
      };
      //add media
      business = _.merge(businessData, followingData);
      return businessData;
    } else {
      throw {
        message: MESSAGES.ERROR_MSG,
        statusCode: 400
      };
    }
  }

  /**
   * @desc This function is being used to get Business details
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.params params
   * @param {Object} req.params.id id
   * @param {Object} res Response
   * @param {function} next exceptionHandler
   */
  static async getFollowerList(req, business) {
    let { Search, offset, limit } = req.query;

    let condition = Search
      ? {
          $or: [
            {
              businessUsername: {
                $regex: new RegExp(Search),
                $options: 'i'
              }
            },
            { //with email and username
              email: {
                $regex: new RegExp(Search),
                $options: 'i'
              }
            },
            {
              businessName: {
                $regex: new RegExp(Search),
                $options: 'i'
              }
            }
          ]
        }
      : {};

    let checkId = { _id: Business._id };
    const returnedTarget = Object.assign(checkId, isActive);

    let BusinessDetails = await Business.findOne({
      ...returnedTarget
    })
      .populate({
        path: 'followers',
        model: 'business',
        select: {
          _id: 1,
          businessUsername: 1,
          businessName: 1,
          profilePicture: 1
        },
        options: {
          skip: parseInt(offset) || 0,
          limit: parseInt(limit) || 10
        },
        match: { ...condition }
      })
      .select(
        '_id businessUsername businessName profilePicture followers following isActive'
      )
      .lean();

    if (
      businessDetails &&
      businessDetails.followers &&
      businessDetails.followers.length > 0
    ) {
      for (let i = 0; i < businessDetails.followers.length; i++) {
        let checkFollow = false;
        let checkFollowing = false;
        business &&
          business._id &&
          businessDetails.followers.length > 0 &&
          businessDetails.followers.map((list) => {
            checkFollow = true;
          });

        business &&
          business._id &&
          businessDetails.following.length > 0 &&
          businessDetails.following.map((list) => {
            if (list._id.equals(businessDetails.followers[i]._id)) {
              checkFollowing = true;
            }
          });

        let Data = {
          isFollowBy: checkFollow,
          isFollowing: checkFollowing
        };

        businessDetails.followers[i] = _.merge(businessDetails.followers[i], Data);
      }

      return businessDetails.followers;
    } else {
      return [];
    }
  }

  /**
   * @desc This function is being used to get Business details
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.params params
   * @param {Object} req.params.id id
   * @param {Object} res Response
   * @param {function} next exceptionHandler
   */
  static async getFollowingList(req, business) {
    let { Search, offset, limit } = req.query;
    let condition = Search
      ? {
          $or: [
            {
              businessUsername: {
                $regex: new RegExp(Search),
                $options: 'i'
              }
            },
            { //with email and username
              email: {
                $regex: new RegExp(Search),
                $options: 'i'
              }
            },
            {
              businessName: {
                $regex: new RegExp(Search),
                $options: 'i'
              }
            }
          ]
        }
      : {};

    let checkId = { _id: business._id };

    const returnedTarget = Object.assign(checkId, isActive);

    let businessDetails = await Business.findOne({
      ...returnedTarget
    })
      .populate({
        path: 'following',
        model: 'business',
        select: {
          _id: 1,
          businessUsername: 1,
          businessName: 1,
          profilePicture: 1
        },
        options: {
          skip: parseInt(offset) || 0,
          limit: parseInt(limit) || 10
        },
        match: { ...condition }
      })
      .select(
        '_id businessUsername businessName profilePicture followers following isActive'
      )
      .lean();

    if (
      businessDetails &&
      businessDetails.following &&
      businessDetails.following.length > 0
    ) {
      for (let i = 0; i < businessDetails.following.length; i++) {
        let checkFollow = false;
        let checkFollowing = false;
        business &&
          business._id &&
          businessDetails.following.length > 0 &&
          businessDetails.following.map((list) => {
            checkFollowing = true;
          });

        business &&
          business._id &&
          businessDetails.followers.length > 0 &&
          businessDetails.followers.map((list) => {
            if (list._id.equals(businessDetails.following[i]._id)) {
              checkFollow = true;
            }
          });

        let Data = {
          isFollowBy: checkFollow,
          isFollowing: checkFollowing
        };

        businessDetails.following[i] = _.merge(businessDetails.following[i], Data);
      }

      return businessDetails.following;
    } else {
      return [];
    }
  }

  /**
   * @desc This function is being used to get Business details
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.params params
   * @param {Object} req.params.id id
   * @param {Object} res Response
   * @param {function} next exceptionHandler
   */
  static async getFollowerUserList(req, business) {
    let { Search, offset, limit } = req.query;

    let condition = Search
      ? {
          $or: [
            {
              businessUsername: {
                $regex: new RegExp(Search),
                $options: 'i'
              }
            },
            { //with email and username
              email: {
                $regex: new RegExp(Search),
                $options: 'i'
              }
            },
            {
              businessName: {
                $regex: new RegExp(Search),
                $options: 'i'
              }
            }
          ]
        }
      : {};

    let checkId = { _id: req.params.id };
    const returnedTarget = Object.assign(checkId, isActive);

    let notId = {
      _id: { $ne: business._id }
    };

    let businessDetails = await Business.findOne({
      ...returnedTarget
    })
      .populate({
        path: 'followers',
        model: 'business',
        select: {
          _id: 1,
          businessUsername: 1,
          businessName: 1,
          profilePicture: 1
        },
        options: {
          skip: parseInt(offset) || 0,
          limit: parseInt(limit) || 10
        },
        match: { ...condition, ...notId }
      })
      .select(
        '_id businessUsername businessName profilePicture followers following isActive'
      )
      .lean();

    let checkId2 = { _id: business._id };
    const returnedTarget2 = Object.assign(checkId2, isActive);

    let businessAll = await Business.findOne({
      ...returnedTarget2
    })
      .populate({
        path: 'followers',
        model: 'business',
        select: {
          _id: 1,
          businessUsername: 1,
          businessName: 1,
          profilePicture: 1
        }
      })
      .select(
        '_id businessname businessName profilePicture followers following isActive'
      )
      .lean();

    if (
      businessDetails &&
      businessDetails.followers &&
      businessDetails.followers.length > 0
    ) {
      for (let i = 0; i < businessDetails.followers.length; i++) {
        let checkFollow = false;
        let checkFollowing = false;
        businessDetails &&
          businessDetails.followers &&
          businessDetails.followers.length > 0 &&
          businessDetails.followers.map((list) => {
            if (
              businessAll.followers.filter(
                (followers) => followers._id === list._id
              )
            ) {
              checkFollow = true;
            }
          });

          businessDetails &&
          businessDetails.following &&
          businessDetails.following.length > 0 &&
          businessDetails.following.map((list) => {
            if (
              businessAll.following.filter(
                (following) => following._id === list._id
              )
            ) {
              checkFollowing = true;
            }
          });

        let Data = {
          isFollowBy: checkFollow,
          isFollowing: checkFollowing
        };

        businessDetails.followers[i] = _.merge(businessDetails.followers[i], Data);
      }

      return businessDetails.followers;
    } else {
      return [];
    }
  }

  /**
   * @desc This function is being used to get Business details
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.params params
   * @param {Object} req.params.id id
   * @param {Object} res Response
   * @param {function} next exceptionHandler
   */
  static async getFollowingUserList(req, business) {
    let { Search, offset, limit } = req.query;
    let condition = Search
      ? {
          $or: [
            {
              businessUsername: {
                $regex: new RegExp(Search),
                $options: 'i'
              }
            },
            { //with email and username
              email: {
                $regex: new RegExp(Search),
                $options: 'i'
              }
            },
            {
              businessName: {
                $regex: new RegExp(Search),
                $options: 'i'
              }
            }
          ]
        }
      : {};

    let checkId = { _id: req.params.id };
    const returnedTarget = Object.assign(checkId, isActive);

    let notId = {
      _id: { $ne: Business._id }
    };

    let businessDetails = await Business.findOne({
      ...returnedTarget
    })
      .populate({
        path: 'following',
        model: 'business',
        select: {
          _id: 1,
          businessUsername: 1,
          businessName: 1,
          profilePicture: 1
        },
        options: {
          skip: parseInt(offset) || 0,
          limit: parseInt(limit) || 10
        },
        match: { ...condition, ...notId }
      })
      .select(
        '_id businessUsername businessName profilePicture followers following isActive'
      )
      .lean();

    let checkId2 = { _id: business._id };
    const returnedTarget2 = Object.assign(checkId2, isActive);

    let businessAll = await Business.findOne({
      ...returnedTarget2
    })
      .populate({
        path: 'following',
        model: 'business',
        select: {
          _id: 1,
          businessUsername: 1,
          businessName: 1,
          profilePicture: 1
        }
      })
      .select(
        '_id businessUsername businessName profilePicture followers following isActive'
      )
      .lean();

    if (
      businessDetails &&
      businessDetails.following &&
      businessDetails.following.length > 0
    ) {
      for (let i = 0; i < businessDetails.following.length; i++) {
        let checkFollow = false;
        let checkFollowing = false;
        businessDetails &&
          businessDetails.followers &&
          businessDetails.followers.length > 0 &&
          businessDetails.followers.map((list) => {
            if (
              businessAll.followers.filter(
                (followers) => followers._id === list._id
              )
            ) {
              checkFollow = true;
            }
          });

        businessDetails &&
          businessDetails.following &&
          businessDetails.following.length > 0 &&
          businessDetails.following.map((list) => {
            if (
              businessAll.following.filter(
                (following) => following._id === list._id
              )
            ) {
              checkFollowing = true;
            }
          });

        let Data = {
          isFollowBy: checkFollow,
          isFollowing: checkFollowing
        };

        businessDetails.following[i] = _.merge(businessDetails.following[i], Data);
      }

      return businessDetails.following;
    } else {
      return [];
    }
  }

  /**
   * @desc This function is being used to get Business details
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {Object} req.body.firstName firstName
   * @param {Object} req.body.lastName lastName
   * @param {Object} req.body.bio bio
   * @param {Object} req.body.countryName countryName
   * @param {Object} req.body.stateName stateName
   * @param {Object} req.body.cityName cityName
   * @param {Object} req.body.areaName areaName
   * @param {Object} req.body.postalCode postalCode
   * @param {Object} req.body.dob dob
   * @param {Object} req.body.phoneNumber phoneNumber
   * @param {Object} res Response
   * @param {function} next exceptionHandler
   */
  static async editBusinessDetails(req, business) {
    //validation
    const Validator = new BusinessProfileValidator(req.body);
    await Validator.validationPersonalDetails();

    await business.updateOne(
      {
        _id: mongoose.Types.ObjectId(business._id)
      },
      {
        businessName: req.body.businessName,
        bio: req.body.bio,
        countryName: req.body.countryName,
        stateName: req.body.stateName,
        cityName: req.body.cityName,
        countryId: req.body.countryId,
        stateId: req.body.stateId,
        cityId: req.body.cityId,
        areaName: req.body.areaName,
        postalCode: req.body.postalCode,
        profilePicture: req.body.profilePicture,
        coverPicture: req.body.coverPicture,
        region: req.body.region,
        category: req.body.category,
        autoDiscover: req.body.autoDiscover,
        updatedAt: Date.now(),
        rating: req.body.ratings,
        images: req.body.images,
        videoes: req.body.videoes,
        workingHours: req.body.workingHours
      },
      {
        new: true
      }
    );

    let businessData = await business.findOne({
      _id: mongoose.Types.ObjectId(business._id)
    }).lean();

    let businessDetails = await UtilFunctions.sanitizeUser(businessData);

    businessDetails.region && businessDetails.region.Latitude
      ? (businessDetails.region.Latitude = UtilFunctions.getFloat(
          businessDetails.region.Latitude
        ))
      : '';

    businessDetails.region && businessDetails.region.Longitude
      ? (businessDetails.region.Longitude = UtilFunctions.getFloat(
          businessDetails.region.Longitude
        ))
      : '';

    businessDetails.region && businessDetails.region.Radius
      ? (businessDetails.region.Radius = UtilFunctions.getFloat(
          businessDetails.region.Radius
        ))
      : '';

    let followingData = {
      followingCount:
        businessDetails.following && businessDetails.following.length
          ? businessDetails.following.length
          : 0,
      followerCount:
        businessDetails.followers && businessDetails.followers.length
          ? businessDetails.followers.length
          : 0
    };
    business = _.merge(businessData, followingData);
    return businessDetails;
  }

  /**
   * @desc This function is being used to get Business details
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {Object} req.params params
   * @param {Object} req.params.id id
   * @param {Object} res Response
   * @param {function} next exceptionHandler
   */
  static async searchBusiness(req, business) {
    let businessPattern = new RegExp('^' + req.params.id + '');

    let businessDetails = await Business.find({
      $or: [
        { email: { $regex: businessPattern, $options: 'i' } },
        { businessUsername: { $regex: businessPattern, $options: 'i' } },
        { businessName: { $regex: businessPattern, $options: 'i' } }
      ]
    }).select('_id businessName businessUsername email');

    return businessDetails;
  }

  /**
   * @desc This function is being used to save client phone number and send OTP SMS
   * @author LakshmiCChapala
   * @since 06/07/2020
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {String} req.body.countrycode county code
   * @param {String} req.body.phone phone number
   * @param {object} Business Logged in client Business data
   */
  static async saveClientPhoneNumber(req, Business) {
    const Validator = new BusinessProfileValidator(req.body);
    await Validator.countryCode(req.body.countryCode);
    await Validator.phoneNumber(req.body.phoneNumber);
    const otp = await UtilFunctions.generateOtp();
    // const message = `Welcome to Happiibook. Please activate your mobile number by entering ${otp}.`;
    // const to = `${req.body.countryCode}${req.body.phoneNumber}`;
    // await Sms.sendSMS(to, message);
    await Business.updateOne(
      {
        _id: mongoose.Types.ObjectId(business._id)
      },
      {
        $set: {
          isPhoneActive: CONSTANTS.STATUS.PENDING,
          countryCode: req.body.countryCode,
          phoneNumber: req.body.phoneNumber,
          phoneOtp: process.env.NODE_ENV !== 'testing' ? otp : '123456'
        }
      }
    );
    return true;
  }

  /**
   * @desc This function is being used to save client phone number and send OTP SMS
   * @author LakshmiCChapala
   * @since 06/07/2020
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {String} req.body.countrycode county code
   * @param {String} req.body.phone phone number
   * @param {object} Business Logged in client Business data
   */
  static async resendPhoneOTP(req, Business) {
    const Validator = new BusinessProfileValidator(req.body);
    await Validator.countryCode(req.body.countryCode);
    await Validator.phoneNumber(req.body.phoneNumber);
    const otp = await UtilFunctions.generateOtp();
    // const message = `Welcome to Happiibook. Please activate your mobile number by entering ${otp}.`;
    // const to = `${req.body.countryCode}${req.body.phoneNumber}`;
    // await Sms.sendSMS(to, message);
    return true;
  }

  /**
   * @desc This function is being used to verify client phone number using otp
   * @author LakshmiCChapala
   * @since 07/07/2020
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {String} req.body.otp otp code
   * @param {object} Business Logged in client Business data
   */
  static async verifyClientPhoneNumber(req, Business) {
    const Validator = new BusinessProfileValidator(req.body);
    await Validator.otp(req.body.otp);

    if (business.phoneOtp === req.body.otp) {
      await business.updateOne(
        {
          _id: mongoose.Types.ObjectId(Business._id)
        },
        {
          $set: {
            isPhoneActive: CONSTANTS.STATUS.ACTIVE
          }
        }
      );
      return true;
    } else {
      throw {
        message: MESSAGES.INVALID_OTP,
        statusCode: 400
      };
    }
  }

  /**
   * @desc This function is being used to verify client phone number using otp
   * @author LakshmiCChapala
   * @since 07/07/2020
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {String} req.body.otp otp code
   * @param {object} Business Logged in client Business data
   */
  static async changePassword(req, business) {
    let { oldPassword, newPassword } = req.body;
    let businessData = await business.findOne({
      email: business.email
    }).lean();
    if (!business || business.isActive) {
      const isMatch = await crypt.comparePassword(
        oldPassword,
        businessData.password
      );
      if (!isMatch) {
        throw {
          message: MESSAGES.INCORRECT_PASSWORD,
          statusCode: 400
        };
      } else {
        const hash = await crypt.enCryptPassword(newPassword);

        await Business.updateOne(
          {
            _id: mongoose.Types.ObjectId(businessData._id)
          },
          {
            $set: {
              password: hash
            }
          }
        );

        const token = await crypt.getBusinessToken(businessData);
        let businessDetails = await UtilFunctions.sanitizeUser(businessData);

        businessDetails.region && businessDetails.region.Latitude
          ? (businessDetails.region.Latitude = UtilFunctions.getFloat(
              businessDetails.region.Latitude
            ))
          : '';

        businessDetails.region && businessDetails.region.Longitude
          ? (businessDetails.region.Longitude = UtilFunctions.getFloat(
              businessDetails.region.Longitude
            ))
          : '';

        businessDetails.region && businessDetails.region.Radius
          ? (businessDetails.region.Radius = UtilFunctions.getFloat(
              businessDetails.region.Radius
            ))
          : '';

        let followingData = {
          followingCount:
            businessDetails.following && businessDetails.following.length
              ? businessDetails.following.length
              : 0,
          followerCount:
            businessDetails.followers && businessDetails.followers.length
              ? businessDetails.followers.length
              : 0
        };

        businessDetails = _.merge(businessDetails, followingData, token);
        return businessData;
      }
    } else {
      throw {
        message: MESSAGES.ERROR_MSG,
        statusCode: 400
      };
    }
  }
}

module.exports = BusinessProfileService;
