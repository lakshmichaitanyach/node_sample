const validation = require('../validation');
/**
 ** Class represents validations for Business Basic Profile.
 */

 class BusinessProfileValidator extends validation {
    constructor(body) {
      super(body);
      this.body = body;
    }

    async validateBusinessDetails() {
      await super.username(this.body.businessUsername);
      await super.email(this.body.email);
      await super.businessName(this.body.businessName);
    }
  }
module.exports = BusinessProfileValidator;