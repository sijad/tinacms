/**
Copyright 2019 Forestry.io Inc
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react'
import { FC } from 'react'
import { NextPage } from 'next'
import { JsonFile, Options } from './use-json-form'
import { useLocalJsonForm } from './use-local-json-form'

interface JsonFormProps extends Options {
  jsonFile: JsonFile
  options?: Options
  data?: any
}

/**
 * jsonForm HOC
 */
export function jsonForm(
  Component: FC<JsonFormProps>,
  options: Options
): NextPage<{ jsonFile: JsonFile }> {
  return function JsonForm(props: JsonFormProps) {
    const { jsonFile } = props
    const [data] = useLocalJsonForm(jsonFile, options)

    return <Component {...props} {...props.jsonFile} data={data} />
  }
}