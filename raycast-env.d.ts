/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `number-to-stacks` command */
  export type NumberToStacks = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `number-to-stacks` command */
  export type NumberToStacks = {
  /** 144 to stacks or 2 stacks to items */
  "query": string
}
}

