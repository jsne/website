export interface CreateLoggerOptions {
  /** String shown before all console calls. */
  prefix: string | string[];
}

export interface CreateLoggerReturn extends Console {
  options: CreateLoggerOptions;
  withOptions: (options: CreateLoggerOptions) => CreateLoggerReturn;
}

/** `Console` methods we should intercept. */
const interceptMethods = [
  'assert',
  'count',
  'debug',
  'error',
  'group',
  'groupCollapsed',
  'info',
  'log',
  'time',
  'timeEnd',
  'trace',
  'warn',
] as const;

/** Convert string to array of strings. */
const toPrefixArray = (prefix: CreateLoggerOptions['prefix']) =>
  Array.isArray(prefix) ? prefix : [prefix];

/** Convert prefix props to string format. */
const toPrefixString = (prefix: CreateLoggerOptions['prefix']) =>
  toPrefixArray(prefix)
    .map((p) => `[${p}]`)
    .join(' ');

/**
 * Create a logger instance.
 */
export const createLogger = ({ prefix }: CreateLoggerOptions): CreateLoggerReturn => {
  const logaroo = console;

  return {
    ...(Object.fromEntries(
      interceptMethods.map((method) => [
        method,
        Function.prototype.bind.call(logaroo[method], logaroo, toPrefixString(prefix)),
      ]),
    ) as Console),

    options: {
      prefix: toPrefixArray(prefix),
    },

    /** Create a child logger with new options. */
    withOptions(options) {
      return createLogger({
        prefix: [...this.options.prefix, ...toPrefixArray(options.prefix)],
      });
    },
  };
};
