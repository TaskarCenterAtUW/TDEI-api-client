"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackResolutionStatusEnum = exports.FeedbackStatusEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var FeedbackStatusEnum;
(function (FeedbackStatusEnum) {
    FeedbackStatusEnum["Open"] = "open";
    FeedbackStatusEnum["Resolved"] = "resolved";
})(FeedbackStatusEnum = exports.FeedbackStatusEnum || (exports.FeedbackStatusEnum = {}));
/**
    * @export
    * @enum {string}
    */
var FeedbackResolutionStatusEnum;
(function (FeedbackResolutionStatusEnum) {
    FeedbackResolutionStatusEnum["Fixed"] = "fixed";
    FeedbackResolutionStatusEnum["WontFix"] = "wont_fix";
    FeedbackResolutionStatusEnum["NotAnIssue"] = "not_an_issue";
})(FeedbackResolutionStatusEnum = exports.FeedbackResolutionStatusEnum || (exports.FeedbackResolutionStatusEnum = {}));
