"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *	http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcsNested = exports.EcsFlat = exports.EcsVersion = void 0;
exports.EcsVersion = '8.12.0-dev';
/**
 * Exporting raw schema files for easy programmatic use
 */
var ecs_flat_1 = require("./ecs_flat");
Object.defineProperty(exports, "EcsFlat", { enumerable: true, get: function () { return ecs_flat_1.EcsFlat; } });
var ecs_nested_1 = require("./ecs_nested");
Object.defineProperty(exports, "EcsNested", { enumerable: true, get: function () { return ecs_nested_1.EcsNested; } });
//# sourceMappingURL=index.js.map