"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackResolutionEnum = exports.FeedbackStatusEnum = void 0;
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
var FeedbackResolutionEnum;
(function (FeedbackResolutionEnum) {
    FeedbackResolutionEnum["Fixed"] = "fixed";
    FeedbackResolutionEnum["WontFix"] = "wont_fix";
    FeedbackResolutionEnum["NotAnIssue"] = "not_an_issue";
})(FeedbackResolutionEnum = exports.FeedbackResolutionEnum || (exports.FeedbackResolutionEnum = {}));
