export * from './cast'
export * from './take'
export * from './code'
export * from './bond'

export type IOPath = {
  inputPath: string
  outputPath: string
}

export type CallLink = (input: any) => Promise<void> | void

export type ExtractBySubKey<
  L extends { input: string; output: string; extend: any },
  T extends string,
> = L extends unknown ? (T extends L['input'] ? L : never) : never

export type Values<T> = T[keyof T]

export type Primitives = string | number | boolean | symbol

/**
 * Get all valid nested pathes of object
 */
export type AllProps<
  Obj,
  Cache extends Array<Primitives> = [],
> = Obj extends Primitives
  ? Cache
  : {
      [Prop in keyof Obj]:
        | [...Cache, Prop] // <------ it should be unionized with recursion call
        | AllProps<Obj[Prop], [...Cache, Prop]>
    }[keyof Obj]

export type Head<T extends ReadonlyArray<any>> = T extends []
  ? never
  : T extends [infer Head]
    ? Head
    : T extends [infer Head, ...infer _]
      ? Head
      : never

export type Tail<T extends ReadonlyArray<any>> = T extends []
  ? []
  : T extends [infer _]
    ? []
    : T extends [infer _, ...infer Rest]
      ? Rest
      : never

export type Last<T extends ReadonlyArray<any>> = T['length'] extends 1
  ? true
  : false

export type OmitBase<Obj, Path extends ReadonlyArray<any>> =
  Last<Path> extends true
    ? {
        [Prop in Exclude<keyof Obj, Head<Path>>]: Obj[Prop]
      }
    : {
        [Prop in keyof Obj]: OmitBase<Obj[Prop], Tail<Path>>
      }

export type OmitBy<Obj, Keys extends AllProps<Obj>> = OmitBase<
  Obj,
  Keys
>

// export type Result = OmitBy<A, ['a', 'b']> // ok

// export type Result2 = OmitBy<A, ['b']> // expected error. order should be preserved

export type Split<
  Str,
  Cache extends string[] = [],
> = Str extends `${infer Method}.${infer Rest}`
  ? Split<Rest, [...Cache, Method]>
  : Str extends `${infer Last}`
    ? [...Cache, Last]
    : never

// export type WithDots = OmitBy<A, Split<'a.b'>> // ok

// https://www.typescriptlang.org/play?#code/FAUwHgDg9gTgLgAjgTwiBAlEBnKAbANxAEkA7CAVzgDFYBhKUo+LAWyjnQF4EBvYBAggBDOAAsAygGMoaAPwAuBNjgwAlqQDmAhBspwl-QYIBmsVqKUr1WnabV4QV1Ru2CAvjqhV9huwjMYCwNlF1tjAIcQRVCbNwRPT1BIWERhbGRSKQCKLLg1RgQYHHwiMn1aGAYmEBYQdk4AOSgAExAAHh0AFQRwTlIW7EwSwhJyKkrq5jg2DhAAGmAAPgAKHT0qJS7FgEolAAUYKFY1bA6dAHkTuAAhZHbthAkIPDU4doBybzh9D6WlhAAMj4-m+vj4kUchiEojEzjiCQSOk8AP4-hkpFwjgAdHgoJoVhs4Dt-MU4BQYKQEIdjqcQNjiliiITxsTgEkUGgEABBBA8IzGYQxAURQQAI3hrn8ESkkvCxk8ETAflFxmQSlIFFYYtq0uMAC8NVqdTBFqrBAB3FXmiIUI3a3U2xUK9nATnoQ5qa5qIhDHjWVwIAA+CE1DpgwYQYqg+BAwipIYy2vwwGAAHoAFQZgQZhAAcRAaTweAQBGErxaoZwnErInEOAQUBMjbFACsQFI4Dm027UOhucWaRBsO0Lm35gg6MIpGJ0H0QAMhtyYDBhPdPd7fQCeABtAC62-8Y9bvTA-UG1PUm4bckn09nCGtqp3Q90VIA1iBkE2EMe9wo9UEEMd2xUCpxnBZL1kPcEDTNMEHaABaZCUN0RBsDEbw8ErHUEFyApSDUfUQErC03jEIoOwpbACIQKRyzwQDIwHPAhxHY8XyOCA9wnECwPvSChwPfx3B3T9v2bP9U3dBAAAk4xaB5T3PIYsGEFpGDwZBl1Xe542Qf4+X8Hp50XBB938W9SBAZh-C2ZSFwvHcNBMWo5IUvdLPc9S7IQEyz0coZnNIVyI3k9SJ1A7EXLcgB9TyIlvcKWl86zbOkvs-OEBwlNMi81I00gtJ0td2n0wyuGMhyzIsxLzIS4x7LyoKYojeKvNqxq-OqpzWoQWLItAvqsBUBrBFvEauwiDUbN1XsuQAGXSd5-JU4Z1M07SV1K8rtz8ncPkcLRxA+GDmoQABGBBb1UCh0CUExyzOVN5vQK43hudIOmPCd9lhHrVIUzaSr00gDMPCIlpUdo-vEAFztukAvJFUVONkN8EAAUTAKQ8AoNp2nEn8fu8xTYbEf5-1-Ns0e4kTHxBG1aYxonJLbKn3tuL7RxpoSJy6bK8Bh2F-hEjKuU5u4edbCcAGkvyGc6WLY6WKt-a5PrOaW5YVpZxfQEaKDwRAeEl+5uXmA7hA+CcPjFU6ATgxt3314ZsCNuAACY+XVj7zctu2Hdg+DwDQTsSN6FdYGxRsYDaCMMKwnD0AgRlaiIFLXeeV53gkVQJ3Ah9zoDLR9x9-cIeMPOI3OgADAASXg+oAWULTCWncbFG+G6t3Frrzs7edpJt4qLC8g1vxFaYTpqeVQAYQBum5CtyobgPuOrHgSJzX+YxoZtLHWMV6EAAdXIgARDg-V925-aeF4h4+YRsXtwynagd8gA
