
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Record
 * 
 */
export type Record = $Result.DefaultSelection<Prisma.$RecordPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Wish
 * 
 */
export type Wish = $Result.DefaultSelection<Prisma.$WishPayload>
/**
 * Model Gift
 * 
 */
export type Gift = $Result.DefaultSelection<Prisma.$GiftPayload>
/**
 * Model Doubt
 * 
 */
export type Doubt = $Result.DefaultSelection<Prisma.$DoubtPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.record`: Exposes CRUD operations for the **Record** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Records
    * const records = await prisma.record.findMany()
    * ```
    */
  get record(): Prisma.RecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wish`: Exposes CRUD operations for the **Wish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wishes
    * const wishes = await prisma.wish.findMany()
    * ```
    */
  get wish(): Prisma.WishDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gift`: Exposes CRUD operations for the **Gift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gifts
    * const gifts = await prisma.gift.findMany()
    * ```
    */
  get gift(): Prisma.GiftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doubt`: Exposes CRUD operations for the **Doubt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doubts
    * const doubts = await prisma.doubt.findMany()
    * ```
    */
  get doubt(): Prisma.DoubtDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Tag: 'Tag',
    Record: 'Record',
    Group: 'Group',
    Wish: 'Wish',
    Gift: 'Gift',
    Doubt: 'Doubt'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tag" | "record" | "group" | "wish" | "gift" | "doubt"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Record: {
        payload: Prisma.$RecordPayload<ExtArgs>
        fields: Prisma.RecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          findFirst: {
            args: Prisma.RecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          findMany: {
            args: Prisma.RecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[]
          }
          create: {
            args: Prisma.RecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          createMany: {
            args: Prisma.RecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[]
          }
          delete: {
            args: Prisma.RecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          update: {
            args: Prisma.RecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          deleteMany: {
            args: Prisma.RecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[]
          }
          upsert: {
            args: Prisma.RecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          aggregate: {
            args: Prisma.RecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecord>
          }
          groupBy: {
            args: Prisma.RecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecordCountArgs<ExtArgs>
            result: $Utils.Optional<RecordCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Wish: {
        payload: Prisma.$WishPayload<ExtArgs>
        fields: Prisma.WishFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WishFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WishFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          findFirst: {
            args: Prisma.WishFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WishFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          findMany: {
            args: Prisma.WishFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>[]
          }
          create: {
            args: Prisma.WishCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          createMany: {
            args: Prisma.WishCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WishCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>[]
          }
          delete: {
            args: Prisma.WishDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          update: {
            args: Prisma.WishUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          deleteMany: {
            args: Prisma.WishDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WishUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WishUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>[]
          }
          upsert: {
            args: Prisma.WishUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          aggregate: {
            args: Prisma.WishAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWish>
          }
          groupBy: {
            args: Prisma.WishGroupByArgs<ExtArgs>
            result: $Utils.Optional<WishGroupByOutputType>[]
          }
          count: {
            args: Prisma.WishCountArgs<ExtArgs>
            result: $Utils.Optional<WishCountAggregateOutputType> | number
          }
        }
      }
      Gift: {
        payload: Prisma.$GiftPayload<ExtArgs>
        fields: Prisma.GiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          findFirst: {
            args: Prisma.GiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          findMany: {
            args: Prisma.GiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>[]
          }
          create: {
            args: Prisma.GiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          createMany: {
            args: Prisma.GiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>[]
          }
          delete: {
            args: Prisma.GiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          update: {
            args: Prisma.GiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          deleteMany: {
            args: Prisma.GiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GiftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>[]
          }
          upsert: {
            args: Prisma.GiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          aggregate: {
            args: Prisma.GiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGift>
          }
          groupBy: {
            args: Prisma.GiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<GiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.GiftCountArgs<ExtArgs>
            result: $Utils.Optional<GiftCountAggregateOutputType> | number
          }
        }
      }
      Doubt: {
        payload: Prisma.$DoubtPayload<ExtArgs>
        fields: Prisma.DoubtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoubtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoubtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>
          }
          findFirst: {
            args: Prisma.DoubtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoubtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>
          }
          findMany: {
            args: Prisma.DoubtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>[]
          }
          create: {
            args: Prisma.DoubtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>
          }
          createMany: {
            args: Prisma.DoubtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoubtCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>[]
          }
          delete: {
            args: Prisma.DoubtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>
          }
          update: {
            args: Prisma.DoubtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>
          }
          deleteMany: {
            args: Prisma.DoubtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoubtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoubtUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>[]
          }
          upsert: {
            args: Prisma.DoubtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>
          }
          aggregate: {
            args: Prisma.DoubtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoubt>
          }
          groupBy: {
            args: Prisma.DoubtGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoubtGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoubtCountArgs<ExtArgs>
            result: $Utils.Optional<DoubtCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tag?: TagOmit
    record?: RecordOmit
    group?: GroupOmit
    wish?: WishOmit
    gift?: GiftOmit
    doubt?: DoubtOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tags: number
    records: number
    wishes: number
    gifts: number
    doubts: number
    groups: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | UserCountOutputTypeCountTagsArgs
    records?: boolean | UserCountOutputTypeCountRecordsArgs
    wishes?: boolean | UserCountOutputTypeCountWishesArgs
    gifts?: boolean | UserCountOutputTypeCountGiftsArgs
    doubts?: boolean | UserCountOutputTypeCountDoubtsArgs
    groups?: boolean | UserCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDoubtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoubtWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    records: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | TagCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordWhereInput
  }


  /**
   * Count Type RecordCountOutputType
   */

  export type RecordCountOutputType = {
    tags: number
  }

  export type RecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | RecordCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * RecordCountOutputType without action
   */
  export type RecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordCountOutputType
     */
    select?: RecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecordCountOutputType without action
   */
  export type RecordCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    wishes: number
    gifts: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wishes?: boolean | GroupCountOutputTypeCountWishesArgs
    gifts?: boolean | GroupCountOutputTypeCountGiftsArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountWishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountGiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    bio: string | null
    photo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    bio: string | null
    photo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    bio: number
    photo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    bio?: true
    photo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    bio?: true
    photo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    bio?: true
    photo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    password: string
    bio: string | null
    photo: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    bio?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tags?: boolean | User$tagsArgs<ExtArgs>
    records?: boolean | User$recordsArgs<ExtArgs>
    wishes?: boolean | User$wishesArgs<ExtArgs>
    gifts?: boolean | User$giftsArgs<ExtArgs>
    doubts?: boolean | User$doubtsArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    bio?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    bio?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    bio?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "bio" | "photo" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | User$tagsArgs<ExtArgs>
    records?: boolean | User$recordsArgs<ExtArgs>
    wishes?: boolean | User$wishesArgs<ExtArgs>
    gifts?: boolean | User$giftsArgs<ExtArgs>
    doubts?: boolean | User$doubtsArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tags: Prisma.$TagPayload<ExtArgs>[]
      records: Prisma.$RecordPayload<ExtArgs>[]
      wishes: Prisma.$WishPayload<ExtArgs>[]
      gifts: Prisma.$GiftPayload<ExtArgs>[]
      doubts: Prisma.$DoubtPayload<ExtArgs>[]
      groups: Prisma.$GroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
      bio: string | null
      photo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tags<T extends User$tagsArgs<ExtArgs> = {}>(args?: Subset<T, User$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    records<T extends User$recordsArgs<ExtArgs> = {}>(args?: Subset<T, User$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wishes<T extends User$wishesArgs<ExtArgs> = {}>(args?: Subset<T, User$wishesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gifts<T extends User$giftsArgs<ExtArgs> = {}>(args?: Subset<T, User$giftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doubts<T extends User$doubtsArgs<ExtArgs> = {}>(args?: Subset<T, User$doubtsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends User$groupsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly photo: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tags
   */
  export type User$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * User.records
   */
  export type User$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    where?: RecordWhereInput
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    cursor?: RecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * User.wishes
   */
  export type User$wishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    where?: WishWhereInput
    orderBy?: WishOrderByWithRelationInput | WishOrderByWithRelationInput[]
    cursor?: WishWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishScalarFieldEnum | WishScalarFieldEnum[]
  }

  /**
   * User.gifts
   */
  export type User$giftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    where?: GiftWhereInput
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    cursor?: GiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiftScalarFieldEnum | GiftScalarFieldEnum[]
  }

  /**
   * User.doubts
   */
  export type User$doubtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    where?: DoubtWhereInput
    orderBy?: DoubtOrderByWithRelationInput | DoubtOrderByWithRelationInput[]
    cursor?: DoubtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoubtScalarFieldEnum | DoubtScalarFieldEnum[]
  }

  /**
   * User.groups
   */
  export type User$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    userId: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    records?: boolean | Tag$recordsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    records?: boolean | Tag$recordsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      records: Prisma.$RecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    records<T extends Tag$recordsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly userId: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.records
   */
  export type Tag$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    where?: RecordWhereInput
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    cursor?: RecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Record
   */

  export type AggregateRecord = {
    _count: RecordCountAggregateOutputType | null
    _avg: RecordAvgAggregateOutputType | null
    _sum: RecordSumAggregateOutputType | null
    _min: RecordMinAggregateOutputType | null
    _max: RecordMaxAggregateOutputType | null
  }

  export type RecordAvgAggregateOutputType = {
    price: number | null
  }

  export type RecordSumAggregateOutputType = {
    price: number | null
  }

  export type RecordMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    notes: string | null
    buyDate: Date | null
    isIncome: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type RecordMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    notes: string | null
    buyDate: Date | null
    isIncome: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type RecordCountAggregateOutputType = {
    id: number
    name: number
    price: number
    notes: number
    buyDate: number
    isIncome: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type RecordAvgAggregateInputType = {
    price?: true
  }

  export type RecordSumAggregateInputType = {
    price?: true
  }

  export type RecordMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    notes?: true
    buyDate?: true
    isIncome?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type RecordMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    notes?: true
    buyDate?: true
    isIncome?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type RecordCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    notes?: true
    buyDate?: true
    isIncome?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type RecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Record to aggregate.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Records
    **/
    _count?: true | RecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordMaxAggregateInputType
  }

  export type GetRecordAggregateType<T extends RecordAggregateArgs> = {
        [P in keyof T & keyof AggregateRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecord[P]>
      : GetScalarType<T[P], AggregateRecord[P]>
  }




  export type RecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordWhereInput
    orderBy?: RecordOrderByWithAggregationInput | RecordOrderByWithAggregationInput[]
    by: RecordScalarFieldEnum[] | RecordScalarFieldEnum
    having?: RecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordCountAggregateInputType | true
    _avg?: RecordAvgAggregateInputType
    _sum?: RecordSumAggregateInputType
    _min?: RecordMinAggregateInputType
    _max?: RecordMaxAggregateInputType
  }

  export type RecordGroupByOutputType = {
    id: string
    name: string
    price: number | null
    notes: string | null
    buyDate: Date | null
    isIncome: boolean
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: RecordCountAggregateOutputType | null
    _avg: RecordAvgAggregateOutputType | null
    _sum: RecordSumAggregateOutputType | null
    _min: RecordMinAggregateOutputType | null
    _max: RecordMaxAggregateOutputType | null
  }

  type GetRecordGroupByPayload<T extends RecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordGroupByOutputType[P]>
            : GetScalarType<T[P], RecordGroupByOutputType[P]>
        }
      >
    >


  export type RecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    notes?: boolean
    buyDate?: boolean
    isIncome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Record$tagsArgs<ExtArgs>
    _count?: boolean | RecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["record"]>

  export type RecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    notes?: boolean
    buyDate?: boolean
    isIncome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["record"]>

  export type RecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    notes?: boolean
    buyDate?: boolean
    isIncome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["record"]>

  export type RecordSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    notes?: boolean
    buyDate?: boolean
    isIncome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type RecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "notes" | "buyDate" | "isIncome" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["record"]>
  export type RecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Record$tagsArgs<ExtArgs>
    _count?: boolean | RecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Record"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number | null
      notes: string | null
      buyDate: Date | null
      isIncome: boolean
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["record"]>
    composites: {}
  }

  type RecordGetPayload<S extends boolean | null | undefined | RecordDefaultArgs> = $Result.GetResult<Prisma.$RecordPayload, S>

  type RecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecordCountAggregateInputType | true
    }

  export interface RecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Record'], meta: { name: 'Record' } }
    /**
     * Find zero or one Record that matches the filter.
     * @param {RecordFindUniqueArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecordFindUniqueArgs>(args: SelectSubset<T, RecordFindUniqueArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Record that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecordFindUniqueOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecordFindUniqueOrThrowArgs>(args: SelectSubset<T, RecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Record that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecordFindFirstArgs>(args?: SelectSubset<T, RecordFindFirstArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Record that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecordFindFirstOrThrowArgs>(args?: SelectSubset<T, RecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Records
     * const records = await prisma.record.findMany()
     * 
     * // Get first 10 Records
     * const records = await prisma.record.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recordWithIdOnly = await prisma.record.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecordFindManyArgs>(args?: SelectSubset<T, RecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Record.
     * @param {RecordCreateArgs} args - Arguments to create a Record.
     * @example
     * // Create one Record
     * const Record = await prisma.record.create({
     *   data: {
     *     // ... data to create a Record
     *   }
     * })
     * 
     */
    create<T extends RecordCreateArgs>(args: SelectSubset<T, RecordCreateArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Records.
     * @param {RecordCreateManyArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const record = await prisma.record.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecordCreateManyArgs>(args?: SelectSubset<T, RecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Records and returns the data saved in the database.
     * @param {RecordCreateManyAndReturnArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const record = await prisma.record.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Records and only return the `id`
     * const recordWithIdOnly = await prisma.record.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecordCreateManyAndReturnArgs>(args?: SelectSubset<T, RecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Record.
     * @param {RecordDeleteArgs} args - Arguments to delete one Record.
     * @example
     * // Delete one Record
     * const Record = await prisma.record.delete({
     *   where: {
     *     // ... filter to delete one Record
     *   }
     * })
     * 
     */
    delete<T extends RecordDeleteArgs>(args: SelectSubset<T, RecordDeleteArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Record.
     * @param {RecordUpdateArgs} args - Arguments to update one Record.
     * @example
     * // Update one Record
     * const record = await prisma.record.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecordUpdateArgs>(args: SelectSubset<T, RecordUpdateArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Records.
     * @param {RecordDeleteManyArgs} args - Arguments to filter Records to delete.
     * @example
     * // Delete a few Records
     * const { count } = await prisma.record.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecordDeleteManyArgs>(args?: SelectSubset<T, RecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Records
     * const record = await prisma.record.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecordUpdateManyArgs>(args: SelectSubset<T, RecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records and returns the data updated in the database.
     * @param {RecordUpdateManyAndReturnArgs} args - Arguments to update many Records.
     * @example
     * // Update many Records
     * const record = await prisma.record.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Records and only return the `id`
     * const recordWithIdOnly = await prisma.record.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecordUpdateManyAndReturnArgs>(args: SelectSubset<T, RecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Record.
     * @param {RecordUpsertArgs} args - Arguments to update or create a Record.
     * @example
     * // Update or create a Record
     * const record = await prisma.record.upsert({
     *   create: {
     *     // ... data to create a Record
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Record we want to update
     *   }
     * })
     */
    upsert<T extends RecordUpsertArgs>(args: SelectSubset<T, RecordUpsertArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordCountArgs} args - Arguments to filter Records to count.
     * @example
     * // Count the number of Records
     * const count = await prisma.record.count({
     *   where: {
     *     // ... the filter for the Records we want to count
     *   }
     * })
    **/
    count<T extends RecordCountArgs>(
      args?: Subset<T, RecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecordAggregateArgs>(args: Subset<T, RecordAggregateArgs>): Prisma.PrismaPromise<GetRecordAggregateType<T>>

    /**
     * Group by Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordGroupByArgs['orderBy'] }
        : { orderBy?: RecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Record model
   */
  readonly fields: RecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Record.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Record$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Record$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Record model
   */
  interface RecordFieldRefs {
    readonly id: FieldRef<"Record", 'String'>
    readonly name: FieldRef<"Record", 'String'>
    readonly price: FieldRef<"Record", 'Float'>
    readonly notes: FieldRef<"Record", 'String'>
    readonly buyDate: FieldRef<"Record", 'DateTime'>
    readonly isIncome: FieldRef<"Record", 'Boolean'>
    readonly createdAt: FieldRef<"Record", 'DateTime'>
    readonly updatedAt: FieldRef<"Record", 'DateTime'>
    readonly userId: FieldRef<"Record", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Record findUnique
   */
  export type RecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record findUniqueOrThrow
   */
  export type RecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record findFirst
   */
  export type RecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record findFirstOrThrow
   */
  export type RecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record findMany
   */
  export type RecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record create
   */
  export type RecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The data needed to create a Record.
     */
    data: XOR<RecordCreateInput, RecordUncheckedCreateInput>
  }

  /**
   * Record createMany
   */
  export type RecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Records.
     */
    data: RecordCreateManyInput | RecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Record createManyAndReturn
   */
  export type RecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * The data used to create many Records.
     */
    data: RecordCreateManyInput | RecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Record update
   */
  export type RecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The data needed to update a Record.
     */
    data: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>
    /**
     * Choose, which Record to update.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record updateMany
   */
  export type RecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Records.
     */
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordWhereInput
    /**
     * Limit how many Records to update.
     */
    limit?: number
  }

  /**
   * Record updateManyAndReturn
   */
  export type RecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * The data used to update Records.
     */
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordWhereInput
    /**
     * Limit how many Records to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Record upsert
   */
  export type RecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The filter to search for the Record to update in case it exists.
     */
    where: RecordWhereUniqueInput
    /**
     * In case the Record found by the `where` argument doesn't exist, create a new Record with this data.
     */
    create: XOR<RecordCreateInput, RecordUncheckedCreateInput>
    /**
     * In case the Record was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>
  }

  /**
   * Record delete
   */
  export type RecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter which Record to delete.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record deleteMany
   */
  export type RecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Records to delete
     */
    where?: RecordWhereInput
    /**
     * Limit how many Records to delete.
     */
    limit?: number
  }

  /**
   * Record.tags
   */
  export type Record$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Record without action
   */
  export type RecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    order: number | null
  }

  export type GroupSumAggregateOutputType = {
    order: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    order: number | null
    userId: string | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    order: number | null
    userId: string | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    type: number
    order: number
    userId: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    order?: true
  }

  export type GroupSumAggregateInputType = {
    order?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    order?: true
    userId?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    order?: true
    userId?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    order?: true
    userId?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    type: string
    order: number
    userId: string
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    order?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    wishes?: boolean | Group$wishesArgs<ExtArgs>
    gifts?: boolean | Group$giftsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    order?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    order?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    order?: boolean
    userId?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "order" | "userId", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    wishes?: boolean | Group$wishesArgs<ExtArgs>
    gifts?: boolean | Group$giftsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      wishes: Prisma.$WishPayload<ExtArgs>[]
      gifts: Prisma.$GiftPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      order: number
      userId: string
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    wishes<T extends Group$wishesArgs<ExtArgs> = {}>(args?: Subset<T, Group$wishesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gifts<T extends Group$giftsArgs<ExtArgs> = {}>(args?: Subset<T, Group$giftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly type: FieldRef<"Group", 'String'>
    readonly order: FieldRef<"Group", 'Int'>
    readonly userId: FieldRef<"Group", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.wishes
   */
  export type Group$wishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    where?: WishWhereInput
    orderBy?: WishOrderByWithRelationInput | WishOrderByWithRelationInput[]
    cursor?: WishWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishScalarFieldEnum | WishScalarFieldEnum[]
  }

  /**
   * Group.gifts
   */
  export type Group$giftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    where?: GiftWhereInput
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    cursor?: GiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiftScalarFieldEnum | GiftScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Wish
   */

  export type AggregateWish = {
    _count: WishCountAggregateOutputType | null
    _avg: WishAvgAggregateOutputType | null
    _sum: WishSumAggregateOutputType | null
    _min: WishMinAggregateOutputType | null
    _max: WishMaxAggregateOutputType | null
  }

  export type WishAvgAggregateOutputType = {
    price: number | null
    order: number | null
  }

  export type WishSumAggregateOutputType = {
    price: number | null
    order: number | null
  }

  export type WishMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    notes: string | null
    link: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    groupId: string | null
  }

  export type WishMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    notes: string | null
    link: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    groupId: string | null
  }

  export type WishCountAggregateOutputType = {
    id: number
    name: number
    price: number
    notes: number
    link: number
    order: number
    createdAt: number
    updatedAt: number
    userId: number
    groupId: number
    _all: number
  }


  export type WishAvgAggregateInputType = {
    price?: true
    order?: true
  }

  export type WishSumAggregateInputType = {
    price?: true
    order?: true
  }

  export type WishMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    notes?: true
    link?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    groupId?: true
  }

  export type WishMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    notes?: true
    link?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    groupId?: true
  }

  export type WishCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    notes?: true
    link?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    groupId?: true
    _all?: true
  }

  export type WishAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wish to aggregate.
     */
    where?: WishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishes to fetch.
     */
    orderBy?: WishOrderByWithRelationInput | WishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wishes
    **/
    _count?: true | WishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WishAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WishSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WishMaxAggregateInputType
  }

  export type GetWishAggregateType<T extends WishAggregateArgs> = {
        [P in keyof T & keyof AggregateWish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWish[P]>
      : GetScalarType<T[P], AggregateWish[P]>
  }




  export type WishGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishWhereInput
    orderBy?: WishOrderByWithAggregationInput | WishOrderByWithAggregationInput[]
    by: WishScalarFieldEnum[] | WishScalarFieldEnum
    having?: WishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WishCountAggregateInputType | true
    _avg?: WishAvgAggregateInputType
    _sum?: WishSumAggregateInputType
    _min?: WishMinAggregateInputType
    _max?: WishMaxAggregateInputType
  }

  export type WishGroupByOutputType = {
    id: string
    name: string
    price: number | null
    notes: string | null
    link: string | null
    order: number
    createdAt: Date
    updatedAt: Date
    userId: string
    groupId: string | null
    _count: WishCountAggregateOutputType | null
    _avg: WishAvgAggregateOutputType | null
    _sum: WishSumAggregateOutputType | null
    _min: WishMinAggregateOutputType | null
    _max: WishMaxAggregateOutputType | null
  }

  type GetWishGroupByPayload<T extends WishGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WishGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WishGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WishGroupByOutputType[P]>
            : GetScalarType<T[P], WishGroupByOutputType[P]>
        }
      >
    >


  export type WishSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    notes?: boolean
    link?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    groupId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Wish$groupArgs<ExtArgs>
  }, ExtArgs["result"]["wish"]>

  export type WishSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    notes?: boolean
    link?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    groupId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Wish$groupArgs<ExtArgs>
  }, ExtArgs["result"]["wish"]>

  export type WishSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    notes?: boolean
    link?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    groupId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Wish$groupArgs<ExtArgs>
  }, ExtArgs["result"]["wish"]>

  export type WishSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    notes?: boolean
    link?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    groupId?: boolean
  }

  export type WishOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "notes" | "link" | "order" | "createdAt" | "updatedAt" | "userId" | "groupId", ExtArgs["result"]["wish"]>
  export type WishInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Wish$groupArgs<ExtArgs>
  }
  export type WishIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Wish$groupArgs<ExtArgs>
  }
  export type WishIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Wish$groupArgs<ExtArgs>
  }

  export type $WishPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wish"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number | null
      notes: string | null
      link: string | null
      order: number
      createdAt: Date
      updatedAt: Date
      userId: string
      groupId: string | null
    }, ExtArgs["result"]["wish"]>
    composites: {}
  }

  type WishGetPayload<S extends boolean | null | undefined | WishDefaultArgs> = $Result.GetResult<Prisma.$WishPayload, S>

  type WishCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WishFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WishCountAggregateInputType | true
    }

  export interface WishDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wish'], meta: { name: 'Wish' } }
    /**
     * Find zero or one Wish that matches the filter.
     * @param {WishFindUniqueArgs} args - Arguments to find a Wish
     * @example
     * // Get one Wish
     * const wish = await prisma.wish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WishFindUniqueArgs>(args: SelectSubset<T, WishFindUniqueArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wish that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WishFindUniqueOrThrowArgs} args - Arguments to find a Wish
     * @example
     * // Get one Wish
     * const wish = await prisma.wish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WishFindUniqueOrThrowArgs>(args: SelectSubset<T, WishFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishFindFirstArgs} args - Arguments to find a Wish
     * @example
     * // Get one Wish
     * const wish = await prisma.wish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WishFindFirstArgs>(args?: SelectSubset<T, WishFindFirstArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wish that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishFindFirstOrThrowArgs} args - Arguments to find a Wish
     * @example
     * // Get one Wish
     * const wish = await prisma.wish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WishFindFirstOrThrowArgs>(args?: SelectSubset<T, WishFindFirstOrThrowArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wishes
     * const wishes = await prisma.wish.findMany()
     * 
     * // Get first 10 Wishes
     * const wishes = await prisma.wish.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wishWithIdOnly = await prisma.wish.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WishFindManyArgs>(args?: SelectSubset<T, WishFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wish.
     * @param {WishCreateArgs} args - Arguments to create a Wish.
     * @example
     * // Create one Wish
     * const Wish = await prisma.wish.create({
     *   data: {
     *     // ... data to create a Wish
     *   }
     * })
     * 
     */
    create<T extends WishCreateArgs>(args: SelectSubset<T, WishCreateArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wishes.
     * @param {WishCreateManyArgs} args - Arguments to create many Wishes.
     * @example
     * // Create many Wishes
     * const wish = await prisma.wish.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WishCreateManyArgs>(args?: SelectSubset<T, WishCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wishes and returns the data saved in the database.
     * @param {WishCreateManyAndReturnArgs} args - Arguments to create many Wishes.
     * @example
     * // Create many Wishes
     * const wish = await prisma.wish.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wishes and only return the `id`
     * const wishWithIdOnly = await prisma.wish.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WishCreateManyAndReturnArgs>(args?: SelectSubset<T, WishCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wish.
     * @param {WishDeleteArgs} args - Arguments to delete one Wish.
     * @example
     * // Delete one Wish
     * const Wish = await prisma.wish.delete({
     *   where: {
     *     // ... filter to delete one Wish
     *   }
     * })
     * 
     */
    delete<T extends WishDeleteArgs>(args: SelectSubset<T, WishDeleteArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wish.
     * @param {WishUpdateArgs} args - Arguments to update one Wish.
     * @example
     * // Update one Wish
     * const wish = await prisma.wish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WishUpdateArgs>(args: SelectSubset<T, WishUpdateArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wishes.
     * @param {WishDeleteManyArgs} args - Arguments to filter Wishes to delete.
     * @example
     * // Delete a few Wishes
     * const { count } = await prisma.wish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WishDeleteManyArgs>(args?: SelectSubset<T, WishDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wishes
     * const wish = await prisma.wish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WishUpdateManyArgs>(args: SelectSubset<T, WishUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wishes and returns the data updated in the database.
     * @param {WishUpdateManyAndReturnArgs} args - Arguments to update many Wishes.
     * @example
     * // Update many Wishes
     * const wish = await prisma.wish.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wishes and only return the `id`
     * const wishWithIdOnly = await prisma.wish.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WishUpdateManyAndReturnArgs>(args: SelectSubset<T, WishUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wish.
     * @param {WishUpsertArgs} args - Arguments to update or create a Wish.
     * @example
     * // Update or create a Wish
     * const wish = await prisma.wish.upsert({
     *   create: {
     *     // ... data to create a Wish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wish we want to update
     *   }
     * })
     */
    upsert<T extends WishUpsertArgs>(args: SelectSubset<T, WishUpsertArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishCountArgs} args - Arguments to filter Wishes to count.
     * @example
     * // Count the number of Wishes
     * const count = await prisma.wish.count({
     *   where: {
     *     // ... the filter for the Wishes we want to count
     *   }
     * })
    **/
    count<T extends WishCountArgs>(
      args?: Subset<T, WishCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WishAggregateArgs>(args: Subset<T, WishAggregateArgs>): Prisma.PrismaPromise<GetWishAggregateType<T>>

    /**
     * Group by Wish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WishGroupByArgs['orderBy'] }
        : { orderBy?: WishGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wish model
   */
  readonly fields: WishFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WishClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends Wish$groupArgs<ExtArgs> = {}>(args?: Subset<T, Wish$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Wish model
   */
  interface WishFieldRefs {
    readonly id: FieldRef<"Wish", 'String'>
    readonly name: FieldRef<"Wish", 'String'>
    readonly price: FieldRef<"Wish", 'Float'>
    readonly notes: FieldRef<"Wish", 'String'>
    readonly link: FieldRef<"Wish", 'String'>
    readonly order: FieldRef<"Wish", 'Int'>
    readonly createdAt: FieldRef<"Wish", 'DateTime'>
    readonly updatedAt: FieldRef<"Wish", 'DateTime'>
    readonly userId: FieldRef<"Wish", 'String'>
    readonly groupId: FieldRef<"Wish", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Wish findUnique
   */
  export type WishFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter, which Wish to fetch.
     */
    where: WishWhereUniqueInput
  }

  /**
   * Wish findUniqueOrThrow
   */
  export type WishFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter, which Wish to fetch.
     */
    where: WishWhereUniqueInput
  }

  /**
   * Wish findFirst
   */
  export type WishFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter, which Wish to fetch.
     */
    where?: WishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishes to fetch.
     */
    orderBy?: WishOrderByWithRelationInput | WishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wishes.
     */
    cursor?: WishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wishes.
     */
    distinct?: WishScalarFieldEnum | WishScalarFieldEnum[]
  }

  /**
   * Wish findFirstOrThrow
   */
  export type WishFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter, which Wish to fetch.
     */
    where?: WishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishes to fetch.
     */
    orderBy?: WishOrderByWithRelationInput | WishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wishes.
     */
    cursor?: WishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wishes.
     */
    distinct?: WishScalarFieldEnum | WishScalarFieldEnum[]
  }

  /**
   * Wish findMany
   */
  export type WishFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter, which Wishes to fetch.
     */
    where?: WishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishes to fetch.
     */
    orderBy?: WishOrderByWithRelationInput | WishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wishes.
     */
    cursor?: WishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishes.
     */
    skip?: number
    distinct?: WishScalarFieldEnum | WishScalarFieldEnum[]
  }

  /**
   * Wish create
   */
  export type WishCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * The data needed to create a Wish.
     */
    data: XOR<WishCreateInput, WishUncheckedCreateInput>
  }

  /**
   * Wish createMany
   */
  export type WishCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wishes.
     */
    data: WishCreateManyInput | WishCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wish createManyAndReturn
   */
  export type WishCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * The data used to create many Wishes.
     */
    data: WishCreateManyInput | WishCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wish update
   */
  export type WishUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * The data needed to update a Wish.
     */
    data: XOR<WishUpdateInput, WishUncheckedUpdateInput>
    /**
     * Choose, which Wish to update.
     */
    where: WishWhereUniqueInput
  }

  /**
   * Wish updateMany
   */
  export type WishUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wishes.
     */
    data: XOR<WishUpdateManyMutationInput, WishUncheckedUpdateManyInput>
    /**
     * Filter which Wishes to update
     */
    where?: WishWhereInput
    /**
     * Limit how many Wishes to update.
     */
    limit?: number
  }

  /**
   * Wish updateManyAndReturn
   */
  export type WishUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * The data used to update Wishes.
     */
    data: XOR<WishUpdateManyMutationInput, WishUncheckedUpdateManyInput>
    /**
     * Filter which Wishes to update
     */
    where?: WishWhereInput
    /**
     * Limit how many Wishes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wish upsert
   */
  export type WishUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * The filter to search for the Wish to update in case it exists.
     */
    where: WishWhereUniqueInput
    /**
     * In case the Wish found by the `where` argument doesn't exist, create a new Wish with this data.
     */
    create: XOR<WishCreateInput, WishUncheckedCreateInput>
    /**
     * In case the Wish was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WishUpdateInput, WishUncheckedUpdateInput>
  }

  /**
   * Wish delete
   */
  export type WishDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter which Wish to delete.
     */
    where: WishWhereUniqueInput
  }

  /**
   * Wish deleteMany
   */
  export type WishDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wishes to delete
     */
    where?: WishWhereInput
    /**
     * Limit how many Wishes to delete.
     */
    limit?: number
  }

  /**
   * Wish.group
   */
  export type Wish$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * Wish without action
   */
  export type WishDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
  }


  /**
   * Model Gift
   */

  export type AggregateGift = {
    _count: GiftCountAggregateOutputType | null
    _avg: GiftAvgAggregateOutputType | null
    _sum: GiftSumAggregateOutputType | null
    _min: GiftMinAggregateOutputType | null
    _max: GiftMaxAggregateOutputType | null
  }

  export type GiftAvgAggregateOutputType = {
    price: number | null
    order: number | null
  }

  export type GiftSumAggregateOutputType = {
    price: number | null
    order: number | null
  }

  export type GiftMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    toWho: string | null
    notes: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    groupId: string | null
  }

  export type GiftMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    toWho: string | null
    notes: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    groupId: string | null
  }

  export type GiftCountAggregateOutputType = {
    id: number
    name: number
    price: number
    toWho: number
    notes: number
    order: number
    createdAt: number
    updatedAt: number
    userId: number
    groupId: number
    _all: number
  }


  export type GiftAvgAggregateInputType = {
    price?: true
    order?: true
  }

  export type GiftSumAggregateInputType = {
    price?: true
    order?: true
  }

  export type GiftMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    toWho?: true
    notes?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    groupId?: true
  }

  export type GiftMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    toWho?: true
    notes?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    groupId?: true
  }

  export type GiftCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    toWho?: true
    notes?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    groupId?: true
    _all?: true
  }

  export type GiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gift to aggregate.
     */
    where?: GiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gifts to fetch.
     */
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gifts
    **/
    _count?: true | GiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GiftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GiftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GiftMaxAggregateInputType
  }

  export type GetGiftAggregateType<T extends GiftAggregateArgs> = {
        [P in keyof T & keyof AggregateGift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGift[P]>
      : GetScalarType<T[P], AggregateGift[P]>
  }




  export type GiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftWhereInput
    orderBy?: GiftOrderByWithAggregationInput | GiftOrderByWithAggregationInput[]
    by: GiftScalarFieldEnum[] | GiftScalarFieldEnum
    having?: GiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GiftCountAggregateInputType | true
    _avg?: GiftAvgAggregateInputType
    _sum?: GiftSumAggregateInputType
    _min?: GiftMinAggregateInputType
    _max?: GiftMaxAggregateInputType
  }

  export type GiftGroupByOutputType = {
    id: string
    name: string
    price: number | null
    toWho: string | null
    notes: string | null
    order: number
    createdAt: Date
    updatedAt: Date
    userId: string
    groupId: string | null
    _count: GiftCountAggregateOutputType | null
    _avg: GiftAvgAggregateOutputType | null
    _sum: GiftSumAggregateOutputType | null
    _min: GiftMinAggregateOutputType | null
    _max: GiftMaxAggregateOutputType | null
  }

  type GetGiftGroupByPayload<T extends GiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GiftGroupByOutputType[P]>
            : GetScalarType<T[P], GiftGroupByOutputType[P]>
        }
      >
    >


  export type GiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    toWho?: boolean
    notes?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    groupId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Gift$groupArgs<ExtArgs>
  }, ExtArgs["result"]["gift"]>

  export type GiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    toWho?: boolean
    notes?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    groupId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Gift$groupArgs<ExtArgs>
  }, ExtArgs["result"]["gift"]>

  export type GiftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    toWho?: boolean
    notes?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    groupId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Gift$groupArgs<ExtArgs>
  }, ExtArgs["result"]["gift"]>

  export type GiftSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    toWho?: boolean
    notes?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    groupId?: boolean
  }

  export type GiftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "toWho" | "notes" | "order" | "createdAt" | "updatedAt" | "userId" | "groupId", ExtArgs["result"]["gift"]>
  export type GiftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Gift$groupArgs<ExtArgs>
  }
  export type GiftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Gift$groupArgs<ExtArgs>
  }
  export type GiftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Gift$groupArgs<ExtArgs>
  }

  export type $GiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gift"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number | null
      toWho: string | null
      notes: string | null
      order: number
      createdAt: Date
      updatedAt: Date
      userId: string
      groupId: string | null
    }, ExtArgs["result"]["gift"]>
    composites: {}
  }

  type GiftGetPayload<S extends boolean | null | undefined | GiftDefaultArgs> = $Result.GetResult<Prisma.$GiftPayload, S>

  type GiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GiftCountAggregateInputType | true
    }

  export interface GiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gift'], meta: { name: 'Gift' } }
    /**
     * Find zero or one Gift that matches the filter.
     * @param {GiftFindUniqueArgs} args - Arguments to find a Gift
     * @example
     * // Get one Gift
     * const gift = await prisma.gift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GiftFindUniqueArgs>(args: SelectSubset<T, GiftFindUniqueArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gift that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GiftFindUniqueOrThrowArgs} args - Arguments to find a Gift
     * @example
     * // Get one Gift
     * const gift = await prisma.gift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GiftFindUniqueOrThrowArgs>(args: SelectSubset<T, GiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftFindFirstArgs} args - Arguments to find a Gift
     * @example
     * // Get one Gift
     * const gift = await prisma.gift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GiftFindFirstArgs>(args?: SelectSubset<T, GiftFindFirstArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftFindFirstOrThrowArgs} args - Arguments to find a Gift
     * @example
     * // Get one Gift
     * const gift = await prisma.gift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GiftFindFirstOrThrowArgs>(args?: SelectSubset<T, GiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gifts
     * const gifts = await prisma.gift.findMany()
     * 
     * // Get first 10 Gifts
     * const gifts = await prisma.gift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const giftWithIdOnly = await prisma.gift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GiftFindManyArgs>(args?: SelectSubset<T, GiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gift.
     * @param {GiftCreateArgs} args - Arguments to create a Gift.
     * @example
     * // Create one Gift
     * const Gift = await prisma.gift.create({
     *   data: {
     *     // ... data to create a Gift
     *   }
     * })
     * 
     */
    create<T extends GiftCreateArgs>(args: SelectSubset<T, GiftCreateArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gifts.
     * @param {GiftCreateManyArgs} args - Arguments to create many Gifts.
     * @example
     * // Create many Gifts
     * const gift = await prisma.gift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GiftCreateManyArgs>(args?: SelectSubset<T, GiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gifts and returns the data saved in the database.
     * @param {GiftCreateManyAndReturnArgs} args - Arguments to create many Gifts.
     * @example
     * // Create many Gifts
     * const gift = await prisma.gift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gifts and only return the `id`
     * const giftWithIdOnly = await prisma.gift.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GiftCreateManyAndReturnArgs>(args?: SelectSubset<T, GiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gift.
     * @param {GiftDeleteArgs} args - Arguments to delete one Gift.
     * @example
     * // Delete one Gift
     * const Gift = await prisma.gift.delete({
     *   where: {
     *     // ... filter to delete one Gift
     *   }
     * })
     * 
     */
    delete<T extends GiftDeleteArgs>(args: SelectSubset<T, GiftDeleteArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gift.
     * @param {GiftUpdateArgs} args - Arguments to update one Gift.
     * @example
     * // Update one Gift
     * const gift = await prisma.gift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GiftUpdateArgs>(args: SelectSubset<T, GiftUpdateArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gifts.
     * @param {GiftDeleteManyArgs} args - Arguments to filter Gifts to delete.
     * @example
     * // Delete a few Gifts
     * const { count } = await prisma.gift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GiftDeleteManyArgs>(args?: SelectSubset<T, GiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gifts
     * const gift = await prisma.gift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GiftUpdateManyArgs>(args: SelectSubset<T, GiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gifts and returns the data updated in the database.
     * @param {GiftUpdateManyAndReturnArgs} args - Arguments to update many Gifts.
     * @example
     * // Update many Gifts
     * const gift = await prisma.gift.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gifts and only return the `id`
     * const giftWithIdOnly = await prisma.gift.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GiftUpdateManyAndReturnArgs>(args: SelectSubset<T, GiftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gift.
     * @param {GiftUpsertArgs} args - Arguments to update or create a Gift.
     * @example
     * // Update or create a Gift
     * const gift = await prisma.gift.upsert({
     *   create: {
     *     // ... data to create a Gift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gift we want to update
     *   }
     * })
     */
    upsert<T extends GiftUpsertArgs>(args: SelectSubset<T, GiftUpsertArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftCountArgs} args - Arguments to filter Gifts to count.
     * @example
     * // Count the number of Gifts
     * const count = await prisma.gift.count({
     *   where: {
     *     // ... the filter for the Gifts we want to count
     *   }
     * })
    **/
    count<T extends GiftCountArgs>(
      args?: Subset<T, GiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GiftAggregateArgs>(args: Subset<T, GiftAggregateArgs>): Prisma.PrismaPromise<GetGiftAggregateType<T>>

    /**
     * Group by Gift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GiftGroupByArgs['orderBy'] }
        : { orderBy?: GiftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gift model
   */
  readonly fields: GiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends Gift$groupArgs<ExtArgs> = {}>(args?: Subset<T, Gift$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gift model
   */
  interface GiftFieldRefs {
    readonly id: FieldRef<"Gift", 'String'>
    readonly name: FieldRef<"Gift", 'String'>
    readonly price: FieldRef<"Gift", 'Float'>
    readonly toWho: FieldRef<"Gift", 'String'>
    readonly notes: FieldRef<"Gift", 'String'>
    readonly order: FieldRef<"Gift", 'Int'>
    readonly createdAt: FieldRef<"Gift", 'DateTime'>
    readonly updatedAt: FieldRef<"Gift", 'DateTime'>
    readonly userId: FieldRef<"Gift", 'String'>
    readonly groupId: FieldRef<"Gift", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Gift findUnique
   */
  export type GiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter, which Gift to fetch.
     */
    where: GiftWhereUniqueInput
  }

  /**
   * Gift findUniqueOrThrow
   */
  export type GiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter, which Gift to fetch.
     */
    where: GiftWhereUniqueInput
  }

  /**
   * Gift findFirst
   */
  export type GiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter, which Gift to fetch.
     */
    where?: GiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gifts to fetch.
     */
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gifts.
     */
    cursor?: GiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gifts.
     */
    distinct?: GiftScalarFieldEnum | GiftScalarFieldEnum[]
  }

  /**
   * Gift findFirstOrThrow
   */
  export type GiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter, which Gift to fetch.
     */
    where?: GiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gifts to fetch.
     */
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gifts.
     */
    cursor?: GiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gifts.
     */
    distinct?: GiftScalarFieldEnum | GiftScalarFieldEnum[]
  }

  /**
   * Gift findMany
   */
  export type GiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter, which Gifts to fetch.
     */
    where?: GiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gifts to fetch.
     */
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gifts.
     */
    cursor?: GiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gifts.
     */
    skip?: number
    distinct?: GiftScalarFieldEnum | GiftScalarFieldEnum[]
  }

  /**
   * Gift create
   */
  export type GiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * The data needed to create a Gift.
     */
    data: XOR<GiftCreateInput, GiftUncheckedCreateInput>
  }

  /**
   * Gift createMany
   */
  export type GiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gifts.
     */
    data: GiftCreateManyInput | GiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gift createManyAndReturn
   */
  export type GiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * The data used to create many Gifts.
     */
    data: GiftCreateManyInput | GiftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gift update
   */
  export type GiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * The data needed to update a Gift.
     */
    data: XOR<GiftUpdateInput, GiftUncheckedUpdateInput>
    /**
     * Choose, which Gift to update.
     */
    where: GiftWhereUniqueInput
  }

  /**
   * Gift updateMany
   */
  export type GiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gifts.
     */
    data: XOR<GiftUpdateManyMutationInput, GiftUncheckedUpdateManyInput>
    /**
     * Filter which Gifts to update
     */
    where?: GiftWhereInput
    /**
     * Limit how many Gifts to update.
     */
    limit?: number
  }

  /**
   * Gift updateManyAndReturn
   */
  export type GiftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * The data used to update Gifts.
     */
    data: XOR<GiftUpdateManyMutationInput, GiftUncheckedUpdateManyInput>
    /**
     * Filter which Gifts to update
     */
    where?: GiftWhereInput
    /**
     * Limit how many Gifts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gift upsert
   */
  export type GiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * The filter to search for the Gift to update in case it exists.
     */
    where: GiftWhereUniqueInput
    /**
     * In case the Gift found by the `where` argument doesn't exist, create a new Gift with this data.
     */
    create: XOR<GiftCreateInput, GiftUncheckedCreateInput>
    /**
     * In case the Gift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GiftUpdateInput, GiftUncheckedUpdateInput>
  }

  /**
   * Gift delete
   */
  export type GiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter which Gift to delete.
     */
    where: GiftWhereUniqueInput
  }

  /**
   * Gift deleteMany
   */
  export type GiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gifts to delete
     */
    where?: GiftWhereInput
    /**
     * Limit how many Gifts to delete.
     */
    limit?: number
  }

  /**
   * Gift.group
   */
  export type Gift$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * Gift without action
   */
  export type GiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
  }


  /**
   * Model Doubt
   */

  export type AggregateDoubt = {
    _count: DoubtCountAggregateOutputType | null
    _avg: DoubtAvgAggregateOutputType | null
    _sum: DoubtSumAggregateOutputType | null
    _min: DoubtMinAggregateOutputType | null
    _max: DoubtMaxAggregateOutputType | null
  }

  export type DoubtAvgAggregateOutputType = {
    amount: number | null
  }

  export type DoubtSumAggregateOutputType = {
    amount: number | null
  }

  export type DoubtMinAggregateOutputType = {
    id: string | null
    toWho: string | null
    doubt: boolean | null
    amount: number | null
    wasPay: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type DoubtMaxAggregateOutputType = {
    id: string | null
    toWho: string | null
    doubt: boolean | null
    amount: number | null
    wasPay: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type DoubtCountAggregateOutputType = {
    id: number
    toWho: number
    doubt: number
    amount: number
    wasPay: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type DoubtAvgAggregateInputType = {
    amount?: true
  }

  export type DoubtSumAggregateInputType = {
    amount?: true
  }

  export type DoubtMinAggregateInputType = {
    id?: true
    toWho?: true
    doubt?: true
    amount?: true
    wasPay?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type DoubtMaxAggregateInputType = {
    id?: true
    toWho?: true
    doubt?: true
    amount?: true
    wasPay?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type DoubtCountAggregateInputType = {
    id?: true
    toWho?: true
    doubt?: true
    amount?: true
    wasPay?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type DoubtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doubt to aggregate.
     */
    where?: DoubtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doubts to fetch.
     */
    orderBy?: DoubtOrderByWithRelationInput | DoubtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoubtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doubts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doubts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doubts
    **/
    _count?: true | DoubtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoubtAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoubtSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoubtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoubtMaxAggregateInputType
  }

  export type GetDoubtAggregateType<T extends DoubtAggregateArgs> = {
        [P in keyof T & keyof AggregateDoubt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoubt[P]>
      : GetScalarType<T[P], AggregateDoubt[P]>
  }




  export type DoubtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoubtWhereInput
    orderBy?: DoubtOrderByWithAggregationInput | DoubtOrderByWithAggregationInput[]
    by: DoubtScalarFieldEnum[] | DoubtScalarFieldEnum
    having?: DoubtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoubtCountAggregateInputType | true
    _avg?: DoubtAvgAggregateInputType
    _sum?: DoubtSumAggregateInputType
    _min?: DoubtMinAggregateInputType
    _max?: DoubtMaxAggregateInputType
  }

  export type DoubtGroupByOutputType = {
    id: string
    toWho: string
    doubt: boolean
    amount: number
    wasPay: boolean
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: DoubtCountAggregateOutputType | null
    _avg: DoubtAvgAggregateOutputType | null
    _sum: DoubtSumAggregateOutputType | null
    _min: DoubtMinAggregateOutputType | null
    _max: DoubtMaxAggregateOutputType | null
  }

  type GetDoubtGroupByPayload<T extends DoubtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoubtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoubtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoubtGroupByOutputType[P]>
            : GetScalarType<T[P], DoubtGroupByOutputType[P]>
        }
      >
    >


  export type DoubtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toWho?: boolean
    doubt?: boolean
    amount?: boolean
    wasPay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doubt"]>

  export type DoubtSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toWho?: boolean
    doubt?: boolean
    amount?: boolean
    wasPay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doubt"]>

  export type DoubtSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toWho?: boolean
    doubt?: boolean
    amount?: boolean
    wasPay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doubt"]>

  export type DoubtSelectScalar = {
    id?: boolean
    toWho?: boolean
    doubt?: boolean
    amount?: boolean
    wasPay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type DoubtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "toWho" | "doubt" | "amount" | "wasPay" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["doubt"]>
  export type DoubtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoubtIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoubtIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DoubtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doubt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      toWho: string
      doubt: boolean
      amount: number
      wasPay: boolean
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["doubt"]>
    composites: {}
  }

  type DoubtGetPayload<S extends boolean | null | undefined | DoubtDefaultArgs> = $Result.GetResult<Prisma.$DoubtPayload, S>

  type DoubtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoubtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoubtCountAggregateInputType | true
    }

  export interface DoubtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doubt'], meta: { name: 'Doubt' } }
    /**
     * Find zero or one Doubt that matches the filter.
     * @param {DoubtFindUniqueArgs} args - Arguments to find a Doubt
     * @example
     * // Get one Doubt
     * const doubt = await prisma.doubt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoubtFindUniqueArgs>(args: SelectSubset<T, DoubtFindUniqueArgs<ExtArgs>>): Prisma__DoubtClient<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doubt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoubtFindUniqueOrThrowArgs} args - Arguments to find a Doubt
     * @example
     * // Get one Doubt
     * const doubt = await prisma.doubt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoubtFindUniqueOrThrowArgs>(args: SelectSubset<T, DoubtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoubtClient<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doubt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtFindFirstArgs} args - Arguments to find a Doubt
     * @example
     * // Get one Doubt
     * const doubt = await prisma.doubt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoubtFindFirstArgs>(args?: SelectSubset<T, DoubtFindFirstArgs<ExtArgs>>): Prisma__DoubtClient<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doubt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtFindFirstOrThrowArgs} args - Arguments to find a Doubt
     * @example
     * // Get one Doubt
     * const doubt = await prisma.doubt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoubtFindFirstOrThrowArgs>(args?: SelectSubset<T, DoubtFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoubtClient<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doubts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doubts
     * const doubts = await prisma.doubt.findMany()
     * 
     * // Get first 10 Doubts
     * const doubts = await prisma.doubt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doubtWithIdOnly = await prisma.doubt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoubtFindManyArgs>(args?: SelectSubset<T, DoubtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doubt.
     * @param {DoubtCreateArgs} args - Arguments to create a Doubt.
     * @example
     * // Create one Doubt
     * const Doubt = await prisma.doubt.create({
     *   data: {
     *     // ... data to create a Doubt
     *   }
     * })
     * 
     */
    create<T extends DoubtCreateArgs>(args: SelectSubset<T, DoubtCreateArgs<ExtArgs>>): Prisma__DoubtClient<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doubts.
     * @param {DoubtCreateManyArgs} args - Arguments to create many Doubts.
     * @example
     * // Create many Doubts
     * const doubt = await prisma.doubt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoubtCreateManyArgs>(args?: SelectSubset<T, DoubtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doubts and returns the data saved in the database.
     * @param {DoubtCreateManyAndReturnArgs} args - Arguments to create many Doubts.
     * @example
     * // Create many Doubts
     * const doubt = await prisma.doubt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doubts and only return the `id`
     * const doubtWithIdOnly = await prisma.doubt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoubtCreateManyAndReturnArgs>(args?: SelectSubset<T, DoubtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doubt.
     * @param {DoubtDeleteArgs} args - Arguments to delete one Doubt.
     * @example
     * // Delete one Doubt
     * const Doubt = await prisma.doubt.delete({
     *   where: {
     *     // ... filter to delete one Doubt
     *   }
     * })
     * 
     */
    delete<T extends DoubtDeleteArgs>(args: SelectSubset<T, DoubtDeleteArgs<ExtArgs>>): Prisma__DoubtClient<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doubt.
     * @param {DoubtUpdateArgs} args - Arguments to update one Doubt.
     * @example
     * // Update one Doubt
     * const doubt = await prisma.doubt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoubtUpdateArgs>(args: SelectSubset<T, DoubtUpdateArgs<ExtArgs>>): Prisma__DoubtClient<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doubts.
     * @param {DoubtDeleteManyArgs} args - Arguments to filter Doubts to delete.
     * @example
     * // Delete a few Doubts
     * const { count } = await prisma.doubt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoubtDeleteManyArgs>(args?: SelectSubset<T, DoubtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doubts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doubts
     * const doubt = await prisma.doubt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoubtUpdateManyArgs>(args: SelectSubset<T, DoubtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doubts and returns the data updated in the database.
     * @param {DoubtUpdateManyAndReturnArgs} args - Arguments to update many Doubts.
     * @example
     * // Update many Doubts
     * const doubt = await prisma.doubt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doubts and only return the `id`
     * const doubtWithIdOnly = await prisma.doubt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoubtUpdateManyAndReturnArgs>(args: SelectSubset<T, DoubtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doubt.
     * @param {DoubtUpsertArgs} args - Arguments to update or create a Doubt.
     * @example
     * // Update or create a Doubt
     * const doubt = await prisma.doubt.upsert({
     *   create: {
     *     // ... data to create a Doubt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doubt we want to update
     *   }
     * })
     */
    upsert<T extends DoubtUpsertArgs>(args: SelectSubset<T, DoubtUpsertArgs<ExtArgs>>): Prisma__DoubtClient<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doubts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtCountArgs} args - Arguments to filter Doubts to count.
     * @example
     * // Count the number of Doubts
     * const count = await prisma.doubt.count({
     *   where: {
     *     // ... the filter for the Doubts we want to count
     *   }
     * })
    **/
    count<T extends DoubtCountArgs>(
      args?: Subset<T, DoubtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoubtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doubt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoubtAggregateArgs>(args: Subset<T, DoubtAggregateArgs>): Prisma.PrismaPromise<GetDoubtAggregateType<T>>

    /**
     * Group by Doubt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoubtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoubtGroupByArgs['orderBy'] }
        : { orderBy?: DoubtGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoubtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoubtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doubt model
   */
  readonly fields: DoubtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doubt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoubtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Doubt model
   */
  interface DoubtFieldRefs {
    readonly id: FieldRef<"Doubt", 'String'>
    readonly toWho: FieldRef<"Doubt", 'String'>
    readonly doubt: FieldRef<"Doubt", 'Boolean'>
    readonly amount: FieldRef<"Doubt", 'Float'>
    readonly wasPay: FieldRef<"Doubt", 'Boolean'>
    readonly createdAt: FieldRef<"Doubt", 'DateTime'>
    readonly updatedAt: FieldRef<"Doubt", 'DateTime'>
    readonly userId: FieldRef<"Doubt", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doubt findUnique
   */
  export type DoubtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * Filter, which Doubt to fetch.
     */
    where: DoubtWhereUniqueInput
  }

  /**
   * Doubt findUniqueOrThrow
   */
  export type DoubtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * Filter, which Doubt to fetch.
     */
    where: DoubtWhereUniqueInput
  }

  /**
   * Doubt findFirst
   */
  export type DoubtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * Filter, which Doubt to fetch.
     */
    where?: DoubtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doubts to fetch.
     */
    orderBy?: DoubtOrderByWithRelationInput | DoubtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doubts.
     */
    cursor?: DoubtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doubts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doubts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doubts.
     */
    distinct?: DoubtScalarFieldEnum | DoubtScalarFieldEnum[]
  }

  /**
   * Doubt findFirstOrThrow
   */
  export type DoubtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * Filter, which Doubt to fetch.
     */
    where?: DoubtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doubts to fetch.
     */
    orderBy?: DoubtOrderByWithRelationInput | DoubtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doubts.
     */
    cursor?: DoubtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doubts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doubts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doubts.
     */
    distinct?: DoubtScalarFieldEnum | DoubtScalarFieldEnum[]
  }

  /**
   * Doubt findMany
   */
  export type DoubtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * Filter, which Doubts to fetch.
     */
    where?: DoubtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doubts to fetch.
     */
    orderBy?: DoubtOrderByWithRelationInput | DoubtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doubts.
     */
    cursor?: DoubtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doubts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doubts.
     */
    skip?: number
    distinct?: DoubtScalarFieldEnum | DoubtScalarFieldEnum[]
  }

  /**
   * Doubt create
   */
  export type DoubtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * The data needed to create a Doubt.
     */
    data: XOR<DoubtCreateInput, DoubtUncheckedCreateInput>
  }

  /**
   * Doubt createMany
   */
  export type DoubtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doubts.
     */
    data: DoubtCreateManyInput | DoubtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doubt createManyAndReturn
   */
  export type DoubtCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * The data used to create many Doubts.
     */
    data: DoubtCreateManyInput | DoubtCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doubt update
   */
  export type DoubtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * The data needed to update a Doubt.
     */
    data: XOR<DoubtUpdateInput, DoubtUncheckedUpdateInput>
    /**
     * Choose, which Doubt to update.
     */
    where: DoubtWhereUniqueInput
  }

  /**
   * Doubt updateMany
   */
  export type DoubtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doubts.
     */
    data: XOR<DoubtUpdateManyMutationInput, DoubtUncheckedUpdateManyInput>
    /**
     * Filter which Doubts to update
     */
    where?: DoubtWhereInput
    /**
     * Limit how many Doubts to update.
     */
    limit?: number
  }

  /**
   * Doubt updateManyAndReturn
   */
  export type DoubtUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * The data used to update Doubts.
     */
    data: XOR<DoubtUpdateManyMutationInput, DoubtUncheckedUpdateManyInput>
    /**
     * Filter which Doubts to update
     */
    where?: DoubtWhereInput
    /**
     * Limit how many Doubts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doubt upsert
   */
  export type DoubtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * The filter to search for the Doubt to update in case it exists.
     */
    where: DoubtWhereUniqueInput
    /**
     * In case the Doubt found by the `where` argument doesn't exist, create a new Doubt with this data.
     */
    create: XOR<DoubtCreateInput, DoubtUncheckedCreateInput>
    /**
     * In case the Doubt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoubtUpdateInput, DoubtUncheckedUpdateInput>
  }

  /**
   * Doubt delete
   */
  export type DoubtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * Filter which Doubt to delete.
     */
    where: DoubtWhereUniqueInput
  }

  /**
   * Doubt deleteMany
   */
  export type DoubtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doubts to delete
     */
    where?: DoubtWhereInput
    /**
     * Limit how many Doubts to delete.
     */
    limit?: number
  }

  /**
   * Doubt without action
   */
  export type DoubtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    bio: 'bio',
    photo: 'photo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const RecordScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    notes: 'notes',
    buyDate: 'buyDate',
    isIncome: 'isIncome',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type RecordScalarFieldEnum = (typeof RecordScalarFieldEnum)[keyof typeof RecordScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    order: 'order',
    userId: 'userId'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const WishScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    notes: 'notes',
    link: 'link',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    groupId: 'groupId'
  };

  export type WishScalarFieldEnum = (typeof WishScalarFieldEnum)[keyof typeof WishScalarFieldEnum]


  export const GiftScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    toWho: 'toWho',
    notes: 'notes',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    groupId: 'groupId'
  };

  export type GiftScalarFieldEnum = (typeof GiftScalarFieldEnum)[keyof typeof GiftScalarFieldEnum]


  export const DoubtScalarFieldEnum: {
    id: 'id',
    toWho: 'toWho',
    doubt: 'doubt',
    amount: 'amount',
    wasPay: 'wasPay',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type DoubtScalarFieldEnum = (typeof DoubtScalarFieldEnum)[keyof typeof DoubtScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    photo?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tags?: TagListRelationFilter
    records?: RecordListRelationFilter
    wishes?: WishListRelationFilter
    gifts?: GiftListRelationFilter
    doubts?: DoubtListRelationFilter
    groups?: GroupListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    bio?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tags?: TagOrderByRelationAggregateInput
    records?: RecordOrderByRelationAggregateInput
    wishes?: WishOrderByRelationAggregateInput
    gifts?: GiftOrderByRelationAggregateInput
    doubts?: DoubtOrderByRelationAggregateInput
    groups?: GroupOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    photo?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tags?: TagListRelationFilter
    records?: RecordListRelationFilter
    wishes?: WishListRelationFilter
    gifts?: GiftListRelationFilter
    doubts?: DoubtListRelationFilter
    groups?: GroupListRelationFilter
  }, "id" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    bio?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    photo?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    userId?: StringFilter<"Tag"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    records?: RecordListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    records?: RecordOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_userId?: TagNameUserIdCompoundUniqueInput
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    userId?: StringFilter<"Tag"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    records?: RecordListRelationFilter
  }, "id" | "name_userId">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    userId?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type RecordWhereInput = {
    AND?: RecordWhereInput | RecordWhereInput[]
    OR?: RecordWhereInput[]
    NOT?: RecordWhereInput | RecordWhereInput[]
    id?: StringFilter<"Record"> | string
    name?: StringFilter<"Record"> | string
    price?: FloatNullableFilter<"Record"> | number | null
    notes?: StringNullableFilter<"Record"> | string | null
    buyDate?: DateTimeNullableFilter<"Record"> | Date | string | null
    isIncome?: BoolFilter<"Record"> | boolean
    createdAt?: DateTimeFilter<"Record"> | Date | string
    updatedAt?: DateTimeFilter<"Record"> | Date | string
    userId?: StringFilter<"Record"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: TagListRelationFilter
  }

  export type RecordOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    buyDate?: SortOrderInput | SortOrder
    isIncome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    tags?: TagOrderByRelationAggregateInput
  }

  export type RecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecordWhereInput | RecordWhereInput[]
    OR?: RecordWhereInput[]
    NOT?: RecordWhereInput | RecordWhereInput[]
    name?: StringFilter<"Record"> | string
    price?: FloatNullableFilter<"Record"> | number | null
    notes?: StringNullableFilter<"Record"> | string | null
    buyDate?: DateTimeNullableFilter<"Record"> | Date | string | null
    isIncome?: BoolFilter<"Record"> | boolean
    createdAt?: DateTimeFilter<"Record"> | Date | string
    updatedAt?: DateTimeFilter<"Record"> | Date | string
    userId?: StringFilter<"Record"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: TagListRelationFilter
  }, "id">

  export type RecordOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    buyDate?: SortOrderInput | SortOrder
    isIncome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: RecordCountOrderByAggregateInput
    _avg?: RecordAvgOrderByAggregateInput
    _max?: RecordMaxOrderByAggregateInput
    _min?: RecordMinOrderByAggregateInput
    _sum?: RecordSumOrderByAggregateInput
  }

  export type RecordScalarWhereWithAggregatesInput = {
    AND?: RecordScalarWhereWithAggregatesInput | RecordScalarWhereWithAggregatesInput[]
    OR?: RecordScalarWhereWithAggregatesInput[]
    NOT?: RecordScalarWhereWithAggregatesInput | RecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Record"> | string
    name?: StringWithAggregatesFilter<"Record"> | string
    price?: FloatNullableWithAggregatesFilter<"Record"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Record"> | string | null
    buyDate?: DateTimeNullableWithAggregatesFilter<"Record"> | Date | string | null
    isIncome?: BoolWithAggregatesFilter<"Record"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Record"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Record"> | Date | string
    userId?: StringWithAggregatesFilter<"Record"> | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    type?: StringFilter<"Group"> | string
    order?: IntFilter<"Group"> | number
    userId?: StringFilter<"Group"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    wishes?: WishListRelationFilter
    gifts?: GiftListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    order?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    wishes?: WishOrderByRelationAggregateInput
    gifts?: GiftOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_userId_type?: GroupNameUserIdTypeCompoundUniqueInput
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    type?: StringFilter<"Group"> | string
    order?: IntFilter<"Group"> | number
    userId?: StringFilter<"Group"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    wishes?: WishListRelationFilter
    gifts?: GiftListRelationFilter
  }, "id" | "name_userId_type">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    order?: SortOrder
    userId?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    type?: StringWithAggregatesFilter<"Group"> | string
    order?: IntWithAggregatesFilter<"Group"> | number
    userId?: StringWithAggregatesFilter<"Group"> | string
  }

  export type WishWhereInput = {
    AND?: WishWhereInput | WishWhereInput[]
    OR?: WishWhereInput[]
    NOT?: WishWhereInput | WishWhereInput[]
    id?: StringFilter<"Wish"> | string
    name?: StringFilter<"Wish"> | string
    price?: FloatNullableFilter<"Wish"> | number | null
    notes?: StringNullableFilter<"Wish"> | string | null
    link?: StringNullableFilter<"Wish"> | string | null
    order?: IntFilter<"Wish"> | number
    createdAt?: DateTimeFilter<"Wish"> | Date | string
    updatedAt?: DateTimeFilter<"Wish"> | Date | string
    userId?: StringFilter<"Wish"> | string
    groupId?: StringNullableFilter<"Wish"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }

  export type WishOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type WishWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WishWhereInput | WishWhereInput[]
    OR?: WishWhereInput[]
    NOT?: WishWhereInput | WishWhereInput[]
    name?: StringFilter<"Wish"> | string
    price?: FloatNullableFilter<"Wish"> | number | null
    notes?: StringNullableFilter<"Wish"> | string | null
    link?: StringNullableFilter<"Wish"> | string | null
    order?: IntFilter<"Wish"> | number
    createdAt?: DateTimeFilter<"Wish"> | Date | string
    updatedAt?: DateTimeFilter<"Wish"> | Date | string
    userId?: StringFilter<"Wish"> | string
    groupId?: StringNullableFilter<"Wish"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }, "id">

  export type WishOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    _count?: WishCountOrderByAggregateInput
    _avg?: WishAvgOrderByAggregateInput
    _max?: WishMaxOrderByAggregateInput
    _min?: WishMinOrderByAggregateInput
    _sum?: WishSumOrderByAggregateInput
  }

  export type WishScalarWhereWithAggregatesInput = {
    AND?: WishScalarWhereWithAggregatesInput | WishScalarWhereWithAggregatesInput[]
    OR?: WishScalarWhereWithAggregatesInput[]
    NOT?: WishScalarWhereWithAggregatesInput | WishScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wish"> | string
    name?: StringWithAggregatesFilter<"Wish"> | string
    price?: FloatNullableWithAggregatesFilter<"Wish"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Wish"> | string | null
    link?: StringNullableWithAggregatesFilter<"Wish"> | string | null
    order?: IntWithAggregatesFilter<"Wish"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Wish"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Wish"> | Date | string
    userId?: StringWithAggregatesFilter<"Wish"> | string
    groupId?: StringNullableWithAggregatesFilter<"Wish"> | string | null
  }

  export type GiftWhereInput = {
    AND?: GiftWhereInput | GiftWhereInput[]
    OR?: GiftWhereInput[]
    NOT?: GiftWhereInput | GiftWhereInput[]
    id?: StringFilter<"Gift"> | string
    name?: StringFilter<"Gift"> | string
    price?: FloatNullableFilter<"Gift"> | number | null
    toWho?: StringNullableFilter<"Gift"> | string | null
    notes?: StringNullableFilter<"Gift"> | string | null
    order?: IntFilter<"Gift"> | number
    createdAt?: DateTimeFilter<"Gift"> | Date | string
    updatedAt?: DateTimeFilter<"Gift"> | Date | string
    userId?: StringFilter<"Gift"> | string
    groupId?: StringNullableFilter<"Gift"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }

  export type GiftOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    toWho?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type GiftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GiftWhereInput | GiftWhereInput[]
    OR?: GiftWhereInput[]
    NOT?: GiftWhereInput | GiftWhereInput[]
    name?: StringFilter<"Gift"> | string
    price?: FloatNullableFilter<"Gift"> | number | null
    toWho?: StringNullableFilter<"Gift"> | string | null
    notes?: StringNullableFilter<"Gift"> | string | null
    order?: IntFilter<"Gift"> | number
    createdAt?: DateTimeFilter<"Gift"> | Date | string
    updatedAt?: DateTimeFilter<"Gift"> | Date | string
    userId?: StringFilter<"Gift"> | string
    groupId?: StringNullableFilter<"Gift"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }, "id">

  export type GiftOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    toWho?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    _count?: GiftCountOrderByAggregateInput
    _avg?: GiftAvgOrderByAggregateInput
    _max?: GiftMaxOrderByAggregateInput
    _min?: GiftMinOrderByAggregateInput
    _sum?: GiftSumOrderByAggregateInput
  }

  export type GiftScalarWhereWithAggregatesInput = {
    AND?: GiftScalarWhereWithAggregatesInput | GiftScalarWhereWithAggregatesInput[]
    OR?: GiftScalarWhereWithAggregatesInput[]
    NOT?: GiftScalarWhereWithAggregatesInput | GiftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gift"> | string
    name?: StringWithAggregatesFilter<"Gift"> | string
    price?: FloatNullableWithAggregatesFilter<"Gift"> | number | null
    toWho?: StringNullableWithAggregatesFilter<"Gift"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Gift"> | string | null
    order?: IntWithAggregatesFilter<"Gift"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Gift"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Gift"> | Date | string
    userId?: StringWithAggregatesFilter<"Gift"> | string
    groupId?: StringNullableWithAggregatesFilter<"Gift"> | string | null
  }

  export type DoubtWhereInput = {
    AND?: DoubtWhereInput | DoubtWhereInput[]
    OR?: DoubtWhereInput[]
    NOT?: DoubtWhereInput | DoubtWhereInput[]
    id?: StringFilter<"Doubt"> | string
    toWho?: StringFilter<"Doubt"> | string
    doubt?: BoolFilter<"Doubt"> | boolean
    amount?: FloatFilter<"Doubt"> | number
    wasPay?: BoolFilter<"Doubt"> | boolean
    createdAt?: DateTimeFilter<"Doubt"> | Date | string
    updatedAt?: DateTimeFilter<"Doubt"> | Date | string
    userId?: StringFilter<"Doubt"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DoubtOrderByWithRelationInput = {
    id?: SortOrder
    toWho?: SortOrder
    doubt?: SortOrder
    amount?: SortOrder
    wasPay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DoubtWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DoubtWhereInput | DoubtWhereInput[]
    OR?: DoubtWhereInput[]
    NOT?: DoubtWhereInput | DoubtWhereInput[]
    toWho?: StringFilter<"Doubt"> | string
    doubt?: BoolFilter<"Doubt"> | boolean
    amount?: FloatFilter<"Doubt"> | number
    wasPay?: BoolFilter<"Doubt"> | boolean
    createdAt?: DateTimeFilter<"Doubt"> | Date | string
    updatedAt?: DateTimeFilter<"Doubt"> | Date | string
    userId?: StringFilter<"Doubt"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DoubtOrderByWithAggregationInput = {
    id?: SortOrder
    toWho?: SortOrder
    doubt?: SortOrder
    amount?: SortOrder
    wasPay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: DoubtCountOrderByAggregateInput
    _avg?: DoubtAvgOrderByAggregateInput
    _max?: DoubtMaxOrderByAggregateInput
    _min?: DoubtMinOrderByAggregateInput
    _sum?: DoubtSumOrderByAggregateInput
  }

  export type DoubtScalarWhereWithAggregatesInput = {
    AND?: DoubtScalarWhereWithAggregatesInput | DoubtScalarWhereWithAggregatesInput[]
    OR?: DoubtScalarWhereWithAggregatesInput[]
    NOT?: DoubtScalarWhereWithAggregatesInput | DoubtScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doubt"> | string
    toWho?: StringWithAggregatesFilter<"Doubt"> | string
    doubt?: BoolWithAggregatesFilter<"Doubt"> | boolean
    amount?: FloatWithAggregatesFilter<"Doubt"> | number
    wasPay?: BoolWithAggregatesFilter<"Doubt"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Doubt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Doubt"> | Date | string
    userId?: StringWithAggregatesFilter<"Doubt"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    password: string
    bio?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagCreateNestedManyWithoutUserInput
    records?: RecordCreateNestedManyWithoutUserInput
    wishes?: WishCreateNestedManyWithoutUserInput
    gifts?: GiftCreateNestedManyWithoutUserInput
    doubts?: DoubtCreateNestedManyWithoutUserInput
    groups?: GroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    bio?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    records?: RecordUncheckedCreateNestedManyWithoutUserInput
    wishes?: WishUncheckedCreateNestedManyWithoutUserInput
    gifts?: GiftUncheckedCreateNestedManyWithoutUserInput
    doubts?: DoubtUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutUserNestedInput
    records?: RecordUpdateManyWithoutUserNestedInput
    wishes?: WishUpdateManyWithoutUserNestedInput
    gifts?: GiftUpdateManyWithoutUserNestedInput
    doubts?: DoubtUpdateManyWithoutUserNestedInput
    groups?: GroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    records?: RecordUncheckedUpdateManyWithoutUserNestedInput
    wishes?: WishUncheckedUpdateManyWithoutUserNestedInput
    gifts?: GiftUncheckedUpdateManyWithoutUserNestedInput
    doubts?: DoubtUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    password: string
    bio?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutTagsInput
    records?: RecordCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    records?: RecordUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTagsNestedInput
    records?: RecordUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    records?: RecordUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    userId: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RecordCreateInput = {
    id?: string
    name: string
    price?: number | null
    notes?: string | null
    buyDate?: Date | string | null
    isIncome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRecordsInput
    tags?: TagCreateNestedManyWithoutRecordsInput
  }

  export type RecordUncheckedCreateInput = {
    id?: string
    name: string
    price?: number | null
    notes?: string | null
    buyDate?: Date | string | null
    isIncome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    tags?: TagUncheckedCreateNestedManyWithoutRecordsInput
  }

  export type RecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    buyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isIncome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecordsNestedInput
    tags?: TagUpdateManyWithoutRecordsNestedInput
  }

  export type RecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    buyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isIncome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    tags?: TagUncheckedUpdateManyWithoutRecordsNestedInput
  }

  export type RecordCreateManyInput = {
    id?: string
    name: string
    price?: number | null
    notes?: string | null
    buyDate?: Date | string | null
    isIncome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type RecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    buyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isIncome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    buyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isIncome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    type: string
    order?: number
    user: UserCreateNestedOneWithoutGroupsInput
    wishes?: WishCreateNestedManyWithoutGroupInput
    gifts?: GiftCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    order?: number
    userId: string
    wishes?: WishUncheckedCreateNestedManyWithoutGroupInput
    gifts?: GiftUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
    wishes?: WishUpdateManyWithoutGroupNestedInput
    gifts?: GiftUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    wishes?: WishUncheckedUpdateManyWithoutGroupNestedInput
    gifts?: GiftUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    type: string
    order?: number
    userId: string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WishCreateInput = {
    id?: string
    name: string
    price?: number | null
    notes?: string | null
    link?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWishesInput
    group?: GroupCreateNestedOneWithoutWishesInput
  }

  export type WishUncheckedCreateInput = {
    id?: string
    name: string
    price?: number | null
    notes?: string | null
    link?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    groupId?: string | null
  }

  export type WishUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWishesNestedInput
    group?: GroupUpdateOneWithoutWishesNestedInput
  }

  export type WishUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WishCreateManyInput = {
    id?: string
    name: string
    price?: number | null
    notes?: string | null
    link?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    groupId?: string | null
  }

  export type WishUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GiftCreateInput = {
    id?: string
    name: string
    price?: number | null
    toWho?: string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGiftsInput
    group?: GroupCreateNestedOneWithoutGiftsInput
  }

  export type GiftUncheckedCreateInput = {
    id?: string
    name: string
    price?: number | null
    toWho?: string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    groupId?: string | null
  }

  export type GiftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    toWho?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGiftsNestedInput
    group?: GroupUpdateOneWithoutGiftsNestedInput
  }

  export type GiftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    toWho?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GiftCreateManyInput = {
    id?: string
    name: string
    price?: number | null
    toWho?: string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    groupId?: string | null
  }

  export type GiftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    toWho?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    toWho?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoubtCreateInput = {
    id?: string
    toWho: string
    doubt: boolean
    amount: number
    wasPay?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoubtsInput
  }

  export type DoubtUncheckedCreateInput = {
    id?: string
    toWho: string
    doubt: boolean
    amount: number
    wasPay?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type DoubtUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    toWho?: StringFieldUpdateOperationsInput | string
    doubt?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    wasPay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoubtsNestedInput
  }

  export type DoubtUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    toWho?: StringFieldUpdateOperationsInput | string
    doubt?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    wasPay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DoubtCreateManyInput = {
    id?: string
    toWho: string
    doubt: boolean
    amount: number
    wasPay?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type DoubtUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    toWho?: StringFieldUpdateOperationsInput | string
    doubt?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    wasPay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoubtUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    toWho?: StringFieldUpdateOperationsInput | string
    doubt?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    wasPay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type RecordListRelationFilter = {
    every?: RecordWhereInput
    some?: RecordWhereInput
    none?: RecordWhereInput
  }

  export type WishListRelationFilter = {
    every?: WishWhereInput
    some?: WishWhereInput
    none?: WishWhereInput
  }

  export type GiftListRelationFilter = {
    every?: GiftWhereInput
    some?: GiftWhereInput
    none?: GiftWhereInput
  }

  export type DoubtListRelationFilter = {
    every?: DoubtWhereInput
    some?: DoubtWhereInput
    none?: DoubtWhereInput
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WishOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GiftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoubtOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TagNameUserIdCompoundUniqueInput = {
    name: string
    userId: string
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RecordCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    notes?: SortOrder
    buyDate?: SortOrder
    isIncome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RecordAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type RecordMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    notes?: SortOrder
    buyDate?: SortOrder
    isIncome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RecordMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    notes?: SortOrder
    buyDate?: SortOrder
    isIncome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RecordSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GroupNameUserIdTypeCompoundUniqueInput = {
    name: string
    userId: string
    type: string
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    order?: SortOrder
    userId?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    order?: SortOrder
    userId?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    order?: SortOrder
    userId?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type GroupNullableScalarRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type WishCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    notes?: SortOrder
    link?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type WishAvgOrderByAggregateInput = {
    price?: SortOrder
    order?: SortOrder
  }

  export type WishMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    notes?: SortOrder
    link?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type WishMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    notes?: SortOrder
    link?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type WishSumOrderByAggregateInput = {
    price?: SortOrder
    order?: SortOrder
  }

  export type GiftCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    toWho?: SortOrder
    notes?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type GiftAvgOrderByAggregateInput = {
    price?: SortOrder
    order?: SortOrder
  }

  export type GiftMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    toWho?: SortOrder
    notes?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type GiftMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    toWho?: SortOrder
    notes?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type GiftSumOrderByAggregateInput = {
    price?: SortOrder
    order?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DoubtCountOrderByAggregateInput = {
    id?: SortOrder
    toWho?: SortOrder
    doubt?: SortOrder
    amount?: SortOrder
    wasPay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DoubtAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DoubtMaxOrderByAggregateInput = {
    id?: SortOrder
    toWho?: SortOrder
    doubt?: SortOrder
    amount?: SortOrder
    wasPay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DoubtMinOrderByAggregateInput = {
    id?: SortOrder
    toWho?: SortOrder
    doubt?: SortOrder
    amount?: SortOrder
    wasPay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DoubtSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TagCreateNestedManyWithoutUserInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type RecordCreateNestedManyWithoutUserInput = {
    create?: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput> | RecordCreateWithoutUserInput[] | RecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutUserInput | RecordCreateOrConnectWithoutUserInput[]
    createMany?: RecordCreateManyUserInputEnvelope
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type WishCreateNestedManyWithoutUserInput = {
    create?: XOR<WishCreateWithoutUserInput, WishUncheckedCreateWithoutUserInput> | WishCreateWithoutUserInput[] | WishUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishCreateOrConnectWithoutUserInput | WishCreateOrConnectWithoutUserInput[]
    createMany?: WishCreateManyUserInputEnvelope
    connect?: WishWhereUniqueInput | WishWhereUniqueInput[]
  }

  export type GiftCreateNestedManyWithoutUserInput = {
    create?: XOR<GiftCreateWithoutUserInput, GiftUncheckedCreateWithoutUserInput> | GiftCreateWithoutUserInput[] | GiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutUserInput | GiftCreateOrConnectWithoutUserInput[]
    createMany?: GiftCreateManyUserInputEnvelope
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
  }

  export type DoubtCreateNestedManyWithoutUserInput = {
    create?: XOR<DoubtCreateWithoutUserInput, DoubtUncheckedCreateWithoutUserInput> | DoubtCreateWithoutUserInput[] | DoubtUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DoubtCreateOrConnectWithoutUserInput | DoubtCreateOrConnectWithoutUserInput[]
    createMany?: DoubtCreateManyUserInputEnvelope
    connect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput> | GroupCreateWithoutUserInput[] | GroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUserInput | GroupCreateOrConnectWithoutUserInput[]
    createMany?: GroupCreateManyUserInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type RecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput> | RecordCreateWithoutUserInput[] | RecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutUserInput | RecordCreateOrConnectWithoutUserInput[]
    createMany?: RecordCreateManyUserInputEnvelope
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type WishUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WishCreateWithoutUserInput, WishUncheckedCreateWithoutUserInput> | WishCreateWithoutUserInput[] | WishUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishCreateOrConnectWithoutUserInput | WishCreateOrConnectWithoutUserInput[]
    createMany?: WishCreateManyUserInputEnvelope
    connect?: WishWhereUniqueInput | WishWhereUniqueInput[]
  }

  export type GiftUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GiftCreateWithoutUserInput, GiftUncheckedCreateWithoutUserInput> | GiftCreateWithoutUserInput[] | GiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutUserInput | GiftCreateOrConnectWithoutUserInput[]
    createMany?: GiftCreateManyUserInputEnvelope
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
  }

  export type DoubtUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DoubtCreateWithoutUserInput, DoubtUncheckedCreateWithoutUserInput> | DoubtCreateWithoutUserInput[] | DoubtUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DoubtCreateOrConnectWithoutUserInput | DoubtCreateOrConnectWithoutUserInput[]
    createMany?: DoubtCreateManyUserInputEnvelope
    connect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput> | GroupCreateWithoutUserInput[] | GroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUserInput | GroupCreateOrConnectWithoutUserInput[]
    createMany?: GroupCreateManyUserInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TagUpdateManyWithoutUserNestedInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUserInput | TagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUserInput | TagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUserInput | TagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type RecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput> | RecordCreateWithoutUserInput[] | RecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutUserInput | RecordCreateOrConnectWithoutUserInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutUserInput | RecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecordCreateManyUserInputEnvelope
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutUserInput | RecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutUserInput | RecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type WishUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishCreateWithoutUserInput, WishUncheckedCreateWithoutUserInput> | WishCreateWithoutUserInput[] | WishUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishCreateOrConnectWithoutUserInput | WishCreateOrConnectWithoutUserInput[]
    upsert?: WishUpsertWithWhereUniqueWithoutUserInput | WishUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishCreateManyUserInputEnvelope
    set?: WishWhereUniqueInput | WishWhereUniqueInput[]
    disconnect?: WishWhereUniqueInput | WishWhereUniqueInput[]
    delete?: WishWhereUniqueInput | WishWhereUniqueInput[]
    connect?: WishWhereUniqueInput | WishWhereUniqueInput[]
    update?: WishUpdateWithWhereUniqueWithoutUserInput | WishUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishUpdateManyWithWhereWithoutUserInput | WishUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishScalarWhereInput | WishScalarWhereInput[]
  }

  export type GiftUpdateManyWithoutUserNestedInput = {
    create?: XOR<GiftCreateWithoutUserInput, GiftUncheckedCreateWithoutUserInput> | GiftCreateWithoutUserInput[] | GiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutUserInput | GiftCreateOrConnectWithoutUserInput[]
    upsert?: GiftUpsertWithWhereUniqueWithoutUserInput | GiftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GiftCreateManyUserInputEnvelope
    set?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    disconnect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    delete?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    update?: GiftUpdateWithWhereUniqueWithoutUserInput | GiftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GiftUpdateManyWithWhereWithoutUserInput | GiftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GiftScalarWhereInput | GiftScalarWhereInput[]
  }

  export type DoubtUpdateManyWithoutUserNestedInput = {
    create?: XOR<DoubtCreateWithoutUserInput, DoubtUncheckedCreateWithoutUserInput> | DoubtCreateWithoutUserInput[] | DoubtUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DoubtCreateOrConnectWithoutUserInput | DoubtCreateOrConnectWithoutUserInput[]
    upsert?: DoubtUpsertWithWhereUniqueWithoutUserInput | DoubtUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DoubtCreateManyUserInputEnvelope
    set?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    disconnect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    delete?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    connect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    update?: DoubtUpdateWithWhereUniqueWithoutUserInput | DoubtUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DoubtUpdateManyWithWhereWithoutUserInput | DoubtUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DoubtScalarWhereInput | DoubtScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput> | GroupCreateWithoutUserInput[] | GroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUserInput | GroupCreateOrConnectWithoutUserInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutUserInput | GroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupCreateManyUserInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutUserInput | GroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutUserInput | GroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUserInput | TagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUserInput | TagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUserInput | TagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type RecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput> | RecordCreateWithoutUserInput[] | RecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutUserInput | RecordCreateOrConnectWithoutUserInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutUserInput | RecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecordCreateManyUserInputEnvelope
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutUserInput | RecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutUserInput | RecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type WishUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishCreateWithoutUserInput, WishUncheckedCreateWithoutUserInput> | WishCreateWithoutUserInput[] | WishUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishCreateOrConnectWithoutUserInput | WishCreateOrConnectWithoutUserInput[]
    upsert?: WishUpsertWithWhereUniqueWithoutUserInput | WishUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishCreateManyUserInputEnvelope
    set?: WishWhereUniqueInput | WishWhereUniqueInput[]
    disconnect?: WishWhereUniqueInput | WishWhereUniqueInput[]
    delete?: WishWhereUniqueInput | WishWhereUniqueInput[]
    connect?: WishWhereUniqueInput | WishWhereUniqueInput[]
    update?: WishUpdateWithWhereUniqueWithoutUserInput | WishUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishUpdateManyWithWhereWithoutUserInput | WishUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishScalarWhereInput | WishScalarWhereInput[]
  }

  export type GiftUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GiftCreateWithoutUserInput, GiftUncheckedCreateWithoutUserInput> | GiftCreateWithoutUserInput[] | GiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutUserInput | GiftCreateOrConnectWithoutUserInput[]
    upsert?: GiftUpsertWithWhereUniqueWithoutUserInput | GiftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GiftCreateManyUserInputEnvelope
    set?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    disconnect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    delete?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    update?: GiftUpdateWithWhereUniqueWithoutUserInput | GiftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GiftUpdateManyWithWhereWithoutUserInput | GiftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GiftScalarWhereInput | GiftScalarWhereInput[]
  }

  export type DoubtUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DoubtCreateWithoutUserInput, DoubtUncheckedCreateWithoutUserInput> | DoubtCreateWithoutUserInput[] | DoubtUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DoubtCreateOrConnectWithoutUserInput | DoubtCreateOrConnectWithoutUserInput[]
    upsert?: DoubtUpsertWithWhereUniqueWithoutUserInput | DoubtUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DoubtCreateManyUserInputEnvelope
    set?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    disconnect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    delete?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    connect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    update?: DoubtUpdateWithWhereUniqueWithoutUserInput | DoubtUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DoubtUpdateManyWithWhereWithoutUserInput | DoubtUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DoubtScalarWhereInput | DoubtScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput> | GroupCreateWithoutUserInput[] | GroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUserInput | GroupCreateOrConnectWithoutUserInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutUserInput | GroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupCreateManyUserInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutUserInput | GroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutUserInput | GroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTagsInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput
    connect?: UserWhereUniqueInput
  }

  export type RecordCreateNestedManyWithoutTagsInput = {
    create?: XOR<RecordCreateWithoutTagsInput, RecordUncheckedCreateWithoutTagsInput> | RecordCreateWithoutTagsInput[] | RecordUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutTagsInput | RecordCreateOrConnectWithoutTagsInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type RecordUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<RecordCreateWithoutTagsInput, RecordUncheckedCreateWithoutTagsInput> | RecordCreateWithoutTagsInput[] | RecordUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutTagsInput | RecordCreateOrConnectWithoutTagsInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput
    upsert?: UserUpsertWithoutTagsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTagsInput, UserUpdateWithoutTagsInput>, UserUncheckedUpdateWithoutTagsInput>
  }

  export type RecordUpdateManyWithoutTagsNestedInput = {
    create?: XOR<RecordCreateWithoutTagsInput, RecordUncheckedCreateWithoutTagsInput> | RecordCreateWithoutTagsInput[] | RecordUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutTagsInput | RecordCreateOrConnectWithoutTagsInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutTagsInput | RecordUpsertWithWhereUniqueWithoutTagsInput[]
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutTagsInput | RecordUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutTagsInput | RecordUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type RecordUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<RecordCreateWithoutTagsInput, RecordUncheckedCreateWithoutTagsInput> | RecordCreateWithoutTagsInput[] | RecordUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutTagsInput | RecordCreateOrConnectWithoutTagsInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutTagsInput | RecordUpsertWithWhereUniqueWithoutTagsInput[]
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutTagsInput | RecordUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutTagsInput | RecordUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRecordsInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutRecordsInput = {
    create?: XOR<TagCreateWithoutRecordsInput, TagUncheckedCreateWithoutRecordsInput> | TagCreateWithoutRecordsInput[] | TagUncheckedCreateWithoutRecordsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutRecordsInput | TagCreateOrConnectWithoutRecordsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutRecordsInput = {
    create?: XOR<TagCreateWithoutRecordsInput, TagUncheckedCreateWithoutRecordsInput> | TagCreateWithoutRecordsInput[] | TagUncheckedCreateWithoutRecordsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutRecordsInput | TagCreateOrConnectWithoutRecordsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    upsert?: UserUpsertWithoutRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecordsInput, UserUpdateWithoutRecordsInput>, UserUncheckedUpdateWithoutRecordsInput>
  }

  export type TagUpdateManyWithoutRecordsNestedInput = {
    create?: XOR<TagCreateWithoutRecordsInput, TagUncheckedCreateWithoutRecordsInput> | TagCreateWithoutRecordsInput[] | TagUncheckedCreateWithoutRecordsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutRecordsInput | TagCreateOrConnectWithoutRecordsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutRecordsInput | TagUpsertWithWhereUniqueWithoutRecordsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutRecordsInput | TagUpdateWithWhereUniqueWithoutRecordsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutRecordsInput | TagUpdateManyWithWhereWithoutRecordsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutRecordsNestedInput = {
    create?: XOR<TagCreateWithoutRecordsInput, TagUncheckedCreateWithoutRecordsInput> | TagCreateWithoutRecordsInput[] | TagUncheckedCreateWithoutRecordsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutRecordsInput | TagCreateOrConnectWithoutRecordsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutRecordsInput | TagUpsertWithWhereUniqueWithoutRecordsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutRecordsInput | TagUpdateWithWhereUniqueWithoutRecordsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutRecordsInput | TagUpdateManyWithWhereWithoutRecordsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGroupsInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type WishCreateNestedManyWithoutGroupInput = {
    create?: XOR<WishCreateWithoutGroupInput, WishUncheckedCreateWithoutGroupInput> | WishCreateWithoutGroupInput[] | WishUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: WishCreateOrConnectWithoutGroupInput | WishCreateOrConnectWithoutGroupInput[]
    createMany?: WishCreateManyGroupInputEnvelope
    connect?: WishWhereUniqueInput | WishWhereUniqueInput[]
  }

  export type GiftCreateNestedManyWithoutGroupInput = {
    create?: XOR<GiftCreateWithoutGroupInput, GiftUncheckedCreateWithoutGroupInput> | GiftCreateWithoutGroupInput[] | GiftUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutGroupInput | GiftCreateOrConnectWithoutGroupInput[]
    createMany?: GiftCreateManyGroupInputEnvelope
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
  }

  export type WishUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<WishCreateWithoutGroupInput, WishUncheckedCreateWithoutGroupInput> | WishCreateWithoutGroupInput[] | WishUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: WishCreateOrConnectWithoutGroupInput | WishCreateOrConnectWithoutGroupInput[]
    createMany?: WishCreateManyGroupInputEnvelope
    connect?: WishWhereUniqueInput | WishWhereUniqueInput[]
  }

  export type GiftUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GiftCreateWithoutGroupInput, GiftUncheckedCreateWithoutGroupInput> | GiftCreateWithoutGroupInput[] | GiftUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutGroupInput | GiftCreateOrConnectWithoutGroupInput[]
    createMany?: GiftCreateManyGroupInputEnvelope
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    upsert?: UserUpsertWithoutGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupsInput, UserUpdateWithoutGroupsInput>, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type WishUpdateManyWithoutGroupNestedInput = {
    create?: XOR<WishCreateWithoutGroupInput, WishUncheckedCreateWithoutGroupInput> | WishCreateWithoutGroupInput[] | WishUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: WishCreateOrConnectWithoutGroupInput | WishCreateOrConnectWithoutGroupInput[]
    upsert?: WishUpsertWithWhereUniqueWithoutGroupInput | WishUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: WishCreateManyGroupInputEnvelope
    set?: WishWhereUniqueInput | WishWhereUniqueInput[]
    disconnect?: WishWhereUniqueInput | WishWhereUniqueInput[]
    delete?: WishWhereUniqueInput | WishWhereUniqueInput[]
    connect?: WishWhereUniqueInput | WishWhereUniqueInput[]
    update?: WishUpdateWithWhereUniqueWithoutGroupInput | WishUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: WishUpdateManyWithWhereWithoutGroupInput | WishUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: WishScalarWhereInput | WishScalarWhereInput[]
  }

  export type GiftUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GiftCreateWithoutGroupInput, GiftUncheckedCreateWithoutGroupInput> | GiftCreateWithoutGroupInput[] | GiftUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutGroupInput | GiftCreateOrConnectWithoutGroupInput[]
    upsert?: GiftUpsertWithWhereUniqueWithoutGroupInput | GiftUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GiftCreateManyGroupInputEnvelope
    set?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    disconnect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    delete?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    update?: GiftUpdateWithWhereUniqueWithoutGroupInput | GiftUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GiftUpdateManyWithWhereWithoutGroupInput | GiftUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GiftScalarWhereInput | GiftScalarWhereInput[]
  }

  export type WishUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<WishCreateWithoutGroupInput, WishUncheckedCreateWithoutGroupInput> | WishCreateWithoutGroupInput[] | WishUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: WishCreateOrConnectWithoutGroupInput | WishCreateOrConnectWithoutGroupInput[]
    upsert?: WishUpsertWithWhereUniqueWithoutGroupInput | WishUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: WishCreateManyGroupInputEnvelope
    set?: WishWhereUniqueInput | WishWhereUniqueInput[]
    disconnect?: WishWhereUniqueInput | WishWhereUniqueInput[]
    delete?: WishWhereUniqueInput | WishWhereUniqueInput[]
    connect?: WishWhereUniqueInput | WishWhereUniqueInput[]
    update?: WishUpdateWithWhereUniqueWithoutGroupInput | WishUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: WishUpdateManyWithWhereWithoutGroupInput | WishUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: WishScalarWhereInput | WishScalarWhereInput[]
  }

  export type GiftUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GiftCreateWithoutGroupInput, GiftUncheckedCreateWithoutGroupInput> | GiftCreateWithoutGroupInput[] | GiftUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutGroupInput | GiftCreateOrConnectWithoutGroupInput[]
    upsert?: GiftUpsertWithWhereUniqueWithoutGroupInput | GiftUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GiftCreateManyGroupInputEnvelope
    set?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    disconnect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    delete?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    update?: GiftUpdateWithWhereUniqueWithoutGroupInput | GiftUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GiftUpdateManyWithWhereWithoutGroupInput | GiftUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GiftScalarWhereInput | GiftScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWishesInput = {
    create?: XOR<UserCreateWithoutWishesInput, UserUncheckedCreateWithoutWishesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWishesInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutWishesInput = {
    create?: XOR<GroupCreateWithoutWishesInput, GroupUncheckedCreateWithoutWishesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutWishesInput
    connect?: GroupWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWishesNestedInput = {
    create?: XOR<UserCreateWithoutWishesInput, UserUncheckedCreateWithoutWishesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWishesInput
    upsert?: UserUpsertWithoutWishesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWishesInput, UserUpdateWithoutWishesInput>, UserUncheckedUpdateWithoutWishesInput>
  }

  export type GroupUpdateOneWithoutWishesNestedInput = {
    create?: XOR<GroupCreateWithoutWishesInput, GroupUncheckedCreateWithoutWishesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutWishesInput
    upsert?: GroupUpsertWithoutWishesInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutWishesInput, GroupUpdateWithoutWishesInput>, GroupUncheckedUpdateWithoutWishesInput>
  }

  export type UserCreateNestedOneWithoutGiftsInput = {
    create?: XOR<UserCreateWithoutGiftsInput, UserUncheckedCreateWithoutGiftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGiftsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutGiftsInput = {
    create?: XOR<GroupCreateWithoutGiftsInput, GroupUncheckedCreateWithoutGiftsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutGiftsInput
    connect?: GroupWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGiftsNestedInput = {
    create?: XOR<UserCreateWithoutGiftsInput, UserUncheckedCreateWithoutGiftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGiftsInput
    upsert?: UserUpsertWithoutGiftsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGiftsInput, UserUpdateWithoutGiftsInput>, UserUncheckedUpdateWithoutGiftsInput>
  }

  export type GroupUpdateOneWithoutGiftsNestedInput = {
    create?: XOR<GroupCreateWithoutGiftsInput, GroupUncheckedCreateWithoutGiftsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutGiftsInput
    upsert?: GroupUpsertWithoutGiftsInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutGiftsInput, GroupUpdateWithoutGiftsInput>, GroupUncheckedUpdateWithoutGiftsInput>
  }

  export type UserCreateNestedOneWithoutDoubtsInput = {
    create?: XOR<UserCreateWithoutDoubtsInput, UserUncheckedCreateWithoutDoubtsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoubtsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDoubtsNestedInput = {
    create?: XOR<UserCreateWithoutDoubtsInput, UserUncheckedCreateWithoutDoubtsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoubtsInput
    upsert?: UserUpsertWithoutDoubtsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoubtsInput, UserUpdateWithoutDoubtsInput>, UserUncheckedUpdateWithoutDoubtsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TagCreateWithoutUserInput = {
    id?: string
    name: string
    records?: RecordCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    records?: RecordUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutUserInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput>
  }

  export type TagCreateManyUserInputEnvelope = {
    data: TagCreateManyUserInput | TagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecordCreateWithoutUserInput = {
    id?: string
    name: string
    price?: number | null
    notes?: string | null
    buyDate?: Date | string | null
    isIncome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagCreateNestedManyWithoutRecordsInput
  }

  export type RecordUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    price?: number | null
    notes?: string | null
    buyDate?: Date | string | null
    isIncome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutRecordsInput
  }

  export type RecordCreateOrConnectWithoutUserInput = {
    where: RecordWhereUniqueInput
    create: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput>
  }

  export type RecordCreateManyUserInputEnvelope = {
    data: RecordCreateManyUserInput | RecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WishCreateWithoutUserInput = {
    id?: string
    name: string
    price?: number | null
    notes?: string | null
    link?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutWishesInput
  }

  export type WishUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    price?: number | null
    notes?: string | null
    link?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groupId?: string | null
  }

  export type WishCreateOrConnectWithoutUserInput = {
    where: WishWhereUniqueInput
    create: XOR<WishCreateWithoutUserInput, WishUncheckedCreateWithoutUserInput>
  }

  export type WishCreateManyUserInputEnvelope = {
    data: WishCreateManyUserInput | WishCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GiftCreateWithoutUserInput = {
    id?: string
    name: string
    price?: number | null
    toWho?: string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutGiftsInput
  }

  export type GiftUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    price?: number | null
    toWho?: string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groupId?: string | null
  }

  export type GiftCreateOrConnectWithoutUserInput = {
    where: GiftWhereUniqueInput
    create: XOR<GiftCreateWithoutUserInput, GiftUncheckedCreateWithoutUserInput>
  }

  export type GiftCreateManyUserInputEnvelope = {
    data: GiftCreateManyUserInput | GiftCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DoubtCreateWithoutUserInput = {
    id?: string
    toWho: string
    doubt: boolean
    amount: number
    wasPay?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoubtUncheckedCreateWithoutUserInput = {
    id?: string
    toWho: string
    doubt: boolean
    amount: number
    wasPay?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoubtCreateOrConnectWithoutUserInput = {
    where: DoubtWhereUniqueInput
    create: XOR<DoubtCreateWithoutUserInput, DoubtUncheckedCreateWithoutUserInput>
  }

  export type DoubtCreateManyUserInputEnvelope = {
    data: DoubtCreateManyUserInput | DoubtCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutUserInput = {
    id?: string
    name: string
    type: string
    order?: number
    wishes?: WishCreateNestedManyWithoutGroupInput
    gifts?: GiftCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    type: string
    order?: number
    wishes?: WishUncheckedCreateNestedManyWithoutGroupInput
    gifts?: GiftUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutUserInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput>
  }

  export type GroupCreateManyUserInputEnvelope = {
    data: GroupCreateManyUserInput | GroupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TagUpsertWithWhereUniqueWithoutUserInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutUserInput, TagUncheckedUpdateWithoutUserInput>
    create: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput>
  }

  export type TagUpdateWithWhereUniqueWithoutUserInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutUserInput, TagUncheckedUpdateWithoutUserInput>
  }

  export type TagUpdateManyWithWhereWithoutUserInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutUserInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    userId?: StringFilter<"Tag"> | string
  }

  export type RecordUpsertWithWhereUniqueWithoutUserInput = {
    where: RecordWhereUniqueInput
    update: XOR<RecordUpdateWithoutUserInput, RecordUncheckedUpdateWithoutUserInput>
    create: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput>
  }

  export type RecordUpdateWithWhereUniqueWithoutUserInput = {
    where: RecordWhereUniqueInput
    data: XOR<RecordUpdateWithoutUserInput, RecordUncheckedUpdateWithoutUserInput>
  }

  export type RecordUpdateManyWithWhereWithoutUserInput = {
    where: RecordScalarWhereInput
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyWithoutUserInput>
  }

  export type RecordScalarWhereInput = {
    AND?: RecordScalarWhereInput | RecordScalarWhereInput[]
    OR?: RecordScalarWhereInput[]
    NOT?: RecordScalarWhereInput | RecordScalarWhereInput[]
    id?: StringFilter<"Record"> | string
    name?: StringFilter<"Record"> | string
    price?: FloatNullableFilter<"Record"> | number | null
    notes?: StringNullableFilter<"Record"> | string | null
    buyDate?: DateTimeNullableFilter<"Record"> | Date | string | null
    isIncome?: BoolFilter<"Record"> | boolean
    createdAt?: DateTimeFilter<"Record"> | Date | string
    updatedAt?: DateTimeFilter<"Record"> | Date | string
    userId?: StringFilter<"Record"> | string
  }

  export type WishUpsertWithWhereUniqueWithoutUserInput = {
    where: WishWhereUniqueInput
    update: XOR<WishUpdateWithoutUserInput, WishUncheckedUpdateWithoutUserInput>
    create: XOR<WishCreateWithoutUserInput, WishUncheckedCreateWithoutUserInput>
  }

  export type WishUpdateWithWhereUniqueWithoutUserInput = {
    where: WishWhereUniqueInput
    data: XOR<WishUpdateWithoutUserInput, WishUncheckedUpdateWithoutUserInput>
  }

  export type WishUpdateManyWithWhereWithoutUserInput = {
    where: WishScalarWhereInput
    data: XOR<WishUpdateManyMutationInput, WishUncheckedUpdateManyWithoutUserInput>
  }

  export type WishScalarWhereInput = {
    AND?: WishScalarWhereInput | WishScalarWhereInput[]
    OR?: WishScalarWhereInput[]
    NOT?: WishScalarWhereInput | WishScalarWhereInput[]
    id?: StringFilter<"Wish"> | string
    name?: StringFilter<"Wish"> | string
    price?: FloatNullableFilter<"Wish"> | number | null
    notes?: StringNullableFilter<"Wish"> | string | null
    link?: StringNullableFilter<"Wish"> | string | null
    order?: IntFilter<"Wish"> | number
    createdAt?: DateTimeFilter<"Wish"> | Date | string
    updatedAt?: DateTimeFilter<"Wish"> | Date | string
    userId?: StringFilter<"Wish"> | string
    groupId?: StringNullableFilter<"Wish"> | string | null
  }

  export type GiftUpsertWithWhereUniqueWithoutUserInput = {
    where: GiftWhereUniqueInput
    update: XOR<GiftUpdateWithoutUserInput, GiftUncheckedUpdateWithoutUserInput>
    create: XOR<GiftCreateWithoutUserInput, GiftUncheckedCreateWithoutUserInput>
  }

  export type GiftUpdateWithWhereUniqueWithoutUserInput = {
    where: GiftWhereUniqueInput
    data: XOR<GiftUpdateWithoutUserInput, GiftUncheckedUpdateWithoutUserInput>
  }

  export type GiftUpdateManyWithWhereWithoutUserInput = {
    where: GiftScalarWhereInput
    data: XOR<GiftUpdateManyMutationInput, GiftUncheckedUpdateManyWithoutUserInput>
  }

  export type GiftScalarWhereInput = {
    AND?: GiftScalarWhereInput | GiftScalarWhereInput[]
    OR?: GiftScalarWhereInput[]
    NOT?: GiftScalarWhereInput | GiftScalarWhereInput[]
    id?: StringFilter<"Gift"> | string
    name?: StringFilter<"Gift"> | string
    price?: FloatNullableFilter<"Gift"> | number | null
    toWho?: StringNullableFilter<"Gift"> | string | null
    notes?: StringNullableFilter<"Gift"> | string | null
    order?: IntFilter<"Gift"> | number
    createdAt?: DateTimeFilter<"Gift"> | Date | string
    updatedAt?: DateTimeFilter<"Gift"> | Date | string
    userId?: StringFilter<"Gift"> | string
    groupId?: StringNullableFilter<"Gift"> | string | null
  }

  export type DoubtUpsertWithWhereUniqueWithoutUserInput = {
    where: DoubtWhereUniqueInput
    update: XOR<DoubtUpdateWithoutUserInput, DoubtUncheckedUpdateWithoutUserInput>
    create: XOR<DoubtCreateWithoutUserInput, DoubtUncheckedCreateWithoutUserInput>
  }

  export type DoubtUpdateWithWhereUniqueWithoutUserInput = {
    where: DoubtWhereUniqueInput
    data: XOR<DoubtUpdateWithoutUserInput, DoubtUncheckedUpdateWithoutUserInput>
  }

  export type DoubtUpdateManyWithWhereWithoutUserInput = {
    where: DoubtScalarWhereInput
    data: XOR<DoubtUpdateManyMutationInput, DoubtUncheckedUpdateManyWithoutUserInput>
  }

  export type DoubtScalarWhereInput = {
    AND?: DoubtScalarWhereInput | DoubtScalarWhereInput[]
    OR?: DoubtScalarWhereInput[]
    NOT?: DoubtScalarWhereInput | DoubtScalarWhereInput[]
    id?: StringFilter<"Doubt"> | string
    toWho?: StringFilter<"Doubt"> | string
    doubt?: BoolFilter<"Doubt"> | boolean
    amount?: FloatFilter<"Doubt"> | number
    wasPay?: BoolFilter<"Doubt"> | boolean
    createdAt?: DateTimeFilter<"Doubt"> | Date | string
    updatedAt?: DateTimeFilter<"Doubt"> | Date | string
    userId?: StringFilter<"Doubt"> | string
  }

  export type GroupUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutUserInput, GroupUncheckedUpdateWithoutUserInput>
    create: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutUserInput, GroupUncheckedUpdateWithoutUserInput>
  }

  export type GroupUpdateManyWithWhereWithoutUserInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    type?: StringFilter<"Group"> | string
    order?: IntFilter<"Group"> | number
    userId?: StringFilter<"Group"> | string
  }

  export type UserCreateWithoutTagsInput = {
    id?: string
    name: string
    password: string
    bio?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: RecordCreateNestedManyWithoutUserInput
    wishes?: WishCreateNestedManyWithoutUserInput
    gifts?: GiftCreateNestedManyWithoutUserInput
    doubts?: DoubtCreateNestedManyWithoutUserInput
    groups?: GroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    password: string
    bio?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: RecordUncheckedCreateNestedManyWithoutUserInput
    wishes?: WishUncheckedCreateNestedManyWithoutUserInput
    gifts?: GiftUncheckedCreateNestedManyWithoutUserInput
    doubts?: DoubtUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
  }

  export type RecordCreateWithoutTagsInput = {
    id?: string
    name: string
    price?: number | null
    notes?: string | null
    buyDate?: Date | string | null
    isIncome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRecordsInput
  }

  export type RecordUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    price?: number | null
    notes?: string | null
    buyDate?: Date | string | null
    isIncome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type RecordCreateOrConnectWithoutTagsInput = {
    where: RecordWhereUniqueInput
    create: XOR<RecordCreateWithoutTagsInput, RecordUncheckedCreateWithoutTagsInput>
  }

  export type UserUpsertWithoutTagsInput = {
    update: XOR<UserUpdateWithoutTagsInput, UserUncheckedUpdateWithoutTagsInput>
    create: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTagsInput, UserUncheckedUpdateWithoutTagsInput>
  }

  export type UserUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: RecordUpdateManyWithoutUserNestedInput
    wishes?: WishUpdateManyWithoutUserNestedInput
    gifts?: GiftUpdateManyWithoutUserNestedInput
    doubts?: DoubtUpdateManyWithoutUserNestedInput
    groups?: GroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: RecordUncheckedUpdateManyWithoutUserNestedInput
    wishes?: WishUncheckedUpdateManyWithoutUserNestedInput
    gifts?: GiftUncheckedUpdateManyWithoutUserNestedInput
    doubts?: DoubtUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RecordUpsertWithWhereUniqueWithoutTagsInput = {
    where: RecordWhereUniqueInput
    update: XOR<RecordUpdateWithoutTagsInput, RecordUncheckedUpdateWithoutTagsInput>
    create: XOR<RecordCreateWithoutTagsInput, RecordUncheckedCreateWithoutTagsInput>
  }

  export type RecordUpdateWithWhereUniqueWithoutTagsInput = {
    where: RecordWhereUniqueInput
    data: XOR<RecordUpdateWithoutTagsInput, RecordUncheckedUpdateWithoutTagsInput>
  }

  export type RecordUpdateManyWithWhereWithoutTagsInput = {
    where: RecordScalarWhereInput
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyWithoutTagsInput>
  }

  export type UserCreateWithoutRecordsInput = {
    id?: string
    name: string
    password: string
    bio?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagCreateNestedManyWithoutUserInput
    wishes?: WishCreateNestedManyWithoutUserInput
    gifts?: GiftCreateNestedManyWithoutUserInput
    doubts?: DoubtCreateNestedManyWithoutUserInput
    groups?: GroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecordsInput = {
    id?: string
    name: string
    password: string
    bio?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    wishes?: WishUncheckedCreateNestedManyWithoutUserInput
    gifts?: GiftUncheckedCreateNestedManyWithoutUserInput
    doubts?: DoubtUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
  }

  export type TagCreateWithoutRecordsInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutRecordsInput = {
    id?: string
    name: string
    userId: string
  }

  export type TagCreateOrConnectWithoutRecordsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutRecordsInput, TagUncheckedCreateWithoutRecordsInput>
  }

  export type UserUpsertWithoutRecordsInput = {
    update: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
  }

  export type UserUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutUserNestedInput
    wishes?: WishUpdateManyWithoutUserNestedInput
    gifts?: GiftUpdateManyWithoutUserNestedInput
    doubts?: DoubtUpdateManyWithoutUserNestedInput
    groups?: GroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    wishes?: WishUncheckedUpdateManyWithoutUserNestedInput
    gifts?: GiftUncheckedUpdateManyWithoutUserNestedInput
    doubts?: DoubtUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TagUpsertWithWhereUniqueWithoutRecordsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutRecordsInput, TagUncheckedUpdateWithoutRecordsInput>
    create: XOR<TagCreateWithoutRecordsInput, TagUncheckedCreateWithoutRecordsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutRecordsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutRecordsInput, TagUncheckedUpdateWithoutRecordsInput>
  }

  export type TagUpdateManyWithWhereWithoutRecordsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutRecordsInput>
  }

  export type UserCreateWithoutGroupsInput = {
    id?: string
    name: string
    password: string
    bio?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagCreateNestedManyWithoutUserInput
    records?: RecordCreateNestedManyWithoutUserInput
    wishes?: WishCreateNestedManyWithoutUserInput
    gifts?: GiftCreateNestedManyWithoutUserInput
    doubts?: DoubtCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    password: string
    bio?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    records?: RecordUncheckedCreateNestedManyWithoutUserInput
    wishes?: WishUncheckedCreateNestedManyWithoutUserInput
    gifts?: GiftUncheckedCreateNestedManyWithoutUserInput
    doubts?: DoubtUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type WishCreateWithoutGroupInput = {
    id?: string
    name: string
    price?: number | null
    notes?: string | null
    link?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWishesInput
  }

  export type WishUncheckedCreateWithoutGroupInput = {
    id?: string
    name: string
    price?: number | null
    notes?: string | null
    link?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type WishCreateOrConnectWithoutGroupInput = {
    where: WishWhereUniqueInput
    create: XOR<WishCreateWithoutGroupInput, WishUncheckedCreateWithoutGroupInput>
  }

  export type WishCreateManyGroupInputEnvelope = {
    data: WishCreateManyGroupInput | WishCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GiftCreateWithoutGroupInput = {
    id?: string
    name: string
    price?: number | null
    toWho?: string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGiftsInput
  }

  export type GiftUncheckedCreateWithoutGroupInput = {
    id?: string
    name: string
    price?: number | null
    toWho?: string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type GiftCreateOrConnectWithoutGroupInput = {
    where: GiftWhereUniqueInput
    create: XOR<GiftCreateWithoutGroupInput, GiftUncheckedCreateWithoutGroupInput>
  }

  export type GiftCreateManyGroupInputEnvelope = {
    data: GiftCreateManyGroupInput | GiftCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGroupsInput = {
    update: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type UserUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutUserNestedInput
    records?: RecordUpdateManyWithoutUserNestedInput
    wishes?: WishUpdateManyWithoutUserNestedInput
    gifts?: GiftUpdateManyWithoutUserNestedInput
    doubts?: DoubtUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    records?: RecordUncheckedUpdateManyWithoutUserNestedInput
    wishes?: WishUncheckedUpdateManyWithoutUserNestedInput
    gifts?: GiftUncheckedUpdateManyWithoutUserNestedInput
    doubts?: DoubtUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WishUpsertWithWhereUniqueWithoutGroupInput = {
    where: WishWhereUniqueInput
    update: XOR<WishUpdateWithoutGroupInput, WishUncheckedUpdateWithoutGroupInput>
    create: XOR<WishCreateWithoutGroupInput, WishUncheckedCreateWithoutGroupInput>
  }

  export type WishUpdateWithWhereUniqueWithoutGroupInput = {
    where: WishWhereUniqueInput
    data: XOR<WishUpdateWithoutGroupInput, WishUncheckedUpdateWithoutGroupInput>
  }

  export type WishUpdateManyWithWhereWithoutGroupInput = {
    where: WishScalarWhereInput
    data: XOR<WishUpdateManyMutationInput, WishUncheckedUpdateManyWithoutGroupInput>
  }

  export type GiftUpsertWithWhereUniqueWithoutGroupInput = {
    where: GiftWhereUniqueInput
    update: XOR<GiftUpdateWithoutGroupInput, GiftUncheckedUpdateWithoutGroupInput>
    create: XOR<GiftCreateWithoutGroupInput, GiftUncheckedCreateWithoutGroupInput>
  }

  export type GiftUpdateWithWhereUniqueWithoutGroupInput = {
    where: GiftWhereUniqueInput
    data: XOR<GiftUpdateWithoutGroupInput, GiftUncheckedUpdateWithoutGroupInput>
  }

  export type GiftUpdateManyWithWhereWithoutGroupInput = {
    where: GiftScalarWhereInput
    data: XOR<GiftUpdateManyMutationInput, GiftUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserCreateWithoutWishesInput = {
    id?: string
    name: string
    password: string
    bio?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagCreateNestedManyWithoutUserInput
    records?: RecordCreateNestedManyWithoutUserInput
    gifts?: GiftCreateNestedManyWithoutUserInput
    doubts?: DoubtCreateNestedManyWithoutUserInput
    groups?: GroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWishesInput = {
    id?: string
    name: string
    password: string
    bio?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    records?: RecordUncheckedCreateNestedManyWithoutUserInput
    gifts?: GiftUncheckedCreateNestedManyWithoutUserInput
    doubts?: DoubtUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWishesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWishesInput, UserUncheckedCreateWithoutWishesInput>
  }

  export type GroupCreateWithoutWishesInput = {
    id?: string
    name: string
    type: string
    order?: number
    user: UserCreateNestedOneWithoutGroupsInput
    gifts?: GiftCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutWishesInput = {
    id?: string
    name: string
    type: string
    order?: number
    userId: string
    gifts?: GiftUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutWishesInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutWishesInput, GroupUncheckedCreateWithoutWishesInput>
  }

  export type UserUpsertWithoutWishesInput = {
    update: XOR<UserUpdateWithoutWishesInput, UserUncheckedUpdateWithoutWishesInput>
    create: XOR<UserCreateWithoutWishesInput, UserUncheckedCreateWithoutWishesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWishesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWishesInput, UserUncheckedUpdateWithoutWishesInput>
  }

  export type UserUpdateWithoutWishesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutUserNestedInput
    records?: RecordUpdateManyWithoutUserNestedInput
    gifts?: GiftUpdateManyWithoutUserNestedInput
    doubts?: DoubtUpdateManyWithoutUserNestedInput
    groups?: GroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWishesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    records?: RecordUncheckedUpdateManyWithoutUserNestedInput
    gifts?: GiftUncheckedUpdateManyWithoutUserNestedInput
    doubts?: DoubtUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupUpsertWithoutWishesInput = {
    update: XOR<GroupUpdateWithoutWishesInput, GroupUncheckedUpdateWithoutWishesInput>
    create: XOR<GroupCreateWithoutWishesInput, GroupUncheckedCreateWithoutWishesInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutWishesInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutWishesInput, GroupUncheckedUpdateWithoutWishesInput>
  }

  export type GroupUpdateWithoutWishesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
    gifts?: GiftUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutWishesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gifts?: GiftUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserCreateWithoutGiftsInput = {
    id?: string
    name: string
    password: string
    bio?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagCreateNestedManyWithoutUserInput
    records?: RecordCreateNestedManyWithoutUserInput
    wishes?: WishCreateNestedManyWithoutUserInput
    doubts?: DoubtCreateNestedManyWithoutUserInput
    groups?: GroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGiftsInput = {
    id?: string
    name: string
    password: string
    bio?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    records?: RecordUncheckedCreateNestedManyWithoutUserInput
    wishes?: WishUncheckedCreateNestedManyWithoutUserInput
    doubts?: DoubtUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGiftsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGiftsInput, UserUncheckedCreateWithoutGiftsInput>
  }

  export type GroupCreateWithoutGiftsInput = {
    id?: string
    name: string
    type: string
    order?: number
    user: UserCreateNestedOneWithoutGroupsInput
    wishes?: WishCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutGiftsInput = {
    id?: string
    name: string
    type: string
    order?: number
    userId: string
    wishes?: WishUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutGiftsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutGiftsInput, GroupUncheckedCreateWithoutGiftsInput>
  }

  export type UserUpsertWithoutGiftsInput = {
    update: XOR<UserUpdateWithoutGiftsInput, UserUncheckedUpdateWithoutGiftsInput>
    create: XOR<UserCreateWithoutGiftsInput, UserUncheckedCreateWithoutGiftsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGiftsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGiftsInput, UserUncheckedUpdateWithoutGiftsInput>
  }

  export type UserUpdateWithoutGiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutUserNestedInput
    records?: RecordUpdateManyWithoutUserNestedInput
    wishes?: WishUpdateManyWithoutUserNestedInput
    doubts?: DoubtUpdateManyWithoutUserNestedInput
    groups?: GroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    records?: RecordUncheckedUpdateManyWithoutUserNestedInput
    wishes?: WishUncheckedUpdateManyWithoutUserNestedInput
    doubts?: DoubtUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupUpsertWithoutGiftsInput = {
    update: XOR<GroupUpdateWithoutGiftsInput, GroupUncheckedUpdateWithoutGiftsInput>
    create: XOR<GroupCreateWithoutGiftsInput, GroupUncheckedCreateWithoutGiftsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutGiftsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutGiftsInput, GroupUncheckedUpdateWithoutGiftsInput>
  }

  export type GroupUpdateWithoutGiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
    wishes?: WishUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutGiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    wishes?: WishUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserCreateWithoutDoubtsInput = {
    id?: string
    name: string
    password: string
    bio?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagCreateNestedManyWithoutUserInput
    records?: RecordCreateNestedManyWithoutUserInput
    wishes?: WishCreateNestedManyWithoutUserInput
    gifts?: GiftCreateNestedManyWithoutUserInput
    groups?: GroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDoubtsInput = {
    id?: string
    name: string
    password: string
    bio?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    records?: RecordUncheckedCreateNestedManyWithoutUserInput
    wishes?: WishUncheckedCreateNestedManyWithoutUserInput
    gifts?: GiftUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDoubtsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoubtsInput, UserUncheckedCreateWithoutDoubtsInput>
  }

  export type UserUpsertWithoutDoubtsInput = {
    update: XOR<UserUpdateWithoutDoubtsInput, UserUncheckedUpdateWithoutDoubtsInput>
    create: XOR<UserCreateWithoutDoubtsInput, UserUncheckedCreateWithoutDoubtsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoubtsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoubtsInput, UserUncheckedUpdateWithoutDoubtsInput>
  }

  export type UserUpdateWithoutDoubtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutUserNestedInput
    records?: RecordUpdateManyWithoutUserNestedInput
    wishes?: WishUpdateManyWithoutUserNestedInput
    gifts?: GiftUpdateManyWithoutUserNestedInput
    groups?: GroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDoubtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    records?: RecordUncheckedUpdateManyWithoutUserNestedInput
    wishes?: WishUncheckedUpdateManyWithoutUserNestedInput
    gifts?: GiftUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TagCreateManyUserInput = {
    id?: string
    name: string
  }

  export type RecordCreateManyUserInput = {
    id?: string
    name: string
    price?: number | null
    notes?: string | null
    buyDate?: Date | string | null
    isIncome?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WishCreateManyUserInput = {
    id?: string
    name: string
    price?: number | null
    notes?: string | null
    link?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groupId?: string | null
  }

  export type GiftCreateManyUserInput = {
    id?: string
    name: string
    price?: number | null
    toWho?: string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groupId?: string | null
  }

  export type DoubtCreateManyUserInput = {
    id?: string
    toWho: string
    doubt: boolean
    amount: number
    wasPay?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupCreateManyUserInput = {
    id?: string
    name: string
    type: string
    order?: number
  }

  export type TagUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    records?: RecordUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    records?: RecordUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    buyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isIncome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutRecordsNestedInput
  }

  export type RecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    buyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isIncome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutRecordsNestedInput
  }

  export type RecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    buyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isIncome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutWishesNestedInput
  }

  export type WishUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WishUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GiftUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    toWho?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutGiftsNestedInput
  }

  export type GiftUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    toWho?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GiftUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    toWho?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoubtUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toWho?: StringFieldUpdateOperationsInput | string
    doubt?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    wasPay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoubtUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toWho?: StringFieldUpdateOperationsInput | string
    doubt?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    wasPay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoubtUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toWho?: StringFieldUpdateOperationsInput | string
    doubt?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    wasPay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    wishes?: WishUpdateManyWithoutGroupNestedInput
    gifts?: GiftUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    wishes?: WishUncheckedUpdateManyWithoutGroupNestedInput
    gifts?: GiftUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RecordUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    buyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isIncome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type RecordUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    buyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isIncome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RecordUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    buyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isIncome?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TagUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WishCreateManyGroupInput = {
    id?: string
    name: string
    price?: number | null
    notes?: string | null
    link?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type GiftCreateManyGroupInput = {
    id?: string
    name: string
    price?: number | null
    toWho?: string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type WishUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWishesNestedInput
  }

  export type WishUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WishUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GiftUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    toWho?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGiftsNestedInput
  }

  export type GiftUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    toWho?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GiftUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    toWho?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}