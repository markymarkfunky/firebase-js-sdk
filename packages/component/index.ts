/**
 * Firebase component framework.
 * 
 * @remark This is specifically tailored for Firebase JS SDK usage, if you are not a
 * member of the Firebase team, please avoid using this package
 * @packageDocumentation
 */

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export { Component } from './src/component';
export { ComponentContainer } from './src/component_container';
export { Provider } from './src/provider';
export {
  ComponentType,
  InstanceFactory,
  InstantiationMode,
  NameServiceMapping,
  Name
} from './src/types';
