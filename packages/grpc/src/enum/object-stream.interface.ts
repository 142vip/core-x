/*
 * Copyright 2023 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import type { Readable, Writable } from 'node:stream'

interface EmitterAugmentation1<Name extends string | symbol, Arg> {
  addListener: (event: Name, listener: (arg1: Arg) => void) => this
  emit: (event: Name, arg1: Arg) => boolean
  on: (event: Name, listener: (arg1: Arg) => void) => this
  once: (event: Name, listener: (arg1: Arg) => void) => this
  prependListener: (event: Name, listener: (arg1: Arg) => void) => this
  prependOnceListener: (event: Name, listener: (arg1: Arg) => void) => this
  removeListener: (event: Name, listener: (arg1: Arg) => void) => this
}

export type WriteCallback = (error: Error | null | undefined) => void

export interface IntermediateObjectReadable<T> extends Readable {
  read: (size?: number) => any & T
}

export type ObjectReadable<T> = {
  read: (size?: number) => T
} & EmitterAugmentation1<'data', T> &
IntermediateObjectReadable<T>

export interface IntermediateObjectWritable<T> extends Writable {
  // eslint-disable-next-line ts/no-unsafe-function-type
  _write: (chunk: any & T, encoding: string, callback: Function) => void
  write: ((chunk: any & T, cb?: WriteCallback) => boolean) & ((chunk: any & T, encoding?: any, cb?: WriteCallback) => boolean)
  setDefaultEncoding: (encoding: string) => this
  end: (() => ReturnType<Writable['end']> extends Writable ? this : void) & ((
    chunk: any & T,
    // eslint-disable-next-line ts/no-unsafe-function-type
    cb?: Function
  ) => ReturnType<Writable['end']> extends Writable ? this : void) & ((
    chunk: any & T,
    encoding?: any,
    // eslint-disable-next-line ts/no-unsafe-function-type
    cb?: Function
  ) => ReturnType<Writable['end']> extends Writable ? this : void)
}

export interface ObjectWritable<T> extends IntermediateObjectWritable<T> {
  // eslint-disable-next-line ts/no-unsafe-function-type
  _write: (chunk: T, encoding: string, callback: Function) => void
  // eslint-disable-next-line ts/no-unsafe-function-type
  write: ((chunk: T, cb?: Function) => boolean) & ((chunk: T, encoding?: any, cb?: Function) => boolean)
  setDefaultEncoding: (encoding: string) => this
  end: (() => ReturnType<Writable['end']> extends Writable ? this : void) & ((
    chunk: T,
    // eslint-disable-next-line ts/no-unsafe-function-type
    cb?: Function
  ) => ReturnType<Writable['end']> extends Writable ? this : void) & ((
    chunk: T,
    encoding?: any,
    // eslint-disable-next-line ts/no-unsafe-function-type
    cb?: Function
  ) => ReturnType<Writable['end']> extends Writable ? this : void)
}
