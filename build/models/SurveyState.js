"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyState = void 0;
/**
 * Questionnaire states inferred from RFC 0113.
 *
 * @see https://github.com/Entidad/didcomm.org/tree/main/site/content/protocols/survey/0.1
 */
var SurveyState;
(function (SurveyState) {
    SurveyState["QuestionSent"] = "question-sent";
    SurveyState["QuestionReceived"] = "question-received";
    SurveyState["AnswerReceived"] = "answer-received";
    SurveyState["AnswerSent"] = "answer-sent";
})(SurveyState = exports.SurveyState || (exports.SurveyState = {}));
//# sourceMappingURL=SurveyState.js.map