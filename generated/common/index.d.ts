
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
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Obligation
 * 
 */
export type Obligation = $Result.DefaultSelection<Prisma.$ObligationPayload>
/**
 * Model Rule
 * 
 */
export type Rule = $Result.DefaultSelection<Prisma.$RulePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Scope: {
  FEDERAL: 'FEDERAL',
  STATE: 'STATE',
  CITY: 'CITY'
};

export type Scope = (typeof Scope)[keyof typeof Scope]


export const Category: {
  EMPLOYMENT: 'EMPLOYMENT',
  SAFETY: 'SAFETY',
  TAX: 'TAX',
  LICENSING: 'LICENSING',
  ACCESSIBILITY: 'ACCESSIBILITY',
  ENVIRONMENT: 'ENVIRONMENT',
  PRIVACY: 'PRIVACY',
  OTHER: 'OTHER'
};

export type Category = (typeof Category)[keyof typeof Category]


export const Severity: {
  REQUIRED: 'REQUIRED',
  RECOMMENDED: 'RECOMMENDED'
};

export type Severity = (typeof Severity)[keyof typeof Severity]


export const RuleStatus: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  DEPRECATED: 'DEPRECATED'
};

export type RuleStatus = (typeof RuleStatus)[keyof typeof RuleStatus]


export const QuestionKind: {
  NUMBER: 'NUMBER',
  BOOL: 'BOOL',
  TEXT: 'TEXT'
};

export type QuestionKind = (typeof QuestionKind)[keyof typeof QuestionKind]

}

export type Scope = $Enums.Scope

export const Scope: typeof $Enums.Scope

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type Severity = $Enums.Severity

export const Severity: typeof $Enums.Severity

export type RuleStatus = $Enums.RuleStatus

export const RuleStatus: typeof $Enums.RuleStatus

export type QuestionKind = $Enums.QuestionKind

