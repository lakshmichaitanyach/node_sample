const BusinessService = require('./businessProfileServices');
const Utils = require('../../util/utilFunctions');
const businessProfile = require('../businessProfile');
const BusinessProfileService = require('./businessProfileServices');

class businessProfileController{
   /**
   * @desc This function is being used to get business details
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {Object} req.body.followId followId
   * @param {function} res Response
   * @param {function} next exceptionHandler
   */
  static async followBusiness(req, res) {
    try {
      const data = await BusinessProfileService.follow(req, res.locals.business);
      Utils.sendResponse(null, data, res, res.__('SUCCESS'));
    } catch (error) {
      Utils.sendResponse(error, null, res, '');
    }
  }

  /**
   * @desc This function is being used to get business details
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {Object} req.body.followId followId
   * @param {function} res Response
   * @param {function} next exceptionHandler
   */
  static async unFollowBusiness(req, res) {
    try {
      const data = await BusinessProfileService.unFollow(req, res.locals.business);
      Utils.sendResponse(null, data, res, res.__('SUCCESS'));
    } catch (error) {
      Utils.sendResponse(error, null, res, '');
    }
  }

  /**
   * @desc This function is being used to get business details
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {function} res Response
   * @param {function} next exceptionHandler
   **/
  static async getBusinessDetails(req, res) {
    try {
      const data = await BusinessProfileService.getBusinessDetails(
        req,
        res.locals.business
      );
      Utils.sendResponse(null, data, res, res.__('SUCCESS'));
    } catch (error) {
      Utils.sendResponse(error, null, res, '');
    }
  }

  /**
   * @desc This function is being used to get business details
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.params params
   * @param {Object} req.params.id id
   * @param {function} res Response
   * @param {function} next exceptionHandler
   */
  static async getFollowerList(req, res) {
    try {
      const data = await BusinessProfileService.getFollowerList(
        req,
        res.locals.business
      );
      Utils.sendResponse(null, data, res, res.__('SUCCESS'));
    } catch (error) {
      Utils.sendResponse(error, null, res, error.message);
    }
  }

  /**
   * @desc This function is being used to get business details
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.params params
   * @param {Object} req.params.id id
   * @param {function} res Response
   * @param {function} next exceptionHandler
   */
  static async getFollowingList(req, res) {
    try {
      const data = await BusinessProfileService.getFollowingList(
        req,
        res.locals.business
      );
      Utils.sendResponse(null, data, res, res.__('SUCCESS'));
    } catch (error) {
      Utils.sendResponse(error, null, res, '');
    }
  }

  /**
   * @desc This function is being used to get business details
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.params params
   * @param {Object} req.params.id id
   * @param {function} res Response
   * @param {function} next exceptionHandler
   */
  static async getFollowerUserList(req, res) {
    try {
      const data = await BusinessProfileService.getFollowerUserList(
        req,
        res.locals.business
      );
      Utils.sendResponse(null, data, res, res.__('SUCCESS'));
    } catch (error) {
      Utils.sendResponse(error, null, res, error.message);
    }
  }

  /**
   * @desc This function is being used to get business details
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.params params
   * @param {Object} req.params.id id
   * @param {function} res Response
   * @param {function} next exceptionHandler
   */
  static async getFollowingUserList(req, res) {
    try {
      const data = await BusinessProfileService.getFollowingUserList(
        req,
        res.locals.business
      );
      Utils.sendResponse(null, data, res, res.__('SUCCESS'));
    } catch (error) {
      Utils.sendResponse(error, null, res, '');
    }
  }

  /**
   * @desc This function is being used to get business details
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {Object} req.params params
   * @param {Object} req.params.id id
   * @param {function} res Response
   * @param {function} next exceptionHandler
   */
  static async searchBusiness(req, res) {
    try {
      const data = await BusinessProfileService.searchBusiness(
        req,
        res.locals.business
      );
      Utils.sendResponse(null, data, res, res.__('SUCCESS'));
    } catch (error) {
      Utils.sendResponse(error, null, res, '');
    }
  }

