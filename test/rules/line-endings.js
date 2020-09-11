/**
 * @fileoverview Check for correct line endings
 * @author Christoph Kraemer <chr.kraemer@sap.com>
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var linter = require("eslint").linter,
	ESLintTester = require("eslint-tester"),
	eslintTester = new ESLintTester(linter);

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

eslintTester.addRuleTest("lib/rules/line-endings", {

	valid: [
		"var a = 123;\n"
	],

	invalid: [
		{
			code: "var a = 123;\r",
			errors: [
				{ message: "Invalid line endings.", type: "Program" }
			]
		},
		{
			code: "var a = 123;\r\n",
			errors: [
				{ message: "Invalid line endings.", type: "Program" }
			]
		}
	]
});
