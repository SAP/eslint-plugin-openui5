// Copyright 2014 SAP SE.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http: //www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
// either express or implied. See the License for the specific
// language governing permissions and limitations under the License.

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