export const QuestionKind: typeof $Enums.QuestionKind

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Questions
 * const questions = await prisma.question.findMany()
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
   * // Fetch zero or more Questions
   * const questions = await prisma.question.findMany()
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
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.obligation`: Exposes CRUD operations for the **Obligation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Obligations
    * const obligations = await prisma.obligation.findMany()
    * ```
    */
  get obligation(): Prisma.ObligationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rule`: Exposes CRUD operations for the **Rule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rules
    * const rules = await prisma.rule.findMany()
    * ```
    */
  get rule(): Prisma.RuleDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Question: 'Question',
    Obligation: 'Obligation',
    Rule: 'Rule'
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
      modelProps: "question" | "obligation" | "rule"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Obligation: {
        payload: Prisma.$ObligationPayload<ExtArgs>
        fields: Prisma.ObligationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObligationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObligationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload>
          }
          findFirst: {
            args: Prisma.ObligationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObligationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload>
          }
          findMany: {
            args: Prisma.ObligationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload>[]
          }
          create: {
            args: Prisma.ObligationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload>
          }
          createMany: {
            args: Prisma.ObligationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObligationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload>[]
          }
          delete: {
            args: Prisma.ObligationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload>
          }
          update: {
            args: Prisma.ObligationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload>
          }
          deleteMany: {
            args: Prisma.ObligationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObligationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObligationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload>[]
          }
          upsert: {
            args: Prisma.ObligationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload>
          }
          aggregate: {
            args: Prisma.ObligationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObligation>
          }
          groupBy: {
            args: Prisma.ObligationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObligationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObligationCountArgs<ExtArgs>
            result: $Utils.Optional<ObligationCountAggregateOutputType> | number
          }
        }
      }
      Rule: {
        payload: Prisma.$RulePayload<ExtArgs>
        fields: Prisma.RuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          findFirst: {
            args: Prisma.RuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          findMany: {
            args: Prisma.RuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          create: {
            args: Prisma.RuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          createMany: {
            args: Prisma.RuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          delete: {
            args: Prisma.RuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          update: {
            args: Prisma.RuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          deleteMany: {
            args: Prisma.RuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          upsert: {
            args: Prisma.RuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          aggregate: {
            args: Prisma.RuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRule>
          }
          groupBy: {
            args: Prisma.RuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RuleCountArgs<ExtArgs>
            result: $Utils.Optional<RuleCountAggregateOutputType> | number
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
    question?: QuestionOmit
    obligation?: ObligationOmit
    rule?: RuleOmit
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
   * Count Type ObligationCountOutputType
   */

  export type ObligationCountOutputType = {
    rules: number
  }

  export type ObligationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | ObligationCountOutputTypeCountRulesArgs
  }

  // Custom InputTypes
  /**
   * ObligationCountOutputType without action
   */
  export type ObligationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObligationCountOutputType
     */
    select?: ObligationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObligationCountOutputType without action
   */
  export type ObligationCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    scope: $Enums.Scope | null
    location: string | null
    code: string | null
    kind: $Enums.QuestionKind | null
    prompt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    scope: $Enums.Scope | null
    location: string | null
    code: string | null
    kind: $Enums.QuestionKind | null
    prompt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    scope: number
    location: number
    code: number
    kind: number
    prompt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    scope?: true
    location?: true
    code?: true
    kind?: true
    prompt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    scope?: true
    location?: true
    code?: true
    kind?: true
    prompt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    scope?: true
    location?: true
    code?: true
    kind?: true
    prompt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: number
    scope: $Enums.Scope
    location: string | null
    code: string
    kind: $Enums.QuestionKind
    prompt: string
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    location?: boolean
    code?: boolean
    kind?: boolean
    prompt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    location?: boolean
    code?: boolean
    kind?: boolean
    prompt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    location?: boolean
    code?: boolean
    kind?: boolean
    prompt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    scope?: boolean
    location?: boolean
    code?: boolean
    kind?: boolean
    prompt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scope" | "location" | "code" | "kind" | "prompt" | "createdAt" | "updatedAt", ExtArgs["result"]["question"]>

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      scope: $Enums.Scope
      location: string | null
      code: string
      kind: $Enums.QuestionKind
      prompt: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'Int'>
    readonly scope: FieldRef<"Question", 'Scope'>
    readonly location: FieldRef<"Question", 'String'>
    readonly code: FieldRef<"Question", 'String'>
    readonly kind: FieldRef<"Question", 'QuestionKind'>
    readonly prompt: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
  }


  /**
   * Model Obligation
   */

  export type AggregateObligation = {
    _count: ObligationCountAggregateOutputType | null
    _avg: ObligationAvgAggregateOutputType | null
    _sum: ObligationSumAggregateOutputType | null
    _min: ObligationMinAggregateOutputType | null
    _max: ObligationMaxAggregateOutputType | null
  }

  export type ObligationAvgAggregateOutputType = {
    id: number | null
  }

  export type ObligationSumAggregateOutputType = {
    id: number | null
  }

  export type ObligationMinAggregateOutputType = {
    id: number | null
    scope: $Enums.Scope | null
    location: string | null
    code: string | null
    title: string | null
    category: $Enums.Category | null
    severity: $Enums.Severity | null
    citation: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObligationMaxAggregateOutputType = {
    id: number | null
    scope: $Enums.Scope | null
    location: string | null
    code: string | null
    title: string | null
    category: $Enums.Category | null
    severity: $Enums.Severity | null
    citation: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObligationCountAggregateOutputType = {
    id: number
    scope: number
    location: number
    code: number
    title: number
    category: number
    severity: number
    citation: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ObligationAvgAggregateInputType = {
    id?: true
  }

  export type ObligationSumAggregateInputType = {
    id?: true
  }

  export type ObligationMinAggregateInputType = {
    id?: true
    scope?: true
    location?: true
    code?: true
    title?: true
    category?: true
    severity?: true
    citation?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObligationMaxAggregateInputType = {
    id?: true
    scope?: true
    location?: true
    code?: true
    title?: true
    category?: true
    severity?: true
    citation?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObligationCountAggregateInputType = {
    id?: true
    scope?: true
    location?: true
    code?: true
    title?: true
    category?: true
    severity?: true
    citation?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ObligationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obligation to aggregate.
     */
    where?: ObligationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obligations to fetch.
     */
    orderBy?: ObligationOrderByWithRelationInput | ObligationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObligationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obligations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obligations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Obligations
    **/
    _count?: true | ObligationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObligationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObligationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObligationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObligationMaxAggregateInputType
  }

  export type GetObligationAggregateType<T extends ObligationAggregateArgs> = {
        [P in keyof T & keyof AggregateObligation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObligation[P]>
      : GetScalarType<T[P], AggregateObligation[P]>
  }




  export type ObligationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObligationWhereInput
    orderBy?: ObligationOrderByWithAggregationInput | ObligationOrderByWithAggregationInput[]
    by: ObligationScalarFieldEnum[] | ObligationScalarFieldEnum
    having?: ObligationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObligationCountAggregateInputType | true
    _avg?: ObligationAvgAggregateInputType
    _sum?: ObligationSumAggregateInputType
    _min?: ObligationMinAggregateInputType
    _max?: ObligationMaxAggregateInputType
  }

  export type ObligationGroupByOutputType = {
    id: number
    scope: $Enums.Scope
    location: string | null
    code: string
    title: string
    category: $Enums.Category
    severity: $Enums.Severity
    citation: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: ObligationCountAggregateOutputType | null
    _avg: ObligationAvgAggregateOutputType | null
    _sum: ObligationSumAggregateOutputType | null
    _min: ObligationMinAggregateOutputType | null
    _max: ObligationMaxAggregateOutputType | null
  }

  type GetObligationGroupByPayload<T extends ObligationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObligationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObligationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObligationGroupByOutputType[P]>
            : GetScalarType<T[P], ObligationGroupByOutputType[P]>
        }
      >
    >


  export type ObligationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    location?: boolean
    code?: boolean
    title?: boolean
    category?: boolean
    severity?: boolean
    citation?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rules?: boolean | Obligation$rulesArgs<ExtArgs>
    _count?: boolean | ObligationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obligation"]>

  export type ObligationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    location?: boolean
    code?: boolean
    title?: boolean
    category?: boolean
    severity?: boolean
    citation?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["obligation"]>

  export type ObligationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    location?: boolean
    code?: boolean
    title?: boolean
    category?: boolean
    severity?: boolean
    citation?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["obligation"]>

  export type ObligationSelectScalar = {
    id?: boolean
    scope?: boolean
    location?: boolean
    code?: boolean
    title?: boolean
    category?: boolean
    severity?: boolean
    citation?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ObligationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scope" | "location" | "code" | "title" | "category" | "severity" | "citation" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["obligation"]>
  export type ObligationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | Obligation$rulesArgs<ExtArgs>
    _count?: boolean | ObligationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ObligationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ObligationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ObligationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Obligation"
    objects: {
      rules: Prisma.$RulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      scope: $Enums.Scope
      location: string | null
      code: string
      title: string
      category: $Enums.Category
      severity: $Enums.Severity
      citation: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["obligation"]>
    composites: {}
  }

  type ObligationGetPayload<S extends boolean | null | undefined | ObligationDefaultArgs> = $Result.GetResult<Prisma.$ObligationPayload, S>

  type ObligationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObligationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObligationCountAggregateInputType | true
    }

  export interface ObligationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Obligation'], meta: { name: 'Obligation' } }
    /**
     * Find zero or one Obligation that matches the filter.
     * @param {ObligationFindUniqueArgs} args - Arguments to find a Obligation
     * @example
     * // Get one Obligation
     * const obligation = await prisma.obligation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObligationFindUniqueArgs>(args: SelectSubset<T, ObligationFindUniqueArgs<ExtArgs>>): Prisma__ObligationClient<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Obligation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObligationFindUniqueOrThrowArgs} args - Arguments to find a Obligation
     * @example
     * // Get one Obligation
     * const obligation = await prisma.obligation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObligationFindUniqueOrThrowArgs>(args: SelectSubset<T, ObligationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObligationClient<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obligation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObligationFindFirstArgs} args - Arguments to find a Obligation
     * @example
     * // Get one Obligation
     * const obligation = await prisma.obligation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObligationFindFirstArgs>(args?: SelectSubset<T, ObligationFindFirstArgs<ExtArgs>>): Prisma__ObligationClient<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obligation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObligationFindFirstOrThrowArgs} args - Arguments to find a Obligation
     * @example
     * // Get one Obligation
     * const obligation = await prisma.obligation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObligationFindFirstOrThrowArgs>(args?: SelectSubset<T, ObligationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObligationClient<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Obligations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObligationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Obligations
     * const obligations = await prisma.obligation.findMany()
     * 
     * // Get first 10 Obligations
     * const obligations = await prisma.obligation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const obligationWithIdOnly = await prisma.obligation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObligationFindManyArgs>(args?: SelectSubset<T, ObligationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Obligation.
     * @param {ObligationCreateArgs} args - Arguments to create a Obligation.
     * @example
     * // Create one Obligation
     * const Obligation = await prisma.obligation.create({
     *   data: {
     *     // ... data to create a Obligation
     *   }
     * })
     * 
     */
    create<T extends ObligationCreateArgs>(args: SelectSubset<T, ObligationCreateArgs<ExtArgs>>): Prisma__ObligationClient<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Obligations.
     * @param {ObligationCreateManyArgs} args - Arguments to create many Obligations.
     * @example
     * // Create many Obligations
     * const obligation = await prisma.obligation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObligationCreateManyArgs>(args?: SelectSubset<T, ObligationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Obligations and returns the data saved in the database.
     * @param {ObligationCreateManyAndReturnArgs} args - Arguments to create many Obligations.
     * @example
     * // Create many Obligations
     * const obligation = await prisma.obligation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Obligations and only return the `id`
     * const obligationWithIdOnly = await prisma.obligation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObligationCreateManyAndReturnArgs>(args?: SelectSubset<T, ObligationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Obligation.
     * @param {ObligationDeleteArgs} args - Arguments to delete one Obligation.
     * @example
     * // Delete one Obligation
     * const Obligation = await prisma.obligation.delete({
     *   where: {
     *     // ... filter to delete one Obligation
     *   }
     * })
     * 
     */
    delete<T extends ObligationDeleteArgs>(args: SelectSubset<T, ObligationDeleteArgs<ExtArgs>>): Prisma__ObligationClient<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Obligation.
     * @param {ObligationUpdateArgs} args - Arguments to update one Obligation.
     * @example
     * // Update one Obligation
     * const obligation = await prisma.obligation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObligationUpdateArgs>(args: SelectSubset<T, ObligationUpdateArgs<ExtArgs>>): Prisma__ObligationClient<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Obligations.
     * @param {ObligationDeleteManyArgs} args - Arguments to filter Obligations to delete.
     * @example
     * // Delete a few Obligations
     * const { count } = await prisma.obligation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObligationDeleteManyArgs>(args?: SelectSubset<T, ObligationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obligations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObligationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Obligations
     * const obligation = await prisma.obligation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObligationUpdateManyArgs>(args: SelectSubset<T, ObligationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obligations and returns the data updated in the database.
     * @param {ObligationUpdateManyAndReturnArgs} args - Arguments to update many Obligations.
     * @example
     * // Update many Obligations
     * const obligation = await prisma.obligation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Obligations and only return the `id`
     * const obligationWithIdOnly = await prisma.obligation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ObligationUpdateManyAndReturnArgs>(args: SelectSubset<T, ObligationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Obligation.
     * @param {ObligationUpsertArgs} args - Arguments to update or create a Obligation.
     * @example
     * // Update or create a Obligation
     * const obligation = await prisma.obligation.upsert({
     *   create: {
     *     // ... data to create a Obligation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Obligation we want to update
     *   }
     * })
     */
    upsert<T extends ObligationUpsertArgs>(args: SelectSubset<T, ObligationUpsertArgs<ExtArgs>>): Prisma__ObligationClient<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Obligations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObligationCountArgs} args - Arguments to filter Obligations to count.
     * @example
     * // Count the number of Obligations
     * const count = await prisma.obligation.count({
     *   where: {
     *     // ... the filter for the Obligations we want to count
     *   }
     * })
    **/
    count<T extends ObligationCountArgs>(
      args?: Subset<T, ObligationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObligationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Obligation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObligationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ObligationAggregateArgs>(args: Subset<T, ObligationAggregateArgs>): Prisma.PrismaPromise<GetObligationAggregateType<T>>

    /**
     * Group by Obligation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObligationGroupByArgs} args - Group by arguments.
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
      T extends ObligationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObligationGroupByArgs['orderBy'] }
        : { orderBy?: ObligationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ObligationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObligationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Obligation model
   */
  readonly fields: ObligationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Obligation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObligationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rules<T extends Obligation$rulesArgs<ExtArgs> = {}>(args?: Subset<T, Obligation$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Obligation model
   */
  interface ObligationFieldRefs {
    readonly id: FieldRef<"Obligation", 'Int'>
    readonly scope: FieldRef<"Obligation", 'Scope'>
    readonly location: FieldRef<"Obligation", 'String'>
    readonly code: FieldRef<"Obligation", 'String'>
    readonly title: FieldRef<"Obligation", 'String'>
    readonly category: FieldRef<"Obligation", 'Category'>
    readonly severity: FieldRef<"Obligation", 'Severity'>
    readonly citation: FieldRef<"Obligation", 'String'>
    readonly description: FieldRef<"Obligation", 'String'>
    readonly createdAt: FieldRef<"Obligation", 'DateTime'>
    readonly updatedAt: FieldRef<"Obligation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Obligation findUnique
   */
  export type ObligationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obligation
     */
    omit?: ObligationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObligationInclude<ExtArgs> | null
    /**
     * Filter, which Obligation to fetch.
     */
    where: ObligationWhereUniqueInput
  }

  /**
   * Obligation findUniqueOrThrow
   */
  export type ObligationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obligation
     */
    omit?: ObligationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObligationInclude<ExtArgs> | null
    /**
     * Filter, which Obligation to fetch.
     */
    where: ObligationWhereUniqueInput
  }

  /**
   * Obligation findFirst
   */
  export type ObligationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obligation
     */
    omit?: ObligationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObligationInclude<ExtArgs> | null
    /**
     * Filter, which Obligation to fetch.
     */
    where?: ObligationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obligations to fetch.
     */
    orderBy?: ObligationOrderByWithRelationInput | ObligationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obligations.
     */
    cursor?: ObligationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obligations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obligations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obligations.
     */
    distinct?: ObligationScalarFieldEnum | ObligationScalarFieldEnum[]
  }

  /**
   * Obligation findFirstOrThrow
   */
  export type ObligationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obligation
     */
    omit?: ObligationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObligationInclude<ExtArgs> | null
    /**
     * Filter, which Obligation to fetch.
     */
    where?: ObligationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obligations to fetch.
     */
    orderBy?: ObligationOrderByWithRelationInput | ObligationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obligations.
     */
    cursor?: ObligationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obligations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obligations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obligations.
     */
    distinct?: ObligationScalarFieldEnum | ObligationScalarFieldEnum[]
  }

  /**
   * Obligation findMany
   */
  export type ObligationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obligation
     */
    omit?: ObligationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObligationInclude<ExtArgs> | null
    /**
     * Filter, which Obligations to fetch.
     */
    where?: ObligationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obligations to fetch.
     */
    orderBy?: ObligationOrderByWithRelationInput | ObligationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Obligations.
     */
    cursor?: ObligationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obligations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obligations.
     */
    skip?: number
    distinct?: ObligationScalarFieldEnum | ObligationScalarFieldEnum[]
  }

  /**
   * Obligation create
   */
  export type ObligationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obligation
     */
    omit?: ObligationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObligationInclude<ExtArgs> | null
    /**
     * The data needed to create a Obligation.
     */
    data: XOR<ObligationCreateInput, ObligationUncheckedCreateInput>
  }

  /**
   * Obligation createMany
   */
  export type ObligationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Obligations.
     */
    data: ObligationCreateManyInput | ObligationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Obligation createManyAndReturn
   */
  export type ObligationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Obligation
     */
    omit?: ObligationOmit<ExtArgs> | null
    /**
     * The data used to create many Obligations.
     */
    data: ObligationCreateManyInput | ObligationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Obligation update
   */
  export type ObligationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obligation
     */
    omit?: ObligationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObligationInclude<ExtArgs> | null
    /**
     * The data needed to update a Obligation.
     */
    data: XOR<ObligationUpdateInput, ObligationUncheckedUpdateInput>
    /**
     * Choose, which Obligation to update.
     */
    where: ObligationWhereUniqueInput
  }

  /**
   * Obligation updateMany
   */
  export type ObligationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Obligations.
     */
    data: XOR<ObligationUpdateManyMutationInput, ObligationUncheckedUpdateManyInput>
    /**
     * Filter which Obligations to update
     */
    where?: ObligationWhereInput
    /**
     * Limit how many Obligations to update.
     */
    limit?: number
  }

  /**
   * Obligation updateManyAndReturn
   */
  export type ObligationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Obligation
     */
    omit?: ObligationOmit<ExtArgs> | null
    /**
     * The data used to update Obligations.
     */
    data: XOR<ObligationUpdateManyMutationInput, ObligationUncheckedUpdateManyInput>
    /**
     * Filter which Obligations to update
     */
    where?: ObligationWhereInput
    /**
     * Limit how many Obligations to update.
     */
    limit?: number
  }

  /**
   * Obligation upsert
   */
  export type ObligationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obligation
     */
    omit?: ObligationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObligationInclude<ExtArgs> | null
    /**
     * The filter to search for the Obligation to update in case it exists.
     */
    where: ObligationWhereUniqueInput
    /**
     * In case the Obligation found by the `where` argument doesn't exist, create a new Obligation with this data.
     */
    create: XOR<ObligationCreateInput, ObligationUncheckedCreateInput>
    /**
     * In case the Obligation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObligationUpdateInput, ObligationUncheckedUpdateInput>
  }

  /**
   * Obligation delete
   */
  export type ObligationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obligation
     */
    omit?: ObligationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObligationInclude<ExtArgs> | null
    /**
     * Filter which Obligation to delete.
     */
    where: ObligationWhereUniqueInput
  }

  /**
   * Obligation deleteMany
   */
  export type ObligationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obligations to delete
     */
    where?: ObligationWhereInput
    /**
     * Limit how many Obligations to delete.
     */
    limit?: number
  }

  /**
   * Obligation.rules
   */
  export type Obligation$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    where?: RuleWhereInput
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    cursor?: RuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Obligation without action
   */
  export type ObligationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obligation
     */
    omit?: ObligationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObligationInclude<ExtArgs> | null
  }


  /**
   * Model Rule
   */

  export type AggregateRule = {
    _count: RuleCountAggregateOutputType | null
    _avg: RuleAvgAggregateOutputType | null
    _sum: RuleSumAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  export type RuleAvgAggregateOutputType = {
    id: number | null
    obligationId: number | null
  }

  export type RuleSumAggregateOutputType = {
    id: number | null
    obligationId: number | null
  }

  export type RuleMinAggregateOutputType = {
    id: number | null
    scope: $Enums.Scope | null
    location: string | null
    obligationId: number | null
    status: $Enums.RuleStatus | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RuleMaxAggregateOutputType = {
    id: number | null
    scope: $Enums.Scope | null
    location: string | null
    obligationId: number | null
    status: $Enums.RuleStatus | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RuleCountAggregateOutputType = {
    id: number
    scope: number
    location: number
    obligationId: number
    status: number
    effectiveFrom: number
    effectiveTo: number
    predicate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RuleAvgAggregateInputType = {
    id?: true
    obligationId?: true
  }

  export type RuleSumAggregateInputType = {
    id?: true
    obligationId?: true
  }

  export type RuleMinAggregateInputType = {
    id?: true
    scope?: true
    location?: true
    obligationId?: true
    status?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RuleMaxAggregateInputType = {
    id?: true
    scope?: true
    location?: true
    obligationId?: true
    status?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RuleCountAggregateInputType = {
    id?: true
    scope?: true
    location?: true
    obligationId?: true
    status?: true
    effectiveFrom?: true
    effectiveTo?: true
    predicate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rule to aggregate.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rules
    **/
    _count?: true | RuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuleMaxAggregateInputType
  }

  export type GetRuleAggregateType<T extends RuleAggregateArgs> = {
        [P in keyof T & keyof AggregateRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRule[P]>
      : GetScalarType<T[P], AggregateRule[P]>
  }




  export type RuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleWhereInput
    orderBy?: RuleOrderByWithAggregationInput | RuleOrderByWithAggregationInput[]
    by: RuleScalarFieldEnum[] | RuleScalarFieldEnum
    having?: RuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuleCountAggregateInputType | true
    _avg?: RuleAvgAggregateInputType
    _sum?: RuleSumAggregateInputType
    _min?: RuleMinAggregateInputType
    _max?: RuleMaxAggregateInputType
  }

  export type RuleGroupByOutputType = {
    id: number
    scope: $Enums.Scope
    location: string | null
    obligationId: number
    status: $Enums.RuleStatus
    effectiveFrom: Date
    effectiveTo: Date | null
    predicate: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: RuleCountAggregateOutputType | null
    _avg: RuleAvgAggregateOutputType | null
    _sum: RuleSumAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  type GetRuleGroupByPayload<T extends RuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuleGroupByOutputType[P]>
            : GetScalarType<T[P], RuleGroupByOutputType[P]>
        }
      >
    >


  export type RuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    location?: boolean
    obligationId?: boolean
    status?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    predicate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    obligation?: boolean | ObligationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    location?: boolean
    obligationId?: boolean
    status?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    predicate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    obligation?: boolean | ObligationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    location?: boolean
    obligationId?: boolean
    status?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    predicate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    obligation?: boolean | ObligationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectScalar = {
    id?: boolean
    scope?: boolean
    location?: boolean
    obligationId?: boolean
    status?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    predicate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scope" | "location" | "obligationId" | "status" | "effectiveFrom" | "effectiveTo" | "predicate" | "createdAt" | "updatedAt", ExtArgs["result"]["rule"]>
  export type RuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obligation?: boolean | ObligationDefaultArgs<ExtArgs>
  }
  export type RuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obligation?: boolean | ObligationDefaultArgs<ExtArgs>
  }
  export type RuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obligation?: boolean | ObligationDefaultArgs<ExtArgs>
  }

  export type $RulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rule"
    objects: {
      obligation: Prisma.$ObligationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      scope: $Enums.Scope
      location: string | null
      obligationId: number
      status: $Enums.RuleStatus
      effectiveFrom: Date
      effectiveTo: Date | null
      predicate: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rule"]>
    composites: {}
  }

  type RuleGetPayload<S extends boolean | null | undefined | RuleDefaultArgs> = $Result.GetResult<Prisma.$RulePayload, S>

  type RuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuleCountAggregateInputType | true
    }

  export interface RuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rule'], meta: { name: 'Rule' } }
    /**
     * Find zero or one Rule that matches the filter.
     * @param {RuleFindUniqueArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RuleFindUniqueArgs>(args: SelectSubset<T, RuleFindUniqueArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RuleFindUniqueOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RuleFindUniqueOrThrowArgs>(args: SelectSubset<T, RuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindFirstArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RuleFindFirstArgs>(args?: SelectSubset<T, RuleFindFirstArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindFirstOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RuleFindFirstOrThrowArgs>(args?: SelectSubset<T, RuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rules
     * const rules = await prisma.rule.findMany()
     * 
     * // Get first 10 Rules
     * const rules = await prisma.rule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ruleWithIdOnly = await prisma.rule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RuleFindManyArgs>(args?: SelectSubset<T, RuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rule.
     * @param {RuleCreateArgs} args - Arguments to create a Rule.
     * @example
     * // Create one Rule
     * const Rule = await prisma.rule.create({
     *   data: {
     *     // ... data to create a Rule
     *   }
     * })
     * 
     */
    create<T extends RuleCreateArgs>(args: SelectSubset<T, RuleCreateArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rules.
     * @param {RuleCreateManyArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rule = await prisma.rule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RuleCreateManyArgs>(args?: SelectSubset<T, RuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rules and returns the data saved in the database.
     * @param {RuleCreateManyAndReturnArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rule = await prisma.rule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rules and only return the `id`
     * const ruleWithIdOnly = await prisma.rule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RuleCreateManyAndReturnArgs>(args?: SelectSubset<T, RuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rule.
     * @param {RuleDeleteArgs} args - Arguments to delete one Rule.
     * @example
     * // Delete one Rule
     * const Rule = await prisma.rule.delete({
     *   where: {
     *     // ... filter to delete one Rule
     *   }
     * })
     * 
     */
    delete<T extends RuleDeleteArgs>(args: SelectSubset<T, RuleDeleteArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rule.
     * @param {RuleUpdateArgs} args - Arguments to update one Rule.
     * @example
     * // Update one Rule
     * const rule = await prisma.rule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RuleUpdateArgs>(args: SelectSubset<T, RuleUpdateArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rules.
     * @param {RuleDeleteManyArgs} args - Arguments to filter Rules to delete.
     * @example
     * // Delete a few Rules
     * const { count } = await prisma.rule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RuleDeleteManyArgs>(args?: SelectSubset<T, RuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rules
     * const rule = await prisma.rule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RuleUpdateManyArgs>(args: SelectSubset<T, RuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules and returns the data updated in the database.
     * @param {RuleUpdateManyAndReturnArgs} args - Arguments to update many Rules.
     * @example
     * // Update many Rules
     * const rule = await prisma.rule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rules and only return the `id`
     * const ruleWithIdOnly = await prisma.rule.updateManyAndReturn({
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
    updateManyAndReturn<T extends RuleUpdateManyAndReturnArgs>(args: SelectSubset<T, RuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rule.
     * @param {RuleUpsertArgs} args - Arguments to update or create a Rule.
     * @example
     * // Update or create a Rule
     * const rule = await prisma.rule.upsert({
     *   create: {
     *     // ... data to create a Rule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rule we want to update
     *   }
     * })
     */
    upsert<T extends RuleUpsertArgs>(args: SelectSubset<T, RuleUpsertArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleCountArgs} args - Arguments to filter Rules to count.
     * @example
     * // Count the number of Rules
     * const count = await prisma.rule.count({
     *   where: {
     *     // ... the filter for the Rules we want to count
     *   }
     * })
    **/
    count<T extends RuleCountArgs>(
      args?: Subset<T, RuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RuleAggregateArgs>(args: Subset<T, RuleAggregateArgs>): Prisma.PrismaPromise<GetRuleAggregateType<T>>

    /**
     * Group by Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleGroupByArgs} args - Group by arguments.
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
      T extends RuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RuleGroupByArgs['orderBy'] }
        : { orderBy?: RuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rule model
   */
  readonly fields: RuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    obligation<T extends ObligationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObligationDefaultArgs<ExtArgs>>): Prisma__ObligationClient<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rule model
   */
  interface RuleFieldRefs {
    readonly id: FieldRef<"Rule", 'Int'>
    readonly scope: FieldRef<"Rule", 'Scope'>
    readonly location: FieldRef<"Rule", 'String'>
    readonly obligationId: FieldRef<"Rule", 'Int'>
    readonly status: FieldRef<"Rule", 'RuleStatus'>
    readonly effectiveFrom: FieldRef<"Rule", 'DateTime'>
    readonly effectiveTo: FieldRef<"Rule", 'DateTime'>
    readonly predicate: FieldRef<"Rule", 'Json'>
    readonly createdAt: FieldRef<"Rule", 'DateTime'>
    readonly updatedAt: FieldRef<"Rule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rule findUnique
   */
  export type RuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule findUniqueOrThrow
   */
  export type RuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule findFirst
   */
  export type RuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule findFirstOrThrow
   */
  export type RuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule findMany
   */
  export type RuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rules to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule create
   */
  export type RuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Rule.
     */
    data: XOR<RuleCreateInput, RuleUncheckedCreateInput>
  }

  /**
   * Rule createMany
   */
  export type RuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rules.
     */
    data: RuleCreateManyInput | RuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rule createManyAndReturn
   */
  export type RuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * The data used to create many Rules.
     */
    data: RuleCreateManyInput | RuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rule update
   */
  export type RuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Rule.
     */
    data: XOR<RuleUpdateInput, RuleUncheckedUpdateInput>
    /**
     * Choose, which Rule to update.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule updateMany
   */
  export type RuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rules.
     */
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyInput>
    /**
     * Filter which Rules to update
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to update.
     */
    limit?: number
  }

  /**
   * Rule updateManyAndReturn
   */
  export type RuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * The data used to update Rules.
     */
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyInput>
    /**
     * Filter which Rules to update
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rule upsert
   */
  export type RuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Rule to update in case it exists.
     */
    where: RuleWhereUniqueInput
    /**
     * In case the Rule found by the `where` argument doesn't exist, create a new Rule with this data.
     */
    create: XOR<RuleCreateInput, RuleUncheckedCreateInput>
    /**
     * In case the Rule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RuleUpdateInput, RuleUncheckedUpdateInput>
  }

  /**
   * Rule delete
   */
  export type RuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter which Rule to delete.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule deleteMany
   */
  export type RuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rules to delete
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to delete.
     */
    limit?: number
  }

  /**
   * Rule without action
   */
  export type RuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
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


  export const QuestionScalarFieldEnum: {
    id: 'id',
    scope: 'scope',
    location: 'location',
    code: 'code',
    kind: 'kind',
    prompt: 'prompt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const ObligationScalarFieldEnum: {
    id: 'id',
    scope: 'scope',
    location: 'location',
    code: 'code',
    title: 'title',
    category: 'category',
    severity: 'severity',
    citation: 'citation',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ObligationScalarFieldEnum = (typeof ObligationScalarFieldEnum)[keyof typeof ObligationScalarFieldEnum]


  export const RuleScalarFieldEnum: {
    id: 'id',
    scope: 'scope',
    location: 'location',
    obligationId: 'obligationId',
    status: 'status',
    effectiveFrom: 'effectiveFrom',
    effectiveTo: 'effectiveTo',
    predicate: 'predicate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RuleScalarFieldEnum = (typeof RuleScalarFieldEnum)[keyof typeof RuleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Scope'
   */
  export type EnumScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Scope'>
    


  /**
   * Reference to a field of type 'Scope[]'
   */
  export type ListEnumScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Scope[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'QuestionKind'
   */
  export type EnumQuestionKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionKind'>
    


  /**
   * Reference to a field of type 'QuestionKind[]'
   */
  export type ListEnumQuestionKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionKind[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Severity'
   */
  export type EnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity'>
    


  /**
   * Reference to a field of type 'Severity[]'
   */
  export type ListEnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity[]'>
    


  /**
   * Reference to a field of type 'RuleStatus'
   */
  export type EnumRuleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RuleStatus'>
    


  /**
   * Reference to a field of type 'RuleStatus[]'
   */
  export type ListEnumRuleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RuleStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: IntFilter<"Question"> | number
    scope?: EnumScopeFilter<"Question"> | $Enums.Scope
    location?: StringNullableFilter<"Question"> | string | null
    code?: StringFilter<"Question"> | string
    kind?: EnumQuestionKindFilter<"Question"> | $Enums.QuestionKind
    prompt?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    scope?: SortOrder
    location?: SortOrderInput | SortOrder
    code?: SortOrder
    kind?: SortOrder
    prompt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    scope_location_code?: QuestionScopeLocationCodeCompoundUniqueInput
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    scope?: EnumScopeFilter<"Question"> | $Enums.Scope
    location?: StringNullableFilter<"Question"> | string | null
    code?: StringFilter<"Question"> | string
    kind?: EnumQuestionKindFilter<"Question"> | $Enums.QuestionKind
    prompt?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }, "id" | "scope_location_code">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    scope?: SortOrder
    location?: SortOrderInput | SortOrder
    code?: SortOrder
    kind?: SortOrder
    prompt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question"> | number
    scope?: EnumScopeWithAggregatesFilter<"Question"> | $Enums.Scope
    location?: StringNullableWithAggregatesFilter<"Question"> | string | null
    code?: StringWithAggregatesFilter<"Question"> | string
    kind?: EnumQuestionKindWithAggregatesFilter<"Question"> | $Enums.QuestionKind
    prompt?: StringWithAggregatesFilter<"Question"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type ObligationWhereInput = {
    AND?: ObligationWhereInput | ObligationWhereInput[]
    OR?: ObligationWhereInput[]
    NOT?: ObligationWhereInput | ObligationWhereInput[]
    id?: IntFilter<"Obligation"> | number
    scope?: EnumScopeFilter<"Obligation"> | $Enums.Scope
    location?: StringNullableFilter<"Obligation"> | string | null
    code?: StringFilter<"Obligation"> | string
    title?: StringFilter<"Obligation"> | string
    category?: EnumCategoryFilter<"Obligation"> | $Enums.Category
    severity?: EnumSeverityFilter<"Obligation"> | $Enums.Severity
    citation?: StringNullableFilter<"Obligation"> | string | null
    description?: StringNullableFilter<"Obligation"> | string | null
    createdAt?: DateTimeFilter<"Obligation"> | Date | string
    updatedAt?: DateTimeFilter<"Obligation"> | Date | string
    rules?: RuleListRelationFilter
  }

  export type ObligationOrderByWithRelationInput = {
    id?: SortOrder
    scope?: SortOrder
    location?: SortOrderInput | SortOrder
    code?: SortOrder
    title?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    citation?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rules?: RuleOrderByRelationAggregateInput
  }

  export type ObligationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    scope_location_code?: ObligationScopeLocationCodeCompoundUniqueInput
    AND?: ObligationWhereInput | ObligationWhereInput[]
    OR?: ObligationWhereInput[]
    NOT?: ObligationWhereInput | ObligationWhereInput[]
    scope?: EnumScopeFilter<"Obligation"> | $Enums.Scope
    location?: StringNullableFilter<"Obligation"> | string | null
    code?: StringFilter<"Obligation"> | string
    title?: StringFilter<"Obligation"> | string
    category?: EnumCategoryFilter<"Obligation"> | $Enums.Category
    severity?: EnumSeverityFilter<"Obligation"> | $Enums.Severity
    citation?: StringNullableFilter<"Obligation"> | string | null
    description?: StringNullableFilter<"Obligation"> | string | null
    createdAt?: DateTimeFilter<"Obligation"> | Date | string
    updatedAt?: DateTimeFilter<"Obligation"> | Date | string
    rules?: RuleListRelationFilter
  }, "id" | "scope_location_code">

  export type ObligationOrderByWithAggregationInput = {
    id?: SortOrder
    scope?: SortOrder
    location?: SortOrderInput | SortOrder
    code?: SortOrder
    title?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    citation?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ObligationCountOrderByAggregateInput
    _avg?: ObligationAvgOrderByAggregateInput
    _max?: ObligationMaxOrderByAggregateInput
    _min?: ObligationMinOrderByAggregateInput
    _sum?: ObligationSumOrderByAggregateInput
  }

  export type ObligationScalarWhereWithAggregatesInput = {
    AND?: ObligationScalarWhereWithAggregatesInput | ObligationScalarWhereWithAggregatesInput[]
    OR?: ObligationScalarWhereWithAggregatesInput[]
    NOT?: ObligationScalarWhereWithAggregatesInput | ObligationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Obligation"> | number
    scope?: EnumScopeWithAggregatesFilter<"Obligation"> | $Enums.Scope
    location?: StringNullableWithAggregatesFilter<"Obligation"> | string | null
    code?: StringWithAggregatesFilter<"Obligation"> | string
    title?: StringWithAggregatesFilter<"Obligation"> | string
    category?: EnumCategoryWithAggregatesFilter<"Obligation"> | $Enums.Category
    severity?: EnumSeverityWithAggregatesFilter<"Obligation"> | $Enums.Severity
    citation?: StringNullableWithAggregatesFilter<"Obligation"> | string | null
    description?: StringNullableWithAggregatesFilter<"Obligation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Obligation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Obligation"> | Date | string
  }

  export type RuleWhereInput = {
    AND?: RuleWhereInput | RuleWhereInput[]
    OR?: RuleWhereInput[]
    NOT?: RuleWhereInput | RuleWhereInput[]
    id?: IntFilter<"Rule"> | number
    scope?: EnumScopeFilter<"Rule"> | $Enums.Scope
    location?: StringNullableFilter<"Rule"> | string | null
    obligationId?: IntFilter<"Rule"> | number
    status?: EnumRuleStatusFilter<"Rule"> | $Enums.RuleStatus
    effectiveFrom?: DateTimeFilter<"Rule"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"Rule"> | Date | string | null
    predicate?: JsonFilter<"Rule">
    createdAt?: DateTimeFilter<"Rule"> | Date | string
    updatedAt?: DateTimeFilter<"Rule"> | Date | string
    obligation?: XOR<ObligationScalarRelationFilter, ObligationWhereInput>
  }

  export type RuleOrderByWithRelationInput = {
    id?: SortOrder
    scope?: SortOrder
    location?: SortOrderInput | SortOrder
    obligationId?: SortOrder
    status?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    predicate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    obligation?: ObligationOrderByWithRelationInput
  }

  export type RuleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RuleWhereInput | RuleWhereInput[]
    OR?: RuleWhereInput[]
    NOT?: RuleWhereInput | RuleWhereInput[]
    scope?: EnumScopeFilter<"Rule"> | $Enums.Scope
    location?: StringNullableFilter<"Rule"> | string | null
    obligationId?: IntFilter<"Rule"> | number
    status?: EnumRuleStatusFilter<"Rule"> | $Enums.RuleStatus
    effectiveFrom?: DateTimeFilter<"Rule"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"Rule"> | Date | string | null
    predicate?: JsonFilter<"Rule">
    createdAt?: DateTimeFilter<"Rule"> | Date | string
    updatedAt?: DateTimeFilter<"Rule"> | Date | string
    obligation?: XOR<ObligationScalarRelationFilter, ObligationWhereInput>
  }, "id">

  export type RuleOrderByWithAggregationInput = {
    id?: SortOrder
    scope?: SortOrder
    location?: SortOrderInput | SortOrder
    obligationId?: SortOrder
    status?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    predicate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RuleCountOrderByAggregateInput
    _avg?: RuleAvgOrderByAggregateInput
    _max?: RuleMaxOrderByAggregateInput
    _min?: RuleMinOrderByAggregateInput
    _sum?: RuleSumOrderByAggregateInput
  }

  export type RuleScalarWhereWithAggregatesInput = {
    AND?: RuleScalarWhereWithAggregatesInput | RuleScalarWhereWithAggregatesInput[]
    OR?: RuleScalarWhereWithAggregatesInput[]
    NOT?: RuleScalarWhereWithAggregatesInput | RuleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rule"> | number
    scope?: EnumScopeWithAggregatesFilter<"Rule"> | $Enums.Scope
    location?: StringNullableWithAggregatesFilter<"Rule"> | string | null
    obligationId?: IntWithAggregatesFilter<"Rule"> | number
    status?: EnumRuleStatusWithAggregatesFilter<"Rule"> | $Enums.RuleStatus
    effectiveFrom?: DateTimeWithAggregatesFilter<"Rule"> | Date | string
    effectiveTo?: DateTimeNullableWithAggregatesFilter<"Rule"> | Date | string | null
    predicate?: JsonWithAggregatesFilter<"Rule">
    createdAt?: DateTimeWithAggregatesFilter<"Rule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rule"> | Date | string
  }

  export type QuestionCreateInput = {
    scope: $Enums.Scope
    location?: string | null
    code: string
    kind: $Enums.QuestionKind
    prompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    scope: $Enums.Scope
    location?: string | null
    code: string
    kind: $Enums.QuestionKind
    prompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateInput = {
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    location?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    kind?: EnumQuestionKindFieldUpdateOperationsInput | $Enums.QuestionKind
    prompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    location?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    kind?: EnumQuestionKindFieldUpdateOperationsInput | $Enums.QuestionKind
    prompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyInput = {
    id?: number
    scope: $Enums.Scope
    location?: string | null
    code: string
    kind: $Enums.QuestionKind
    prompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    location?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    kind?: EnumQuestionKindFieldUpdateOperationsInput | $Enums.QuestionKind
    prompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    location?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    kind?: EnumQuestionKindFieldUpdateOperationsInput | $Enums.QuestionKind
    prompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObligationCreateInput = {
    scope: $Enums.Scope
    location?: string | null
    code: string
    title: string
    category: $Enums.Category
    severity?: $Enums.Severity
    citation?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rules?: RuleCreateNestedManyWithoutObligationInput
  }

  export type ObligationUncheckedCreateInput = {
    id?: number
    scope: $Enums.Scope
    location?: string | null
    code: string
    title: string
    category: $Enums.Category
    severity?: $Enums.Severity
    citation?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rules?: RuleUncheckedCreateNestedManyWithoutObligationInput
  }

  export type ObligationUpdateInput = {
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    location?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    citation?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: RuleUpdateManyWithoutObligationNestedInput
  }

  export type ObligationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    location?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    citation?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: RuleUncheckedUpdateManyWithoutObligationNestedInput
  }

  export type ObligationCreateManyInput = {
    id?: number
    scope: $Enums.Scope
    location?: string | null
    code: string
    title: string
    category: $Enums.Category
    severity?: $Enums.Severity
    citation?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObligationUpdateManyMutationInput = {
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    location?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    citation?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObligationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    location?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    citation?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuleCreateInput = {
    scope: $Enums.Scope
    location?: string | null
    status?: $Enums.RuleStatus
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    predicate: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    obligation: ObligationCreateNestedOneWithoutRulesInput
  }

  export type RuleUncheckedCreateInput = {
    id?: number
    scope: $Enums.Scope
    location?: string | null
    obligationId: number
    status?: $Enums.RuleStatus
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    predicate: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RuleUpdateInput = {
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRuleStatusFieldUpdateOperationsInput | $Enums.RuleStatus
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    predicate?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obligation?: ObligationUpdateOneRequiredWithoutRulesNestedInput
  }

  export type RuleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    location?: NullableStringFieldUpdateOperationsInput | string | null
    obligationId?: IntFieldUpdateOperationsInput | number
    status?: EnumRuleStatusFieldUpdateOperationsInput | $Enums.RuleStatus
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    predicate?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuleCreateManyInput = {
    id?: number
    scope: $Enums.Scope
    location?: string | null
    obligationId: number
    status?: $Enums.RuleStatus
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    predicate: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RuleUpdateManyMutationInput = {
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRuleStatusFieldUpdateOperationsInput | $Enums.RuleStatus
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    predicate?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    location?: NullableStringFieldUpdateOperationsInput | string | null
    obligationId?: IntFieldUpdateOperationsInput | number
    status?: EnumRuleStatusFieldUpdateOperationsInput | $Enums.RuleStatus
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    predicate?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.Scope | EnumScopeFieldRefInput<$PrismaModel>
    in?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumScopeFilter<$PrismaModel> | $Enums.Scope
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

  export type EnumQuestionKindFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionKind | EnumQuestionKindFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionKind[] | ListEnumQuestionKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionKind[] | ListEnumQuestionKindFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionKindFilter<$PrismaModel> | $Enums.QuestionKind
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuestionScopeLocationCodeCompoundUniqueInput = {
    scope: $Enums.Scope
    location: string
    code: string
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    location?: SortOrder
    code?: SortOrder
    kind?: SortOrder
    prompt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    location?: SortOrder
    code?: SortOrder
    kind?: SortOrder
    prompt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    location?: SortOrder
    code?: SortOrder
    kind?: SortOrder
    prompt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Scope | EnumScopeFieldRefInput<$PrismaModel>
    in?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumScopeWithAggregatesFilter<$PrismaModel> | $Enums.Scope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScopeFilter<$PrismaModel>
    _max?: NestedEnumScopeFilter<$PrismaModel>
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

  export type EnumQuestionKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionKind | EnumQuestionKindFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionKind[] | ListEnumQuestionKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionKind[] | ListEnumQuestionKindFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionKindWithAggregatesFilter<$PrismaModel> | $Enums.QuestionKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionKindFilter<$PrismaModel>
    _max?: NestedEnumQuestionKindFilter<$PrismaModel>
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

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type EnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type RuleListRelationFilter = {
    every?: RuleWhereInput
    some?: RuleWhereInput
    none?: RuleWhereInput
  }

  export type RuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObligationScopeLocationCodeCompoundUniqueInput = {
    scope: $Enums.Scope
    location: string
    code: string
  }

  export type ObligationCountOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    location?: SortOrder
    code?: SortOrder
    title?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    citation?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObligationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ObligationMaxOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    location?: SortOrder
    code?: SortOrder
    title?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    citation?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObligationMinOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    location?: SortOrder
    code?: SortOrder
    title?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    citation?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObligationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type EnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type EnumRuleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleStatus | EnumRuleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RuleStatus[] | ListEnumRuleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleStatus[] | ListEnumRuleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleStatusFilter<$PrismaModel> | $Enums.RuleStatus
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ObligationScalarRelationFilter = {
    is?: ObligationWhereInput
    isNot?: ObligationWhereInput
  }

  export type RuleCountOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    location?: SortOrder
    obligationId?: SortOrder
    status?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    predicate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RuleAvgOrderByAggregateInput = {
    id?: SortOrder
    obligationId?: SortOrder
  }

  export type RuleMaxOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    location?: SortOrder
    obligationId?: SortOrder
    status?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RuleMinOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    location?: SortOrder
    obligationId?: SortOrder
    status?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RuleSumOrderByAggregateInput = {
    id?: SortOrder
    obligationId?: SortOrder
  }

  export type EnumRuleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleStatus | EnumRuleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RuleStatus[] | ListEnumRuleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleStatus[] | ListEnumRuleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleStatusWithAggregatesFilter<$PrismaModel> | $Enums.RuleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRuleStatusFilter<$PrismaModel>
    _max?: NestedEnumRuleStatusFilter<$PrismaModel>
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumScopeFieldUpdateOperationsInput = {
    set?: $Enums.Scope
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumQuestionKindFieldUpdateOperationsInput = {
    set?: $Enums.QuestionKind
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RuleCreateNestedManyWithoutObligationInput = {
    create?: XOR<RuleCreateWithoutObligationInput, RuleUncheckedCreateWithoutObligationInput> | RuleCreateWithoutObligationInput[] | RuleUncheckedCreateWithoutObligationInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutObligationInput | RuleCreateOrConnectWithoutObligationInput[]
    createMany?: RuleCreateManyObligationInputEnvelope
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
  }

  export type RuleUncheckedCreateNestedManyWithoutObligationInput = {
    create?: XOR<RuleCreateWithoutObligationInput, RuleUncheckedCreateWithoutObligationInput> | RuleCreateWithoutObligationInput[] | RuleUncheckedCreateWithoutObligationInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutObligationInput | RuleCreateOrConnectWithoutObligationInput[]
    createMany?: RuleCreateManyObligationInputEnvelope
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type EnumSeverityFieldUpdateOperationsInput = {
    set?: $Enums.Severity
  }

  export type RuleUpdateManyWithoutObligationNestedInput = {
    create?: XOR<RuleCreateWithoutObligationInput, RuleUncheckedCreateWithoutObligationInput> | RuleCreateWithoutObligationInput[] | RuleUncheckedCreateWithoutObligationInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutObligationInput | RuleCreateOrConnectWithoutObligationInput[]
    upsert?: RuleUpsertWithWhereUniqueWithoutObligationInput | RuleUpsertWithWhereUniqueWithoutObligationInput[]
    createMany?: RuleCreateManyObligationInputEnvelope
    set?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    disconnect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    delete?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    update?: RuleUpdateWithWhereUniqueWithoutObligationInput | RuleUpdateWithWhereUniqueWithoutObligationInput[]
    updateMany?: RuleUpdateManyWithWhereWithoutObligationInput | RuleUpdateManyWithWhereWithoutObligationInput[]
    deleteMany?: RuleScalarWhereInput | RuleScalarWhereInput[]
  }

  export type RuleUncheckedUpdateManyWithoutObligationNestedInput = {
    create?: XOR<RuleCreateWithoutObligationInput, RuleUncheckedCreateWithoutObligationInput> | RuleCreateWithoutObligationInput[] | RuleUncheckedCreateWithoutObligationInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutObligationInput | RuleCreateOrConnectWithoutObligationInput[]
    upsert?: RuleUpsertWithWhereUniqueWithoutObligationInput | RuleUpsertWithWhereUniqueWithoutObligationInput[]
    createMany?: RuleCreateManyObligationInputEnvelope
    set?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    disconnect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    delete?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    update?: RuleUpdateWithWhereUniqueWithoutObligationInput | RuleUpdateWithWhereUniqueWithoutObligationInput[]
    updateMany?: RuleUpdateManyWithWhereWithoutObligationInput | RuleUpdateManyWithWhereWithoutObligationInput[]
    deleteMany?: RuleScalarWhereInput | RuleScalarWhereInput[]
  }

  export type ObligationCreateNestedOneWithoutRulesInput = {
    create?: XOR<ObligationCreateWithoutRulesInput, ObligationUncheckedCreateWithoutRulesInput>
    connectOrCreate?: ObligationCreateOrConnectWithoutRulesInput
    connect?: ObligationWhereUniqueInput
  }

  export type EnumRuleStatusFieldUpdateOperationsInput = {
    set?: $Enums.RuleStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ObligationUpdateOneRequiredWithoutRulesNestedInput = {
    create?: XOR<ObligationCreateWithoutRulesInput, ObligationUncheckedCreateWithoutRulesInput>
    connectOrCreate?: ObligationCreateOrConnectWithoutRulesInput
    upsert?: ObligationUpsertWithoutRulesInput
    connect?: ObligationWhereUniqueInput
    update?: XOR<XOR<ObligationUpdateToOneWithWhereWithoutRulesInput, ObligationUpdateWithoutRulesInput>, ObligationUncheckedUpdateWithoutRulesInput>
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

  export type NestedEnumScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.Scope | EnumScopeFieldRefInput<$PrismaModel>
    in?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumScopeFilter<$PrismaModel> | $Enums.Scope
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

  export type NestedEnumQuestionKindFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionKind | EnumQuestionKindFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionKind[] | ListEnumQuestionKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionKind[] | ListEnumQuestionKindFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionKindFilter<$PrismaModel> | $Enums.QuestionKind
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

  export type NestedEnumScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Scope | EnumScopeFieldRefInput<$PrismaModel>
    in?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumScopeWithAggregatesFilter<$PrismaModel> | $Enums.Scope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScopeFilter<$PrismaModel>
    _max?: NestedEnumScopeFilter<$PrismaModel>
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

  export type NestedEnumQuestionKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionKind | EnumQuestionKindFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionKind[] | ListEnumQuestionKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionKind[] | ListEnumQuestionKindFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionKindWithAggregatesFilter<$PrismaModel> | $Enums.QuestionKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionKindFilter<$PrismaModel>
    _max?: NestedEnumQuestionKindFilter<$PrismaModel>
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

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedEnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type NestedEnumRuleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleStatus | EnumRuleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RuleStatus[] | ListEnumRuleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleStatus[] | ListEnumRuleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleStatusFilter<$PrismaModel> | $Enums.RuleStatus
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

  export type NestedEnumRuleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleStatus | EnumRuleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RuleStatus[] | ListEnumRuleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleStatus[] | ListEnumRuleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleStatusWithAggregatesFilter<$PrismaModel> | $Enums.RuleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRuleStatusFilter<$PrismaModel>
    _max?: NestedEnumRuleStatusFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RuleCreateWithoutObligationInput = {
    scope: $Enums.Scope
    location?: string | null
    status?: $Enums.RuleStatus
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    predicate: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RuleUncheckedCreateWithoutObligationInput = {
    id?: number
    scope: $Enums.Scope
    location?: string | null
    status?: $Enums.RuleStatus
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    predicate: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RuleCreateOrConnectWithoutObligationInput = {
    where: RuleWhereUniqueInput
    create: XOR<RuleCreateWithoutObligationInput, RuleUncheckedCreateWithoutObligationInput>
  }

  export type RuleCreateManyObligationInputEnvelope = {
    data: RuleCreateManyObligationInput | RuleCreateManyObligationInput[]
    skipDuplicates?: boolean
  }

  export type RuleUpsertWithWhereUniqueWithoutObligationInput = {
    where: RuleWhereUniqueInput
    update: XOR<RuleUpdateWithoutObligationInput, RuleUncheckedUpdateWithoutObligationInput>
    create: XOR<RuleCreateWithoutObligationInput, RuleUncheckedCreateWithoutObligationInput>
  }

  export type RuleUpdateWithWhereUniqueWithoutObligationInput = {
    where: RuleWhereUniqueInput
    data: XOR<RuleUpdateWithoutObligationInput, RuleUncheckedUpdateWithoutObligationInput>
  }

  export type RuleUpdateManyWithWhereWithoutObligationInput = {
    where: RuleScalarWhereInput
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyWithoutObligationInput>
  }

  export type RuleScalarWhereInput = {
    AND?: RuleScalarWhereInput | RuleScalarWhereInput[]
    OR?: RuleScalarWhereInput[]
    NOT?: RuleScalarWhereInput | RuleScalarWhereInput[]
    id?: IntFilter<"Rule"> | number
    scope?: EnumScopeFilter<"Rule"> | $Enums.Scope
    location?: StringNullableFilter<"Rule"> | string | null
    obligationId?: IntFilter<"Rule"> | number
    status?: EnumRuleStatusFilter<"Rule"> | $Enums.RuleStatus
    effectiveFrom?: DateTimeFilter<"Rule"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"Rule"> | Date | string | null
    predicate?: JsonFilter<"Rule">
    createdAt?: DateTimeFilter<"Rule"> | Date | string
    updatedAt?: DateTimeFilter<"Rule"> | Date | string
  }

  export type ObligationCreateWithoutRulesInput = {
    scope: $Enums.Scope
    location?: string | null
    code: string
    title: string
    category: $Enums.Category
    severity?: $Enums.Severity
    citation?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObligationUncheckedCreateWithoutRulesInput = {
    id?: number
    scope: $Enums.Scope
    location?: string | null
    code: string
    title: string
    category: $Enums.Category
    severity?: $Enums.Severity
    citation?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObligationCreateOrConnectWithoutRulesInput = {
    where: ObligationWhereUniqueInput
    create: XOR<ObligationCreateWithoutRulesInput, ObligationUncheckedCreateWithoutRulesInput>
  }

  export type ObligationUpsertWithoutRulesInput = {
    update: XOR<ObligationUpdateWithoutRulesInput, ObligationUncheckedUpdateWithoutRulesInput>
    create: XOR<ObligationCreateWithoutRulesInput, ObligationUncheckedCreateWithoutRulesInput>
    where?: ObligationWhereInput
  }

  export type ObligationUpdateToOneWithWhereWithoutRulesInput = {
    where?: ObligationWhereInput
    data: XOR<ObligationUpdateWithoutRulesInput, ObligationUncheckedUpdateWithoutRulesInput>
  }

  export type ObligationUpdateWithoutRulesInput = {
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    location?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    citation?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObligationUncheckedUpdateWithoutRulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    location?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    citation?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuleCreateManyObligationInput = {
    id?: number
    scope: $Enums.Scope
    location?: string | null
    status?: $Enums.RuleStatus
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    predicate: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RuleUpdateWithoutObligationInput = {
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRuleStatusFieldUpdateOperationsInput | $Enums.RuleStatus
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    predicate?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuleUncheckedUpdateWithoutObligationInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRuleStatusFieldUpdateOperationsInput | $Enums.RuleStatus
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    predicate?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuleUncheckedUpdateManyWithoutObligationInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRuleStatusFieldUpdateOperationsInput | $Enums.RuleStatus
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    predicate?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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