  /**
   * @desc This function is being used to update talent personal details
   * @author LakshmiCChapala
   * @since 02/06/2020
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
   * @param {function} res Response
   * @param {function} next exceptionHandler
   */
  static async editBusinessDetails(req, res) {
    try {
      const data = await BusinessProfileService.editBusinessDetails(
        req,
        res.locals.business
      );
      Utils.sendResponse(null, data, res, res.__('SUCCESS'));
    } catch (error) {
      Utils.sendResponse(error, null, res, error.message);
    }
  }

  /**
   * @desc This function is being used to save client phone number and send OTP SMS
   * @author LakshmiCChapala
   * @since 06/07/2020
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {String} req.body.countrycode county code
   * @param {String} req.body.phone phone number
   * @param {Object} res Response
   */
  static async saveClientPhoneNumber(req, res) {
    try {
      const data = await BusinessProfileService.saveClientPhoneNumber(
        req,
        res.locals.business
      );
      Utils.sendResponse(null, data, res, MESSAGES.RESEND_PHONE_OTP_SUCCESS);
    } catch (error) {
      Utils.sendResponse(error, null, res, '');
    }
  }

  /**
   * @desc This function is being used to verify client phone number with OTP
   * @author LakshmiCChapala
   * @since 07/07/2020
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {String} req.body.otp otp code
   * @param {Object} res Response
   */
  static async verifyClientPhoneNumber(req, res) {
    try {
      const data = await BusinessProfileService.verifyClientPhoneNumber(
        req,
        res.locals.business
      );
      Utils.sendResponse(null, data, res, MESSAGES.SUCCESS);
    } catch (error) {
      Utils.sendResponse(error, null, res, '');
    }
  }

  /**
   * @desc This function is being used to verify client phone number with OTP
   * @author LakshmiCChapala
   * @since 07/07/2020
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {String} req.body.otp otp code
   * @param {Object} res Response
   */
  static async resendPhoneOTP(req, res) {
    try {
      const data = await BusinessProfileService.resendPhoneOTP(
        req,
        res.locals.business
      );
      Utils.sendResponse(null, data, res, MESSAGES.RESEND_PHONE_OTP_SUCCESS);
    } catch (error) {
      Utils.sendResponse(error, null, res, '');
    }
  }

  /**
   * @desc This function is being used to verify client phone number with OTP
   * @author LakshmiCChapala
   * @since 07/07/2020
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {String} req.body.otp otp code
   * @param {Object} res Response
   */
  static async changePassword(req, res) {
    try {
      const data = await BusinessProfileService.changePassword(
        req,
        res.locals.business
      );
      Utils.sendResponse(null, data, res, MESSAGES.CHANGE_PASSWORD_SUCCESS);
    } catch (error) {
      Utils.sendResponse(error, null, res, error.message);
    }
  }
  /**
   * @desc This function is being used to get ratings
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {function} res Response
   * @param {function} next exceptionHandler
   **/
  static async getRatings(req, res){
    try {
      const data = await BusinessProfileService.getRatings(
        req,
        res.locals.business
      );
      Utils.sendResponse(null, data, res, res.__('SUCCESS'));
    } catch (error) {
      Utils.sendResponse(error, null, res, error.message);
    }
  }

  /**
   * @desc This function is being used to get reviews
   * @author LakshmiCChapala
   * @since 05/04/2021
   * @param {Object} req Request
   * @param {Object} req.body RequestBody
   * @param {function} res Response
   * @param {function} next exceptionHandler
   **/
  static async getReviews(req, res){
    try {
      const data = await BusinessProfileService.getReviews(
        req,
        res.locals.business
      );
      Utils.sendResponse(null, data, res, res.__('SUCCESS'));
    } catch (error) {
      Utils.sendResponse(error, null, res, error.message);
    }
  }
  
  static async editReviews(req, res) {
    try {
      const data = await BusinessProfileService.editReviews(
        req,
        res.locals.business
      );
      Utils.sendResponse(null, data, res, res.__('SUCCESS'));
    } catch (error) {
      Utils.sendResponse(error, null, res, error.message);
    }
  }

}



module.exports = businessProfileController;
